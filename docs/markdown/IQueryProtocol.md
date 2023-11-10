# Interface: IQueryProtocol

## Hierarchy

- `EventEmitter`

  ↳ **`IQueryProtocol`**

## Implemented by

- [`RawQueryProtocol`](../wiki/RawQueryProtocol)

## Table of contents

### Properties

- [chunk](../wiki/IQueryProtocol#chunk)
- [destroy](../wiki/IQueryProtocol#destroy)
- [queryProtocolOptions](../wiki/IQueryProtocol#queryprotocoloptions)
- [send](../wiki/IQueryProtocol#send)
- [sendKeepAlive](../wiki/IQueryProtocol#sendkeepalive)

## Properties

### chunk

• `Readonly` **chunk**: `string`

#### Defined in

src/websocket/interfaces/IQueryProtocol.ts:6

___

### destroy

• **destroy**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

src/websocket/interfaces/IQueryProtocol.ts:9

___

### queryProtocolOptions

• `Readonly` **queryProtocolOptions**: [`IQueryProtocolOptions`](../wiki/IQueryProtocolOptions)

#### Defined in

src/websocket/interfaces/IQueryProtocol.ts:5

___

### send

• **send**: (`data`: `string`) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

##### Returns

`void`

#### Defined in

src/websocket/interfaces/IQueryProtocol.ts:8

___

### sendKeepAlive

• **sendKeepAlive**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

src/websocket/interfaces/IQueryProtocol.ts:7
