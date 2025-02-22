/*
 * Copyright 2020 The Kubernetes Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// FIXME:
/* eslint-disable react/prop-types */

import Debug from 'debug'
import React from 'react'

import { Tab } from '@kui-shell/core/mdist/api/Tab'
import { i18n } from '@kui-shell/core/mdist/api/i18n'
import { inBrowser } from '@kui-shell/core/mdist/api/Capabilities'
import { eventChannelUnsafe } from '@kui-shell/core/mdist/api/Events'
import { encodeComponent, pexecInCurrentTab, REPL } from '@kui-shell/core/mdist/api/Exec'
import {
  Theme,
  ThemeProperties,
  findThemeByName,
  getPersistedThemeChoice,
  getDefaultTheme
} from '@kui-shell/core/mdist/api/Themes'
import {
  guidebooksMenu,
  isOffline,
  clientGuidebooks,
  singletonGuidebooks,
  showGuidebooksSidebar,
  firstOpenGuidebook
} from '@kui-shell/core/mdist/api/Client'

import automount from '../../mount'

import KuiContext from './context'
import CommonClientProps from './props/Common'
import GuidebookProps from './props/Guidebooks'
import KuiConfiguration from './KuiConfiguration'
import TabContainer from './TabContainer'
import loadUserSettings, { on as onUserSettingsChange } from './UserSettings'
import StatusStripe, { Props as StatusStripeProps } from './StatusStripe'

import Alert from '../spi/Alert'
import Loading from '../spi/Loading'

const InputStripe = React.lazy(() => import('./InputStripe'))
const LoadingCard = React.lazy(() => import('./LoadingCard'))

const debug = Debug('<Kui/>')
const strings = i18n('client')
const Popup = React.lazy(() => import(/* webpackMode: "lazy" */ './Popup'))

/**
 * Here we arrange the CSS for base functionality of Kui. Order is
 * preserved in the resulting <link> tags.
 *
 */
import '../../../web/css/static/carbon-overrides-common.css'
import '../../../web/css/static/inverted-colors.css'
import '../../../web/css/static/ui.css'
import '../../../web/css/static/repl.scss'
import '../../../web/css/static/zoom.css'

const defaultThemeProperties: ThemeProperties = {
  components: 'patternfly',
  topTabNames: 'fixed'
}

export type Props = Partial<KuiConfiguration> &
  GuidebookProps &
  CommonClientProps &
  React.PropsWithChildren<{
    /** no Kui bootstrap needed? */
    noBootstrap?: boolean

    /** operate in bottom Input mode? rather than as a conventional Input/Output terminal */
    bottomInput?: true | React.ReactNode

    /** Elements to place between TabContainer and StatusStripe */
    toplevel?: React.ReactNode | React.ReactNode[]

    /** do not echo the command? */
    quietExecCommand?: boolean

    /** initial tab title */
    initialTabTitle?: string

    /** document/window title */
    title?: string
  }>

type State = KuiConfiguration & {
  userOverrides?: KuiConfiguration
  isBootstrapped: boolean
  commandLine?: string[]
  quietExecCommand?: boolean
}

/**
 * Render the main body of our client.
 *
 * |Notes on Session Initialization|: to provide custom views for
 * session initialization (only relevant for browser-based hosted
 * Kui), you can instantiate <Kui/> with these properties (defined in
 * KuiConfiguration), show here with some sample views:
 *
 * <Kui
 *    loading={<div className="kui--hero-text">Hold on...</div>}
 *    reinit={<div className="kui--hero-text">Connection broken...</div>}
 *    loadingError={err => <div className="kui--hero-text">{err.toString()}</div>}
 *    loadingDone={<div>Welcome to Kui</div>}
 * />
 *
 */
export class Kui extends React.PureComponent<Props, State> {
  static {
    Kui.mountGuidebooks()
  }

