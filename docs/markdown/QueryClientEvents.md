# Enumeration: QueryClientEvents

Enum for the events emitted by [IQueryProtocol](../wiki/IQueryProtocol) classes

## Table of contents

### Enumeration Members

- [Close](../wiki/QueryClientEvents#close)
- [Debug](../wiki/QueryClientEvents#debug)
- [Error](../wiki/QueryClientEvents#error)
- [Flooding](../wiki/QueryClientEvents#flooding)
- [Ready](../wiki/QueryClientEvents#ready)

## Enumeration Members

### Close

• **Close** = ``"close"``

Emited Teamspeak server query throws a flooding error

#### Defined in

src/utils/enums/QueryClientEvents.ts:33

___

### Debug

• **Debug** = ``"debug"``

Emited with data for debug purposes

**`Param`**

**`Param`**

#### Defined in

src/utils/enums/QueryClientEvents.ts:18

___

### Error

• **Error** = ``"error"``

Forwarded from the [socket event](../wiki/SocketEvents)

**`Param`**

#### Defined in

src/utils/enums/QueryClientEvents.ts:11

___

### Flooding

• **Flooding** = ``"flooding"``

Emited Teamspeak server query throws a flooding error

#### Defined in

src/utils/enums/QueryClientEvents.ts:28

___

### Ready

• **Ready** = ``"ready"``

Emited when the client is ready

#### Defined in

src/utils/enums/QueryClientEvents.ts:23
