# Class: VersionCommand

### Version Command

Displays the servers version information including platform and build number.

Permissions: 
 - b_serverinstance_version_view

Syntax:
 - version

Example:
 - version

## Hierarchy

- [`QueryCommand`](../wiki/QueryCommand)

  ↳ **`VersionCommand`**

## Table of contents

### Constructors

- [constructor](../wiki/VersionCommand#constructor)

### Properties

- [baseCommand](../wiki/VersionCommand#basecommand)

### Methods

- [buildCommand](../wiki/VersionCommand#buildcommand)
- [buildFlags](../wiki/VersionCommand#buildflags)
- [buildOptions](../wiki/VersionCommand#buildoptions)
- [getCommandTermination](../wiki/VersionCommand#getcommandtermination)
- [getResponse](../wiki/VersionCommand#getresponse)
- [hasError](../wiki/VersionCommand#haserror)
- [hasFlags](../wiki/VersionCommand#hasflags)
- [hasMultiOptions](../wiki/VersionCommand#hasmultioptions)
- [hasOptions](../wiki/VersionCommand#hasoptions)
- [reset](../wiki/VersionCommand#reset)
- [setCommandTermination](../wiki/VersionCommand#setcommandtermination)
- [setResponse](../wiki/VersionCommand#setresponse)

## Constructors

### constructor

• **new VersionCommand**(): [`VersionCommand`](../wiki/VersionCommand)

#### Returns

[`VersionCommand`](../wiki/VersionCommand)

#### Overrides

[QueryCommand](../wiki/QueryCommand).[constructor](../wiki/QueryCommand#constructor)

#### Defined in

src/websocket/queryCommands/commands/VersionCommand.ts:20

## Properties

### baseCommand

▪ `Static` `Private` `Readonly` **baseCommand**: ``"version"``

#### Defined in

src/websocket/queryCommands/commands/VersionCommand.ts:18

## Methods

### buildCommand

▸ **buildCommand**(): `string`

#### Returns

`string`

#### Inherited from

[QueryCommand](../wiki/QueryCommand).[buildCommand](../wiki/QueryCommand#buildcommand)

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:100

___

### buildFlags

▸ **buildFlags**(): `string`

Builds the query string for flags

#### Returns

`string`

#### Inherited from

[QueryCommand](../wiki/QueryCommand).[buildFlags](../wiki/QueryCommand#buildflags)

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:96

___

### buildOptions

▸ **buildOptions**(): `string`

builds the query string for options

#### Returns

`string`

the parsed String which is readable by the TeamSpeak Querytt

#### Inherited from

[QueryCommand](../wiki/QueryCommand).[buildOptions](../wiki/QueryCommand#buildoptions)

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:85

___

### getCommandTermination

▸ **getCommandTermination**(): ``null`` \| [`QueryCommandTermination`](../wiki/QueryCommandTermination)

#### Returns

``null`` \| [`QueryCommandTermination`](../wiki/QueryCommandTermination)

#### Inherited from

[QueryCommand](../wiki/QueryCommand).[getCommandTermination](../wiki/QueryCommand#getcommandtermination)

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:55

___

### getResponse

▸ **getResponse**(): `any`

Get the parsed response object which has been received from the TeamSpeak Query

#### Returns

`any`

#### Inherited from

[QueryCommand](../wiki/QueryCommand).[getResponse](../wiki/QueryCommand#getresponse)

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:68

___

### hasError

▸ **hasError**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[QueryCommand](../wiki/QueryCommand).[hasError](../wiki/QueryCommand#haserror)

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:48

___

### hasFlags

▸ **hasFlags**(): `boolean`

Checks wether there are flags used with this command

#### Returns

`boolean`

#### Inherited from

[QueryCommand](../wiki/QueryCommand).[hasFlags](../wiki/QueryCommand#hasflags)

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:44

___

### hasMultiOptions

▸ **hasMultiOptions**(): `boolean`

Checks wether there are options used with this command

#### Returns

`boolean`

#### Inherited from

[QueryCommand](../wiki/QueryCommand).[hasMultiOptions](../wiki/QueryCommand#hasmultioptions)

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:37

___

### hasOptions

▸ **hasOptions**(): `boolean`

Checks wether there are options used with this command

#### Returns

`boolean`

#### Inherited from

[QueryCommand](../wiki/QueryCommand).[hasOptions](../wiki/QueryCommand#hasoptions)

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:30

___

### reset

▸ **reset**(): [`QueryCommand`](../wiki/QueryCommand)

Initializes the Respone with default values

#### Returns

[`QueryCommand`](../wiki/QueryCommand)

#### Inherited from

[QueryCommand](../wiki/QueryCommand).[reset](../wiki/QueryCommand#reset)

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:21

___

### setCommandTermination

▸ **setCommandTermination**(`data`): [`VersionCommand`](../wiki/VersionCommand)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

[`VersionCommand`](../wiki/VersionCommand)

#### Inherited from

[QueryCommand](../wiki/QueryCommand).[setCommandTermination](../wiki/QueryCommand#setcommandtermination)

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

#### Inherited from

[QueryCommand](../wiki/QueryCommand).[setResponse](../wiki/QueryCommand#setresponse)

#### Defined in

src/websocket/queryCommands/QueryCommand.ts:76
