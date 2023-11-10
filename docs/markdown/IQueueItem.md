# Interface: IQueueItem

## Table of contents

### Properties

- [command](../wiki/IQueueItem#command)
- [fulfill](../wiki/IQueueItem#fulfill)
- [priority](../wiki/IQueueItem#priority)
- [reject](../wiki/IQueueItem#reject)

## Properties

### command

• **command**: [`QueryCommand`](../wiki/QueryCommand)

#### Defined in

src/websocket/interfaces/IQueueItem.ts:6

___

### fulfill

• **fulfill**: (`data`: `any`) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

##### Returns

`void`

#### Defined in

src/websocket/interfaces/IQueueItem.ts:4

___

### priority

• **priority**: `boolean`

#### Defined in

src/websocket/interfaces/IQueueItem.ts:7

___

### reject

• **reject**: (`data`: `any`) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

##### Returns

`void`

#### Defined in

src/websocket/interfaces/IQueueItem.ts:5
