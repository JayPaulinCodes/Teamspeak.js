# Class: QueryCommandParser

## Table of contents

### Constructors

- [constructor](../wiki/QueryCommandParser#constructor)

### Properties

- [CommandIdentifiers](../wiki/QueryCommandParser#commandidentifiers)
- [snakeCaseIdentifier](../wiki/QueryCommandParser#snakecaseidentifier)

### Methods

- [escape](../wiki/QueryCommandParser#escape)
- [escapeKeyValue](../wiki/QueryCommandParser#escapekeyvalue)
- [getKeyValue](../wiki/QueryCommandParser#getkeyvalue)
- [parse](../wiki/QueryCommandParser#parse)
- [parseBoolean](../wiki/QueryCommandParser#parseboolean)
- [parseNumber](../wiki/QueryCommandParser#parsenumber)
- [parseNumberArray](../wiki/QueryCommandParser#parsenumberarray)
- [parseRecursive](../wiki/QueryCommandParser#parserecursive)
- [parseString](../wiki/QueryCommandParser#parsestring)
- [parseStringArray](../wiki/QueryCommandParser#parsestringarray)
- [parseValue](../wiki/QueryCommandParser#parsevalue)
- [toCamelCase](../wiki/QueryCommandParser#tocamelcase)
- [toSnakeCase](../wiki/QueryCommandParser#tosnakecase)
- [unescape](../wiki/QueryCommandParser#unescape)

## Constructors

### constructor

• **new QueryCommandParser**(): [`QueryCommandParser`](../wiki/QueryCommandParser)

#### Returns

[`QueryCommandParser`](../wiki/QueryCommandParser)

## Properties

### CommandIdentifiers

▪ `Static` `Readonly` **CommandIdentifiers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `apikey` | (`value`: `string`) => `string` |
| `averageSpeed` | (`value`: `string`) => `number` |
| `banid` | (`value`: `string`) => `string` |
| `build` | (`value`: `string`) => `number` |
| `cfid` | (`value`: `string`) => `string` |
| `cgid` | (`value`: `string`) => `string` |
| `channelBannerGfxUrl` | (`value`: `string`) => `string` |
| `channelBannerMode` | (`value`: `string`) => `number` |
| `channelCodec` | (`value`: `string`) => `number` |
| `channelCodecIsUnencrypted` | (`value`: `string`) => `number` |
| `channelCodecLatencyFactor` | (`value`: `string`) => `number` |
| `channelCodecQuality` | (`value`: `string`) => `number` |
| `channelDeleteDelay` | (`value`: `string`) => `number` |
| `channelDescription` | (`value`: `string`) => `string` |
| `channelFilepath` | (`value`: `string`) => `string` |
| `channelFlagDefault` | (`value`: `string`) => `boolean` |
| `channelFlagMaxclientsUnlimited` | (`value`: `string`) => `boolean` |
| `channelFlagMaxfamilyclientsInherited` | (`value`: `string`) => `boolean` |
| `channelFlagMaxfamilyclientsUnlimited` | (`value`: `string`) => `boolean` |
| `channelFlagPassword` | (`value`: `string`) => `boolean` |
| `channelFlagPermanent` | (`value`: `string`) => `boolean` |
| `channelFlagPrivate` | (`value`: `string`) => `boolean` |
| `channelFlagSemiPermanent` | (`value`: `string`) => `boolean` |
| `channelFlagTemporary` | (`value`: `string`) => `boolean` |
| `channelForcedSilence` | (`value`: `string`) => `number` |
| `channelIconId` | (`value`: `string`) => `string` |
| `channelMaxclients` | (`value`: `string`) => `number` |
| `channelMaxfamilyclients` | (`value`: `string`) => `number` |
| `channelName` | (`value`: `string`) => `string` |
| `channelNamePhonetic` | (`value`: `string`) => `string` |
| `channelNeededSubscribePower` | (`value`: `string`) => `number` |
| `channelNeededTalkPower` | (`value`: `string`) => `number` |
| `channelOrder` | (`value`: `string`) => `number` |
| `channelPassword` | (`value`: `string`) => `string` |
| `channelSecuritySalt` | (`value`: `string`) => `string` |
| `channelTopic` | (`value`: `string`) => `string` |
| `cid` | (`value`: `string`) => `string` |
| `cldbid` | (`value`: `string`) => `string` |
| `clid` | (`value`: `string`) => `string` |
| `clientAway` | (`value`: `string`) => `boolean` |
| `clientAwayMessage` | (`value`: `string`) => `string` |
| `clientBadges` | (`value`: `string`) => `string` |
| `clientBase64HashClientUID` | (`value`: `string`) => `string` |
| `clientChannelGroupId` | (`value`: `string`) => `string` |
| `clientChannelGroupInheritedChannelId` | (`value`: `string`) => `string` |
| `clientChannelId` | (`value`: `string`) => `number` |
| `clientCountry` | (`value`: `string`) => `string` |
| `clientCreated` | (`value`: `string`) => `number` |
| `clientDatabaseId` | (`value`: `string`) => `number` |
| `clientDefaultChannel` | (`value`: `string`) => `string` |
| `clientDefaultToken` | (`value`: `string`) => `string` |
| `clientDescription` | (`value`: `string`) => `string` |
| `clientEstimatedLocation` | (`value`: `string`) => `string` |
| `clientFlagAvatar` | (`value`: `string`) => `string` |
| `clientFlagTalking` | (`value`: `string`) => `boolean` |
| `clientIconId` | (`value`: `string`) => `string` |
| `clientId` | (`value`: `string`) => `number` |
| `clientIdleTime` | (`value`: `string`) => `number` |
| `clientInputHardware` | (`value`: `string`) => `boolean` |
| `clientInputMuted` | (`value`: `string`) => `boolean` |
| `clientIntegrations` | (`value`: `string`) => `string` |
| `clientIsChannelCommander` | (`value`: `string`) => `boolean` |
| `clientIsPrioritySpeaker` | (`value`: `string`) => `number` |
| `clientIsRecording` | (`value`: `string`) => `boolean` |
| `clientIsTalker` | (`value`: `string`) => `boolean` |
| `clientLastconnected` | (`value`: `string`) => `number` |
| `clientLastip` | (`value`: `string`) => `string` |
| `clientLoginName` | (`value`: `string`) => `string` |
| `clientLoginPassword` | (`value`: `string`) => `string` |
| `clientMetaData` | (`value`: `string`) => `string` |
| `clientMonthBytesDownloaded` | (`value`: `string`) => `number` |
| `clientMonthBytesUploaded` | (`value`: `string`) => `number` |
| `clientMyteamspeakAvatar` | (`value`: `string`) => `string` |
| `clientMyteamspeakId` | (`value`: `string`) => `string` |
| `clientNeededServerqueryViewPower` | (`value`: `string`) => `number` |
| `clientNickname` | (`value`: `string`) => `string` |
| `clientNicknamePhonetic` | (`value`: `string`) => `string` |
| `clientOriginServerId` | (`value`: `string`) => `number` |
| `clientOutputHardware` | (`value`: `string`) => `boolean` |
| `clientOutputMuted` | (`value`: `string`) => `boolean` |
| `clientOutputonlyMuted` | (`value`: `string`) => `number` |
| `clientPlatform` | (`value`: `string`) => `string` |
| `clientSecurityHash` | (`value`: `string`) => `string` |
| `clientServergroups` | (`value`: `string`) => `string`[] |
| `clientSignedBadges` | (`value`: `string`) => `string` |
| `clientTalkPower` | (`value`: `string`) => `number` |
| `clientTalkRequest` | (`value`: `string`) => `number` |
| `clientTalkRequestMsg` | (`value`: `string`) => `string` |
| `clientTotalBytesDownloaded` | (`value`: `string`) => `number` |
| `clientTotalBytesUploaded` | (`value`: `string`) => `number` |
| `clientTotalconnections` | (`value`: `string`) => `number` |
| `clientType` | (`value`: `string`) => `number` |
| `clientUniqueIdentifier` | (`value`: `string`) => `string` |
| `clientVersion` | (`value`: `string`) => `string` |
| `clientVersionSign` | (`value`: `string`) => `string` |
| `clientftfid` | (`value`: `string`) => `string` |
| `cluid` | (`value`: `string`) => `string` |
| `connectionBandwidthReceivedLastMinuteTotal` | (`value`: `string`) => `number` |
| `connectionBandwidthReceivedLastSecondTotal` | (`value`: `string`) => `number` |
| `connectionBandwidthSentLastMinuteTotal` | (`value`: `string`) => `number` |
| `connectionBandwidthSentLastSecondTotal` | (`value`: `string`) => `number` |
| `connectionBytesReceivedControl` | (`value`: `string`) => `number` |
| `connectionBytesReceivedKeepalive` | (`value`: `string`) => `number` |
| `connectionBytesReceivedSpeech` | (`value`: `string`) => `number` |
| `connectionBytesReceivedTotal` | (`value`: `string`) => `number` |
| `connectionBytesSentControl` | (`value`: `string`) => `number` |
| `connectionBytesSentKeepalive` | (`value`: `string`) => `number` |
| `connectionBytesSentSpeech` | (`value`: `string`) => `number` |
| `connectionBytesSentTotal` | (`value`: `string`) => `number` |
| `connectionClientIp` | (`value`: `string`) => `string` |
| `connectionConnectedTime` | (`value`: `string`) => `number` |
| `connectionFiletransferBandwidthReceived` | (`value`: `string`) => `number` |
| `connectionFiletransferBandwidthSent` | (`value`: `string`) => `number` |
| `connectionFiletransferBytesReceivedTotal` | (`value`: `string`) => `number` |
| `connectionFiletransferBytesSentTotal` | (`value`: `string`) => `number` |
| `connectionPacketlossTotal` | (`value`: `string`) => `number` |
| `connectionPacketsReceivedControl` | (`value`: `string`) => `number` |
| `connectionPacketsReceivedKeepalive` | (`value`: `string`) => `number` |
| `connectionPacketsReceivedSpeech` | (`value`: `string`) => `number` |
| `connectionPacketsReceivedTotal` | (`value`: `string`) => `number` |
| `connectionPacketsSentControl` | (`value`: `string`) => `number` |
| `connectionPacketsSentKeepalive` | (`value`: `string`) => `number` |
| `connectionPacketsSentSpeech` | (`value`: `string`) => `number` |
| `connectionPacketsSentTotal` | (`value`: `string`) => `number` |
| `connectionPing` | (`value`: `string`) => `number` |
| `count` | (`value`: `string`) => `number` |
| `cpid` | (`value`: `string`) => `string` |
| `created` | (`value`: `string`) => `number` |
| `createdAt` | (`value`: `string`) => `number` |
| `ctid` | (`value`: `string`) => `string` |
| `currentSpeed` | (`value`: `string`) => `number` |
| `datetime` | (`value`: `string`) => `number` |
| `desc` | (`value`: `string`) => `string` |
| `duration` | (`value`: `string`) => `number` |
| `end` | (`value`: `string`) => `number` |
| `enforcements` | (`value`: `string`) => `number` |
| `expiresAt` | (`value`: `string`) => `number` |
| `extraMsg` | (`value`: `string`) => `string` |
| `failedPermid` | (`value`: `string`) => `string` |
| `fcldbid` | (`value`: `string`) => `string` |
| `fileSize` | (`value`: `string`) => `number` |
| `flagRead` | (`value`: `string`) => `boolean` |
| `fname` | (`value`: `string`) => `string` |
| `ftkey` | (`value`: `string`) => `string` |
| `hash` | (`value`: `string`) => `string` |
| `hostTimestampUtc` | (`value`: `string`) => `number` |
| `iconid` | (`value`: `string`) => `string` |
| `id` | (`value`: `string`) => `string` |
| `id1` | (`value`: `string`) => `string` |
| `id2` | (`value`: `string`) => `string` |
| `ident` | (`value`: `string`) => `string` |
| `instanceUptime` | (`value`: `string`) => `number` |
| `invokercldbid` | (`value`: `string`) => `string` |
| `invokerid` | (`value`: `string`) => `string` |
| `invokername` | (`value`: `string`) => `string` |
| `invokeruid` | (`value`: `string`) => `string` |
| `ip` | (`value`: `string`) => `string` |
| `l` | (`value`: `string`) => `string` |
| `lastPos` | (`value`: `string`) => `number` |
| `lastnickname` | (`value`: `string`) => `string` |
| `message` | (`value`: `string`) => `string` |
| `msg` | (`value`: `string`) => `string` |
| `msgid` | (`value`: `string`) => `string` |
| `mytsid` | (`value`: `string`) => `string` |
| `n` | (`value`: `string`) => `number` |
| `nMemberAddp` | (`value`: `string`) => `number` |
| `nMemberRemovep` | (`value`: `string`) => `number` |
| `nModifyp` | (`value`: `string`) => `number` |
| `name` | (`value`: `string`) => `string` |
| `namemode` | (`value`: `string`) => `number` |
| `nickname` | (`value`: `string`) => `string` |
| `order` | (`value`: `string`) => `number` |
| `p` | (`value`: `string`) => `number` |
| `path` | (`value`: `string`) => `string` |
| `permdesc` | (`value`: `string`) => `string` |
| `permid` | (`value`: `string`) => `string` |
| `permname` | (`value`: `string`) => `string` |
| `permnegated` | (`value`: `string`) => `boolean` |
| `permsid` | (`value`: `string`) => `string` |
| `permskip` | (`value`: `string`) => `boolean` |
| `permvalue` | (`value`: `string`) => `number` |
| `pid` | (`value`: `string`) => `string` |
| `platform` | (`value`: `string`) => `string` |
| `port` | (`value`: `string`) => `number` |
| `proto` | (`value`: `string`) => `number` |
| `pwClear` | (`value`: `string`) => `string` |
| `reason` | (`value`: `string`) => `string` |
| `reasonid` | (`value`: `string`) => `string` |
| `reasonmsg` | (`value`: `string`) => `string` |
| `runtime` | (`value`: `string`) => `number` |
| `s` | (`value`: `string`) => `number` |
| `salt` | (`value`: `string`) => `string` |
| `savedb` | (`value`: `string`) => `number` |
| `scope` | (`value`: `string`) => `string` |
| `secondsEmpty` | (`value`: `string`) => `number` |
| `sender` | (`value`: `string`) => `number` |
| `serverId` | (`value`: `string`) => `string` |
| `serverftfid` | (`value`: `string`) => `string` |
| `serverinstanceDatabaseVersion` | (`value`: `string`) => `number` |
| `serverinstanceFiletransferPort` | (`value`: `string`) => `number` |
| `serverinstanceGuestServerqueryGroup` | (`value`: `string`) => `number` |
| `serverinstanceMaxDownloadTotalBandwidth` | (`value`: `string`) => `number` |
| `serverinstanceMaxUploadTotalBandwidth` | (`value`: `string`) => `number` |
| `serverinstancePendingConnectionsPerIp` | (`value`: `string`) => `number` |
| `serverinstancePermissionsVersion` | (`value`: `string`) => `number` |
| `serverinstanceServerqueryFloodBanTime` | (`value`: `string`) => `number` |
| `serverinstanceServerqueryFloodCommands` | (`value`: `string`) => `number` |
| `serverinstanceServerqueryFloodTime` | (`value`: `string`) => `number` |
| `serverinstanceServerqueryMaxConnectionsPerIp` | (`value`: `string`) => `number` |
| `serverinstanceTemplateChanneladminGroup` | (`value`: `string`) => `string` |
| `serverinstanceTemplateChanneldefaultGroup` | (`value`: `string`) => `string` |
| `serverinstanceTemplateServeradminGroup` | (`value`: `string`) => `number` |
| `serverinstanceTemplateServerdefaultGroup` | (`value`: `string`) => `string` |
| `sgid` | (`value`: `string`) => `string` |
| `sid` | (`value`: `string`) => `string` |
| `size` | (`value`: `string`) => `number` |
| `sizedone` | (`value`: `string`) => `number` |
| `snapshot` | (`value`: `string`) => `string` |
| `sortid` | (`value`: `string`) => `string` |
| `start` | (`value`: `string`) => `number` |
| `status` | (`value`: `string`) => `number` |
| `subject` | (`value`: `string`) => `string` |
| `t` | (`value`: `string`) => `number` |
| `target` | (`value`: `string`) => `number` |
| `targetmode` | (`value`: `string`) => `number` |
| `tcid` | (`value`: `string`) => `string` |
| `tcldbid` | (`value`: `string`) => `string` |
| `timeLeft` | (`value`: `string`) => `number` |
| `timestamp` | (`value`: `string`) => `number` |
| `tname` | (`value`: `string`) => `string` |
| `token` | (`value`: `string`) => `string` |
| `token1` | (`value`: `string`) => `string` |
| `token2` | (`value`: `string`) => `string` |
| `tokenCreated` | (`value`: `string`) => `number` |
| `tokenCustomset` | (`value`: `string`) => {} |
| `tokenDescription` | (`value`: `string`) => `string` |
| `tokenId1` | (`value`: `string`) => `string` |
| `tokenId2` | (`value`: `string`) => `string` |
| `tokenType` | (`value`: `string`) => `number` |
| `tokencustomset` | (`value`: `string`) => {} |
| `totalClients` | (`value`: `string`) => `number` |
| `totalClientsFamily` | (`value`: `string`) => `number` |
| `type` | (`value`: `string`) => `number` |
| `uid` | (`value`: `string`) => `string` |
| `v` | (`value`: `string`) => `number` |
| `value` | (`value`: `string`) => `string` |
| `version` | (`value`: `string`) => `string` |
| `virtualserverAntifloodPointsNeededCommandBlock` | (`value`: `string`) => `number` |
| `virtualserverAntifloodPointsNeededIpBlock` | (`value`: `string`) => `number` |
| `virtualserverAntifloodPointsNeededPluginBlock` | (`value`: `string`) => `number` |
| `virtualserverAntifloodPointsTickReduce` | (`value`: `string`) => `number` |
| `virtualserverAskForPrivilegekey` | (`value`: `string`) => `number` |
| `virtualserverAutostart` | (`value`: `string`) => `number` |
| `virtualserverChannelTempDeleteDelayDefault` | (`value`: `string`) => `number` |
| `virtualserverChannelsonline` | (`value`: `string`) => `number` |
| `virtualserverClientConnections` | (`value`: `string`) => `number` |
| `virtualserverClientsonline` | (`value`: `string`) => `number` |
| `virtualserverCodecEncryptionMode` | (`value`: `string`) => `number` |
| `virtualserverComplainAutobanCount` | (`value`: `string`) => `number` |
| `virtualserverComplainAutobanTime` | (`value`: `string`) => `number` |
| `virtualserverComplainRemoveTime` | (`value`: `string`) => `number` |
| `virtualserverCreated` | (`value`: `string`) => `number` |
| `virtualserverDefaultChannelAdminGroup` | (`value`: `string`) => `string` |
| `virtualserverDefaultChannelGroup` | (`value`: `string`) => `string` |
| `virtualserverDefaultServerGroup` | (`value`: `string`) => `string` |
| `virtualserverDownloadQuota` | (`value`: `string`) => `number` |
| `virtualserverFilebase` | (`value`: `string`) => `string` |
| `virtualserverFlagPassword` | (`value`: `string`) => `boolean` |
| `virtualserverHostbannerGfxInterval` | (`value`: `string`) => `number` |
| `virtualserverHostbannerGfxUrl` | (`value`: `string`) => `string` |
| `virtualserverHostbannerMode` | (`value`: `string`) => `number` |
| `virtualserverHostbannerUrl` | (`value`: `string`) => `string` |
| `virtualserverHostbuttonGfxUrl` | (`value`: `string`) => `string` |
| `virtualserverHostbuttonTooltip` | (`value`: `string`) => `string` |
| `virtualserverHostbuttonUrl` | (`value`: `string`) => `string` |
| `virtualserverHostmessage` | (`value`: `string`) => `string` |
| `virtualserverHostmessageMode` | (`value`: `string`) => `number` |
| `virtualserverIconId` | (`value`: `string`) => `string` |
| `virtualserverId` | (`value`: `string`) => `number` |
| `virtualserverIp` | (`value`: `string`) => `string`[] |
| `virtualserverLogChannel` | (`value`: `string`) => `number` |
| `virtualserverLogClient` | (`value`: `string`) => `number` |
| `virtualserverLogFiletransfer` | (`value`: `string`) => `number` |
| `virtualserverLogPermissions` | (`value`: `string`) => `number` |
| `virtualserverLogQuery` | (`value`: `string`) => `number` |
| `virtualserverLogServer` | (`value`: `string`) => `number` |
| `virtualserverMachineId` | (`value`: `string`) => `string` |
| `virtualserverMaxDownloadTotalBandwidth` | (`value`: `string`) => `number` |
| `virtualserverMaxUploadTotalBandwidth` | (`value`: `string`) => `number` |
| `virtualserverMaxclients` | (`value`: `string`) => `number` |
| `virtualserverMinAndroidVersion` | (`value`: `string`) => `number` |
| `virtualserverMinClientVersion` | (`value`: `string`) => `number` |
| `virtualserverMinClientsInChannelBeforeForcedSilence` | (`value`: `string`) => `number` |
| `virtualserverMinIosVersion` | (`value`: `string`) => `number` |
| `virtualserverMonthBytesDownloaded` | (`value`: `string`) => `number` |
| `virtualserverMonthBytesUploaded` | (`value`: `string`) => `number` |
| `virtualserverName` | (`value`: `string`) => `string` |
| `virtualserverNamePhonetic` | (`value`: `string`) => `string` |
| `virtualserverNeededIdentitySecurityLevel` | (`value`: `string`) => `number` |
| `virtualserverNickname` | (`value`: `string`) => `string` |
| `virtualserverPassword` | (`value`: `string`) => `string` |
| `virtualserverPlatform` | (`value`: `string`) => `string` |
| `virtualserverPort` | (`value`: `string`) => `number` |
| `virtualserverPrioritySpeakerDimmModificator` | (`value`: `string`) => `number` |
| `virtualserverQueryClientConnections` | (`value`: `string`) => `number` |
| `virtualserverQueryclientsonline` | (`value`: `string`) => `number` |
| `virtualserverReservedSlots` | (`value`: `string`) => `number` |
| `virtualserverStatus` | (`value`: `string`) => `string` |
| `virtualserverTotalBytesDownloaded` | (`value`: `string`) => `number` |
| `virtualserverTotalBytesUploaded` | (`value`: `string`) => `number` |
| `virtualserverTotalPacketlossControl` | (`value`: `string`) => `number` |
| `virtualserverTotalPacketlossKeepalive` | (`value`: `string`) => `number` |
| `virtualserverTotalPacketlossSpeech` | (`value`: `string`) => `number` |
| `virtualserverTotalPacketlossTotal` | (`value`: `string`) => `number` |
| `virtualserverTotalPing` | (`value`: `string`) => `number` |
| `virtualserverUniqueIdentifier` | (`value`: `string`) => `string` |
| `virtualserverUploadQuota` | (`value`: `string`) => `number` |
| `virtualserverUptime` | (`value`: `string`) => `number` |
| `virtualserverVersion` | (`value`: `string`) => `string` |
| `virtualserverWeblistEnabled` | (`value`: `string`) => `number` |
| `virtualserverWelcomemessage` | (`value`: `string`) => `string` |
| `virtualserversRunningTotal` | (`value`: `string`) => `number` |
| `virtualserversTotalChannelsOnline` | (`value`: `string`) => `number` |
| `virtualserversTotalClientsOnline` | (`value`: `string`) => `number` |
| `virtualserversTotalMaxclients` | (`value`: `string`) => `number` |

#### Defined in

src/websocket/queryCommands/parser/QueryCommandParser.ts:203

___

### snakeCaseIdentifier

▪ `Static` `Private` `Readonly` **snakeCaseIdentifier**: ``"_"``

#### Defined in

src/websocket/queryCommands/parser/QueryCommandParser.ts:2

## Methods

### escape

▸ **escape**(`str`): `string`

Teamspeak has a list of chars that need to be escaped to use,
this will take the inputed string and ensure that those chars
are escaped

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

src/websocket/queryCommands/parser/QueryCommandParser.ts:57

___

### escapeKeyValue

▸ **escapeKeyValue**(`key`, `value`): `string`

escapes a key value pair

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | the key used |
| `value` | `string` \| `number` \| `boolean` \| `string`[] \| `number`[] | the value or an array of values |

#### Returns

`string`

the parsed String which is readable by the TeamSpeak Query

#### Defined in

src/websocket/queryCommands/parser/QueryCommandParser.ts:176

___

### getKeyValue

▸ **getKeyValue**(`str`): `Object`

retrieves the key value pair from a string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | the key value pair to unescape eg foo=bar |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `undefined` \| `string` |

#### Defined in

src/websocket/queryCommands/parser/QueryCommandParser.ts:193

___

### parse

▸ **parse**(`raw`): `Object`

Parses a query response

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `string` |

#### Returns

`Object`

#### Defined in

src/websocket/queryCommands/parser/QueryCommandParser.ts:150

___

### parseBoolean

▸ **parseBoolean**(`value`): `boolean`

parses a number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | string to parse |

#### Returns

`boolean`

#### Defined in

src/websocket/queryCommands/parser/QueryCommandParser.ts:138

___

### parseNumber

▸ **parseNumber**(`value`): `number`

parses a number

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | string to parse |

#### Returns

`number`

#### Defined in

src/websocket/queryCommands/parser/QueryCommandParser.ts:122

___

### parseNumberArray

▸ **parseNumberArray**(`value`): `number`[]

parses a number array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | string to parse |

#### Returns

`number`[]

#### Defined in

src/websocket/queryCommands/parser/QueryCommandParser.ts:130

___

### parseRecursive

▸ **parseRecursive**(`value`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`Object`

#### Defined in

src/websocket/queryCommands/parser/QueryCommandParser.ts:142

___

### parseString

▸ **parseString**(`value`): `string`

parses a string value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | string to parse |

#### Returns

`string`

#### Defined in

src/websocket/queryCommands/parser/QueryCommandParser.ts:106

___

### parseStringArray

▸ **parseStringArray**(`value`): `string`[]

parses a string array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | string to parse |

#### Returns

`string`[]

#### Defined in

src/websocket/queryCommands/parser/QueryCommandParser.ts:114

___

### parseValue

▸ **parseValue**(`key`, `value`): `any`

Parses a value to the type which the key represents

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `undefined` \| `string` |

#### Returns

`any`

#### Defined in

src/websocket/queryCommands/parser/QueryCommandParser.ts:92

___

### toCamelCase

▸ **toCamelCase**(`str`): `string`

Converts a string to camel case

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to convert |

#### Returns

`string`

The converted string

#### Defined in

src/websocket/queryCommands/parser/QueryCommandParser.ts:9

___

### toSnakeCase

▸ **toSnakeCase**(`str`): `string`

Converts a string to snake case

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The string to convert |

#### Returns

`string`

The converted string

#### Defined in

src/websocket/queryCommands/parser/QueryCommandParser.ts:37

___

### unescape

▸ **unescape**(`str`): `string`

Teamspeak has a list of chars that need to be escaped to use,
this will take revert those escaped chars

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

src/websocket/queryCommands/parser/QueryCommandParser.ts:74
