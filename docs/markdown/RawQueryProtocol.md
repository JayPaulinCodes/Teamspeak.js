# Class: RawQueryProtocol

## Hierarchy

- `EventEmitter`

  ↳ **`RawQueryProtocol`**

## Implements

- [`IQueryProtocol`](../wiki/IQueryProtocol)

## Table of contents

### Constructors

- [constructor](../wiki/RawQueryProtocol#constructor)

### Properties

- [chunk](../wiki/RawQueryProtocol#chunk)
- [queryProtocolOptions](../wiki/RawQueryProtocol#queryprotocoloptions)
- [socket](../wiki/RawQueryProtocol#socket)

### Methods

- [attachEvents](../wiki/RawQueryProtocol#attachevents)
- [debug](../wiki/RawQueryProtocol#debug)
- [destroy](../wiki/RawQueryProtocol#destroy)
- [send](../wiki/RawQueryProtocol#send)
- [sendKeepAlive](../wiki/RawQueryProtocol#sendkeepalive)

## Constructors

### constructor

• **new RawQueryProtocol**(`socketOptions`, `queryProtocolOptions`): [`RawQueryProtocol`](../wiki/RawQueryProtocol)

#### Parameters

| Name | Type |
| :------ | :------ |
| `socketOptions` | [`ISocketOptions`](../wiki/ISocketOptions) |
| `queryProtocolOptions` | [`IQueryProtocolOptions`](../wiki/IQueryProtocolOptions) |

#### Returns

[`RawQueryProtocol`](../wiki/RawQueryProtocol)

#### Overrides

EventEmitter.constructor

#### Defined in

src/websocket/RawQueryProtocol.ts:16

## Properties

### chunk

• **chunk**: `string` = `""`

#### Implementation of

[IQueryProtocol](../wiki/IQueryProtocol).[chunk](../wiki/IQueryProtocol#chunk)

#### Defined in

src/websocket/RawQueryProtocol.ts:14

___

### queryProtocolOptions

• `Readonly` **queryProtocolOptions**: [`IQueryProtocolOptions`](../wiki/IQueryProtocolOptions)

#### Implementation of

[IQueryProtocol](../wiki/IQueryProtocol).[queryProtocolOptions](../wiki/IQueryProtocol#queryprotocoloptions)

#### Defined in

src/websocket/RawQueryProtocol.ts:12

___

### socket

• `Private` **socket**: `Socket`

#### Defined in

src/websocket/RawQueryProtocol.ts:13

## Methods

### attachEvents

▸ **attachEvents**(): `void`

#### Returns

`void`

#### Defined in

src/websocket/RawQueryProtocol.ts:65

___

### debug

▸ **debug**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`void`

#### Defined in

src/websocket/RawQueryProtocol.ts:61

___

### destroy

▸ **destroy**(): `Socket`

Destroys the socket

#### Returns

`Socket`

The destroyed socket

#### Implementation of

[IQueryProtocol](../wiki/IQueryProtocol).[destroy](../wiki/IQueryProtocol#destroy)

#### Defined in

src/websocket/RawQueryProtocol.ts:57

___

### send

▸ **send**(`data`): `void`

Sends data to the socket

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`void`

#### Implementation of

[IQueryProtocol](../wiki/IQueryProtocol).[send](../wiki/IQueryProtocol#send)

#### Defined in

src/websocket/RawQueryProtocol.ts:42

___

### sendKeepAlive

▸ **sendKeepAlive**(): `void`

Sends a keep alive to the socket

#### Returns

`void`

#### Implementation of

[IQueryProtocol](../wiki/IQueryProtocol).[sendKeepAlive](../wiki/IQueryProtocol#sendkeepalive)

#### Defined in

src/websocket/RawQueryProtocol.ts:49
