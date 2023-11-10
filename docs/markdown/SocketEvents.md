# Enumeration: SocketEvents

Enum for the events emitted by the node Socket class

## Table of contents

### Enumeration Members

- [Close](../wiki/SocketEvents#close)
- [Connect](../wiki/SocketEvents#connect)
- [Data](../wiki/SocketEvents#data)
- [Drain](../wiki/SocketEvents#drain)
- [End](../wiki/SocketEvents#end)
- [Error](../wiki/SocketEvents#error)
- [Lookup](../wiki/SocketEvents#lookup)
- [Ready](../wiki/SocketEvents#ready)
- [Timeout](../wiki/SocketEvents#timeout)

## Enumeration Members

### Close

• **Close** = ``"close"``

Emitted once the socket is fully closed. The argument hadError is a boolean 
which says if the socket was closed due to a transmission error.

**`Param`**

true if the socket had a transmission error.

**`See`**

https://nodejs.org/api/net.html#event-close_1

#### Defined in

src/utils/enums/SocketEvents.ts:13

___

### Connect

• **Connect** = ``"connect"``

Emitted when a socket connection is successfully established.

**`See`**

https://nodejs.org/api/net.html#event-connect

#### Defined in

src/utils/enums/SocketEvents.ts:19

___

### Data

• **Data** = ``"data"``

Emitted when data is received. The argument data will be a Buffer or String. 
Encoding of data is set by socket.setEncoding().

The data will be lost if there is no listener when a Socket emits a 'data' event.

**`Param`**

**`See`**

https://nodejs.org/api/net.html#event-data

#### Defined in

src/utils/enums/SocketEvents.ts:29

___

### Drain

• **Drain** = ``"drain"``

Emitted when the write buffer becomes empty. Can be used to throttle uploads.

**`See`**

https://nodejs.org/api/net.html#event-drain

#### Defined in

src/utils/enums/SocketEvents.ts:35

___

### End

• **End** = ``"end"``

Emitted when the other end of the socket signals the end of transmission, thus ending
the readable side of the socket.

By default (allowHalfOpen is false) the socket will send an end of transmission packet 
back and destroy its file descriptor once it has written out its pending write queue. 
However, if allowHalfOpen is set to true, the socket will not automatically end() its 
writable side, allowing the user to write arbitrary amounts of data. The user must call 
end() explicitly to close the connection (i.e. sending a FIN packet back).

**`See`**

https://nodejs.org/api/net.html#event-end

#### Defined in

src/utils/enums/SocketEvents.ts:48

___

### Error

• **Error** = ``"error"``

Emitted when an error occurs. The 'close' event will be called directly following this event.

**`Param`**

**`See`**

https://nodejs.org/api/net.html#event-error_1

#### Defined in

src/utils/enums/SocketEvents.ts:55

___

### Lookup

• **Lookup** = ``"lookup"``

Emitted after resolving the host name but before connecting. Not applicable to Unix sockets.

**`Param`**

The error object

**`Param`**

The IP address

**`Param`**

The address type

**`Param`**

The host name

**`See`**

https://nodejs.org/api/net.html#event-lookup

#### Defined in

src/utils/enums/SocketEvents.ts:65

___

### Ready

• **Ready** = ``"ready"``

Emitted when a socket is ready to be used.

Triggered immediately after 'connect'.

**`See`**

https://nodejs.org/api/net.html#event-ready

#### Defined in

src/utils/enums/SocketEvents.ts:73

___

### Timeout

• **Timeout** = ``"timeout"``

Emitted if the socket times out from inactivity. \
This is only to notify that the socket has been idle. 
The user must manually close the connection.

**`See`**

https://nodejs.org/api/net.html#event-timeout

#### Defined in

src/utils/enums/SocketEvents.ts:81
