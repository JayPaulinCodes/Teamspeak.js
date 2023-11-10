# Enumeration: WebSocketManagerEvents

Enum for the events emitted by [WebSocketManager](../wiki/WebSocketManager) classes

## Table of contents

### Enumeration Members

- [Close](../wiki/WebSocketManagerEvents#close)
- [Connect](../wiki/WebSocketManagerEvents#connect)
- [Data](../wiki/WebSocketManagerEvents#data)
- [Debug](../wiki/WebSocketManagerEvents#debug)
- [Error](../wiki/WebSocketManagerEvents#error)
- [Flooding](../wiki/WebSocketManagerEvents#flooding)
- [Ready](../wiki/WebSocketManagerEvents#ready)

## Enumeration Members

### Close

• **Close** = ``"close"``

Forwarded from the [query protocol event](../wiki/QueryProtocolEvents)

**`Param`**

true if the socket had a transmission error. [Forwarded from [query protocol event](../wiki/QueryProtocolEvents)]

**`Param`**

the last chunk from the socket

#### Defined in

src/utils/enums/WebSocketManagerEvents.ts:12

___

### Connect

• **Connect** = ``"connect"``

Forwarded from the [query protocol event](../wiki/QueryProtocolEvents)

#### Defined in

src/utils/enums/WebSocketManagerEvents.ts:17

___

### Data

• **Data** = ``"data"``

Forwarded from the [query protocol event](../wiki/QueryProtocolEvents)

**`Param`**

#### Defined in

src/utils/enums/WebSocketManagerEvents.ts:23

___

### Debug

• **Debug** = ``"debug"``

Emited with data for debug purposes

**`Param`**

**`Param`**

#### Defined in

src/utils/enums/WebSocketManagerEvents.ts:36

___

### Error

• **Error** = ``"error"``

Forwarded from the [query protocol event](../wiki/QueryProtocolEvents)

**`Param`**

#### Defined in

src/utils/enums/WebSocketManagerEvents.ts:29

___

### Flooding

• **Flooding** = ``"flooding"``

Emited when the server query throws a flooding error

#### Defined in

src/utils/enums/WebSocketManagerEvents.ts:46

___

### Ready

• **Ready** = ``"ready"``

Emited once the web socket is ready

#### Defined in

src/utils/enums/WebSocketManagerEvents.ts:41
