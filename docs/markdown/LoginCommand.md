# Class: LoginCommand

### Login Command

Authenticates with the TeamSpeak 3 Server instance using given ServerQuery login credentials.

Permissions: 
 - b_serverquery_login

Syntax:
 - login client_login_name={username} client_login_password={password}
 - login {username} {password}

Example:
 - login client_login_name=xyz client_login_password=xyz

## Hierarchy

- [`QueryCommand`](../wiki/QueryCommand)

  ↳ **`LoginCommand`**

## Table of contents

### Constructors

- [constructor](../wiki/LoginCommand#constructor)

### Properties

- [baseCommand](../wiki/LoginCommand#basecommand)

### Methods

- [buildCommand](../wiki/LoginCommand#buildcommand)
- [buildFlags](../wiki/LoginCommand#buildflags)
- [buildOptions](../wiki/LoginCommand#buildoptions)
- [getCommandTermination](../wiki/LoginCommand#getcommandtermination)
- [getResponse](../wiki/LoginCommand#getresponse)
- [hasError](../wiki/LoginCommand#haserror)
- [hasFlags](../wiki/LoginCommand#hasflags)
- [hasMultiOptions](../wiki/LoginCommand#hasmultioptions)
- [hasOptions](../wiki/LoginCommand#hasoptions)
- [reset](../wiki/LoginCommand#reset)
- [setCommandTermination](../wiki/LoginCommand#setcommandtermination)
- [setResponse](../wiki/LoginCommand#setresponse)

## Constructors

### constructor

• **new LoginCommand**(`username`, `password`): [`LoginCommand`](../wiki/LoginCommand)

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |
| `password` | `string` |

#### Returns

[`LoginCommand`](../wiki/LoginCommand)

#### Overrides

[QueryCommand](../wiki/QueryCommand).[constructor](../wiki/QueryCommand#constructor)

#### Defined in

src/websocket/queryCommands/commands/LoginCommand.ts:21

## Properties

### baseCommand

▪ `Static` `Private` `Readonly` **baseCommand**: ``"login"``

#### Defined in

src/websocket/queryCommands/commands/LoginCommand.ts:19

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

▸ **setCommandTermination**(`data`): [`LoginCommand`](../wiki/LoginCommand)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

[`LoginCommand`](../wiki/LoginCommand)

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
