# Teamspeak.js - v0.1.0

## Table of contents

### Enumerations

- [QueryClientEvents](../wiki/QueryClientEvents)
- [QueryProtocol](../wiki/QueryProtocol)
- [QueryProtocolEvents](../wiki/QueryProtocolEvents)
- [SelectType](../wiki/SelectType)
- [SocketEvents](../wiki/SocketEvents)
- [VirtualServerStatus](../wiki/VirtualServerStatus)
- [WebSocketManagerEvents](../wiki/WebSocketManagerEvents)

### Classes

- [Base](../wiki/Base)
- [HelpCommand](../wiki/HelpCommand)
- [LoginCommand](../wiki/LoginCommand)
- [Options](../wiki/Options)
- [QueryClient](../wiki/QueryClient)
- [QueryCommand](../wiki/QueryCommand)
- [QueryCommandParser](../wiki/QueryCommandParser)
- [RawQueryProtocol](../wiki/RawQueryProtocol)
- [ServerInstance](../wiki/ServerInstance)
- [ServerNotifyRegisterCommand](../wiki/ServerNotifyRegisterCommand)
- [ServerNotifyUnregisterCommand](../wiki/ServerNotifyUnregisterCommand)
- [ServerQueryConnection](../wiki/ServerQueryConnection)
- [ServerVersionInformation](../wiki/ServerVersionInformation)
- [VersionCommand](../wiki/VersionCommand)
- [WebSocketManager](../wiki/WebSocketManager)
- [WhoAmICommand](../wiki/WhoAmICommand)

### Interfaces

- [ActiveEvent](../wiki/ActiveEvent)
- [BaseContext](../wiki/BaseContext)
- [IClientOptions](../wiki/IClientOptions)
- [IQueryProtocol](../wiki/IQueryProtocol)
- [IQueryProtocolOptions](../wiki/IQueryProtocolOptions)
- [IQueueItem](../wiki/IQueueItem)
- [ISocketOptions](../wiki/ISocketOptions)
- [IWebSocketManagerOptions](../wiki/IWebSocketManagerOptions)
- [LoginInfo](../wiki/LoginInfo)
- [QueryCommandTermination](../wiki/QueryCommandTermination)
- [SelectNoneContext](../wiki/SelectNoneContext)
- [SelectPortContext](../wiki/SelectPortContext)
- [SelectSidContext](../wiki/SelectSidContext)

### Type Aliases

- [Context](../wiki/Exports#context)
- [QueryCommandOptions](../wiki/Exports#querycommandoptions)

### Variables

- [TeamspeakJsError](../wiki/Exports#teamspeakjserror)
- [TeamspeakJsErrorCodes](../wiki/Exports#teamspeakjserrorcodes)
- [TeamspeakJsErrorMessages](../wiki/Exports#teamspeakjserrormessages)

## Type Aliases

### Context

Ƭ **Context**: [`SelectPortContext`](../wiki/SelectPortContext) \| [`SelectSidContext`](../wiki/SelectSidContext) \| [`SelectNoneContext`](../wiki/SelectNoneContext)

#### Defined in

src/client/typings/Context.ts:5

___

### QueryCommandOptions

Ƭ **QueryCommandOptions**: `Object`

#### Index signature

▪ [key: `string`]: `boolean` \| `string` \| `string`[] \| `number` \| `number`[]

#### Defined in

src/websocket/queryCommands/typings/QueryCommandOptions.ts:1

## Variables

### TeamspeakJsError

• `Const` **TeamspeakJsError**: typeof `TeamspeakJsError`

#### Defined in

src/errors/TeamspeakJsError.ts:32

___

### TeamspeakJsErrorCodes

• `Const` **TeamspeakJsErrorCodes**: `Object`

#### Index signature

▪ [k: `string`]: `T`

#### Defined in

src/errors/TeamspeakJsErrorCodes.ts:16

___

### TeamspeakJsErrorMessages

• `Const` **TeamspeakJsErrorMessages**: `Object`

#### Defined in

src/errors/TeamspeakJsErrorMessages.ts:3
