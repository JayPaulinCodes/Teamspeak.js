# Enumeration: QueryProtocolEvents

Enum for the events emitted by [IQueryProtocol](../wiki/IQueryProtocol) classes

## Table of contents

### Enumeration Members

- [Close](../wiki/QueryProtocolEvents#close)
- [Connect](../wiki/QueryProtocolEvents#connect)
- [Data](../wiki/QueryProtocolEvents#data)
- [Debug](../wiki/QueryProtocolEvents#debug)
- [Error](../wiki/QueryProtocolEvents#error)

## Enumeration Members

### Close

• **Close** = ``"close"``

Forwarded from the [socket event](../wiki/SocketEvents)

**`Param`**

true if the socket had a transmission error. [Forwarded from [socket event](../wiki/SocketEvents)]

**`Param`**

the last chunk from the socket

#### Defined in

src/utils/enums/QueryProtocolEvents.ts:12

___

### Connect

• **Connect** = ``"connect"``

Forwarded from the [socket event](../wiki/SocketEvents)

#### Defined in

src/utils/enums/QueryProtocolEvents.ts:17

___

### Data

• **Data** = ``"data"``

Forwarded from the [socket event](../wiki/SocketEvents)

**`Param`**

#### Defined in

src/utils/enums/QueryProtocolEvents.ts:23

___

### Debug

• **Debug** = ``"debug"``

Emited with data for debug purposes

**`Param`**

**`Param`**

#### Defined in

src/utils/enums/QueryProtocolEvents.ts:36

___

### Error

• **Error** = ``"error"``

Forwarded from the [socket event](../wiki/SocketEvents)

**`Param`**

#### Defined in

src/utils/enums/QueryProtocolEvents.ts:29
