[Kui API Documentation - v11.0.0](../README.md) / [@kui-shell/plugin-client-common](../modules/kui_shell_plugin_client_common.md) / StatusStripe

# Class: StatusStripe

[@kui-shell/plugin-client-common](../modules/kui_shell_plugin_client_common.md).StatusStripe

## Hierarchy

- `PureComponent`<`Props`, `State`\>

  ↳ **`StatusStripe`**

## Table of contents

### Constructors

- [constructor](kui_shell_plugin_client_common.StatusStripe.md#constructor)

### Properties

- [context](kui_shell_plugin_client_common.StatusStripe.md#context)
- [helpRef](kui_shell_plugin_client_common.StatusStripe.md#helpref)
- [props](kui_shell_plugin_client_common.StatusStripe.md#props)
- [refs](kui_shell_plugin_client_common.StatusStripe.md#refs)
- [state](kui_shell_plugin_client_common.StatusStripe.md#state)
- [contextType](kui_shell_plugin_client_common.StatusStripe.md#contexttype)

### Methods

- [UNSAFE_componentWillMount](kui_shell_plugin_client_common.StatusStripe.md#unsafe_componentwillmount)
- [UNSAFE_componentWillReceiveProps](kui_shell_plugin_client_common.StatusStripe.md#unsafe_componentwillreceiveprops)
- [UNSAFE_componentWillUpdate](kui_shell_plugin_client_common.StatusStripe.md#unsafe_componentwillupdate)
- [className](kui_shell_plugin_client_common.StatusStripe.md#classname)
- [componentDidCatch](kui_shell_plugin_client_common.StatusStripe.md#componentdidcatch)
- [componentDidMount](kui_shell_plugin_client_common.StatusStripe.md#componentdidmount)
- [componentDidUpdate](kui_shell_plugin_client_common.StatusStripe.md#componentdidupdate)
- [componentWillMount](kui_shell_plugin_client_common.StatusStripe.md#componentwillmount)
- [componentWillReceiveProps](kui_shell_plugin_client_common.StatusStripe.md#componentwillreceiveprops)
- [componentWillUnmount](kui_shell_plugin_client_common.StatusStripe.md#componentwillunmount)
- [componentWillUpdate](kui_shell_plugin_client_common.StatusStripe.md#componentwillupdate)
- [doAbout](kui_shell_plugin_client_common.StatusStripe.md#doabout)
- [filler](kui_shell_plugin_client_common.StatusStripe.md#filler)
- [forceUpdate](kui_shell_plugin_client_common.StatusStripe.md#forceupdate)
- [getSnapshotBeforeUpdate](kui_shell_plugin_client_common.StatusStripe.md#getsnapshotbeforeupdate)
- [message](kui_shell_plugin_client_common.StatusStripe.md#message)
- [onChangeRequest](kui_shell_plugin_client_common.StatusStripe.md#onchangerequest)
- [render](kui_shell_plugin_client_common.StatusStripe.md#render)
- [setState](kui_shell_plugin_client_common.StatusStripe.md#setstate)
- [shouldComponentUpdate](kui_shell_plugin_client_common.StatusStripe.md#shouldcomponentupdate)
- [simpleMarkdown](kui_shell_plugin_client_common.StatusStripe.md#simplemarkdown)
- [widgets](kui_shell_plugin_client_common.StatusStripe.md#widgets)
- [withStateDefaults](kui_shell_plugin_client_common.StatusStripe.md#withstatedefaults)

## Constructors

### constructor

• **new StatusStripe**(`props`)

#### Parameters

| Name    | Type    |
| :------ | :------ |
| `props` | `Props` |

#### Overrides

React.PureComponent&lt;Props, State\&gt;.constructor

#### Defined in

[plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx:48](https://github.com/kubernetes-sigs/kui/blob/kui/plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx#L48)

## Properties

### context

• **context**: `any`

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`see`** https://reactjs.org/docs/context.html

#### Inherited from

React.PureComponent.context

#### Defined in

node_modules/@types/react/index.d.ts:479

---

### helpRef

• `Private` `Readonly` **helpRef**: `RefObject`<`HTMLAnchorElement`\>

#### Defined in

[plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx:46](https://github.com/kubernetes-sigs/kui/blob/kui/plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx#L46)

---

### props

• `Readonly` **props**: `Readonly`<`Props`\> & `Readonly`<{ `children?`: `ReactNode` }\>

#### Inherited from

React.PureComponent.props

#### Defined in

node_modules/@types/react/index.d.ts:504

---

### refs

• **refs**: `Object`

**`deprecated`**
https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Index signature

▪ [key: `string`]: `ReactInstance`

#### Inherited from

React.PureComponent.refs

#### Defined in

node_modules/@types/react/index.d.ts:510

---

### state

• **state**: `Readonly`<`StatusStripeChangeEvent`\>

#### Inherited from

React.PureComponent.state

#### Defined in

node_modules/@types/react/index.d.ts:505

---

### contextType

▪ `Static` `Optional` **contextType**: `Context`<`any`\>

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render() {
    return <>My context's value: {this.context}</>
  }
}
```

**`see`** https://reactjs.org/docs/context.html#classcontexttype

#### Inherited from

React.PureComponent.contextType

#### Defined in

node_modules/@types/react/index.d.ts:461

## Methods

### UNSAFE_componentWillMount

▸ `Optional` **UNSAFE_componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

React.PureComponent.UNSAFE_componentWillMount

#### Defined in

node_modules/@types/react/index.d.ts:717

---

### UNSAFE_componentWillReceiveProps

▸ `Optional` **UNSAFE_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name          | Type                 |
| :------------ | :------------------- |
| `nextProps`   | `Readonly`<`Props`\> |
| `nextContext` | `any`                |

#### Returns

`void`

#### Inherited from

React.PureComponent.UNSAFE_componentWillReceiveProps

#### Defined in

node_modules/@types/react/index.d.ts:749

---

### UNSAFE_componentWillUpdate

▸ `Optional` **UNSAFE_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name          | Type                                   |
| :------------ | :------------------------------------- |
| `nextProps`   | `Readonly`<`Props`\>                   |
| `nextState`   | `Readonly`<`StatusStripeChangeEvent`\> |
| `nextContext` | `any`                                  |

#### Returns

`void`

#### Inherited from

React.PureComponent.UNSAFE_componentWillUpdate

#### Defined in

node_modules/@types/react/index.d.ts:777

---

### className

▸ `Private` **className**(): `string`

#### Returns

`string`

#### Defined in

[plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx:135](https://github.com/kubernetes-sigs/kui/blob/kui/plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx#L135)

---

### componentDidCatch

▸ `Optional` **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Name        | Type        |
| :---------- | :---------- |
| `error`     | `Error`     |
| `errorInfo` | `ErrorInfo` |

#### Returns

`void`

#### Inherited from

React.PureComponent.componentDidCatch

#### Defined in

node_modules/@types/react/index.d.ts:646

---

### componentDidMount

▸ `Optional` **componentDidMount**(): `void`

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

#### Returns

`void`

#### Inherited from

React.PureComponent.componentDidMount

#### Defined in

node_modules/@types/react/index.d.ts:625

---

### componentDidUpdate

▸ `Optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot?`): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters

| Name        | Type                                   |
| :---------- | :------------------------------------- |
| `prevProps` | `Readonly`<`Props`\>                   |
| `prevState` | `Readonly`<`StatusStripeChangeEvent`\> |
| `snapshot?` | `any`                                  |

#### Returns

`void`

#### Inherited from

React.PureComponent.componentDidUpdate

#### Defined in

node_modules/@types/react/index.d.ts:688

---

### componentWillMount

▸ `Optional` **componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

React.PureComponent.componentWillMount

#### Defined in

node_modules/@types/react/index.d.ts:703

---

### componentWillReceiveProps

▸ `Optional` **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name          | Type                 |
| :------------ | :------------------- |
| `nextProps`   | `Readonly`<`Props`\> |
| `nextContext` | `any`                |

#### Returns

`void`

#### Inherited from

React.PureComponent.componentWillReceiveProps

#### Defined in

node_modules/@types/react/index.d.ts:732

---

### componentWillUnmount

▸ `Optional` **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Inherited from

React.PureComponent.componentWillUnmount

#### Defined in

node_modules/@types/react/index.d.ts:641

---

### componentWillUpdate

▸ `Optional` **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name          | Type                                   |
| :------------ | :------------------------------------- |
| `nextProps`   | `Readonly`<`Props`\>                   |
| `nextState`   | `Readonly`<`StatusStripeChangeEvent`\> |
| `nextContext` | `any`                                  |

#### Returns

`void`

#### Inherited from

React.PureComponent.componentWillUpdate

#### Defined in

node_modules/@types/react/index.d.ts:762

---

### doAbout

▸ `Private` **doAbout**(): `Promise`<`void`\>

User has clicked on the Settings icon.

#### Returns

`Promise`<`void`\>

#### Defined in

[plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx:75](https://github.com/kubernetes-sigs/kui/blob/kui/plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx#L75)

---

### filler

▸ `Private` **filler**(): `Element`

If the Client offers no status stripe widgets, we should insert a
filler, so that the Settings icon is presented flush-right.

#### Returns

`Element`

#### Defined in

[plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx:84](https://github.com/kubernetes-sigs/kui/blob/kui/plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx#L84)

---

### forceUpdate

▸ **forceUpdate**(`callback?`): `void`

#### Parameters

| Name        | Type         |
| :---------- | :----------- |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

React.PureComponent.forceUpdate

#### Defined in

node_modules/@types/react/index.d.ts:496

---

### getSnapshotBeforeUpdate

▸ `Optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `any`

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Name        | Type                                   |
| :---------- | :------------------------------------- |
| `prevProps` | `Readonly`<`Props`\>                   |
| `prevState` | `Readonly`<`StatusStripeChangeEvent`\> |

#### Returns

`any`

#### Inherited from

React.PureComponent.getSnapshotBeforeUpdate

#### Defined in

node_modules/@types/react/index.d.ts:682

---

### message

▸ `Private` **message**(): `Element`

Render the current State.message, if any

#### Returns

`Element`

#### Defined in

[plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx:111](https://github.com/kubernetes-sigs/kui/blob/kui/plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx#L111)

---

### onChangeRequest

▸ `Private` **onChangeRequest**(`evt`): `void`

Status Stripe change request

#### Parameters

| Name  | Type                      |
| :---- | :------------------------ |
| `evt` | `StatusStripeChangeEvent` |

#### Returns

`void`

#### Defined in

[plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx:67](https://github.com/kubernetes-sigs/kui/blob/kui/plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx#L67)

---

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

React.PureComponent.render

#### Defined in

[plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx:139](https://github.com/kubernetes-sigs/kui/blob/kui/plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx#L139)

---

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type                                    |
| :--- | :-------------------------------------- |
| `K`  | extends keyof `StatusStripeChangeEvent` |

#### Parameters

| Name        | Type                                                                                                                                                                                                                                 |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `state`     | `StatusStripeChangeEvent` \| (`prevState`: `Readonly`<`StatusStripeChangeEvent`\>, `props`: `Readonly`<`Props`\>) => `StatusStripeChangeEvent` \| `Pick`<`StatusStripeChangeEvent`, `K`\> \| `Pick`<`StatusStripeChangeEvent`, `K`\> |
| `callback?` | () => `void`                                                                                                                                                                                                                         |

#### Returns

`void`

#### Inherited from

React.PureComponent.setState

#### Defined in

node_modules/@types/react/index.d.ts:491

---

### shouldComponentUpdate

▸ `Optional` **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

| Name          | Type                                   |
| :------------ | :------------------------------------- |
| `nextProps`   | `Readonly`<`Props`\>                   |
| `nextState`   | `Readonly`<`StatusStripeChangeEvent`\> |
| `nextContext` | `any`                                  |

#### Returns

`boolean`

#### Inherited from

React.PureComponent.shouldComponentUpdate

#### Defined in

node_modules/@types/react/index.d.ts:636

---

### simpleMarkdown

▸ `Private` **simpleMarkdown**(`str`): `any`[]

Simplistic Markdown, to help with performance. Our full Markdown.tsx is pretty heavy-weight.

#### Parameters

| Name  | Type     |
| :---- | :------- |
| `str` | `string` |

#### Returns

`any`[]

#### Defined in

[plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx:89](https://github.com/kubernetes-sigs/kui/blob/kui/plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx#L89)

---

### widgets

▸ `Private` **widgets**(): `ReactNode`

Render any widgets specified by the client. Note how we don't
show widgets if we were given a message. See
https://github.com/IBM/kui/issues/5490

#### Returns

`ReactNode`

#### Defined in

[plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx:127](https://github.com/kubernetes-sigs/kui/blob/kui/plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx#L127)

---

### withStateDefaults

▸ `Private` **withStateDefaults**(`evt`): `Omit`<`Required`<`StatusStripeChangeEvent`\>, `"message"`\>

Overlay default values for required state variables

#### Parameters

| Name  | Type                                  |
| :---- | :------------------------------------ |
| `evt` | `Partial`<`StatusStripeChangeEvent`\> |

#### Returns

`Omit`<`Required`<`StatusStripeChangeEvent`\>, `"message"`\>

#### Defined in

[plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx:56](https://github.com/kubernetes-sigs/kui/blob/kui/plugins/plugin-client-common/src/components/Client/StatusStripe/index.tsx#L56)
