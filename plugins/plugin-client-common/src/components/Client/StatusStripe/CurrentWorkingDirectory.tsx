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

import React from 'react'

import { cwd } from '@kui-shell/core/mdist/api/Util'
import { i18n } from '@kui-shell/core/mdist/api/i18n'
import { inBrowser } from '@kui-shell/core/mdist/api/Capabilities'
import { wireToStandardEvents, unwireToStandardEvents } from '@kui-shell/core/mdist/api/Events'

import Icons from '../../spi/Icons'
import TextWithIconWidget, { ViewLevel } from './TextWithIconWidget'

const strings = i18n('plugin-client-common')

interface Props {
  className?: string
}

interface State {
  text: string
  viewLevel: ViewLevel
}

export default class CurrentWorkingDirectory extends React.PureComponent<Props, State> {
  private readonly handler = this.reportCurrentDirectory.bind(this)

  public constructor(props: Props) {
    super(props)

    this.state = {
      text: '',
      viewLevel: inBrowser() ? 'hidden' : 'normal'
    }
  }

  /**
   * Check the current working directory
   *
   */
  private async reportCurrentDirectory() {
    const dir = cwd()
    this.setState({
      text: dir ? (dir === process.env.HOME ? dir : dir.replace(process.env.HOME, '~')) : undefined,
      viewLevel: dir ? 'normal' : 'hidden'
    })
  }

  /**
   * Once we have mounted, we immediately check the state,
   * and schedule an update based on standard REPL events.
   *
   */
  public componentDidMount() {
    this.handler()
    wireToStandardEvents(this.handler)
  }

  /** Make sure to unsubscribe! */
  public componentWillUnmount() {
    unwireToStandardEvents(this.handler)
  }

  public render() {
    return (
      <TextWithIconWidget
        className={this.props.className}
        text={this.state.text}
        viewLevel={this.state.viewLevel}
        id="kui--plugin-client-common--current-working-directory"
        title={strings('Your current working directory')}
        textOnclick="ls"
      >
        <Icons icon="Location" />
      </TextWithIconWidget>
    )
  }
}
