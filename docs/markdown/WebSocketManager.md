# Class: WebSocketManager

## Hierarchy

- `EventEmitter`

  ↳ **`WebSocketManager`**

## Table of contents

### Constructors

- [constructor](../wiki/WebSocketManager#constructor)

### Properties

- [connected](../wiki/WebSocketManager#connected)
- [currentQueueItem](../wiki/WebSocketManager#currentqueueitem)
- [floodTimeout](../wiki/WebSocketManager#floodtimeout)
- [ignoreInitLines](../wiki/WebSocketManager#ignoreinitlines)
- [isQueuePaused](../wiki/WebSocketManager#isqueuepaused)
- [keepAliveTimeout](../wiki/WebSocketManager#keepalivetimeout)
- [lastCommandTimestamp](../wiki/WebSocketManager#lastcommandtimestamp)
- [options](../wiki/WebSocketManager#options)
- [queue](../wiki/WebSocketManager#queue)
- [webSocket](../wiki/WebSocketManager#websocket)
- [initialIgnoreLines](../wiki/WebSocketManager#initialignorelines)

### Methods

- [attachEvents](../wiki/WebSocketManager#attachevents)
- [connect](../wiki/WebSocketManager#connect)
- [debug](../wiki/WebSocketManager#debug)
- [enqueueItem](../wiki/WebSocketManager#enqueueitem)
- [execute](../wiki/WebSocketManager#execute)
- [forceQuit](../wiki/WebSocketManager#forcequit)
- [initKeepAlive](../wiki/WebSocketManager#initkeepalive)
- [nextQueueItem](../wiki/WebSocketManager#nextqueueitem)
- [pauseQueue](../wiki/WebSocketManager#pausequeue)
- [send](../wiki/WebSocketManager#send)
- [getSocket](../wiki/WebSocketManager#getsocket)

## Constructors

### constructor

• **new WebSocketManager**(`options`): [`WebSocketManager`](../wiki/WebSocketManager)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IWebSocketManagerOptions`](../wiki/IWebSocketManagerOptions) |

#### Returns

[`WebSocketManager`](../wiki/WebSocketManager)

#### Overrides

EventEmitter.constructor

#### Defined in

src/websocket/WebSocketManager.ts:49

## Properties

### connected

• `Private` **connected**: `boolean` = `false`

#### Defined in

src/websocket/WebSocketManager.ts:20

___

### currentQueueItem

• `Private` **currentQueueItem**: `undefined` \| [`IQueueItem`](../wiki/IQueueItem)

The current queue item that is being processed

#### Defined in

src/websocket/WebSocketManager.ts:32

___

### floodTimeout

• `Private` **floodTimeout**: `Timeout`

#### Defined in

src/websocket/WebSocketManager.ts:22

___

### ignoreInitLines

• `Private` **ignoreInitLines**: `number` = `WebSocketManager.initialIgnoreLines`

#### Defined in

src/websocket/WebSocketManager.ts:21

___

### isQueuePaused

• `Private` **isQueuePaused**: `boolean` = `false`

Wether or not the processing of queue items should be halted

#### Defined in

src/websocket/WebSocketManager.ts:37

___

### keepAliveTimeout

• `Private` **keepAliveTimeout**: `Timeout`

The current timeout for the keep alive function

#### Defined in

src/websocket/WebSocketManager.ts:42

___

### lastCommandTimestamp

• `Private` **lastCommandTimestamp**: `number`

The time the last command was sent to the socket

#### Defined in

src/websocket/WebSocketManager.ts:47

___

### options

• `Readonly` **options**: [`IWebSocketManagerOptions`](../wiki/IWebSocketManagerOptions)

#### Defined in

src/websocket/WebSocketManager.ts:18

___

### queue

• `Private` **queue**: [`IQueueItem`](../wiki/IQueueItem)[] = `[]`

A queue of items / commands to be handled

#### Defined in

src/websocket/WebSocketManager.ts:27

___

### webSocket

• `Private` **webSocket**: [`IQueryProtocol`](../wiki/IQueryProtocol)

#### Defined in

src/websocket/WebSocketManager.ts:19

___

### initialIgnoreLines

▪ `Static` `Private` **initialIgnoreLines**: `number` = `2`

#### Defined in

src/websocket/WebSocketManager.ts:17

## Methods

### attachEvents

▸ **attachEvents**(): `void`

#### Returns

`void`

#### Defined in

src/websocket/WebSocketManager.ts:84

___

### connect

▸ **connect**(): `void`

#### Returns

`void`

#### Defined in

src/websocket/WebSocketManager.ts:64

___

### debug

▸ **debug**(`data`, `type?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `string` | `undefined` |
| `type` | `string` | `"WebSocketManager"` |

#### Returns

`void`

#### Defined in

src/websocket/WebSocketManager.ts:275

___

### enqueueItem

▸ **enqueueItem**(`item?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item?` | [`IQueueItem`](../wiki/IQueueItem) |

#### Returns

`void`

#### Defined in

src/websocket/WebSocketManager.ts:238

___

### execute

▸ **execute**(`command`, `priority?`): `Promise`\<`any`\>

Executes a command on the socket

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `command` | [`QueryCommand`](../wiki/QueryCommand) | `undefined` | The command to execute |
| `priority` | `boolean` | `false` | If the command should be given priority |

#### Returns

`Promise`\<`any`\>

A promise for the execution of the command

#### Defined in

src/websocket/WebSocketManager.ts:183

___

### forceQuit

▸ **forceQuit**(): `void`

Forcefully closes the socket connection

#### Returns

`void`

#### Defined in

src/websocket/WebSocketManager.ts:203

___

### initKeepAlive

▸ **initKeepAlive**(): `void`

Starts the keep alive process

#### Returns

`void`

#### Defined in

src/websocket/WebSocketManager.ts:222

___

### nextQueueItem

▸ **nextQueueItem**(): `undefined` \| [`IQueueItem`](../wiki/IQueueItem)

Retrieves the next queue item, respecting priority items

#### Returns

`undefined` \| [`IQueueItem`](../wiki/IQueueItem)

Returns a queue item or undefined if the queue is empty

#### Defined in

src/websocket/WebSocketManager.ts:260

___

### pauseQueue

▸ **pauseQueue**(`pause`): [`WebSocketManager`](../wiki/WebSocketManager)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pause` | `boolean` |

#### Returns

[`WebSocketManager`](../wiki/WebSocketManager)

#### Defined in

src/websocket/WebSocketManager.ts:194

___

### send

▸ **send**(`data`): `void`

Sends data to the socket

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | Data to send to the socket |

#### Returns

`void`

#### Defined in

src/websocket/WebSocketManager.ts:212

___

### getSocket

▸ **getSocket**(`options`): [`IQueryProtocol`](../wiki/IQueryProtocol)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IWebSocketManagerOptions`](../wiki/IWebSocketManagerOptions) |

#### Returns

[`IQueryProtocol`](../wiki/IQueryProtocol)

#### Defined in

src/websocket/WebSocketManager.ts:57
