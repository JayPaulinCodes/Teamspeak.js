# Class: ServerInstance

## Hierarchy

- [`Base`](../wiki/Base)

  ↳ **`ServerInstance`**

## Table of contents

### Constructors

- [constructor](../wiki/ServerInstance#constructor)

### Properties

- [bandwidthReceivedLastMinute](../wiki/ServerInstance#bandwidthreceivedlastminute)
- [bandwidthReceivedLastSecond](../wiki/ServerInstance#bandwidthreceivedlastsecond)
- [bandwidthSentLastMinute](../wiki/ServerInstance#bandwidthsentlastminute)
- [bandwidthSentLastSecond](../wiki/ServerInstance#bandwidthsentlastsecond)
- [bytesReceived](../wiki/ServerInstance#bytesreceived)
- [bytesSent](../wiki/ServerInstance#bytessent)
- [channelAdminTemplateGroup](../wiki/ServerInstance#channeladmintemplategroup)
- [channelDefaultTemplateGroup](../wiki/ServerInstance#channeldefaulttemplategroup)
- [databaseVersion](../wiki/ServerInstance#databaseversion)
- [fileTransferBandwidthReceived](../wiki/ServerInstance#filetransferbandwidthreceived)
- [fileTransferBandwidthSent](../wiki/ServerInstance#filetransferbandwidthsent)
- [fileTransferPort](../wiki/ServerInstance#filetransferport)
- [hostTimestampUTC](../wiki/ServerInstance#hosttimestamputc)
- [maxDownloadBandwidth](../wiki/ServerInstance#maxdownloadbandwidth)
- [maxUploadBandwidth](../wiki/ServerInstance#maxuploadbandwidth)
- [packetsReceived](../wiki/ServerInstance#packetsreceived)
- [packetsSent](../wiki/ServerInstance#packetssent)
- [queryClient](../wiki/ServerInstance#queryclient)
- [serverAdminTemplateGroup](../wiki/ServerInstance#serveradmintemplategroup)
- [serverDefaultTemplateGroup](../wiki/ServerInstance#serverdefaulttemplategroup)
- [serverQueryBanTime](../wiki/ServerInstance#serverquerybantime)
- [serverQueryFloodCommands](../wiki/ServerInstance#serverqueryfloodcommands)
- [serverQueryFloodTime](../wiki/ServerInstance#serverqueryfloodtime)
- [serverQueryGuestGroup](../wiki/ServerInstance#serverqueryguestgroup)
- [totalChannelsOnline](../wiki/ServerInstance#totalchannelsonline)
- [totalClientsOnline](../wiki/ServerInstance#totalclientsonline)
- [totalMaxclients](../wiki/ServerInstance#totalmaxclients)
- [uptime](../wiki/ServerInstance#uptime)
- [virtualServersRunning](../wiki/ServerInstance#virtualserversrunning)

### Methods

- [clone](../wiki/ServerInstance#clone)
- [patch](../wiki/ServerInstance#patch)
- [setServerQueryGuestGroup](../wiki/ServerInstance#setserverqueryguestgroup)
- [toJSON](../wiki/ServerInstance#tojson)

## Constructors

### constructor

• **new ServerInstance**(`queryClient`, `data`): [`ServerInstance`](../wiki/ServerInstance)

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryClient` | [`QueryClient`](../wiki/QueryClient) |
| `data` | `any` |

#### Returns

[`ServerInstance`](../wiki/ServerInstance)

#### Overrides

[Base](../wiki/Base).[constructor](../wiki/Base#constructor)

#### Defined in

src/structures/ServerInstance.ts:202

## Properties

### bandwidthReceivedLastMinute

• **bandwidthReceivedLastMinute**: `number`

Average bandwidth used for incoming data in the last minute (Bytes/s)

Server Instance Property: CONNECTION_BANDWIDTH_RECEIVED_LAST_MINUTE_TOTAL

#### Defined in

src/structures/ServerInstance.ts:95

___

### bandwidthReceivedLastSecond

• **bandwidthReceivedLastSecond**: `number`

Average bandwidth used for incoming data in the last second (Bytes/s)

Server Instance Property: CONNECTION_BANDWIDTH_RECEIVED_LAST_SECOND_TOTAL

#### Defined in

src/structures/ServerInstance.ts:81

___

### bandwidthSentLastMinute

• **bandwidthSentLastMinute**: `number`

Average bandwidth used for outgoing data in the last minute (Bytes/s)

Server Instance Property: CONNECTION_BANDWIDTH_SENT_LAST_MINUTE_TOTAL

#### Defined in

src/structures/ServerInstance.ts:88

___

### bandwidthSentLastSecond

• **bandwidthSentLastSecond**: `number`

Average bandwidth used for outgoing data in the last second (Bytes/s)

Server Instance Property: CONNCONNECTION_BANDWIDTH_SENT_LAST_SECOND_TOTALECTION_BYTES_RECEIVED_TOTAL

#### Defined in

src/structures/ServerInstance.ts:74

___

### bytesReceived

• **bytesReceived**: `number`

Total amount of bytes received

Server Instance Property: CONNECTION_BYTES_RECEIVED_TOTAL

#### Defined in

src/structures/ServerInstance.ts:67

___

### bytesSent

• **bytesSent**: `number`

Total amount of bytes sent

Server Instance Property: CONNECTION_BYTES_SENT_TOTAL

#### Defined in

src/structures/ServerInstance.ts:60

___

### channelAdminTemplateGroup

• **channelAdminTemplateGroup**: ``null`` \| `number`

Default channel administrator group ID used in templates

Server Instance Property: SERVERINSTANCE_TEMPLATE_CHANNELADMIN_GROUP

#### Defined in

src/structures/ServerInstance.ts:158

___

### channelDefaultTemplateGroup

• **channelDefaultTemplateGroup**: ``null`` \| `number`

Default channel group ID used in templates

Server Instance Property: SERVERINSTANCE_TEMPLATE_CHANNELDEFAULT_GROUP

#### Defined in

src/structures/ServerInstance.ts:151

___

### databaseVersion

• **databaseVersion**: ``null`` \| `number`

Database revision number

Server Instance Property: SERVERINSTANCE_DATABASE_VERSION

#### Defined in

src/structures/ServerInstance.ts:102

___

### fileTransferBandwidthReceived

• **fileTransferBandwidthReceived**: `number`

Current bandwidth used for incoming file transfers (Bytes/s)

Server Instance Property: CONNECTION_FILETRANSFER_BANDWIDTH_RECEIVED

#### Defined in

src/structures/ServerInstance.ts:39

___

### fileTransferBandwidthSent

• **fileTransferBandwidthSent**: `number`

Current bandwidth used for outgoing file transfers (Bytes/s)

Server Instance Property: CONNECTION_FILETRANSFER_BANDWIDTH_SENT

#### Defined in

src/structures/ServerInstance.ts:32

___

### fileTransferPort

• **fileTransferPort**: ``null`` \| `number`

TCP port used for file transfers

Server Instance Property: SERVERINSTANCE_FILETRANSFER_PORT

#### Defined in

src/structures/ServerInstance.ts:123

___

### hostTimestampUTC

• **hostTimestampUTC**: `number`

Current server date and time as UTC timestamp

Server Instance Property: HOST_TIMESTAMP_UTC

#### Defined in

src/structures/ServerInstance.ts:18

___

### maxDownloadBandwidth

• **maxDownloadBandwidth**: ``null`` \| `number`

Max bandwidth available for outgoing file transfers (Bytes/s)

Server Instance Property: SERVERINSTANCE_MAX_DOWNLOAD_TOTAL_BANDWITDH

#### Defined in

src/structures/ServerInstance.ts:130

___

### maxUploadBandwidth

• **maxUploadBandwidth**: ``null`` \| `number`

Max bandwidth available for incoming file transfers (Bytes/s)

Server Instance Property: SERVERINSTANCE_MAX_UPLOAD_TOTAL_BANDWITDH

#### Defined in

src/structures/ServerInstance.ts:137

___

### packetsReceived

• **packetsReceived**: `number`

Total amount of packets received

Server Instance Property: CONNECTION_PACKETS_RECEIVED_TOTAL

#### Defined in

src/structures/ServerInstance.ts:53

___

### packetsSent

• **packetsSent**: `number`

Total amount of packets sent

Server Instance Property: CONNECTION_PACKETS_SENT_TOTAL

#### Defined in

src/structures/ServerInstance.ts:46

___

### queryClient

• **queryClient**: [`QueryClient`](../wiki/QueryClient)

#### Inherited from

[Base](../wiki/Base).[queryClient](../wiki/Base#queryclient)

#### Defined in

src/structures/Base.ts:4

___

### serverAdminTemplateGroup

• **serverAdminTemplateGroup**: ``null`` \| `number`

Default template group ID for administrators on new virtual servers (used to create initial token)

Server Instance Property: SERVERINSTANCE_TEMPLATE_SERVERADMIN_GROUP

#### Defined in

src/structures/ServerInstance.ts:116

___

### serverDefaultTemplateGroup

• **serverDefaultTemplateGroup**: ``null`` \| `number`

Default server group ID used in templates

Server Instance Property: SERVERINSTANCE_TEMPLATE_SERVERDEFAULT_GROUP

#### Defined in

src/structures/ServerInstance.ts:144

___

### serverQueryBanTime

• **serverQueryBanTime**: ``null`` \| `number`

Time in seconds used for automatic bans triggered by the ServerQuery flood protection

Server Instance Property: SERVERINSTANCE_SERVERQUERY_FLOOD_BAN_TIME

#### Defined in

src/structures/ServerInstance.ts:200

___

### serverQueryFloodCommands

• **serverQueryFloodCommands**: ``null`` \| `number`

Max number of commands allowed in seconds

Server Instance Property: SERVERINSTANCE_SERVERQUERY_FLOOD_COMMANDS

#### Defined in

src/structures/ServerInstance.ts:186

___

### serverQueryFloodTime

• **serverQueryFloodTime**: ``null`` \| `number`

Timeframe in seconds for commands

Server Instance Property: SERVERINSTANCE_SERVERQUERY_FLOOD_TIME

#### Defined in

src/structures/ServerInstance.ts:193

___

### serverQueryGuestGroup

• **serverQueryGuestGroup**: ``null`` \| `number`

Default ServerQuery group ID

Server Instance Property: SERVERINSTANCE_GUEST_SERVERQUERY_GROUP

#### Defined in

src/structures/ServerInstance.ts:109

___

### totalChannelsOnline

• **totalChannelsOnline**: `number`

Number of channels on all virtual servers

Server Instance Property: VIRTUALSERVERS_TOTAL_CHANNELS_ONLINE

#### Defined in

src/structures/ServerInstance.ts:179

___

### totalClientsOnline

• **totalClientsOnline**: `number`

Number of clients online on all virtual servers

Server Instance Property: VIRTUALSERVERS_TOTAL_CLIENTS_ONLINE

#### Defined in

src/structures/ServerInstance.ts:172

___

### totalMaxclients

• **totalMaxclients**: `number`

Max number of clients for all virtual servers

Server Instance Property: VIRTUALSERVERS_TOTAL_MAXCLIENTS

#### Defined in

src/structures/ServerInstance.ts:165

___

### uptime

• **uptime**: `number`

Uptime in seconds

Server Instance Property: INSTANCE_UPTIME

#### Defined in

src/structures/ServerInstance.ts:11

___

### virtualServersRunning

• **virtualServersRunning**: `number`

Number of virtual servers running

Server Instance Property: VIRTUALSERVERS_RUNNING_TOTAL

#### Defined in

src/structures/ServerInstance.ts:25

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

src/structures/ServerInstance.ts:208

___

### setServerQueryGuestGroup

▸ **setServerQueryGuestGroup**(`groupId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupId` | `number` |

#### Returns

`void`

#### Defined in

src/structures/ServerInstance.ts:239

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Inherited from

[Base](../wiki/Base).[toJSON](../wiki/Base#tojson)

#### Defined in

src/structures/Base.ts:14