  public constructor(props: Props) {
    super(props)

    let { commandLine } = this.props

    // If props did not specify a commandLine, perhaps the client
    // wishes us to auto-play a guidebook?
    if (!commandLine && singletonGuidebooks() && showGuidebooksSidebar()) {
      const autoplay = firstOpenGuidebook()
      if (autoplay) {
        commandLine = ['replay', '-r', autoplay]
      }
    }

    let quietExecCommand = this.props.quietExecCommand !== undefined ? this.props.quietExecCommand : !this.props.isPopup

    if (inBrowser()) {
      const windowQuery = window.location.search
      if (windowQuery) {
        // parse and extract the question mark in window.location.search
        // e.g. query = { command: 'replay /kui/welcome.json' }
        const query = require('querystring').parse(windowQuery.substring(1))

        // To avoid SQL injection attacks, users can only query with `replay` command
        if (query.command && /^replay/.test(query.command)) {
          commandLine = query.command.split(' ')
          quietExecCommand = false
        }
      }
    }

    try {
      const userOverrides = loadUserSettings()
      this.state = Object.assign({}, this.defaultSessionBehavior(), this.defaultFeatureFlag(), props, userOverrides, {
        userOverrides,
        isBootstrapped: !!props.noBootstrap,
        commandLine,
        quietExecCommand
      })
      debug('initial state:inBrowser?', inBrowser())
      debug('initial state:given properties', props)
      debug('initial state:final value', this.state)
    } catch (err) {
      console.log('using default configuration')
      this.state = {
        isBootstrapped: !!props.noBootstrap,
        commandLine,
        quietExecCommand
      }
    }
  }

  public async componentDidMount() {
    const themeP = await findThemeByName((await getPersistedThemeChoice()) || (await getDefaultTheme()))

    /* if (!this.props.noBootstrap) {
      await import('@kui-shell/core')
        .then(_ => _.bootIntoSandbox())
        .then(() => {
          this.setState({ isBootstrapped: true })
        })
    } */

    // refresh the UI after user changes settings overrides
    onUserSettingsChange(evt => {
      this.setState(curState => {
        // a bit of care is needed to handle removing keys
        if (evt !== 'set') {
          for (const key in curState.userOverrides) {
            delete curState[key]
          }
        }

        const newUserOverrides = loadUserSettings()
        return Object.assign(newUserOverrides, { userOverrides: newUserOverrides })
      })
    })

    const { theme } = await themeP
    eventChannelUnsafe.on('/theme/change', this.onThemeChange.bind(this))
    this.setState(curState => {
      const stateWithThemeProps = Object.assign({}, theme, curState)
      debug('state with theme props', theme, curState)
      return stateWithThemeProps
    })
  }

  private defaultFeatureFlag() {
    return {
      sidecarName: 'breadcrumb',
      showWelcomeMax: -1
    }
  }

  /** Mount any guidebooks referenced by the `@kui-shell/client/config.d/notebooks.json` model */
  private static mountGuidebooks() {
    // FIXME: require versus import; fixing this will require some
    // refactoring of the plugin-core-support logic
    const { notebookVFS } = require('@kui-shell/plugin-core-support')

    // notebooks hosted by plugin-client-common; we need to defer this
    // a bit, to help with bootstrapping issues
    debug('Mounting plugin-client-common guidebooks', automount)
    notebookVFS.cp(undefined, automount, '/kui')

    const guidebooks = clientGuidebooks()
    if (guidebooks && Array.isArray(guidebooks)) {
      debug('Mounting client guidebooks', guidebooks)

      notebookVFS.mkdir({ argvNoOptions: ['mkdir', '/kui/client'] })
      notebookVFS.cp(
        undefined,
        guidebooks.map(filename => `plugin://client/notebooks/${filename}`),
        '/kui/client'
      )
    }
  }

  private defaultLoading() {
    return (
      <Loading className="somewhat-larger-text" description={strings('Please wait while we connect to your cluster')} />
    )
  }

  private defaultReinit() {
    return (
      <Alert
        hideCloseButton
        className="kui--terminal-alert kui--connection-lost top-pad left-pad right-pad"
        alert={{
          type: 'error',
          title: strings('Lost connection to your cluster'),
          body: strings('Attempting to reconnect...')
        }}
      />
    )
  }

  private defaultLoadingDone() {
    return isOffline() ? null : (repl: REPL) => (!inBrowser() ? undefined : <LoadingCard repl={repl} />)
  }

  private defaultLoadingError() {
    return function defaultLoadingError(err) {
      return (
        <Alert
          className="top-pad"
          alert={{ type: 'error', title: strings('Error connecting to your cluster'), body: err.toString() }}
        />
      )
    }
  }

