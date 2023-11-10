# Class: QueryCommand

## Hierarchy

- **`QueryCommand`**

  ↳ [`HelpCommand`](../wiki/HelpCommand)

  ↳ [`ServerNotifyRegisterCommand`](../wiki/ServerNotifyRegisterCommand)

  ↳ [`ServerNotifyUnregisterCommand`](../wiki/ServerNotifyUnregisterCommand)

  ↳ [`LoginCommand`](../wiki/LoginCommand)

  ↳ [`WhoAmICommand`](../wiki/WhoAmICommand)

  ↳ [`VersionCommand`](../wiki/VersionCommand)

## Table of contents

### Constructors

- [constructor](../wiki/QueryCommand#constructor)

### Properties

- [commandTermination](../wiki/QueryCommand#commandtermination)
- [flags](../wiki/QueryCommand#flags)
- [options](../wiki/QueryCommand#options)
- [rawCommand](../wiki/QueryCommand#rawcommand)
- [response](../wiki/QueryCommand#response)

### Methods

- [buildCommand](../wiki/QueryCommand#buildcommand)
- [buildFlags](../wiki/QueryCommand#buildflags)
- [buildOptions](../wiki/QueryCommand#buildoptions)
- [getCommandTermination](../wiki/QueryCommand#getcommandtermination)
- [getResponse](../wiki/QueryCommand#getresponse)
- [hasError](../wiki/QueryCommand#haserror)
- [hasFlags](../wiki/QueryCommand#hasflags)
- [hasMultiOptions](../wiki/QueryCommand#hasmultioptions)
- [hasOptions](../wiki/QueryCommand#hasoptions)
- [reset](../wiki/QueryCommand#reset)
- [setCommandTermination](../wiki/QueryCommand#setcommandtermination)
- [setResponse](../wiki/QueryCommand#setresponse)

## Constructors

### constructor

• **new QueryCommand**(`rawCommand`, `options?`, `flags?`): [`QueryCommand`](../wiki/QueryCommand)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawCommand` | `string` |
| `options?` | [`QueryCommandOptions`](../wiki/Exports#querycommandoptions) |
| `flags?` | `string`[] |

#### Returns

[`QueryCommand`](../wiki/QueryCommand)

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:12

## Properties

### commandTermination

• `Private` **commandTermination**: ``null`` \| [`QueryCommandTermination`](../wiki/QueryCommandTermination) = `null`

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:10

___

### flags

• `Private` **flags**: `string`[] = `[]`

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:8

___

### options

• `Private` **options**: [`QueryCommandOptions`](../wiki/Exports#querycommandoptions) = `{}`

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:7

___

### rawCommand

• `Private` **rawCommand**: `string`

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:6

___

### response

• `Private` `Optional` **response**: `any`

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:9

## Methods

### buildCommand

▸ **buildCommand**(): `string`

#### Returns

`string`

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:100

___

### buildFlags

▸ **buildFlags**(): `string`

Builds the query string for flags

#### Returns

`string`

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:96

___

### buildOptions

▸ **buildOptions**(): `string`

builds the query string for options

#### Returns

`string`

the parsed String which is readable by the TeamSpeak Querytt

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:85

___

### getCommandTermination

▸ **getCommandTermination**(): ``null`` \| [`QueryCommandTermination`](../wiki/QueryCommandTermination)

#### Returns

``null`` \| [`QueryCommandTermination`](../wiki/QueryCommandTermination)

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:55

___

### getResponse

▸ **getResponse**(): `any`

Get the parsed response object which has been received from the TeamSpeak Query

#### Returns

`any`

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:68

___

### hasError

▸ **hasError**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:48

___

### hasFlags

▸ **hasFlags**(): `boolean`

Checks wether there are flags used with this command

#### Returns

`boolean`

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:44

___

### hasMultiOptions

▸ **hasMultiOptions**(): `boolean`

Checks wether there are options used with this command

#### Returns

`boolean`

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:37

___

### hasOptions

▸ **hasOptions**(): `boolean`

Checks wether there are options used with this command

#### Returns

`boolean`

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:30

___

### reset

▸ **reset**(): [`QueryCommand`](../wiki/QueryCommand)

Initializes the Respone with default values

#### Returns

[`QueryCommand`](../wiki/QueryCommand)

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:21

___

### setCommandTermination

▸ **setCommandTermination**(`data`): [`QueryCommand`](../wiki/QueryCommand)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

[`QueryCommand`](../wiki/QueryCommand)

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:60

___

### setResponse

▸ **setResponse**(`line`): [`QueryCommand`](../wiki/QueryCommand)

Set the Line which has been received from the TeamSpeak Query

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `line` | `string` | the line which has been received from the teamSpeak query |

#### Returns

[`QueryCommand`](../wiki/QueryCommand)

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:76
