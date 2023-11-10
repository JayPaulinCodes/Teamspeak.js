# Class: QueryClient

## Hierarchy

- `EventEmitter`

  ↳ **`QueryClient`**

## Table of contents

### Constructors

- [constructor](../wiki/QueryClient#constructor)

### Properties

- [context](../wiki/QueryClient#context)
- [options](../wiki/QueryClient#options)
- [priorizeNextCommand](../wiki/QueryClient#priorizenextcommand)
- [webSocketManager](../wiki/QueryClient#websocketmanager)

### Methods

- [attachEvents](../wiki/QueryClient#attachevents)
- [connect](../wiki/QueryClient#connect)
- [debug](../wiki/QueryClient#debug)
- [execute](../wiki/QueryClient#execute)
- [forceQuit](../wiki/QueryClient#forcequit)
- [getServerHostInfo](../wiki/QueryClient#getserverhostinfo)
- [getServerQueryConnectionInfo](../wiki/QueryClient#getserverqueryconnectioninfo)
- [getServerVersionInfo](../wiki/QueryClient#getserverversioninfo)
- [login](../wiki/QueryClient#login)
- [prioritize](../wiki/QueryClient#prioritize)
- [registerEvent](../wiki/QueryClient#registerevent)
- [unregisterEvent](../wiki/QueryClient#unregisterevent)
- [updateContext](../wiki/QueryClient#updatecontext)
- [updateContextReject](../wiki/QueryClient#updatecontextreject)
- [updateContextResolve](../wiki/QueryClient#updatecontextresolve)
- [useByPort](../wiki/QueryClient#usebyport)

## Constructors

### constructor

• **new QueryClient**(`options`): [`QueryClient`](../wiki/QueryClient)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`\<[`IClientOptions`](../wiki/IClientOptions)\> |

#### Returns

[`QueryClient`](../wiki/QueryClient)

#### Overrides

EventEmitter.constructor

#### Defined in

src/client/QueryClient.ts:32

## Properties

### context

• `Private` **context**: [`Context`](../wiki/Exports#context)

#### Defined in

src/client/QueryClient.ts:26

___

### options

• `Readonly` **options**: [`IClientOptions`](../wiki/IClientOptions)

#### Defined in

src/client/QueryClient.ts:23

___

### priorizeNextCommand

• `Private` **priorizeNextCommand**: `boolean` = `false`

#### Defined in

src/client/QueryClient.ts:24

___

### webSocketManager

• `Private` **webSocketManager**: [`WebSocketManager`](../wiki/WebSocketManager)

#### Defined in

src/client/QueryClient.ts:25

## Methods

### attachEvents

▸ **attachEvents**(): `void`

#### Returns

`void`

#### Defined in

src/client/QueryClient.ts:46

___

### connect

▸ **connect**(): `Promise`\<[`QueryClient`](../wiki/QueryClient)\>

#### Returns

`Promise`\<[`QueryClient`](../wiki/QueryClient)\>

#### Defined in

src/client/QueryClient.ts:141

___

### debug

▸ **debug**(`data`, `type?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `type` | `string` | `"Client"` |

#### Returns

`void`

#### Defined in

src/client/QueryClient.ts:286

___

### execute

▸ **execute**\<`T`\>(`command`): `Promise`\<`T`\>

Sends a raw command to the TeamSpeak Server.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`QueryCommand`](../wiki/QueryCommand) |

#### Returns

`Promise`\<`T`\>

**`Example`**

```ts
ts3.execute("clientlist", ["-ip"])
ts3.execute("use", [9987], { clientnickname: "test" })
```

#### Defined in

src/client/QueryClient.ts:223

___

### forceQuit

▸ **forceQuit**(): `void`

Forcefully closes the socket connection

#### Returns

`void`

#### Defined in

src/client/QueryClient.ts:204

___

### getServerHostInfo

▸ **getServerHostInfo**(): `Promise`\<[`ServerInstance`](../wiki/ServerInstance)\>

#### Returns

`Promise`\<[`ServerInstance`](../wiki/ServerInstance)\>

#### Defined in

src/client/QueryClient.ts:312

___

### getServerQueryConnectionInfo

▸ **getServerQueryConnectionInfo**(): `Promise`\<[`ServerQueryConnection`](../wiki/ServerQueryConnection)\>

Executes the whoami command

#### Returns

`Promise`\<[`ServerQueryConnection`](../wiki/ServerQueryConnection)\>

#### Defined in

src/client/QueryClient.ts:300

___

### getServerVersionInfo

▸ **getServerVersionInfo**(): `Promise`\<[`ServerVersionInformation`](../wiki/ServerVersionInformation)\>

#### Returns

`Promise`\<[`ServerVersionInformation`](../wiki/ServerVersionInformation)\>

#### Defined in

src/client/QueryClient.ts:306

___

### login

▸ **login**(`username`, `password`): `Promise`\<`unknown`\>

Authenticates with the TeamSpeak 3 Server instance using given ServerQuery login credentials.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | the username which you want to login with |
| `password` | `string` | the password you want to login with |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

src/client/QueryClient.ts:177

___

### prioritize

▸ **prioritize**(): [`QueryClient`](../wiki/QueryClient)

Priorizes the next command, this commands will be first in execution

#### Returns

[`QueryClient`](../wiki/QueryClient)

#### Defined in

src/client/QueryClient.ts:211

___

### registerEvent

▸ **registerEvent**(`event`, `id?`): `Promise`\<`unknown`\>

Subscribes to an Event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | the event on which should be subscribed |
| `id?` | `string` | the channel id, only required when subscribing to the "channel" event |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

src/client/QueryClient.ts:188

___

### unregisterEvent

▸ **unregisterEvent**(): `Promise`\<`unknown`\>

Subscribes to an Event.

#### Returns

`Promise`\<`unknown`\>

#### Defined in

src/client/QueryClient.ts:196

___

### updateContext

▸ **updateContext**(`data`): [`QueryClient`](../wiki/QueryClient)

updates the context with new data

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Partial`\<[`Context`](../wiki/Exports#context)\> | the data to update the context with |

#### Returns

[`QueryClient`](../wiki/QueryClient)

#### Defined in

src/client/QueryClient.ts:252

___

### updateContextReject

▸ **updateContextReject**\<`T`\>(`context`): (`err`: `T`) => `never`

updates the context when the inner callback gets called
and throws the first parameter which is an error

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Error` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `Partial`\<[`Context`](../wiki/Exports#context)\> | context data to update |

#### Returns

`fn`

▸ (`err`): `never`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `T` |

##### Returns

`never`

#### Defined in

src/client/QueryClient.ts:279

___

### updateContextResolve

▸ **updateContextResolve**\<`T`\>(`context`): (`res`: `T`) => `T`

updates the context when the inner callback gets called
and returns the first parameter

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `Partial`\<[`Context`](../wiki/Exports#context)\> | context data to update |

#### Returns

`fn`

▸ (`res`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `res` | `T` |

##### Returns

`T`

#### Defined in

src/client/QueryClient.ts:267

___

### useByPort

▸ **useByPort**(`port`, `clientNickname?`): `Promise`\<`unknown`\>

Selects the virtual server specified with the port to allow further interaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `port` | `number` | the port the server runs on |
| `clientNickname?` | `string` | set nickname when selecting a server |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

src/client/QueryClient.ts:237
