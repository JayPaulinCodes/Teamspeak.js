# Class: ServerVersionInformation

## Hierarchy

- [`Base`](../wiki/Base)

  ↳ **`ServerVersionInformation`**

## Table of contents

### Constructors

- [constructor](../wiki/ServerVersionInformation#constructor)

### Properties

- [build](../wiki/ServerVersionInformation#build)
- [platform](../wiki/ServerVersionInformation#platform)
- [queryClient](../wiki/ServerVersionInformation#queryclient)
- [version](../wiki/ServerVersionInformation#version)

### Methods

- [clone](../wiki/ServerVersionInformation#clone)
- [patch](../wiki/ServerVersionInformation#patch)
- [toJSON](../wiki/ServerVersionInformation#tojson)

## Constructors

### constructor

• **new ServerVersionInformation**(`queryClient`, `data`): [`ServerVersionInformation`](../wiki/ServerVersionInformation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryClient` | [`QueryClient`](../wiki/QueryClient) |
| `data` | `any` |

#### Returns

[`ServerVersionInformation`](../wiki/ServerVersionInformation)

#### Overrides

[Base](../wiki/Base).[constructor](../wiki/Base#constructor)

#### Defined in

src/structures/ServerVersionInformation.ts:9

## Properties

### build

• **build**: `number`

#### Defined in

src/structures/ServerVersionInformation.ts:6

___

### platform

• **platform**: `string`

#### Defined in

src/structures/ServerVersionInformation.ts:7

___

### queryClient

• **queryClient**: [`QueryClient`](../wiki/QueryClient)

#### Inherited from

[Base](../wiki/Base).[queryClient](../wiki/Base#queryclient)

#### Defined in

src/structures/Base.ts:4

___

### version

• **version**: `string`

#### Defined in

src/structures/ServerVersionInformation.ts:5

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

src/structures/ServerVersionInformation.ts:15

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Inherited from

[Base](../wiki/Base).[toJSON](../wiki/Base#tojson)

#### Defined in

src/structures/Base.ts:14
