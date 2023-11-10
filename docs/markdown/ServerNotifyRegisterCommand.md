# Class: ServerNotifyRegisterCommand

### ServerNotifyRegister Command

Registers for a specified category of events on a virtual server to receive 
notification messages. Depending on the notifications you've registered for, 
the server will send you a message on every event in the view of your 
ServerQuery client (e.g. clients joining your channel, incoming text messages, 
server configuration changes, etc). The event source is declared by the event 
parameter while id can be used to limit the notifications to a specific channel.

Permissions: 
 - b_virtualserver_notify_register

Syntax:
 - servernotifyregister event={server|channel|textserver|textchannel|textprivate} [id={channelID}]

Example:
 - servernotifyregister event=server
 - servernotifyregister event=channel id=123

## Hierarchy

- [`QueryCommand`](../wiki/QueryCommand)

  ↳ **`ServerNotifyRegisterCommand`**

## Table of contents

### Constructors

- [constructor](../wiki/ServerNotifyRegisterCommand#constructor)

### Properties

- [baseCommand](../wiki/ServerNotifyRegisterCommand#basecommand)

### Methods

- [buildCommand](../wiki/ServerNotifyRegisterCommand#buildcommand)
- [buildFlags](../wiki/ServerNotifyRegisterCommand#buildflags)
- [buildOptions](../wiki/ServerNotifyRegisterCommand#buildoptions)
- [getCommandTermination](../wiki/ServerNotifyRegisterCommand#getcommandtermination)
- [getResponse](../wiki/ServerNotifyRegisterCommand#getresponse)
- [hasError](../wiki/ServerNotifyRegisterCommand#haserror)
- [hasFlags](../wiki/ServerNotifyRegisterCommand#hasflags)
- [hasMultiOptions](../wiki/ServerNotifyRegisterCommand#hasmultioptions)
- [hasOptions](../wiki/ServerNotifyRegisterCommand#hasoptions)
- [reset](../wiki/ServerNotifyRegisterCommand#reset)
- [setCommandTermination](../wiki/ServerNotifyRegisterCommand#setcommandtermination)
- [setResponse](../wiki/ServerNotifyRegisterCommand#setresponse)

## Constructors

### constructor

• **new ServerNotifyRegisterCommand**(`event`, `id?`): [`ServerNotifyRegisterCommand`](../wiki/ServerNotifyRegisterCommand)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `id?` | `string` \| `number` |

#### Returns

[`ServerNotifyRegisterCommand`](../wiki/ServerNotifyRegisterCommand)

#### Overrides

[QueryCommand](../wiki/QueryCommand).[constructor](../wiki/QueryCommand#constructor)

#### Defined in

src/websocket/queryCommands/commands/ServerNotifyRegisterCommand.ts:26

## Properties

### baseCommand

▪ `Static` `Private` `Readonly` **baseCommand**: ``"servernotifyregister"``

#### Defined in

src/websocket/queryCommands/commands/ServerNotifyRegisterCommand.ts:24

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

▸ **setCommandTermination**(`data`): [`ServerNotifyRegisterCommand`](../wiki/ServerNotifyRegisterCommand)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

[`ServerNotifyRegisterCommand`](../wiki/ServerNotifyRegisterCommand)

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