  /**
   * For browser-based clients, this defines the default UI for
   * session initialization.
   *
   */
  private defaultSessionBehavior(): KuiConfiguration {
    const behavior = !inBrowser()
      ? {}
      : {
          loading: this.defaultLoading(),
          reinit: this.defaultReinit(),
          loadingError: this.defaultLoadingError(),
          loadingDone: this.defaultLoadingDone()
        }

    debug('defaultSessionBehavior', behavior)
    return behavior
  }

  private onThemeChange({ themeModel }: { themeModel: Theme }) {
    this.setState(curState => {
      // note the priority order, from highest to lowest:
      //  1) any properties defined by the theme (since we just switched themes)
      //  2) any properties defined by the container of this <Kui/>
      //  3) default choices
      //  4) any prior state
      // re: ordering of 3 and 4, see https://github.com/IBM/kui/issues/4423
      const stateAfterThemeChange = Object.assign({}, curState, defaultThemeProperties, this.props, themeModel)
      debug('state after theme change', stateAfterThemeChange)
      return stateAfterThemeChange
    })
  }

  /**
   * Props to pass to StatusStripe. This allows us to set the desired
   * status stripe color at startup time, rather than seeing the
   * default color, followed quickly by a change to the color desired
   * by the controller backing the given `props.commandLine`. The
   * controller may still want to specialize the status stripe
   * further, but at least we can avoid that odd
   * e.g. defaultColor-then-blue effect.
   *
   */
  private statusStripeProps(): StatusStripeProps {
    if (this.state.commandLine) {
      const statusStripeIdx = this.state.commandLine.findIndex(_ => _ === '--status-stripe')
      if (statusStripeIdx >= 0) {
        return { type: this.props.commandLine[statusStripeIdx + 1] as StatusStripeProps['type'] }
      }
    }
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo)
  }

  private firstTab = true
  private async onTabReady(tab: Tab) {
    if (this.state.commandLine && this.firstTab) {
      this.firstTab = false

      setTimeout(() =>
        pexecInCurrentTab(
          this.state.commandLine.map(_ => encodeComponent(_)).join(' '),
          tab,
          this.state.quietExecCommand
        )
      )
    }
  }

  private readonly _onTabReady = this.onTabReady.bind(this)

  public render() {
    if (!this.state.isBootstrapped) {
      return <Loading />
    }

    if (this.props.isPopup && this.state.commandLine) {
      return (
        <KuiContext.Provider value={this.state}>
          <React.Suspense fallback={<div />}>
            <Popup commandLine={this.state.commandLine} noHelp={this.props.noHelp} noSettings={this.props.noSettings}>
              {this.props.children}
            </Popup>
          </React.Suspense>
        </KuiContext.Provider>
      )
    } else {
      const bottom = !!this.props.bottomInput && <InputStripe>{this.props.bottomInput}</InputStripe>
      return (
        <KuiContext.Provider value={this.state}>
          <React.Suspense fallback={<div />}>
            <div className="kui--full-height">
              <TabContainer
                productName={this.props.productName}
                version={this.props.version}
                noActiveInput={this.props.noActiveInput || !!this.props.bottomInput || isOffline()}
                bottom={bottom}
                noNewTabButton={this.props.noNewTabButton}
                noNewSplitButton={this.props.noNewSplitButton}
                title={this.props.initialTabTitle || (isOffline() ? ' ' : undefined)}
                onTabReady={this.state.commandLine && this._onTabReady}
                closeableTabs={this.props.closeableTabs}
                noTopTabs={this.props.noTopTabs || singletonGuidebooks()}
                guidebooks={this.props.guidebooks === false ? undefined : this.props.guidebooks || guidebooksMenu()}
                guidebooksCommand={
                  this.props.guidebooksCommand ||
                  (singletonGuidebooks() ? 'commentary --replace --readonly -f' : undefined)
                }
                guidebooksExpanded={this.props.guidebooksExpanded || showGuidebooksSidebar()}
              ></TabContainer>
              {this.props.toplevel}
              {this.props.statusStripe !== false && (
                <StatusStripe
                  noHelp={this.props.noHelp}
                  noSettings={this.props.noSettings}
                  {...this.statusStripeProps()}
                >
                  {this.props.children}
                </StatusStripe>
              )}
            </div>
          </React.Suspense>
        </KuiContext.Provider>
      )
    }
  }
}

export default Kui
