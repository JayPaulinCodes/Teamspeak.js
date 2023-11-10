# Class: ServerQueryConnection

## Hierarchy

- [`Base`](../wiki/Base)

  ↳ **`ServerQueryConnection`**

## Table of contents

### Constructors

- [constructor](../wiki/ServerQueryConnection#constructor)

### Properties

- [clientChannelId](../wiki/ServerQueryConnection#clientchannelid)
- [clientDatabaseId](../wiki/ServerQueryConnection#clientdatabaseid)
- [clientId](../wiki/ServerQueryConnection#clientid)
- [clientLoginName](../wiki/ServerQueryConnection#clientloginname)
- [clientNickname](../wiki/ServerQueryConnection#clientnickname)
- [clientOriginServerId](../wiki/ServerQueryConnection#clientoriginserverid)
- [clientUniqueIdentifier](../wiki/ServerQueryConnection#clientuniqueidentifier)
- [queryClient](../wiki/ServerQueryConnection#queryclient)
- [virtualserverId](../wiki/ServerQueryConnection#virtualserverid)
- [virtualserverPort](../wiki/ServerQueryConnection#virtualserverport)
- [virtualserverStatus](../wiki/ServerQueryConnection#virtualserverstatus)
- [virtualserverUniqueIdentifier](../wiki/ServerQueryConnection#virtualserveruniqueidentifier)

### Methods

- [clone](../wiki/ServerQueryConnection#clone)
- [patch](../wiki/ServerQueryConnection#patch)
- [toJSON](../wiki/ServerQueryConnection#tojson)

## Constructors

### constructor

• **new ServerQueryConnection**(`queryClient`, `data`): [`ServerQueryConnection`](../wiki/ServerQueryConnection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryClient` | [`QueryClient`](../wiki/QueryClient) |
| `data` | `any` |

#### Returns

[`ServerQueryConnection`](../wiki/ServerQueryConnection)

#### Overrides

[Base](../wiki/Base).[constructor](../wiki/Base#constructor)

#### Defined in

src/structures/ServerQueryConnection.ts:18

## Properties

### clientChannelId

• **clientChannelId**: ``null`` \| `number`

#### Defined in

src/structures/ServerQueryConnection.ts:11

___

### clientDatabaseId

• **clientDatabaseId**: ``null`` \| `number`

#### Defined in

src/structures/ServerQueryConnection.ts:13

___

### clientId

• **clientId**: ``null`` \| `number`

#### Defined in

src/structures/ServerQueryConnection.ts:10

___

### clientLoginName

• **clientLoginName**: ``null`` \| `string`

#### Defined in

src/structures/ServerQueryConnection.ts:14

___

### clientNickname

• **clientNickname**: `string`

#### Defined in

src/structures/ServerQueryConnection.ts:12

___

### clientOriginServerId

• **clientOriginServerId**: ``null`` \| `number`

#### Defined in

src/structures/ServerQueryConnection.ts:16

___

### clientUniqueIdentifier

• **clientUniqueIdentifier**: ``null`` \| `string`

#### Defined in

src/structures/ServerQueryConnection.ts:15

___

### queryClient

• **queryClient**: [`QueryClient`](../wiki/QueryClient)

#### Inherited from

[Base](../wiki/Base).[queryClient](../wiki/Base#queryclient)

#### Defined in

src/structures/Base.ts:4

___

### virtualserverId

• **virtualserverId**: `number`

#### Defined in

src/structures/ServerQueryConnection.ts:7

___

### virtualserverPort

• **virtualserverPort**: `number`

#### Defined in

src/structures/ServerQueryConnection.ts:9

___

### virtualserverStatus

• **virtualserverStatus**: [`VirtualServerStatus`](../wiki/VirtualServerStatus)

#### Defined in

src/structures/ServerQueryConnection.ts:6

___

### virtualserverUniqueIdentifier

• **virtualserverUniqueIdentifier**: `string`

#### Defined in

src/structures/ServerQueryConnection.ts:8

## Methods

### clone

▸ **clone**(): `any`

#### Returns

`any`

#### Inherited from

[Base](../wiki/Base).[clone](../wiki/Base#clone)

#### Defined in

src/structures/Base.ts:10

___

### patch

▸ **patch**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Overrides

[Base](../wiki/Base).[patch](../wiki/Base#patch)

#### Defined in

src/structures/ServerQueryConnection.ts:24

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Inherited from

[Base](../wiki/Base).[toJSON](../wiki/Base#tojson)

#### Defined in

src/structures/Base.ts:14
