[Kui API Documentation - v11.0.0](../README.md) / @kui-shell/core

# Module: @kui-shell/core

## Table of contents

### Namespaces

- [Capabilities](kui_shell_core.Capabilities.md)
- [Events](kui_shell_core.Events.md)
- [Settings](kui_shell_core.Settings.md)
- [Themes](kui_shell_core.Themes.md)
- [Util](kui_shell_core.Util.md)
- [pc](kui_shell_core.pc.md)

### Enumerations

- [CellShould](../enums/kui_shell_core.CellShould.md)
- [ExecType](../enums/kui_shell_core.ExecType.md)
- [Presentation](../enums/kui_shell_core.Presentation.md)
- [TableStyle](../enums/kui_shell_core.TableStyle.md)

### Classes

- [Cell](../classes/kui_shell_core.Cell.md)
- [DirectReplEval](../classes/kui_shell_core.DirectReplEval.md)
- [ElementMimic](../classes/kui_shell_core.ElementMimic.md)
- [HistoryModel](../classes/kui_shell_core.HistoryModel.md)
- [Icon](../classes/kui_shell_core.Icon.md)
- [Row](../classes/kui_shell_core.Row.md)
- [TabState](../classes/kui_shell_core.TabState.md)
- [Table](../classes/kui_shell_core.Table.md)
- [UsageError](../classes/kui_shell_core.UsageError.md)

### Interfaces

- [Abortable](../interfaces/kui_shell_core.Abortable.md)
- [Arguments](../interfaces/kui_shell_core.Arguments.md)
- [BadgeRegistration](../interfaces/kui_shell_core.BadgeRegistration.md)
- [BadgeSpec](../interfaces/kui_shell_core.BadgeSpec.md)
- [Block](../interfaces/kui_shell_core.Block.md)
- [Breadcrumb](../interfaces/kui_shell_core.Breadcrumb.md)
- [CodedError](../interfaces/kui_shell_core.CodedError.md)
- [CommandCompleteEvent](../interfaces/kui_shell_core.CommandCompleteEvent.md)
- [CommandLine](../interfaces/kui_shell_core.CommandLine.md)
- [CommandOptions](../interfaces/kui_shell_core.CommandOptions.md)
- [CommandStartEvent](../interfaces/kui_shell_core.CommandStartEvent.md)
- [DescriptionList](../interfaces/kui_shell_core.DescriptionList.md)
- [EditableSpec](../interfaces/kui_shell_core.EditableSpec.md)
- [Evaluator](../interfaces/kui_shell_core.Evaluator.md)
- [Event](../interfaces/kui_shell_core.Event.md)
- [ExecOptions](../interfaces/kui_shell_core.ExecOptions.md)
- [FlowControllable](../interfaces/kui_shell_core.FlowControllable.md)
- [HistoryLine](../interfaces/kui_shell_core.HistoryLine.md)
- [MetadataNamedResource](../interfaces/kui_shell_core.MetadataNamedResource.md)
- [ModeRegistration](../interfaces/kui_shell_core.ModeRegistration.md)
- [ParsedOptions](../interfaces/kui_shell_core.ParsedOptions.md)
- [PreloadRegistrar](../interfaces/kui_shell_core.PreloadRegistrar.md)
- [REPL](../interfaces/kui_shell_core.REPL.md)
- [RadioTable](../interfaces/kui_shell_core.RadioTable.md)
- [RadioTableRow](../interfaces/kui_shell_core.RadioTableRow.md)
- [RawResponse](../interfaces/kui_shell_core.RawResponse.md)
- [Registrar](../interfaces/kui_shell_core.Registrar.md)
- [ReplEval](../interfaces/kui_shell_core.ReplEval.md)
- [Resizable](../interfaces/kui_shell_core.Resizable.md)
- [ResourceByReference](../interfaces/kui_shell_core.ResourceByReference.md)
- [ResourceWithMetadata](../interfaces/kui_shell_core.ResourceWithMetadata.md)
- [SaveError](../interfaces/kui_shell_core.SaveError.md)
- [ScalarContent](../interfaces/kui_shell_core.ScalarContent.md)
- [Selectable](../interfaces/kui_shell_core.Selectable.md)
- [SourceRef](../interfaces/kui_shell_core.SourceRef.md)
- [Split](../interfaces/kui_shell_core.Split.md)
- [Tab](../interfaces/kui_shell_core.Tab.md)
- [TabCompletionSpec](../interfaces/kui_shell_core.TabCompletionSpec.md)
- [ToolbarAlert](../interfaces/kui_shell_core.ToolbarAlert.md)
- [ToolbarText](../interfaces/kui_shell_core.ToolbarText.md)
- [UsageModel](../interfaces/kui_shell_core.UsageModel.md)
- [UsageRow](../interfaces/kui_shell_core.UsageRow.md)
- [WatchPusher](../interfaces/kui_shell_core.WatchPusher.md)
- [Watchable](../interfaces/kui_shell_core.Watchable.md)
- [Watcher](../interfaces/kui_shell_core.Watcher.md)
- [WithSourceReferences](../interfaces/kui_shell_core.WithSourceReferences.md)
- [XtermResponse](../interfaces/kui_shell_core.XtermResponse.md)
- [XtermResponseCell](../interfaces/kui_shell_core.XtermResponseCell.md)

### Type aliases

