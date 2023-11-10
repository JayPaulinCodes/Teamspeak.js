# Class: Base

## Hierarchy

- **`Base`**

  ↳ [`ServerInstance`](../wiki/ServerInstance)

  ↳ [`ServerQueryConnection`](../wiki/ServerQueryConnection)

  ↳ [`ServerVersionInformation`](../wiki/ServerVersionInformation)

## Table of contents

### Constructors

- [constructor](../wiki/Base#constructor)

### Properties

- [queryClient](../wiki/Base#queryclient)

### Methods

- [clone](../wiki/Base#clone)
- [patch](../wiki/Base#patch)
- [toJSON](../wiki/Base#tojson)

## Constructors

### constructor

• **new Base**(`queryClient`): [`Base`](../wiki/Base)

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryClient` | [`QueryClient`](../wiki/QueryClient) |

#### Returns

[`Base`](../wiki/Base)

#### Defined in

src/structures/Base.ts:6

## Properties

### queryClient

• **queryClient**: [`QueryClient`](../wiki/QueryClient)

#### Defined in

src/structures/Base.ts:4

## Methods

### clone

▸ **clone**(): `any`

#### Returns

`any`

#### Defined in

src/structures/Base.ts:10

___

### patch

▸ **patch**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `object` |

#### Returns

`void`

#### Defined in

src/structures/Base.ts:18

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Defined in

src/structures/Base.ts:14