- [Badge](kui_shell_core.md#badge)
- [Button](kui_shell_core.md#button)
- [CommandHandler](kui_shell_core.md#commandhandler)
- [CommandStringContent](kui_shell_core.md#commandstringcontent)
- [CommentaryResponse](kui_shell_core.md#commentaryresponse)
- [CompletionResponse](kui_shell_core.md#completionresponse)
- [Content](kui_shell_core.md#content)
- [Editable](kui_shell_core.md#editable)
- [ExecOptionsWithUUID](kui_shell_core.md#execoptionswithuuid)
- [FunctionThatProducesContent](kui_shell_core.md#functionthatproducescontent)
- [Job](kui_shell_core.md#job)
- [KResponse](kui_shell_core.md#kresponse)
- [Link](kui_shell_core.md#link)
- [Menu](kui_shell_core.md#menu)
- [MixedResponse](kui_shell_core.md#mixedresponse)
- [Mode](kui_shell_core.md#mode)
- [ModeDeclaration](kui_shell_core.md#modedeclaration)
- [ModeFilter](kui_shell_core.md#modefilter)
- [MultiModalMode](kui_shell_core.md#multimodalmode)
- [MultiModalResponse](kui_shell_core.md#multimodalresponse)
- [NavResponse](kui_shell_core.md#navresponse)
- [NewSplitRequest](kui_shell_core.md#newsplitrequest)
- [PluginRegistration](kui_shell_core.md#pluginregistration)
- [PreloadRegistration](kui_shell_core.md#preloadregistration)
- [PrettyUsageModel](kui_shell_core.md#prettyusagemodel)
- [RadioTableCell](kui_shell_core.md#radiotablecell)
- [ReactProvider](kui_shell_core.md#reactprovider)
- [ReactResponse](kui_shell_core.md#reactresponse)
- [ResourceByReferenceWithContent](kui_shell_core.md#resourcebyreferencewithcontent)
- [ResourceWithMetadataWithContent](kui_shell_core.md#resourcewithmetadatawithcontent)
- [ScalarResource](kui_shell_core.md#scalarresource)
- [ScalarResponse](kui_shell_core.md#scalarresponse)
- [SnapshottedEvent](kui_shell_core.md#snapshottedevent)
- [Stream](kui_shell_core.md#stream)
- [Streamable](kui_shell_core.md#streamable)
- [StringContent](kui_shell_core.md#stringcontent)
- [StringDiffContent](kui_shell_core.md#stringdiffcontent)
- [SupportedStringContent](kui_shell_core.md#supportedstringcontent)
- [Suspendable](kui_shell_core.md#suspendable)
- [TabLayoutModificationResponse](kui_shell_core.md#tablayoutmodificationresponse)
- [ToolbarProps](kui_shell_core.md#toolbarprops)
- [ViewTransformer](kui_shell_core.md#viewtransformer)

### Properties

- [Store](kui_shell_core.md#store)
- [SymbolTable](kui_shell_core.md#symboltable)
- [boot](kui_shell_core.md#boot)
- [encodeComponent](kui_shell_core.md#encodecomponent)
- [i18n](kui_shell_core.md#i18n)

### Variables

- [KeyCodes](kui_shell_core.md#keycodes)
- [badgeRegistrar](kui_shell_core.md#badgeregistrar)
- [commandsTrie](kui_shell_core.md#commandstrie)

### Functions

- [History](kui_shell_core.md#history)
- [\_split](kui_shell_core.md#_split)
- [addRelevantModes](kui_shell_core.md#addrelevantmodes)
- [bootIntoSandbox](kui_shell_core.md#bootintosandbox)
- [cellShouldHaveBadge](kui_shell_core.md#cellshouldhavebadge)
- [commandsOfferedByPlugin](kui_shell_core.md#commandsofferedbyplugin)
- [disableInputQueueing](kui_shell_core.md#disableinputqueueing)
- [doCancel](kui_shell_core.md#docancel)
- [doEval](kui_shell_core.md#doeval)
- [empty](kui_shell_core.md#empty)
- [executeSequentially](kui_shell_core.md#executesequentially)
- [findCompletions](kui_shell_core.md#findcompletions)
- [getCurrentTab](kui_shell_core.md#getcurrenttab)
- [getPrimaryTabId](kui_shell_core.md#getprimarytabid)
- [getTab](kui_shell_core.md#gettab)
- [getTabId](kui_shell_core.md#gettabid)
- [hasContent](kui_shell_core.md#hascontent)
- [hasDisplayName](kui_shell_core.md#hasdisplayname)
- [hasSourceReferences](kui_shell_core.md#hassourcereferences)
- [hideReplayOutput](kui_shell_core.md#hidereplayoutput)
- [i18nFromMap](kui_shell_core.md#i18nfrommap)
- [initializeSession](kui_shell_core.md#initializesession)
- [internalBeCarefulExec](kui_shell_core.md#internalbecarefulexec)
- [internalBeCarefulPExec](kui_shell_core.md#internalbecarefulpexec)
- [is404](kui_shell_core.md#is404)
- [is404or409](kui_shell_core.md#is404or409)
- [is409](kui_shell_core.md#is409)
- [isAbortableResponse](kui_shell_core.md#isabortableresponse)
- [isButton](kui_shell_core.md#isbutton)
- [isCodedError](kui_shell_core.md#iscodederror)
- [isCommandHandlerWithEvents](kui_shell_core.md#iscommandhandlerwithevents)
- [isCommandStringContent](kui_shell_core.md#iscommandstringcontent)
- [isCommentaryResponse](kui_shell_core.md#iscommentaryresponse)
- [isCommentarySectionBreak](kui_shell_core.md#iscommentarysectionbreak)
- [isCursorMovement](kui_shell_core.md#iscursormovement)
- [isDescriptionList](kui_shell_core.md#isdescriptionlist)
- [isError](kui_shell_core.md#iserror)
- [isExecutableClient](kui_shell_core.md#isexecutableclient)
- [isFunctionContent](kui_shell_core.md#isfunctioncontent)
- [isLink](kui_shell_core.md#islink)
- [isLinkWithCommand](kui_shell_core.md#islinkwithcommand)
- [isLinkWithHref](kui_shell_core.md#islinkwithhref)
- [isMarkdownResponse](kui_shell_core.md#ismarkdownresponse)
- [isMessageWithCode](kui_shell_core.md#ismessagewithcode)
- [isMessageWithUsageModel](kui_shell_core.md#ismessagewithusagemodel)
- [isMixedResponse](kui_shell_core.md#ismixedresponse)
- [isMultiModalResponse](kui_shell_core.md#ismultimodalresponse)
- [isNavResponse](kui_shell_core.md#isnavresponse)
- [isNewSplitRequest](kui_shell_core.md#isnewsplitrequest)
- [isOfflineClient](kui_shell_core.md#isofflineclient)
- [isPopup](kui_shell_core.md#ispopup)
- [isRadioTable](kui_shell_core.md#isradiotable)
- [isRandomErrorResponse1](kui_shell_core.md#israndomerrorresponse1)
- [isRandomErrorResponse2](kui_shell_core.md#israndomerrorresponse2)
- [isReactProvider](kui_shell_core.md#isreactprovider)
- [isReactResponse](kui_shell_core.md#isreactresponse)
- [isReadOnlyClient](kui_shell_core.md#isreadonlyclient)
- [isResizable](kui_shell_core.md#isresizable)
- [isResourceByReference](kui_shell_core.md#isresourcebyreference)
- [isResourceWithMetadata](kui_shell_core.md#isresourcewithmetadata)
- [isScalarContent](kui_shell_core.md#isscalarcontent)
- [isScalarResponse](kui_shell_core.md#isscalarresponse)
- [isStringDiffContent](kui_shell_core.md#isstringdiffcontent)
- [isStringResponse](kui_shell_core.md#isstringresponse)
- [isStringWithOptionalContentType](kui_shell_core.md#isstringwithoptionalcontenttype)
- [isSupportedContentType](kui_shell_core.md#issupportedcontenttype)
- [isSupportedToolbarTextType](kui_shell_core.md#issupportedtoolbartexttype)
- [isSuspendable](kui_shell_core.md#issuspendable)
- [isTabLayoutModificationResponse](kui_shell_core.md#istablayoutmodificationresponse)
- [isTable](kui_shell_core.md#istable)
- [isTableWithCount](kui_shell_core.md#istablewithcount)
- [isTableWithTimestamp](kui_shell_core.md#istablewithtimestamp)
- [isTopLevelTab](kui_shell_core.md#istopleveltab)
- [isUsageError](kui_shell_core.md#isusageerror)
- [isViewButton](kui_shell_core.md#isviewbutton)
- [isWatchable](kui_shell_core.md#iswatchable)
- [isXtermErrorResponse](kui_shell_core.md#isxtermerrorresponse)
- [isXtermResponse](kui_shell_core.md#isxtermresponse)
- [maybeKuiLink](kui_shell_core.md#maybekuilink)
- [offQuit](kui_shell_core.md#offquit)
- [onQuit](kui_shell_core.md#onquit)
- [pexecInCurrentTab](kui_shell_core.md#pexecincurrenttab)
- [pluginUserHome](kui_shell_core.md#pluginuserhome)
- [radioTableAddHint](kui_shell_core.md#radiotableaddhint)
- [radioTableCellToString](kui_shell_core.md#radiotablecelltostring)
- [radioTableHintsAsCss](kui_shell_core.md#radiotablehintsascss)
- [registerBadge](kui_shell_core.md#registerbadge)
- [registerMode](kui_shell_core.md#registermode)
- [registerModeWhen](kui_shell_core.md#registermodewhen)
- [registerTabCompletionEnumerator](kui_shell_core.md#registertabcompletionenumerator)
- [registerTabState](kui_shell_core.md#registertabstate)
- [renderUsage](kui_shell_core.md#renderusage)
- [sameRow](kui_shell_core.md#samerow)
- [sameTab](kui_shell_core.md#sametab)
- [setEvaluatorImpl](kui_shell_core.md#setevaluatorimpl)
- [split](kui_shell_core.md#split)
- [splitFor](kui_shell_core.md#splitfor)
- [splitIntoPipeStages](kui_shell_core.md#splitintopipestages)
- [teeToFile](kui_shell_core.md#teetofile)
- [tellMain](kui_shell_core.md#tellmain)
- [typeahead](kui_shell_core.md#typeahead)
- [unparse](kui_shell_core.md#unparse)
- [withLanguage](kui_shell_core.md#withlanguage)

## Type aliases

### Badge

Ƭ **Badge**: `string` \| [`BadgeSpec`](../interfaces/kui_shell_core.BadgeSpec.md) \| `Element`

#### Defined in

[packages/core/src/webapp/views/registrar/badges.ts:35](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/views/registrar/badges.ts#L35)

---

### Button

Ƭ **Button**<`T`\>: `DrilldownButton`<`T`\> \| `ViewButton`<`T`\>

#### Type parameters

| Name | Type                                                                           |
| :--- | :----------------------------------------------------------------------------- |
| `T`  | [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md) |

#### Defined in

[packages/core/src/models/mmr/types.ts:142](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/types.ts#L142)

---

### CommandHandler

Ƭ **CommandHandler**<`T`, `O`\>: (`args`: [`Arguments`](../interfaces/kui_shell_core.Arguments.md)<`O`\>) => `T` \| `Promise`<`T`\>

#### Type parameters

| Name | Type                                                                     |
| :--- | :----------------------------------------------------------------------- |
| `T`  | extends [`KResponse`](kui_shell_core.md#kresponse)                       |
| `O`  | extends [`ParsedOptions`](../interfaces/kui_shell_core.ParsedOptions.md) |

#### Type declaration

▸ (`args`): `T` \| `Promise`<`T`\>

base command handler

##### Parameters

| Name   | Type                                                           |
| :----- | :------------------------------------------------------------- |
| `args` | [`Arguments`](../interfaces/kui_shell_core.Arguments.md)<`O`\> |

##### Returns

`T` \| `Promise`<`T`\>

#### Defined in

[packages/core/src/models/command.ts:215](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/command.ts#L215)

---

### CommandStringContent

Ƭ **CommandStringContent**: `WithOptionalContentType`<[`SupportedStringContent`](kui_shell_core.md#supportedstringcontent)\> & { `contentFrom`: `string` }

`Content` as `CommandStringContent` will be executed via a
REPL.qexec; the command is assumed to return either
`ScalarRersource` or `ScalarContent`.

#### Defined in

[packages/core/src/models/mmr/content-types.ts:173](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L173)

---

### CommentaryResponse

Ƭ **CommentaryResponse**: `Object`

#### Type declaration

| Name                        | Type                                                                                           |
| :-------------------------- | :--------------------------------------------------------------------------------------------- |
| `apiVersion`                | `"kui-shell/v1"`                                                                               |
| `kind`                      | `"CommentaryResponse"`                                                                         |
| `props`                     | `Object`                                                                                       |
| `props.baseUrl?`            | `string`                                                                                       |
| `props.children`            | `string`                                                                                       |
| `props.codeBlockResponses?` | { `response`: [`KResponse`](kui_shell_core.md#kresponse) ; `status`: `"done"` \| `"error"` }[] |
| `props.edit?`               | `boolean`                                                                                      |
| `props.filepath?`           | `string`                                                                                       |
| `props.header?`             | `boolean`                                                                                      |
| `props.preview?`            | `boolean`                                                                                      |
| `props.receive?`            | `string`                                                                                       |
| `props.repl?`               | [`REPL`](../interfaces/kui_shell_core.REPL.md)                                                 |
| `props.replace?`            | `boolean`                                                                                      |
| `props.send?`               | `string`                                                                                       |
| `props.title?`              | `string`                                                                                       |

#### Defined in

[packages/core/src/models/CommentaryResponse.ts:21](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/CommentaryResponse.ts#L21)

---

### CompletionResponse

Ƭ **CompletionResponse**: `string` \| { `addSpace?`: `boolean` ; `completion`: `string` ; `docs?`: `string` ; `label?`: `string` }

#### Defined in

[packages/core/src/repl/tab-completion.ts:38](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/repl/tab-completion.ts#L38)

---

### Content

Ƭ **Content**<`T`\>: [`ScalarContent`](../interfaces/kui_shell_core.ScalarContent.md) \| [`StringContent`](kui_shell_core.md#stringcontent) \| [`StringDiffContent`](kui_shell_core.md#stringdiffcontent) \| `FunctionContent`<`T`\> \| [`CommandStringContent`](kui_shell_core.md#commandstringcontent) \| [`ReactProvider`](kui_shell_core.md#reactprovider)

The classes of supported `Content` are:

- `ScalarContent`: such as pre-formatted HTML, or or `Table` model
- `StringContent`: a string with an optional `contentType`
- `FunctionContent<T>`: a function that takes a `T` and produces `ScalarContent`
- `CommandStringContent`: a string to be executed as a Kui command, and producing `ScalarContent`

#### Type parameters

| Name | Type                                                                                                                                                                    |
| :--- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `T`  | extends [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md) = [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md) |

#### Defined in

[packages/core/src/models/mmr/content-types.ts:196](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L196)

---

### Editable

Ƭ **Editable**: `Object`

The Resource trait

#### Type declaration

| Name   | Type                                                           |
| :----- | :------------------------------------------------------------- |
| `spec` | [`EditableSpec`](../interfaces/kui_shell_core.EditableSpec.md) |

#### Defined in

[packages/core/src/models/editable.ts:46](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/editable.ts#L46)

---

### ExecOptionsWithUUID

Ƭ **ExecOptionsWithUUID**: `Exclude`<[`ExecOptions`](../interfaces/kui_shell_core.ExecOptions.md), `"execUUID"`\> & `Required`<`Pick`<[`ExecOptions`](../interfaces/kui_shell_core.ExecOptions.md), `"execUUID"`\>\>

Transform the `execUUID` field of `ExecOptions` to be required.

#### Defined in

[packages/core/src/models/execOptions.ts:112](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/execOptions.ts#L112)

---

### FunctionThatProducesContent

Ƭ **FunctionThatProducesContent**<`T`\>: (`tab`: [`Tab`](../interfaces/kui_shell_core.Tab.md), `entity`: `T`, `args`: { `argsForMode?`: [`Arguments`](../interfaces/kui_shell_core.Arguments.md) ; `argvNoOptions`: `string`[] ; `parsedOptions`: [`ParsedOptions`](../interfaces/kui_shell_core.ParsedOptions.md) }) => [`ReactProvider`](kui_shell_core.md#reactprovider) \| [`ScalarResource`](kui_shell_core.md#scalarresource) \| [`ScalarContent`](../interfaces/kui_shell_core.ScalarContent.md) \| `Promise`<[`ScalarResource`](kui_shell_core.md#scalarresource) \| [`ScalarContent`](../interfaces/kui_shell_core.ScalarContent.md) \| [`ReactProvider`](kui_shell_core.md#reactprovider)\> \| [`CommandStringContent`](kui_shell_core.md#commandstringcontent)

#### Type parameters

| Name | Type                                                                                                                                                                    |
| :--- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `T`  | extends [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md) = [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md) |

#### Type declaration

▸ (`tab`, `entity`, `args`): [`ReactProvider`](kui_shell_core.md#reactprovider) \| [`ScalarResource`](kui_shell_core.md#scalarresource) \| [`ScalarContent`](../interfaces/kui_shell_core.ScalarContent.md) \| `Promise`<[`ScalarResource`](kui_shell_core.md#scalarresource) \| [`ScalarContent`](../interfaces/kui_shell_core.ScalarContent.md) \| [`ReactProvider`](kui_shell_core.md#reactprovider)\> \| [`CommandStringContent`](kui_shell_core.md#commandstringcontent)

`Content` as `FunctionThatProducesContent<T>` is a function that
takes a `T` and produces either a resource or some { content,
contentType } wrapper.

##### Parameters

| Name                 | Type                                                             |
| :------------------- | :--------------------------------------------------------------- |
| `tab`                | [`Tab`](../interfaces/kui_shell_core.Tab.md)                     |
| `entity`             | `T`                                                              |
| `args`               | `Object`                                                         |
| `args.argsForMode?`  | [`Arguments`](../interfaces/kui_shell_core.Arguments.md)         |
| `args.argvNoOptions` | `string`[]                                                       |
| `args.parsedOptions` | [`ParsedOptions`](../interfaces/kui_shell_core.ParsedOptions.md) |

##### Returns

[`ReactProvider`](kui_shell_core.md#reactprovider) \| [`ScalarResource`](kui_shell_core.md#scalarresource) \| [`ScalarContent`](../interfaces/kui_shell_core.ScalarContent.md) \| `Promise`<[`ScalarResource`](kui_shell_core.md#scalarresource) \| [`ScalarContent`](../interfaces/kui_shell_core.ScalarContent.md) \| [`ReactProvider`](kui_shell_core.md#reactprovider)\> \| [`CommandStringContent`](kui_shell_core.md#commandstringcontent)

#### Defined in

[packages/core/src/models/mmr/content-types.ts:141](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L141)

---

### Job

Ƭ **Job**: [`Abortable`](../interfaces/kui_shell_core.Abortable.md) & [`FlowControllable`](../interfaces/kui_shell_core.FlowControllable.md) & `Partial`<[`Resizable`](../interfaces/kui_shell_core.Resizable.md)\>

#### Defined in

[packages/core/src/core/jobs/job.ts:44](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/core/jobs/job.ts#L44)

---

### KResponse

Ƭ **KResponse**<`Content`\>: `Entity`<`Content`\>

A command `KResponse` can be any supported `Entity` type

#### Type parameters

| Name      | Type                  |
| :-------- | :-------------------- |
| `Content` | extends `any` = `any` |

#### Defined in

[packages/core/src/models/command.ts:32](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/command.ts#L32)

---

### Link

Ƭ **Link**: `Label` & `Command` \| `Href`

#### Defined in

[packages/core/src/models/NavResponse.ts:44](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/NavResponse.ts#L44)

---

### Menu

Ƭ **Menu**: `Label` & `MenuItems`

#### Defined in

[packages/core/src/models/NavResponse.ts:37](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/NavResponse.ts#L37)

---

### MixedResponse

Ƭ **MixedResponse**: `MixedResponsePart`[]

#### Defined in

[packages/core/src/models/entity.ts:158](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L158)

---

### Mode

Ƭ **Mode**<`T`\>: [`MultiModalMode`](kui_shell_core.md#multimodalmode)<`T`\> \| [`Button`](kui_shell_core.md#button)<`T`\>

#### Type parameters

| Name | Type                                                                           |
| :--- | :----------------------------------------------------------------------------- |
| `T`  | [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md) |

#### Defined in

[packages/core/src/models/mmr/types.ts:75](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/types.ts#L75)

---

### ModeDeclaration

Ƭ **ModeDeclaration**<`Resource`\>: [`Mode`](kui_shell_core.md#mode)

#### Type parameters

| Name       | Type                                                                                   |
| :--------- | :------------------------------------------------------------------------------------- |
| `Resource` | extends [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md) |

#### Defined in

[packages/core/src/webapp/views/registrar/modes.ts:29](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/views/registrar/modes.ts#L29)

---

### ModeFilter

Ƭ **ModeFilter**<`Resource`\>: (`resource`: `Resource`) => `boolean`

#### Type parameters

| Name       | Type                                                                                   |
| :--------- | :------------------------------------------------------------------------------------- |
| `Resource` | extends [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md) |

#### Type declaration

▸ (`resource`): `boolean`

##### Parameters

| Name       | Type       |
| :--------- | :--------- |
| `resource` | `Resource` |

##### Returns

`boolean`

#### Defined in

[packages/core/src/webapp/views/registrar/modes.ts:27](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/views/registrar/modes.ts#L27)

---

### MultiModalMode

Ƭ **MultiModalMode**<`T`\>: `Label` & `ModeTraits` & `VisibilityTraits` & [`Content`](kui_shell_core.md#content)<`T`\>

A `Mode` is a `Label` plus some `Content` and `ModeTraits`

#### Type parameters

| Name | Type                                                                           |
| :--- | :----------------------------------------------------------------------------- |
| `T`  | [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md) |

#### Defined in

[packages/core/src/models/mmr/types.ts:81](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/types.ts#L81)

---

### MultiModalResponse

Ƭ **MultiModalResponse**<`Resource`\>: `Resource` & `View`<`Resource`\>

A `MultiModalResponse` has all the fields of a class of `Resource`
plus a way to `View` those resources.

#### Type parameters

| Name       | Type                                                                           |
| :--------- | :----------------------------------------------------------------------------- |
| `Resource` | [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md) |

#### Defined in

[packages/core/src/models/mmr/types.ts:31](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/types.ts#L31)

---

### NavResponse

Ƭ **NavResponse**: `Object`

A `NavResponse` is a collection of `MultiModalResponse` with menu navigation

#### Type declaration

| Name           | Type                                                         |
| :------------- | :----------------------------------------------------------- |
| `apiVersion`   | `"kui-shell/v1"`                                             |
| `breadcrumbs?` | [`Breadcrumb`](../interfaces/kui_shell_core.Breadcrumb.md)[] |
| `kind`         | `"NavResponse"`                                              |
| `links?`       | [`Link`](kui_shell_core.md#link)[]                           |
| `menus`        | [`Menu`](kui_shell_core.md#menu)[]                           |

#### Defined in

[packages/core/src/models/NavResponse.ts:29](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/NavResponse.ts#L29)

---

### NewSplitRequest

Ƭ **NewSplitRequest**: `Object`

#### Type declaration

| Name                     | Type                                              |
| :----------------------- | :------------------------------------------------ |
| `modification`           | `"NewSplit"`                                      |
| `options?`               | `Object`                                          |
| `options.cmdline?`       | `string`                                          |
| `options.if?`            | `string`                                          |
| `options.ifnot?`         | `string`                                          |
| `options.index?`         | `number`                                          |
| `options.inverseColors?` | `boolean`                                         |
| `options.position?`      | `"default"` \| `"left-strip"` \| `"bottom-strip"` |
| `options.swap?`          | `Object`                                          |
| `options.swap.a`         | `number`                                          |
| `options.swap.b`         | `number`                                          |

#### Defined in

[packages/core/src/models/TabLayoutModificationResponse.ts:32](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/TabLayoutModificationResponse.ts#L32)

---

### PluginRegistration

Ƭ **PluginRegistration**: (`commandTree`: [`Registrar`](../interfaces/kui_shell_core.Registrar.md), `options?`: { `usage`: `PrescanUsage` }) => `KuiPlugin`

#### Type declaration

▸ (`commandTree`, `options?`): `KuiPlugin`

##### Parameters

| Name            | Type                                                     |
| :-------------- | :------------------------------------------------------- |
| `commandTree`   | [`Registrar`](../interfaces/kui_shell_core.Registrar.md) |
| `options?`      | `Object`                                                 |
| `options.usage` | `PrescanUsage`                                           |

##### Returns

`KuiPlugin`

#### Defined in

[packages/core/src/models/plugin.ts:26](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/plugin.ts#L26)

---

### PreloadRegistration

Ƭ **PreloadRegistration**: (`registrar`: [`PreloadRegistrar`](../interfaces/kui_shell_core.PreloadRegistrar.md)) => `Promise`<`void` \| `void`[]\>

#### Type declaration

▸ (`registrar`): `Promise`<`void` \| `void`[]\>

##### Parameters

| Name        | Type                                                                   |
| :---------- | :--------------------------------------------------------------------- |
| `registrar` | [`PreloadRegistrar`](../interfaces/kui_shell_core.PreloadRegistrar.md) |

##### Returns

`Promise`<`void` \| `void`[]\>

#### Defined in

[packages/core/src/models/plugin.ts:41](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/plugin.ts#L41)

---

### PrettyUsageModel

Ƭ **PrettyUsageModel**: `Object`

#### Type declaration

| Name        | Type        |
| :---------- | :---------- |
| `examples?` | `Example`[] |
| `intro?`    | `string`    |
| `options?`  | `Option`[]  |
| `related?`  | `Related`[] |
| `title`     | `Title`     |
| `usages`    | `Usage`[]   |

#### Defined in

[packages/core/src/core/usage/types.ts:36](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/core/usage/types.ts#L36)

---

### RadioTableCell

Ƭ **RadioTableCell**: `string` \| { `hints?`: [`CellShould`](../enums/kui_shell_core.CellShould.md) \| [`CellShould`](../enums/kui_shell_core.CellShould.md)[] ; `key?`: `string` ; `title?`: `string` ; `value`: `string` }

#### Defined in

[packages/core/src/models/RadioTable.ts:87](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/RadioTable.ts#L87)

---

### ReactProvider

Ƭ **ReactProvider**: `Object`

#### Type declaration

| Name    | Type                                                                                                                               |
| :------ | :--------------------------------------------------------------------------------------------------------------------------------- |
| `react` | (`props`: [`ToolbarProps`](kui_shell_core.md#toolbarprops)) => `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> |

#### Defined in

[packages/core/src/models/mmr/content-types.ts:42](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L42)

---

### ReactResponse

Ƭ **ReactResponse**: `Object`

#### Type declaration

| Name    | Type        |
| :------ | :---------- |
| `react` | `ReactNode` |

#### Defined in

[packages/core/src/models/entity.ts:139](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L139)

---

### ResourceByReferenceWithContent

Ƭ **ResourceByReferenceWithContent**<`T`\>: [`ResourceByReference`](../interfaces/kui_shell_core.ResourceByReference.md)<`T`\>

#### Type parameters

| Name | Type                  |
| :--- | :-------------------- |
| `T`  | extends `any` = `any` |

#### Defined in

[packages/core/src/models/entity.ts:111](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L111)

---

### ResourceWithMetadataWithContent

Ƭ **ResourceWithMetadataWithContent**<`T`\>: [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`T`\>

#### Type parameters

| Name | Type                  |
| :--- | :-------------------- |
| `T`  | extends `any` = `any` |

#### Defined in

[packages/core/src/models/entity.ts:86](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L86)

---

### ScalarResource

Ƭ **ScalarResource**: `string` \| `HTMLElement` \| [`Table`](../classes/kui_shell_core.Table.md) \| [`DescriptionList`](../interfaces/kui_shell_core.DescriptionList.md)

A `ScalarResource` is Any kind of resource that is directly
represented, as opposed to being implicitly represented by a
function call.

#### Defined in

[packages/core/src/models/mmr/content-types.ts:34](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L34)

---

### ScalarResponse

Ƭ **ScalarResponse**<`RowType`\>: `SimpleEntity` \| [`Table`](../classes/kui_shell_core.Table.md)<`RowType`\> & `Partial`<[`WithSourceReferences`](../interfaces/kui_shell_core.WithSourceReferences.md)\> \| [`MixedResponse`](kui_shell_core.md#mixedresponse) \| [`CommentaryResponse`](kui_shell_core.md#commentaryresponse) \| [`TabLayoutModificationResponse`](kui_shell_core.md#tablayoutmodificationresponse) \| [`XtermResponse`](../interfaces/kui_shell_core.XtermResponse.md) \| `RandomErrorResponse1` \| `RandomErrorResponse2`

This type covers all responses with no complex internal structure
that views may wish to interpret into fancier views.

#### Type parameters

| Name      | Type                                                                                          |
| :-------- | :-------------------------------------------------------------------------------------------- |
| `RowType` | extends [`Row`](../classes/kui_shell_core.Row.md) = [`Row`](../classes/kui_shell_core.Row.md) |

#### Defined in

[packages/core/src/models/entity.ts:213](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L213)

---

### SnapshottedEvent

Ƭ **SnapshottedEvent**<`E`\>: `Omit`<`E`, `"tab"`\> & { `tab`: `E`[`"tab"`][``"uuid"``] }

In order to snapshot an event, we'll need to remember just the tab uuid

#### Type parameters

| Name | Type                                                                                                                                                               |
| :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `E`  | extends [`CommandStartEvent`](../interfaces/kui_shell_core.CommandStartEvent.md) \| [`CommandCompleteEvent`](../interfaces/kui_shell_core.CommandCompleteEvent.md) |

#### Defined in

[packages/core/src/repl/events.ts:68](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/repl/events.ts#L68)

---

### Stream

Ƭ **Stream**: (`response`: [`Streamable`](kui_shell_core.md#streamable)) => `void` \| `Promise`<`void`\>

#### Type declaration

▸ (`response`): `void` \| `Promise`<`void`\>

##### Parameters

| Name       | Type                                         |
| :--------- | :------------------------------------------- |
| `response` | [`Streamable`](kui_shell_core.md#streamable) |

##### Returns

`void` \| `Promise`<`void`\>

#### Defined in

[packages/core/src/models/streamable.ts:22](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/streamable.ts#L22)

---

### Streamable

Ƭ **Streamable**: [`ScalarResponse`](kui_shell_core.md#scalarresponse)

#### Defined in

[packages/core/src/models/streamable.ts:19](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/streamable.ts#L19)

---

### StringContent

Ƭ **StringContent**<`ContentType`\>: [`ScalarContent`](../interfaces/kui_shell_core.ScalarContent.md)<`string`\> & `WithOptionalContentType`<`ContentType`\> & `Partial`<[`Editable`](kui_shell_core.md#editable)\>

Special case of `ScalarContent` for strings; string content may
optionally provide a `contentType`.

#### Type parameters

| Name          | Type                                                                 |
| :------------ | :------------------------------------------------------------------- |
| `ContentType` | [`SupportedStringContent`](kui_shell_core.md#supportedstringcontent) |

#### Defined in

[packages/core/src/models/mmr/content-types.ts:95](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L95)

---

### StringDiffContent

Ƭ **StringDiffContent**<`ContentType`\>: `Object`

Compare 2 `StringContent`

#### Type parameters

| Name          | Type                                                                 |
| :------------ | :------------------------------------------------------------------- |
| `ContentType` | [`SupportedStringContent`](kui_shell_core.md#supportedstringcontent) |

#### Type declaration

| Name          | Type          |
| :------------ | :------------ |
| `content`     | `Object`      |
| `content.a`   | `string`      |
| `content.b`   | `string`      |
| `contentType` | `ContentType` |

#### Defined in

[packages/core/src/models/mmr/content-types.ts:114](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L114)

---

### SupportedStringContent

Ƭ **SupportedStringContent**: `"yaml"` \| `"text/markdown"` \| `"text/html"` \| `"json"` \| `"shell"` \| `"text/plain"`

Supported String content types

#### Defined in

[packages/core/src/models/mmr/content-types.ts:69](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L69)

---

### Suspendable

Ƭ **Suspendable**: `Omit`<[`FlowControllable`](../interfaces/kui_shell_core.FlowControllable.md), `"write"`\>

#### Defined in

[packages/core/src/core/jobs/job.ts:35](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/core/jobs/job.ts#L35)

---

### TabLayoutModificationResponse

Ƭ **TabLayoutModificationResponse**<`Request`\>: `Object`

If your controller wants to manipulate the tab layout, this is your
response type!

#### Type parameters

| Name      | Type                                                  |
| :-------- | :---------------------------------------------------- |
| `Request` | extends `ModificationRequest` = `ModificationRequest` |

#### Type declaration

| Name         | Type                                     |
| :----------- | :--------------------------------------- |
| `apiVersion` | `"kui-shell/v1"`                         |
| `kind`       | `"TabLayoutModificationResponse"`        |
| `spec`       | `Request` & { `ok`: `MarkdownResponse` } |

#### Defined in

[packages/core/src/models/TabLayoutModificationResponse.ts:24](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/TabLayoutModificationResponse.ts#L24)

---

### ToolbarProps

Ƭ **ToolbarProps**: `Object`

#### Type declaration

| Name                 | Type                                                                                                                                                                                                                                                                           |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `willUpdateToolbar?` | (`toolbarText`: [`ToolbarText`](../interfaces/kui_shell_core.ToolbarText.md), `extraButtons?`: [`Button`](kui_shell_core.md#button)<[`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\>[], `extraButtonsOverride?`: `boolean`) => `void` |

#### Defined in

[packages/core/src/models/mmr/content-types.ts:39](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L39)

---

### ViewTransformer

Ƭ **ViewTransformer**<`T`, `O`\>: (`args`: [`Arguments`](../interfaces/kui_shell_core.Arguments.md)<`O`\>, `response`: `T`) => `Promise`<`T`\> \| `void` \| `Promise`<`void`\>

#### Type parameters

| Name | Type                                                                     |
| :--- | :----------------------------------------------------------------------- |
| `T`  | extends [`KResponse`](kui_shell_core.md#kresponse)                       |
| `O`  | extends [`ParsedOptions`](../interfaces/kui_shell_core.ParsedOptions.md) |

#### Type declaration

▸ (`args`, `response`): `Promise`<`T`\> \| `void` \| `Promise`<`void`\>

##### Parameters

| Name       | Type                                                           |
| :--------- | :------------------------------------------------------------- |
| `args`     | [`Arguments`](../interfaces/kui_shell_core.Arguments.md)<`O`\> |
| `response` | `T`                                                            |

##### Returns

`Promise`<`T`\> \| `void` \| `Promise`<`void`\>

#### Defined in

[packages/core/src/models/command.ts:48](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/command.ts#L48)

## Properties

### Store

• **Store**: () => `LocalStorage`

#### Type declaration

▸ (): `LocalStorage`

This shim allows clients to define a localStorage scheme, if they
cannot provide window.localStorage.

##### Returns

`LocalStorage`

---

### SymbolTable

• **SymbolTable**: `SymbolTable`

---

### boot

• **boot**: (`client`: `ClientRender`) => `Promise`<`void`\>

#### Type declaration

▸ (`client`): `Promise`<`void`\>

Usage: clients will invoke this with their main renderer.

For reference, the HTML template is to be found in
../../../templates/index.ejs. This template is in turn managed by
packages/webpack/webpack.config.js.

##### Parameters

| Name     | Type           |
| :------- | :------------- |
| `client` | `ClientRender` |

##### Returns

`Promise`<`void`\>

---

### encodeComponent

• **encodeComponent**: (`component`: `string` \| `number` \| `boolean`, `quote`: `string`) => `string`

#### Type declaration

▸ (`component`, `quote?`): `string`

Add quotes if the argument needs it; compare to encodeURIComponent

##### Parameters

| Name        | Type                              | Default value |
| :---------- | :-------------------------------- | :------------ |
| `component` | `string` \| `number` \| `boolean` | `undefined`   |
| `quote`     | `string`                          | `'"'`         |

##### Returns

`string`

---

### i18n

• **i18n**: (`plugin`: `string`, `namespace`: `string`) => (`key`: `string`, ...`parameters`: (`string` \| `number`)[]) => `string`

#### Type declaration

▸ (`plugin`, `namespace?`): (`key`: `string`, ...`parameters`: (`string` \| `number`)[]) => `string`

##### Parameters

| Name        | Type     | Default value |
| :---------- | :------- | :------------ |
| `plugin`    | `string` | `undefined`   |
| `namespace` | `string` | `'resources'` |

##### Returns

`fn`

▸ (`key`, ...`parameters`): `string`

##### Parameters

| Name            | Type                     |
| :-------------- | :----------------------- |
| `key`           | `string`                 |
| `...parameters` | (`string` \| `number`)[] |

##### Returns

`string`

## Variables

### KeyCodes

• **KeyCodes**: `Object`

#### Type declaration

| Name          | Type     |
| :------------ | :------- |
| `A`           | `number` |
| `B`           | `number` |
| `BACKSPACE`   | `number` |
| `C`           | `number` |
| `D`           | `number` |
| `DOWN`        | `number` |
| `E`           | `number` |
| `END`         | `number` |
| `ENTER`       | `number` |
| `ESCAPE`      | `number` |
| `F`           | `number` |
| `HOME`        | `number` |
| `K`           | `number` |
| `L`           | `number` |
| `LEFT_ARROW`  | `number` |
| `N`           | `number` |
| `P`           | `number` |
| `PAGEDOWN`    | `number` |
| `PAGEUP`      | `number` |
| `R`           | `number` |
| `RIGHT_ARROW` | `number` |
| `T`           | `number` |
| `TAB`         | `number` |
| `U`           | `number` |
| `UP`          | `number` |

#### Defined in

[packages/core/src/webapp/keys.ts:17](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/keys.ts#L17)

---

### badgeRegistrar

• **badgeRegistrar**: [`BadgeRegistration`](../interfaces/kui_shell_core.BadgeRegistration.md)<[`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)\>[] = `[]`

registered badge handlers

#### Defined in

[packages/core/src/webapp/views/registrar/badges.ts:48](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/views/registrar/badges.ts#L48)

---

### commandsTrie

• **commandsTrie**: `TrieSearch`<`string`\>

#### Defined in

[packages/core/src/commands/typeahead.ts:21](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/commands/typeahead.ts#L21)

## Functions

### History

▸ **History**(`tab`): [`HistoryModel`](../classes/kui_shell_core.HistoryModel.md)

#### Parameters

| Name  | Type                                                     |
| :---- | :------------------------------------------------------- |
| `tab` | `string` \| [`Tab`](../interfaces/kui_shell_core.Tab.md) |

#### Returns

[`HistoryModel`](../classes/kui_shell_core.HistoryModel.md)

#### Defined in

[packages/core/src/index.ts:93](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/index.ts#L93)

---

### \_split

▸ `Const` **\_split**(`str`, `removeOuterQuotes?`, `returnIndices?`, `removeInlineOuterQuotes?`, `splitBy?`, `startIdx?`, `endIdx?`): `string`[] \| [`Split`](../interfaces/kui_shell_core.Split.md)

#### Parameters

| Name                      | Type      | Default value |
| :------------------------ | :-------- | :------------ |
| `str`                     | `string`  | `undefined`   |
| `removeOuterQuotes`       | `boolean` | `true`        |
| `returnIndices`           | `boolean` | `false`       |
| `removeInlineOuterQuotes` | `boolean` | `false`       |
| `splitBy`                 | `string`  | `' '`         |
| `startIdx`                | `number`  | `0`           |
| `endIdx`                  | `number`  | `str.length`  |

#### Returns

`string`[] \| [`Split`](../interfaces/kui_shell_core.Split.md)

#### Defined in

[packages/core/src/repl/split.ts:61](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/repl/split.ts#L61)

---

### addRelevantModes

▸ **addRelevantModes**<`Resource`\>(`tab`, `modes`, `command`, `resource`): `void`

Apply all registered modes that are relevant to the given resource
to the given modes model

#### Type parameters

| Name       | Type                                                                                                        |
| :--------- | :---------------------------------------------------------------------------------------------------------- |
| `Resource` | extends [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`, `Resource`\> |

#### Parameters

| Name                | Type                                                                                                                         |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------- |
| `tab`               | [`Tab`](../interfaces/kui_shell_core.Tab.md)                                                                                 |
| `modes`             | [`Mode`](kui_shell_core.md#mode)<[`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\>[] |
| `command`           | `string`                                                                                                                     |
| `resource`          | `Object`                                                                                                                     |
| `resource.resource` | `Resource`                                                                                                                   |

#### Returns

`void`

#### Defined in

[packages/core/src/webapp/views/registrar/modes.ts:66](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/views/registrar/modes.ts#L66)

---

### bootIntoSandbox

▸ **bootIntoSandbox**(): `Promise`<`void`\>

For booting into an external browser sandbox, such as codesandbox.io

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/webapp/bootstrap/boot.ts:103](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/bootstrap/boot.ts#L103)

---

### cellShouldHaveBadge

▸ **cellShouldHaveBadge**(`cell`): `void` \| [`CellShould`](../enums/kui_shell_core.CellShould.md)

Should the cell be rendered with a traffic light badge?

#### Parameters

| Name   | Type                                                 |
| :----- | :--------------------------------------------------- |
| `cell` | [`RadioTableCell`](kui_shell_core.md#radiotablecell) |

#### Returns

`void` \| [`CellShould`](../enums/kui_shell_core.CellShould.md)

#### Defined in

[packages/core/src/models/RadioTable.ts:63](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/RadioTable.ts#L63)

---

### commandsOfferedByPlugin

▸ `Const` **commandsOfferedByPlugin**(`plugin?`): `Promise`<[`Table`](../classes/kui_shell_core.Table.md)<[`Row`](../classes/kui_shell_core.Row.md)\>\>

Render the commands provided by a given plugin

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `plugin?` | `string` |

#### Returns

`Promise`<[`Table`](../classes/kui_shell_core.Table.md)<[`Row`](../classes/kui_shell_core.Row.md)\>\>

#### Defined in

[packages/core/src/api/plugins.ts:46](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/api/plugins.ts#L46)

---

### disableInputQueueing

▸ `Const` **disableInputQueueing**(`tab`): `string`

#### Parameters

| Name  | Type                                         |
| :---- | :------------------------------------------- |
| `tab` | [`Tab`](../interfaces/kui_shell_core.Tab.md) |

#### Returns

`string`

#### Defined in

[packages/core/src/webapp/queueing.ts:60](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/queueing.ts#L60)

---

### doCancel

▸ **doCancel**(`tab`, `block`, `valueTypedSoFar`): `void`

#### Parameters

| Name              | Type                                             |
| :---------------- | :----------------------------------------------- |
| `tab`             | [`Tab`](../interfaces/kui_shell_core.Tab.md)     |
| `block`           | [`Block`](../interfaces/kui_shell_core.Block.md) |
| `valueTypedSoFar` | `string`                                         |

#### Returns

`void`

#### Defined in

[packages/core/src/webapp/cancel.ts:33](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/cancel.ts#L33)

---

### doEval

▸ `Const` **doEval**(`_tab`, `block`, `command`, `execUUID?`): `Promise`<[`KResponse`](kui_shell_core.md#kresponse)<`any`\> \| [`CodedError`](../interfaces/kui_shell_core.CodedError.md)<`number`\>\>

User hit enter in the REPL

#### Parameters

| Name        | Type                                             | Description              |
| :---------- | :----------------------------------------------- | :----------------------- |
| `_tab`      | [`Tab`](../interfaces/kui_shell_core.Tab.md)     | -                        |
| `block`     | [`Block`](../interfaces/kui_shell_core.Block.md) | -                        |
| `command`   | `string`                                         | -                        |
| `execUUID?` | `string`                                         | for command re-execution |

#### Returns

`Promise`<[`KResponse`](kui_shell_core.md#kresponse)<`any`\> \| [`CodedError`](../interfaces/kui_shell_core.CodedError.md)<`number`\>\>

#### Defined in

[packages/core/src/repl/exec.ts:609](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/repl/exec.ts#L609)

---

### empty

▸ `Const` **empty**(`node`): `void`

Clean out the given DOM node

#### Parameters

| Name   | Type   |
| :----- | :----- |
| `node` | `Node` |

#### Returns

`void`

#### Defined in

[packages/core/src/webapp/util/dom.ts:21](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/util/dom.ts#L21)

---

### executeSequentially

▸ **executeSequentially**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/core/src/api/client.ts:78](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/api/client.ts#L78)

---

### findCompletions

▸ **findCompletions**(`tab`, `commandLine`, `spec`): `Promise`<[`CompletionResponse`](kui_shell_core.md#completionresponse)[]\>

Consult each registered enumerator to see what it has to offer in
the way of completions. Pick the one with highest priority, or the
first to register in the case of a tie-breaker.

#### Parameters

| Name          | Type                                                                                                                                                                                |
| :------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tab`         | `Object`                                                                                                                                                                            |
| `tab.REPL`    | [`REPL`](../interfaces/kui_shell_core.REPL.md)                                                                                                                                      |
| `commandLine` | `Omit`<[`CommandLine`](../interfaces/kui_shell_core.CommandLine.md)<[`ParsedOptions`](../interfaces/kui_shell_core.ParsedOptions.md)\>, `"pipeStages"` \| `"pipeStagesNoOptions"`\> |
| `spec`        | [`TabCompletionSpec`](../interfaces/kui_shell_core.TabCompletionSpec.md)                                                                                                            |

#### Returns

`Promise`<[`CompletionResponse`](kui_shell_core.md#completionresponse)[]\>

#### Defined in

[packages/core/src/repl/tab-completion.ts:70](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/repl/tab-completion.ts#L70)

---

### getCurrentTab

▸ `Const` **getCurrentTab**(): [`Tab`](../interfaces/kui_shell_core.Tab.md)

#### Returns

[`Tab`](../interfaces/kui_shell_core.Tab.md)

#### Defined in

[packages/core/src/webapp/tab.ts:90](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/tab.ts#L90)

---

### getPrimaryTabId

▸ **getPrimaryTabId**(`tab`): `string`

#### Parameters

| Name  | Type                                                            |
| :---- | :-------------------------------------------------------------- |
| `tab` | `Pick`<[`Tab`](../interfaces/kui_shell_core.Tab.md), `"uuid"`\> |

#### Returns

`string`

#### Defined in

[packages/core/src/webapp/tab.ts:78](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/tab.ts#L78)

---

### getTab

▸ `Const` **getTab**(`idx`): [`Tab`](../interfaces/kui_shell_core.Tab.md)

#### Parameters

| Name  | Type                                                     |
| :---- | :------------------------------------------------------- |
| `idx` | `number` \| [`Tab`](../interfaces/kui_shell_core.Tab.md) |

#### Returns

[`Tab`](../interfaces/kui_shell_core.Tab.md)

#### Defined in

[packages/core/src/webapp/tab.ts:100](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/tab.ts#L100)

---

### getTabId

▸ **getTabId**(`tab`): `string`

Return the unique identifier for the given tab

#### Parameters

| Name  | Type                                                            |
| :---- | :-------------------------------------------------------------- |
| `tab` | `Pick`<[`Tab`](../interfaces/kui_shell_core.Tab.md), `"uuid"`\> |

#### Returns

`string`

#### Defined in

[packages/core/src/webapp/tab.ts:64](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/tab.ts#L64)

---

### hasContent

▸ **hasContent**<`T`\>(`resource`): resource is Content<T\>

#### Type parameters

| Name | Type                                                                                                 |
| :--- | :--------------------------------------------------------------------------------------------------- |
| `T`  | extends [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`, `T`\> |

#### Parameters

| Name       | Type                                                                                                                                           |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `resource` | [`ScalarResource`](kui_shell_core.md#scalarresource) \| [`Content`](kui_shell_core.md#content)<`T`\> \| [`Mode`](kui_shell_core.md#mode)<`T`\> |

#### Returns

resource is Content<T\>

#### Defined in

[packages/core/src/models/mmr/content-types.ts:204](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L204)

---

### hasDisplayName

▸ **hasDisplayName**(`resource`): resource is WithDisplayName

#### Parameters

| Name       | Type                                                                                    |
| :--------- | :-------------------------------------------------------------------------------------- |
| `resource` | [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\> |

#### Returns

resource is WithDisplayName

#### Defined in

[packages/core/src/models/entity.ts:99](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L99)

---

### hasSourceReferences

▸ **hasSourceReferences**(`response`): response is Required<WithSourceReferences\>

#### Parameters

| Name       | Type                                                                                       |
| :--------- | :----------------------------------------------------------------------------------------- |
| `response` | `Partial`<[`WithSourceReferences`](../interfaces/kui_shell_core.WithSourceReferences.md)\> |

#### Returns

response is Required<WithSourceReferences\>

#### Defined in

[packages/core/src/models/entity.ts:243](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L243)

---

### hideReplayOutput

▸ **hideReplayOutput**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/core/src/api/client.ts:68](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/api/client.ts#L68)

---

### i18nFromMap

▸ **i18nFromMap**(`map`): `string`

#### Parameters

| Name  | Type                          |
| :---- | :---------------------------- |
| `map` | `Record`<`string`, `string`\> |

#### Returns

`string`

#### Defined in

[packages/core/src/util/i18n.ts:30](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/util/i18n.ts#L30)

---

### initializeSession

▸ **initializeSession**(`tab`): `Promise`<`void`\>

Initialize the session for the given `Tab`. Await the response if
you need to block until all session initializers have completed.

#### Parameters

| Name  | Type                                         |
| :---- | :------------------------------------------- |
| `tab` | [`Tab`](../interfaces/kui_shell_core.Tab.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/session/init.ts:28](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/session/init.ts#L28)

---

### internalBeCarefulExec

▸ `Const` **internalBeCarefulExec**(`commandUntrimmed`, `execOptions?`): `Promise`<[`KResponse`](kui_shell_core.md#kresponse)<`any`\> \| [`CodedError`](../interfaces/kui_shell_core.CodedError.md)<`number`\>\>

#### Parameters

| Name               | Type                                                         |
| :----------------- | :----------------------------------------------------------- |
| `commandUntrimmed` | `string`                                                     |
| `execOptions`      | [`ExecOptions`](../interfaces/kui_shell_core.ExecOptions.md) |

#### Returns

`Promise`<[`KResponse`](kui_shell_core.md#kresponse)<`any`\> \| [`CodedError`](../interfaces/kui_shell_core.CodedError.md)<`number`\>\>

#### Defined in

[packages/core/src/repl/exec.ts:599](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/repl/exec.ts#L599)

---

### internalBeCarefulPExec

▸ `Const` **internalBeCarefulPExec**<`T`\>(`command`, `execOptions?`): `Promise`<`T`\>

Programmatic exec, as opposed to human typing and hitting enter

#### Type parameters

| Name | Type                                                       |
| :--- | :--------------------------------------------------------- |
| `T`  | extends [`KResponse`](kui_shell_core.md#kresponse)<`any`\> |

#### Parameters

| Name           | Type                                                         |
| :------------- | :----------------------------------------------------------- |
| `command`      | `string`                                                     |
| `execOptions?` | [`ExecOptions`](../interfaces/kui_shell_core.ExecOptions.md) |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/core/src/repl/exec.ts:695](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/repl/exec.ts#L695)

---

### is404

▸ **is404**<`Code`\>(`err`): err is CodedError<404\>

#### Type parameters

| Name   | Type     |
| :----- | :------- |
| `Code` | `number` |

#### Parameters

| Name  | Type                            |
| :---- | :------------------------------ |
| `err` | `string` \| `object` \| `Error` |

#### Returns

err is CodedError<404\>

#### Defined in

[packages/core/src/models/errors.ts:33](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/errors.ts#L33)

---

### is404or409

▸ **is404or409**<`Code`\>(`err`): err is CodedError<404 \| 409\>

#### Type parameters

| Name   | Type     |
| :----- | :------- |
| `Code` | `number` |

#### Parameters

| Name  | Type                            |
| :---- | :------------------------------ |
| `err` | `string` \| `object` \| `Error` |

#### Returns

err is CodedError<404 \| 409\>

#### Defined in

[packages/core/src/models/errors.ts:43](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/errors.ts#L43)

---

### is409

▸ **is409**<`Code`\>(`err`): err is CodedError<409\>

#### Type parameters

| Name   | Type     |
| :----- | :------- |
| `Code` | `number` |

#### Parameters

| Name  | Type                            |
| :---- | :------------------------------ |
| `err` | `string` \| `object` \| `Error` |

#### Returns

err is CodedError<409\>

#### Defined in

[packages/core/src/models/errors.ts:38](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/errors.ts#L38)

---

### isAbortableResponse

▸ **isAbortableResponse**(`entity`): entity is AbortableResponse<ScalarResponse<Row\>\>

#### Parameters

| Name     | Type                                                                                                                                                  |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entity` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

entity is AbortableResponse<ScalarResponse<Row\>\>

#### Defined in

[packages/core/src/models/entity.ts:251](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L251)

---

### isButton

▸ **isButton**<`T`\>(`mode`): mode is Button<T\>

#### Type parameters

| Name | Type                                                                                                                                                                                           |
| :--- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `T`  | extends [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`, `T`\> = [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\> |

#### Parameters

| Name   | Type                                                                                                                                                     |
| :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mode` | [`Button`](kui_shell_core.md#button)<`T`\> \| [`Content`](kui_shell_core.md#content)<`T`\> \| [`MultiModalMode`](kui_shell_core.md#multimodalmode)<`T`\> |

#### Returns

mode is Button<T\>

#### Defined in

[packages/core/src/models/mmr/types.ts:144](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/types.ts#L144)

---

### isCodedError

▸ **isCodedError**<`Code`\>(`err`): err is CodedError<Code\>

#### Type parameters

| Name   | Type     |
| :----- | :------- |
| `Code` | `number` |

#### Parameters

| Name  | Type                            |
| :---- | :------------------------------ |
| `err` | `string` \| `object` \| `Error` |

#### Returns

err is CodedError<Code\>

#### Defined in

[packages/core/src/models/errors.ts:28](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/errors.ts#L28)

---

### isCommandHandlerWithEvents

▸ **isCommandHandlerWithEvents**<`T`, `O`\>(`evaluator`): evaluator is CommandHandlerWithEvents<T, O\>

#### Type parameters

| Name | Type                                                                     |
| :--- | :----------------------------------------------------------------------- |
| `T`  | extends [`KResponse`](kui_shell_core.md#kresponse)<`any`\>               |
| `O`  | extends [`ParsedOptions`](../interfaces/kui_shell_core.ParsedOptions.md) |

#### Parameters

| Name        | Type                                                                |
| :---------- | :------------------------------------------------------------------ |
| `evaluator` | [`Evaluator`](../interfaces/kui_shell_core.Evaluator.md)<`T`, `O`\> |

#### Returns

evaluator is CommandHandlerWithEvents<T, O\>

#### Defined in

[packages/core/src/models/command.ts:282](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/command.ts#L282)

---

### isCommandStringContent

▸ **isCommandStringContent**<`T`\>(`content`): content is CommandStringContent

#### Type parameters

| Name | Type                                                                                                 |
| :--- | :--------------------------------------------------------------------------------------------------- |
| `T`  | extends [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`, `T`\> |

#### Parameters

| Name      | Type                                                                                                                                                                                                                                      |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content` | [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\> \| [`ScalarResource`](kui_shell_core.md#scalarresource) \| [`Content`](kui_shell_core.md#content)<`T`\> \| [`Mode`](kui_shell_core.md#mode)<`T`\> |

#### Returns

content is CommandStringContent

#### Defined in

[packages/core/src/models/mmr/content-types.ts:177](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L177)

---

### isCommentaryResponse

▸ **isCommentaryResponse**(`entity`): entity is CommentaryResponse

#### Parameters

| Name     | Type                                                                                                                                                  |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entity` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

entity is CommentaryResponse

#### Defined in

[packages/core/src/models/CommentaryResponse.ts:64](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/CommentaryResponse.ts#L64)

---

### isCommentarySectionBreak

▸ **isCommentarySectionBreak**(`entity`): `boolean`

is this commentary reponse be able to treated as a section break

#### Parameters

| Name     | Type                                                                                                                                                  |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entity` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

`boolean`

#### Defined in

[packages/core/src/models/CommentaryResponse.ts:70](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/CommentaryResponse.ts#L70)

---

### isCursorMovement

▸ `Const` **isCursorMovement**(`evt`): `boolean`

does the given keycode correspond to a cursor movement?

#### Parameters

| Name  | Type            |
| :---- | :-------------- |
| `evt` | `KeyboardEvent` |

#### Returns

`boolean`

#### Defined in

[packages/core/src/webapp/keys.ts:48](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/keys.ts#L48)

---

### isDescriptionList

▸ **isDescriptionList**(`content`): content is DescriptionList

#### Parameters

| Name      | Type                                                 |
| :-------- | :--------------------------------------------------- |
| `content` | [`ScalarResource`](kui_shell_core.md#scalarresource) |

#### Returns

content is DescriptionList

#### Defined in

[packages/core/src/models/DescriptionList.ts:43](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/DescriptionList.ts#L43)

---

### isError

▸ **isError**(`response`): response is ErrorLike

#### Parameters

| Name       | Type                                               |
| :--------- | :------------------------------------------------- |
| `response` | [`KResponse`](kui_shell_core.md#kresponse)<`any`\> |

#### Returns

response is ErrorLike

#### Defined in

[packages/core/src/repl/error.ts:27](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/repl/error.ts#L27)

---

### isExecutableClient

▸ **isExecutableClient**(): `boolean`

Is the current client running in an executable mode?

#### Returns

`boolean`

#### Defined in

[packages/core/src/api/client.ts:53](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/api/client.ts#L53)

---

### isFunctionContent

▸ **isFunctionContent**<`T`\>(`content`): content is FunctionContent<T\>

#### Type parameters

| Name | Type                                                                                                                                                                                           |
| :--- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `T`  | extends [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`, `T`\> = [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\> |

#### Parameters

| Name      | Type                                                                                                                                                                                                                                            |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> \| [`Content`](kui_shell_core.md#content)<`T`\> \| [`Mode`](kui_shell_core.md#mode)<`T`\> |

#### Returns

content is FunctionContent<T\>

#### Defined in

[packages/core/src/models/mmr/content-types.ts:160](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L160)

---

### isLink

▸ **isLink**(`link`): link is Link

#### Parameters

| Name   | Type                             |
| :----- | :------------------------------- |
| `link` | [`Link`](kui_shell_core.md#link) |

#### Returns

link is Link

#### Defined in

[packages/core/src/models/NavResponse.ts:54](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/NavResponse.ts#L54)

---

### isLinkWithCommand

▸ **isLinkWithCommand**(`link`): link is Label & Command

#### Parameters

| Name   | Type                             |
| :----- | :------------------------------- |
| `link` | [`Link`](kui_shell_core.md#link) |

#### Returns

link is Label & Command

#### Defined in

[packages/core/src/models/NavResponse.ts:46](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/NavResponse.ts#L46)

---

### isLinkWithHref

▸ **isLinkWithHref**(`link`): link is Label & Href

#### Parameters

| Name   | Type                             |
| :----- | :------------------------------- |
| `link` | [`Link`](kui_shell_core.md#link) |

#### Returns

link is Label & Href

#### Defined in

[packages/core/src/models/NavResponse.ts:50](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/NavResponse.ts#L50)

---

### isMarkdownResponse

▸ **isMarkdownResponse**(`entity`): entity is MarkdownResponse

#### Parameters

| Name     | Type                                                                                                                                                  |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entity` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

entity is MarkdownResponse

#### Defined in

[packages/core/src/models/entity.ts:134](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L134)

---

### isMessageWithCode

▸ **isMessageWithCode**(`msg`): msg is MessageWithCode

#### Parameters

| Name  | Type        |
| :---- | :---------- |
| `msg` | `UsageLike` |

#### Returns

msg is MessageWithCode

#### Defined in

[packages/core/src/core/usage-error.ts:877](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/core/usage-error.ts#L877)

---

### isMessageWithUsageModel

▸ **isMessageWithUsageModel**(`msg`): msg is MessageWithUsageModel

#### Parameters

| Name  | Type        |
| :---- | :---------- |
| `msg` | `UsageLike` |

#### Returns

msg is MessageWithUsageModel

#### Defined in

[packages/core/src/core/usage-error.ts:133](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/core/usage-error.ts#L133)

---

### isMixedResponse

▸ **isMixedResponse**(`response`): response is MixedResponse

#### Parameters

| Name       | Type                                                                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `response` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

response is MixedResponse

#### Defined in

[packages/core/src/models/entity.ts:160](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L160)

---

### isMultiModalResponse

▸ **isMultiModalResponse**(`entity`): entity is MultiModalResponse<ResourceWithMetadata<void\>\>

#### Parameters

| Name     | Type                                                                                                                                                  |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entity` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

entity is MultiModalResponse<ResourceWithMetadata<void\>\>

#### Defined in

[packages/core/src/models/mmr/is.ts:20](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/is.ts#L20)

---

### isNavResponse

▸ **isNavResponse**(`entity`): entity is NavResponse

#### Parameters

| Name     | Type                                                                                                                                                  |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entity` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

entity is NavResponse

#### Defined in

[packages/core/src/models/NavResponse.ts:58](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/NavResponse.ts#L58)

---

### isNewSplitRequest

▸ **isNewSplitRequest**(`req`): req is TabLayoutModificationResponse<NewSplitRequest\>

#### Parameters

| Name  | Type                                                                                                                                        |
| :---- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| `req` | [`TabLayoutModificationResponse`](kui_shell_core.md#tablayoutmodificationresponse)<[`NewSplitRequest`](kui_shell_core.md#newsplitrequest)\> |

#### Returns

req is TabLayoutModificationResponse<NewSplitRequest\>

#### Defined in

[packages/core/src/models/TabLayoutModificationResponse.ts:60](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/TabLayoutModificationResponse.ts#L60)

---

### isOfflineClient

▸ **isOfflineClient**(): `boolean`

Is the current client running in offline/disconnected mode?

#### Returns

`boolean`

#### Defined in

[packages/core/src/api/client.ts:21](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/api/client.ts#L21)

---

### isPopup

▸ `Const` **isPopup**(): `boolean`

are we operating in popup mode?

#### Returns

`boolean`

#### Defined in

[packages/core/src/webapp/popup-core.ts:18](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/popup-core.ts#L18)

---

### isRadioTable

▸ **isRadioTable**(`response`): response is RadioTable

#### Parameters

| Name       | Type                                               |
| :--------- | :------------------------------------------------- |
| `response` | [`KResponse`](kui_shell_core.md#kresponse)<`any`\> |

#### Returns

response is RadioTable

#### Defined in

[packages/core/src/models/RadioTable.ts:100](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/RadioTable.ts#L100)

---

### isRandomErrorResponse1

▸ **isRandomErrorResponse1**(`response`): response is RandomErrorResponse1

#### Parameters

| Name       | Type                                                                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `response` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

response is RandomErrorResponse1

#### Defined in

[packages/core/src/models/entity.ts:197](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L197)

---

### isRandomErrorResponse2

▸ **isRandomErrorResponse2**(`response`): response is RandomErrorResponse2

#### Parameters

| Name       | Type                                                                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `response` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

response is RandomErrorResponse2

#### Defined in

[packages/core/src/models/entity.ts:203](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L203)

---

### isReactProvider

▸ **isReactProvider**(`entity`): entity is ReactProvider

#### Parameters

| Name     | Type                                                                                                   |
| :------- | :----------------------------------------------------------------------------------------------------- |
| `entity` | `ScalarLike`<[`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

entity is ReactProvider

#### Defined in

[packages/core/src/models/mmr/content-types.ts:43](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L43)

---

### isReactResponse

▸ **isReactResponse**(`entity`): entity is ReactResponse

#### Parameters

| Name     | Type                                                                                                                                                  |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entity` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

entity is ReactResponse

#### Defined in

[packages/core/src/models/entity.ts:141](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L141)

---

### isReadOnlyClient

▸ **isReadOnlyClient**(): `boolean`

Is the current client running in readonly mode?

#### Returns

`boolean`

#### Defined in

[packages/core/src/api/client.ts:37](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/api/client.ts#L37)

---

### isResizable

▸ **isResizable**(`job`): job is Resizable

#### Parameters

| Name  | Type                                                                 |
| :---- | :------------------------------------------------------------------- |
| `job` | `Partial`<[`Resizable`](../interfaces/kui_shell_core.Resizable.md)\> |

#### Returns

job is Resizable

#### Defined in

[packages/core/src/core/jobs/job.ts:25](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/core/jobs/job.ts#L25)

---

### isResourceByReference

▸ **isResourceByReference**<`T`\>(`spec`): spec is T

#### Type parameters

| Name | Type                                                                                               |
| :--- | :------------------------------------------------------------------------------------------------- |
| `T`  | extends [`ResourceByReference`](../interfaces/kui_shell_core.ResourceByReference.md)<`void`, `T`\> |

#### Parameters

| Name   | Type                                                                                                                                                                                                                                                           |
| :----- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `spec` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> \| `T` \| [`ResourceWithMetadataWithContent`](kui_shell_core.md#resourcewithmetadatawithcontent)<`any`\> |

#### Returns

spec is T

#### Defined in

[packages/core/src/models/entity.ts:112](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L112)

---

### isResourceWithMetadata

▸ **isResourceWithMetadata**(`spec`): spec is ResourceWithMetadata<void\>

#### Parameters

| Name   | Type                                                                                                                                                  |
| :----- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `spec` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

spec is ResourceWithMetadata<void\>

#### Defined in

[packages/core/src/models/entity.ts:88](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L88)

---

### isScalarContent

▸ **isScalarContent**<`T`\>(`entity`): entity is ScalarContent<ScalarResource\>

#### Type parameters

| Name | Type                                                                                                 |
| :--- | :--------------------------------------------------------------------------------------------------- |
| `T`  | extends [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`, `T`\> |

#### Parameters

| Name     | Type               |
| :------- | :----------------- |
| `entity` | `ScalarLike`<`T`\> |

#### Returns

entity is ScalarContent<ScalarResource\>

#### Defined in

[packages/core/src/models/mmr/content-types.ts:56](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L56)

---

### isScalarResponse

▸ **isScalarResponse**(`response`): response is ScalarResponse<Row\>

#### Parameters

| Name       | Type                                                                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `response` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

response is ScalarResponse<Row\>

#### Defined in

[packages/core/src/models/entity.ts:223](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/entity.ts#L223)

---

### isStringDiffContent

▸ **isStringDiffContent**<`T`\>(`entity`): entity is StringDiffContent<SupportedStringContent\>

#### Type parameters

| Name | Type                                                                                                 |
| :--- | :--------------------------------------------------------------------------------------------------- |
| `T`  | extends [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`, `T`\> |

#### Parameters

| Name     | Type                                                                                                                                                                                                                                            |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entity` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> \| [`Content`](kui_shell_core.md#content)<`T`\> \| [`Mode`](kui_shell_core.md#mode)<`T`\> |

#### Returns

entity is StringDiffContent<SupportedStringContent\>

#### Defined in

[packages/core/src/models/mmr/content-types.ts:122](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L122)

---

### isStringResponse

▸ **isStringResponse**(`response`): response is string

#### Parameters

| Name       | Type                                                         |
| :--------- | :----------------------------------------------------------- |
| `response` | [`CompletionResponse`](kui_shell_core.md#completionresponse) |

#### Returns

response is string

#### Defined in

[packages/core/src/repl/tab-completion.ts:39](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/repl/tab-completion.ts#L39)

---

### isStringWithOptionalContentType

▸ **isStringWithOptionalContentType**<`T`\>(`entity`): entity is StringContent<SupportedStringContent\>

#### Type parameters

| Name | Type                                                                                                 |
| :--- | :--------------------------------------------------------------------------------------------------- |
| `T`  | extends [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`, `T`\> |

#### Parameters

| Name     | Type                                                                                                                                                                                                                                            |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entity` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> \| [`Content`](kui_shell_core.md#content)<`T`\> \| [`Mode`](kui_shell_core.md#mode)<`T`\> |

#### Returns

entity is StringContent<SupportedStringContent\>

#### Defined in

[packages/core/src/models/mmr/content-types.ts:99](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L99)

---

### isSupportedContentType

▸ **isSupportedContentType**(`contentType`): `boolean`

#### Parameters

| Name          | Type     |
| :------------ | :------- |
| `contentType` | `string` |

#### Returns

`boolean`

#### Defined in

[packages/core/src/models/mmr/content-types.ts:71](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/content-types.ts#L71)

---

### isSupportedToolbarTextType

▸ **isSupportedToolbarTextType**(`type`): type is ToolbarTextType

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `type` | `string` |

#### Returns

type is ToolbarTextType

#### Defined in

[packages/core/src/webapp/views/toolbar-text.ts:24](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/views/toolbar-text.ts#L24)

---

### isSuspendable

▸ **isSuspendable**(`watch`): () => `void`

#### Parameters

| Name    | Type                                                       |
| :------ | :--------------------------------------------------------- |
| `watch` | `Partial`<[`Suspendable`](kui_shell_core.md#suspendable)\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/core/src/core/jobs/job.ts:40](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/core/jobs/job.ts#L40)

---

### isTabLayoutModificationResponse

▸ **isTabLayoutModificationResponse**(`entity`): entity is TabLayoutModificationResponse<NewSplitRequest\>

#### Parameters

| Name     | Type                                                                                                                                                  |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entity` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

entity is TabLayoutModificationResponse<NewSplitRequest\>

#### Defined in

[packages/core/src/models/TabLayoutModificationResponse.ts:66](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/TabLayoutModificationResponse.ts#L66)

---

### isTable

▸ **isTable**<`C`\>(`model`): model is Table<Row\>

#### Type parameters

| Name |
| :--- |
| `C`  |

#### Parameters

| Name    | Type                                                                                                                                                                                                                                          |
| :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> \| [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`C`\> |

#### Returns

model is Table<Row\>

#### Defined in

[packages/core/src/webapp/models/table.ts:234](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/models/table.ts#L234)

---

### isTableWithCount

▸ **isTableWithCount**(`table`): `boolean`

#### Parameters

| Name    | Type                                                                                      |
| :------ | :---------------------------------------------------------------------------------------- |
| `table` | [`Table`](../classes/kui_shell_core.Table.md)<[`Row`](../classes/kui_shell_core.Row.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/core/src/webapp/models/table.ts:225](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/models/table.ts#L225)

---

### isTableWithTimestamp

▸ **isTableWithTimestamp**(`table`): `boolean`

#### Parameters

| Name    | Type                                                                                      |
| :------ | :---------------------------------------------------------------------------------------- |
| `table` | [`Table`](../classes/kui_shell_core.Table.md)<[`Row`](../classes/kui_shell_core.Row.md)\> |

#### Returns

`boolean`

#### Defined in

[packages/core/src/webapp/models/table.ts:221](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/models/table.ts#L221)

---

### isTopLevelTab

▸ **isTopLevelTab**(`tab`): `boolean`

#### Parameters

| Name  | Type                                                            |
| :---- | :-------------------------------------------------------------- |
| `tab` | `Pick`<[`Tab`](../interfaces/kui_shell_core.Tab.md), `"uuid"`\> |

#### Returns

`boolean`

#### Defined in

[packages/core/src/webapp/tab.ts:82](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/tab.ts#L82)

---

### isUsageError

▸ **isUsageError**(`error`): error is UsageErrorLike

#### Parameters

| Name    | Type                                                                                                                                                                      |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `error` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> \| `UsageErrorLike` |

#### Returns

error is UsageErrorLike

#### Defined in

[packages/core/src/core/usage-error.ts:935](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/core/usage-error.ts#L935)

---

### isViewButton

▸ **isViewButton**<`T`\>(`button`): button is ViewButton<T\>

#### Type parameters

| Name | Type                                                                                    |
| :--- | :-------------------------------------------------------------------------------------- |
| `T`  | [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\> |

#### Parameters

| Name     | Type                                       |
| :------- | :----------------------------------------- |
| `button` | [`Button`](kui_shell_core.md#button)<`T`\> |

#### Returns

button is ViewButton<T\>

#### Defined in

[packages/core/src/models/mmr/types.ts:138](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/mmr/types.ts#L138)

---

### isWatchable

▸ **isWatchable**(`model`): model is string & Watchable & number & Watchable & false & Watchable & true & Watchable & HTMLElement & Watchable & Error & Watchable & MarkdownResponse & Watchable & ReactResponse & Watchable & MixedResponse & Watchable & CommentaryResponse & Watchable & TabLayoutModificationResponse<NewSplitRequest\> & Watchable & XtermResponse & Watchable & RandomErrorResponse1 & Watchable & RandomErrorResponse2 & Watchable & Table<Row\> & Partial<WithSourceReferences\> & Watchable & Abortable & Object & Watchable & ResourceWithMetadata<void\> & Watchable & ResourceWithMetadata<void\> & View<ResourceWithMetadata<void\>\> & Watchable & NavResponse & Watchable & RadioTable & Watchable & UsageModel & Watchable & RawResponse<void\> & Watchable & ResourceWithMetadata<void\>[] & Watchable

#### Parameters

| Name    | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model` | `string` & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & `number` & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & `false` & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & `true` & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & `HTMLElement` & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & `Error` & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & `MarkdownResponse` & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & [`ReactResponse`](kui_shell_core.md#reactresponse) & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & [`MixedResponse`](kui_shell_core.md#mixedresponse) & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & [`CommentaryResponse`](kui_shell_core.md#commentaryresponse) & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & [`TabLayoutModificationResponse`](kui_shell_core.md#tablayoutmodificationresponse)<[`NewSplitRequest`](kui_shell_core.md#newsplitrequest)\> & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & [`XtermResponse`](../interfaces/kui_shell_core.XtermResponse.md) & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & `RandomErrorResponse1` & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & `RandomErrorResponse2` & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & [`Table`](../classes/kui_shell_core.Table.md)<[`Row`](../classes/kui_shell_core.Row.md)\> & `Partial`<[`WithSourceReferences`](../interfaces/kui_shell_core.WithSourceReferences.md)\> & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & [`Abortable`](../interfaces/kui_shell_core.Abortable.md) & { `response`: [`ScalarResponse`](kui_shell_core.md#scalarresponse)<[`Row`](../classes/kui_shell_core.Row.md)\> } & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\> & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\> & `View`<[`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & [`NavResponse`](kui_shell_core.md#navresponse) & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & [`RadioTable`](../interfaces/kui_shell_core.RadioTable.md) & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & [`UsageModel`](../interfaces/kui_shell_core.UsageModel.md) & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & [`RawResponse`](../interfaces/kui_shell_core.RawResponse.md)<`void`\> & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> & [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>[] & `Partial`<[`Watchable`](../interfaces/kui_shell_core.Watchable.md)\> |

#### Returns

model is string & Watchable & number & Watchable & false & Watchable & true & Watchable & HTMLElement & Watchable & Error & Watchable & MarkdownResponse & Watchable & ReactResponse & Watchable & MixedResponse & Watchable & CommentaryResponse & Watchable & TabLayoutModificationResponse<NewSplitRequest\> & Watchable & XtermResponse & Watchable & RandomErrorResponse1 & Watchable & RandomErrorResponse2 & Watchable & Table<Row\> & Partial<WithSourceReferences\> & Watchable & Abortable & Object & Watchable & ResourceWithMetadata<void\> & Watchable & ResourceWithMetadata<void\> & View<ResourceWithMetadata<void\>\> & Watchable & NavResponse & Watchable & RadioTable & Watchable & UsageModel & Watchable & RawResponse<void\> & Watchable & ResourceWithMetadata<void\>[] & Watchable

#### Defined in

[packages/core/src/core/jobs/watchable.ts:88](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/core/jobs/watchable.ts#L88)

---

### isXtermErrorResponse

▸ **isXtermErrorResponse**(`entity`): `boolean`

#### Parameters

| Name     | Type                                                                                                                                                  |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entity` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

`boolean`

#### Defined in

[packages/core/src/models/XtermResponse.ts:38](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/XtermResponse.ts#L38)

---

### isXtermResponse

▸ **isXtermResponse**(`entity`): entity is XtermResponse

#### Parameters

| Name     | Type                                                                                                                                                  |
| :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entity` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

entity is XtermResponse

#### Defined in

[packages/core/src/models/XtermResponse.ts:33](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/XtermResponse.ts#L33)

---

### maybeKuiLink

▸ **maybeKuiLink**(`link`): `string`

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `link` | `string` |

#### Returns

`string`

#### Defined in

[packages/core/src/models/CommentaryResponse.ts:74](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/CommentaryResponse.ts#L74)

---

### offQuit

▸ **offQuit**(`handler`): `void`

#### Parameters

| Name      | Type         |
| :-------- | :----------- |
| `handler` | () => `void` |

#### Returns

`void`

#### Defined in

[packages/core/src/api/window-events.ts:47](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/api/window-events.ts#L47)

---

### onQuit

▸ **onQuit**(`handler`): `void`

#### Parameters

| Name      | Type         |
| :-------- | :----------- |
| `handler` | () => `void` |

#### Returns

`void`

#### Defined in

[packages/core/src/api/window-events.ts:39](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/api/window-events.ts#L39)

---

### pexecInCurrentTab

▸ **pexecInCurrentTab**(`command`, `topLevelTab?`, `isInternalCallpath?`, `incognito?`, `execUUID?`): `Promise`<[`KResponse`](kui_shell_core.md#kresponse)<`any`\>\>

Execute the given command in the current (or given) tab.

#### Parameters

| Name                 | Type                                         | Default value | Description                                                               |
| :------------------- | :------------------------------------------- | :------------ | :------------------------------------------------------------------------ |
| `command`            | `string`                                     | `undefined`   | -                                                                         |
| `topLevelTab?`       | [`Tab`](../interfaces/kui_shell_core.Tab.md) | `undefined`   | -                                                                         |
| `isInternalCallpath` | `boolean`                                    | `false`       | -                                                                         |
| `incognito`          | `boolean`                                    | `false`       | Execute the command quietly but do not display the result in the Terminal |
| `execUUID?`          | `string`                                     | `undefined`   | -                                                                         |

#### Returns

`Promise`<[`KResponse`](kui_shell_core.md#kresponse)<`any`\>\>

#### Defined in

[packages/core/src/webapp/tab.ts:137](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/tab.ts#L137)

---

### pluginUserHome

▸ `Const` **pluginUserHome**(): `Promise`<`string`\>

Home for user-installed plugins

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/core/src/api/plugins.ts:55](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/api/plugins.ts#L55)

---

### radioTableAddHint

▸ **radioTableAddHint**(`row`, `cidx`, `newHints`): `void`

Add the hint to the given RadioTableCell

#### Parameters

| Name       | Type                                                             |
| :--------- | :--------------------------------------------------------------- |
| `row`      | [`RadioTableRow`](../interfaces/kui_shell_core.RadioTableRow.md) |
| `cidx`     | `number`                                                         |
| `newHints` | [`CellShould`](../enums/kui_shell_core.CellShould.md)[]          |

#### Returns

`void`

#### Defined in

[packages/core/src/models/RadioTable.ts:68](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/RadioTable.ts#L68)

---

### radioTableCellToString

▸ **radioTableCellToString**(`cell`, `useTitle?`): `string`

Project the string value of the given `cell`

#### Parameters

| Name       | Type                                                 | Default value |
| :--------- | :--------------------------------------------------- | :------------ |
| `cell`     | [`RadioTableCell`](kui_shell_core.md#radiotablecell) | `undefined`   |
| `useTitle` | `boolean`                                            | `false`       |

#### Returns

`string`

#### Defined in

[packages/core/src/models/RadioTable.ts:58](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/RadioTable.ts#L58)

---

### radioTableHintsAsCss

▸ **radioTableHintsAsCss**(`cell`): `string`

#### Parameters

| Name   | Type                                                 |
| :----- | :--------------------------------------------------- |
| `cell` | [`RadioTableCell`](kui_shell_core.md#radiotablecell) |

#### Returns

`string`

#### Defined in

[packages/core/src/models/RadioTable.ts:47](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/RadioTable.ts#L47)

---

### registerBadge

▸ **registerBadge**<`Resource`\>(`registration`): `void`

Register a new badge

#### Type parameters

| Name       | Type                                                                                                        |
| :--------- | :---------------------------------------------------------------------------------------------------------- |
| `Resource` | extends [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`, `Resource`\> |

#### Parameters

| Name           | Type                                                                                  |
| :------------- | :------------------------------------------------------------------------------------ |
| `registration` | [`BadgeRegistration`](../interfaces/kui_shell_core.BadgeRegistration.md)<`Resource`\> |

#### Returns

`void`

#### Defined in

[packages/core/src/webapp/views/registrar/badges.ts:54](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/views/registrar/badges.ts#L54)

---

### registerMode

▸ **registerMode**<`Resource`\>(`registration`): `void`

Register a new mode

#### Type parameters

| Name       | Type                                                                                                        |
| :--------- | :---------------------------------------------------------------------------------------------------------- |
| `Resource` | extends [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`, `Resource`\> |

#### Parameters

| Name           | Type                                                                                |
| :------------- | :---------------------------------------------------------------------------------- |
| `registration` | [`ModeRegistration`](../interfaces/kui_shell_core.ModeRegistration.md)<`Resource`\> |

#### Returns

`void`

#### Defined in

[packages/core/src/webapp/views/registrar/modes.ts:50](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/views/registrar/modes.ts#L50)

---

### registerModeWhen

▸ `Const` **registerModeWhen**<`Resource`\>(`when`): (`mode`: [`ModeDeclaration`](kui_shell_core.md#modedeclaration)<`Resource`\>) => `void`

#### Type parameters

| Name       | Type                                                                                                        |
| :--------- | :---------------------------------------------------------------------------------------------------------- |
| `Resource` | extends [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`, `Resource`\> |

#### Parameters

| Name   | Type                                                      |
| :----- | :-------------------------------------------------------- |
| `when` | [`ModeFilter`](kui_shell_core.md#modefilter)<`Resource`\> |

#### Returns

`fn`

▸ (`mode`): `void`

##### Parameters

| Name   | Type                                                                |
| :----- | :------------------------------------------------------------------ |
| `mode` | [`ModeDeclaration`](kui_shell_core.md#modedeclaration)<`Resource`\> |

##### Returns

`void`

#### Defined in

[packages/core/src/webapp/views/registrar/modes.ts:55](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/views/registrar/modes.ts#L55)

---

### registerTabCompletionEnumerator

▸ **registerTabCompletionEnumerator**(`enumerator`, `priority?`): `void`

A plugin has offered a tab completion Enumerator

#### Parameters

| Name         | Type         | Default value |
| :----------- | :----------- | :------------ |
| `enumerator` | `Enumerator` | `undefined`   |
| `priority`   | `number`     | `0`           |

#### Returns

`void`

#### Defined in

[packages/core/src/repl/tab-completion.ts:60](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/repl/tab-completion.ts#L60)

---

### registerTabState

▸ **registerTabState**(`registration`): `void`

#### Parameters

| Name           | Type                   |
| :------------- | :--------------------- |
| `registration` | `TabStateRegistration` |

#### Returns

`void`

#### Defined in

[packages/core/src/models/tab-state.ts:38](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/tab-state.ts#L38)

---

### renderUsage

▸ **renderUsage**(`_`): `string`

#### Parameters

| Name | Type                                                     |
| :--- | :------------------------------------------------------- |
| `_`  | [`PrettyUsageModel`](kui_shell_core.md#prettyusagemodel) |

#### Returns

`string`

#### Defined in

[packages/core/src/core/usage/render-usage.ts:20](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/core/usage/render-usage.ts#L20)

---

### sameRow

▸ **sameRow**(`A`, `B`): `boolean`

Are the two Rows the same?

#### Parameters

| Name | Type                                      |
| :--- | :---------------------------------------- |
| `A`  | [`Row`](../classes/kui_shell_core.Row.md) |
| `B`  | [`Row`](../classes/kui_shell_core.Row.md) |

#### Returns

`boolean`

#### Defined in

[packages/core/src/webapp/models/table.ts:242](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/models/table.ts#L242)

---

### sameTab

▸ `Const` **sameTab**(`tab1`, `tab2`): `boolean`

#### Parameters

| Name   | Type                                         |
| :----- | :------------------------------------------- |
| `tab1` | [`Tab`](../interfaces/kui_shell_core.Tab.md) |
| `tab2` | [`Tab`](../interfaces/kui_shell_core.Tab.md) |

#### Returns

`boolean`

#### Defined in

[packages/core/src/webapp/tab.ts:86](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/tab.ts#L86)

---

### setEvaluatorImpl

▸ `Const` **setEvaluatorImpl**(`impl`): `void`

#### Parameters

| Name   | Type                                                   |
| :----- | :----------------------------------------------------- |
| `impl` | [`ReplEval`](../interfaces/kui_shell_core.ReplEval.md) |

#### Returns

`void`

#### Defined in

[packages/core/src/repl/exec.ts:76](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/repl/exec.ts#L76)

---

### split

▸ `Const` **split**(`str`, `removeOuterQuotes?`, `removeInlineOuterQuotes?`, `splitBy?`, `startIdx?`, `endIdx?`): `string`[]

#### Parameters

| Name                      | Type      | Default value |
| :------------------------ | :-------- | :------------ |
| `str`                     | `string`  | `undefined`   |
| `removeOuterQuotes`       | `boolean` | `true`        |
| `removeInlineOuterQuotes` | `boolean` | `false`       |
| `splitBy?`                | `string`  | `undefined`   |
| `startIdx`                | `number`  | `0`           |
| `endIdx`                  | `number`  | `str.length`  |

#### Returns

`string`[]

#### Defined in

[packages/core/src/repl/split.ts:197](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/repl/split.ts#L197)

---

### splitFor

▸ **splitFor**(`topLevelTab`): [`Tab`](../interfaces/kui_shell_core.Tab.md)

We need to find the instance of the Split that has a REPL controller

- if given a `topLevelTab` that is already a Split, then we're "good to go"
- if we are given an actual top-level tab (i.e. not a split), then we need to find the first Split child of that given tab
- if we aren't given a tab as input, then we search from `document`

#### Parameters

| Name          | Type                                         |
| :------------ | :------------------------------------------- |
| `topLevelTab` | [`Tab`](../interfaces/kui_shell_core.Tab.md) |

#### Returns

[`Tab`](../interfaces/kui_shell_core.Tab.md)

#### Defined in

[packages/core/src/webapp/tab.ts:117](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/tab.ts#L117)

---

### splitIntoPipeStages

▸ **splitIntoPipeStages**(`command`): [`CommandLine`](../interfaces/kui_shell_core.CommandLine.md)[``"pipeStages"``]

Split a given `command` line into the stages of the pipeline

e.g. if command=`a -- b c|d > e`, then
pipeStages=`{ prefix: 'a', stages: [['b','c'],'d'], redirect: 'e' }`

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `command` | `string` |

#### Returns

[`CommandLine`](../interfaces/kui_shell_core.CommandLine.md)[``"pipeStages"``]

#### Defined in

[packages/core/src/repl/pipe-stages.ts:27](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/repl/pipe-stages.ts#L27)

---

### teeToFile

▸ **teeToFile**(`response`): `Promise`<`void`\>

#### Parameters

| Name       | Type                                                                                                                                                  |
| :--------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `response` | `Entity`<`void`, [`Row`](../classes/kui_shell_core.Row.md), [`ResourceWithMetadata`](../interfaces/kui_shell_core.ResourceWithMetadata.md)<`void`\>\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/core/src/util/tee.ts:21](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/util/tee.ts#L21)

---

### tellMain

▸ `Const` **tellMain**(`message`, `channel?`): `Promise`<`unknown`\>

Send a synchronous message to the main process

#### Parameters

| Name       | Type                                                |
| :--------- | :-------------------------------------------------- |
| `message`  | `string` \| `Record`<`string`, `any`\>              |
| `channel?` | `"asynchronous-message"` \| `"synchronous-message"` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[packages/core/src/webapp/electron-events.ts:64](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/webapp/electron-events.ts#L64)

---

### typeahead

▸ **typeahead**(`prefix`): `string`[]

Typeahead find lookup

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `prefix` | `string` |

#### Returns

`string`[]

list of matches

#### Defined in

[packages/core/src/commands/typeahead.ts:100](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/commands/typeahead.ts#L100)

---

### unparse

▸ `Const` **unparse**(`options`): `string`

Turn an options struct into a cli string

#### Parameters

| Name      | Type                                                             | Description                                           |
| :-------- | :--------------------------------------------------------------- | :---------------------------------------------------- |
| `options` | [`ParsedOptions`](../interfaces/kui_shell_core.ParsedOptions.md) | is the command line options struct given by the user. |

#### Returns

`string`

#### Defined in

[packages/core/src/core/utility.ts:26](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/core/utility.ts#L26)

---

### withLanguage

▸ **withLanguage**(`execOptions`): `LanguageBearing`

#### Parameters

| Name          | Type                                                         |
| :------------ | :----------------------------------------------------------- |
| `execOptions` | [`ExecOptions`](../interfaces/kui_shell_core.ExecOptions.md) |

#### Returns

`LanguageBearing`

#### Defined in

[packages/core/src/models/execOptions.ts:123](https://github.com/kubernetes-sigs/kui/blob/kui/packages/core/src/models/execOptions.ts#L123)
