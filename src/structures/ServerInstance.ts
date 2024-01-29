import { Base } from "./Base";
import { InstanceEditCommand } from "../websocket/queryCommands/commands/InstanceEditCommand";
import { QueryClient } from "../client/QueryClient";

// ADD DOCS
export class ServerInstance extends Base {
    /**
     * Uptime in seconds
     *
     * Server Instance Property: INSTANCE_UPTIME
     */
    uptime: number | null = null;

    /**
     * Current server date and time as UTC timestamp
     *
     * Server Instance Property: HOST_TIMESTAMP_UTC
     */
    hostTimestampUTC: number | null = null;

    /**
     * Number of virtual servers running
     *
     * Server Instance Property: VIRTUALSERVERS_RUNNING_TOTAL
     */
    virtualServersRunning: number | null = null;

    /**
     * Current bandwidth used for outgoing file transfers (Bytes/s)
     *
     * Server Instance Property: CONNECTION_FILETRANSFER_BANDWIDTH_SENT
     */
    fileTransferBandwidthSent: number | null = null;

    /**
     * Current bandwidth used for incoming file transfers (Bytes/s)
     *
     * Server Instance Property: CONNECTION_FILETRANSFER_BANDWIDTH_RECEIVED
     */
    fileTransferBandwidthReceived: number | null = null;

    /**
     * Total amount of packets sent
     *
     * Server Instance Property: CONNECTION_PACKETS_SENT_TOTAL
     */
    packetsSent: number | null = null;

    /**
     * Total amount of packets received
     *
     * Server Instance Property: CONNECTION_PACKETS_RECEIVED_TOTAL
     */
    packetsReceived: number | null = null;

    /**
     * Total amount of bytes sent
     *
     * Server Instance Property: CONNECTION_BYTES_SENT_TOTAL
     */
    bytesSent: number | null = null;

    /**
     * Total amount of bytes received
     *
     * Server Instance Property: CONNECTION_BYTES_RECEIVED_TOTAL
     */
    bytesReceived: number | null = null;

    /**
     * Average bandwidth used for outgoing data in the last second (Bytes/s)
     *
     * Server Instance Property: CONNCONNECTION_BANDWIDTH_SENT_LAST_SECOND_TOTALECTION_BYTES_RECEIVED_TOTAL
     */
    bandwidthSentLastSecond: number | null = null;

    /**
     * Average bandwidth used for incoming data in the last second (Bytes/s)
     *
     * Server Instance Property: CONNECTION_BANDWIDTH_RECEIVED_LAST_SECOND_TOTAL
     */
    bandwidthReceivedLastSecond: number | null = null;

    /**
     * Average bandwidth used for outgoing data in the last minute (Bytes/s)
     *
     * Server Instance Property: CONNECTION_BANDWIDTH_SENT_LAST_MINUTE_TOTAL
     */
    bandwidthSentLastMinute: number | null = null;

    /**
     * Average bandwidth used for incoming data in the last minute (Bytes/s)
     *
     * Server Instance Property: CONNECTION_BANDWIDTH_RECEIVED_LAST_MINUTE_TOTAL
     */
    bandwidthReceivedLastMinute: number | null = null;

    /**
     * Database revision number
     *
     * Server Instance Property: SERVERINSTANCE_DATABASE_VERSION
     */
    databaseVersion: number | null = null;

    /**
     * Default ServerQuery group ID
     *
     * Server Instance Property: SERVERINSTANCE_GUEST_SERVERQUERY_GROUP
     */
    serverQueryGuestGroup: number | null = null;

    /**
     * Default template group ID for administrators on new virtual servers (used to create initial token)
     *
     * Server Instance Property: SERVERINSTANCE_TEMPLATE_SERVERADMIN_GROUP
     */
    serverAdminTemplateGroup: number | null = null;

    /**
     * TCP port used for file transfers
     *
     * Server Instance Property: SERVERINSTANCE_FILETRANSFER_PORT
     */
    fileTransferPort: number | null = null;

    /**
     * Max bandwidth available for outgoing file transfers (Bytes/s)
     *
     * Server Instance Property: SERVERINSTANCE_MAX_DOWNLOAD_TOTAL_BANDWITDH
     */
    maxDownloadBandwidth: number | null = null;

    /**
     * Max bandwidth available for incoming file transfers (Bytes/s)
     *
     * Server Instance Property: SERVERINSTANCE_MAX_UPLOAD_TOTAL_BANDWITDH
     */
    maxUploadBandwidth: number | null = null;

    /**
     * Default server group ID used in templates
     *
     * Server Instance Property: SERVERINSTANCE_TEMPLATE_SERVERDEFAULT_GROUP
     */
    serverDefaultTemplateGroup: number | null = null;

    /**
     * Default channel group ID used in templates
     *
     * Server Instance Property: SERVERINSTANCE_TEMPLATE_CHANNELDEFAULT_GROUP
     */
    channelDefaultTemplateGroup: number | null = null;

    /**
     * Default channel administrator group ID used in templates
     *
     * Server Instance Property: SERVERINSTANCE_TEMPLATE_CHANNELADMIN_GROUP
     */
    channelAdminTemplateGroup: number | null = null;

    /**
     * Max number of clients for all virtual servers
     *
     * Server Instance Property: VIRTUALSERVERS_TOTAL_MAXCLIENTS
     */
    totalMaxclients: number | null = null;

    /**
     * Number of clients online on all virtual servers
     *
     * Server Instance Property: VIRTUALSERVERS_TOTAL_CLIENTS_ONLINE
     */
    totalClientsOnline: number | null = null;

    /**
     * Number of channels on all virtual servers
     *
     * Server Instance Property: VIRTUALSERVERS_TOTAL_CHANNELS_ONLINE
     */
    totalChannelsOnline: number | null = null;

    /**
     * Max number of commands allowed in seconds
     *
     * Server Instance Property: SERVERINSTANCE_SERVERQUERY_FLOOD_COMMANDS
     */
    serverQueryFloodCommands: number | null = null;

    /**
     * Timeframe in seconds for commands
     *
     * Server Instance Property: SERVERINSTANCE_SERVERQUERY_FLOOD_TIME
     */
    serverQueryFloodTime: number | null = null;

    /**
     * Time in seconds used for automatic bans triggered by the ServerQuery flood protection
     *
     * Server Instance Property: SERVERINSTANCE_SERVERQUERY_FLOOD_BAN_TIME
     */
    serverQueryBanTime: number | null = null;

    /**
     * Time in seconds used for automatic bans triggered by the ServerQuery flood protection
     *
     * Server Instance Property: SERVERINSTANCE_PERMISSION_VERSION
     */
    permissionsVersion: number | null = null;

    /**
     * Time in seconds used for automatic bans triggered by the ServerQuery flood protection
     *
     * Server Instance Property: SERVERINSTANCE_PENDING_CONNECTIONS_PER_IP
     */
    pendingConnectionsPerIp: number | null = null;

    /**
     * Time in seconds used for automatic bans triggered by the ServerQuery flood protection
     *
     * Server Instance Property: SERVERINSTANCE_SERVERQUERY_MAX_CONNECTIONS_PER_IP
     */
    serverQueryMaxConnectionsPerIp: number | null = null;

    // ADD DOCS
    constructor(queryClient: QueryClient, data: any) {
        super(queryClient);

        this.patch(data);
    }

    protected override patch(data: any) {
        this.uptime = "instanceUptime" in data ? data.instanceUptime : null;
        this.hostTimestampUTC = "hostTimestampUtc" in data ? data.hostTimestampUtc : null;
        this.virtualServersRunning = "virtualserversRunningTotal" in data ? data.virtualserversRunningTotal : null;
        this.fileTransferBandwidthSent =
            "connectionFiletransferBandwidthSent" in data ? data.connectionFiletransferBandwidthSent : null;
        this.fileTransferBandwidthReceived =
            "connectionFiletransferBandwidthReceived" in data ? data.connectionFiletransferBandwidthReceived : null;
        this.packetsSent = "connectionPacketsSentTotal" in data ? data.connectionPacketsSentTotal : null;
        this.packetsReceived = "connectionPacketsReceivedTotal" in data ? data.connectionPacketsReceivedTotal : null;
        this.bytesSent = "connectionBytesSentTotal" in data ? data.connectionBytesSentTotal : null;
        this.bytesReceived = "connectionBytesReceivedTotal" in data ? data.connectionBytesReceivedTotal : null;
        this.bandwidthSentLastSecond =
            "connectionBandwidthSentLastSecondTotal" in data ? data.connectionBandwidthSentLastSecondTotal : null;
        this.bandwidthReceivedLastSecond =
            "connectionBandwidthReceivedLastSecondTotal" in data
                ? data.connectionBandwidthReceivedLastSecondTotal
                : null;
        this.bandwidthSentLastMinute =
            "connectionBandwidthSentLastMinuteTotal" in data ? data.connectionBandwidthSentLastMinuteTotal : null;
        this.bandwidthReceivedLastMinute =
            "connectionBandwidthReceivedLastMinuteTotal" in data
                ? data.connectionBandwidthReceivedLastMinuteTotal
                : null;
        this.databaseVersion = "serverinstanceDatabaseVersion" in data ? data.serverinstanceDatabaseVersion : null;
        this.serverQueryGuestGroup =
            "serverinstanceGuestServerqueryGroup" in data ? data.serverinstanceGuestServerqueryGroup : null;
        this.serverAdminTemplateGroup =
            "serverinstanceTemplateServeradminGroup" in data ? data.serverinstanceTemplateServeradminGroup : null;
        this.fileTransferPort = "serverinstanceFiletransferPort" in data ? data.serverinstanceFiletransferPort : null;
        this.maxDownloadBandwidth =
            "serverinstanceMaxDownloadTotalBandwidth" in data ? data.serverinstanceMaxDownloadTotalBandwidth : null;
        this.maxUploadBandwidth =
            "serverinstanceMaxUploadTotalBandwidth" in data ? data.serverinstanceMaxUploadTotalBandwidth : null;
        this.serverDefaultTemplateGroup =
            "serverinstanceTemplateServerdefaultGroup" in data ? data.serverinstanceTemplateServerdefaultGroup : null;
        this.channelDefaultTemplateGroup =
            "serverinstanceTemplateChanneldefaultGroup" in data ? data.serverinstanceTemplateChanneldefaultGroup : null;
        this.channelAdminTemplateGroup =
            "serverinstanceTemplateChanneladminGroup" in data ? data.serverinstanceTemplateChanneladminGroup : null;
        this.totalMaxclients = "virtualserversTotalMaxclients" in data ? data.virtualserversTotalMaxclients : null;
        this.totalClientsOnline =
            "virtualserversTotalClientsOnline" in data ? data.virtualserversTotalClientsOnline : null;
        this.totalChannelsOnline =
            "virtualserversTotalChannelsOnline" in data ? data.virtualserversTotalChannelsOnline : null;
        this.serverQueryFloodCommands =
            "serverinstanceServerqueryFloodCommands" in data ? data.serverinstanceServerqueryFloodCommands : null;
        this.serverQueryFloodTime =
            "serverinstanceServerqueryFloodTime" in data ? data.serverinstanceServerqueryFloodTime : null;
        this.serverQueryBanTime =
            "serverinstanceServerqueryBanTime" in data ? data.serverinstanceServerqueryBanTime : null;
        this.permissionsVersion =
            "serverinstancePermissionsVersion" in data ? data.serverinstancePermissionsVersion : null;
        this.pendingConnectionsPerIp =
            "serverinstancePendingConnectionsPerIp" in data ? data.serverinstancePendingConnectionsPerIp : null;
        this.serverQueryMaxConnectionsPerIp =
            "serverinstanceServerqueryMaxConnectionsPerIp" in data
                ? data.serverinstanceServerqueryMaxConnectionsPerIp
                : null;
    }

    // ADD DOCS
    setServerQueryGuestGroup(groupId: number) {
        this.queryClient
            .execute(new InstanceEditCommand("serverinstance_guest_serverquery_group", groupId))
            .then(() => {
                this.serverQueryGuestGroup = groupId;
            })
            .catch(error => {
                throw error;
            });
    }

    // ADD DOCS
    setServerAdminTemplateGroup(groupId: number) {
        this.queryClient
            .execute(new InstanceEditCommand("serverinstance_template_serveradmin_group", groupId))
            .then(() => {
                this.serverAdminTemplateGroup = groupId;
            })
            .catch(error => {
                throw error;
            });
    }

    // ADD DOCS
    setFileTransferPort(port: number) {
        this.queryClient
            .execute(new InstanceEditCommand("serverinstance_filetransfer_port", port))
            .then(() => {
                this.fileTransferPort = port;
            })
            .catch(error => {
                throw error;
            });
    }

    // ADD DOCS
    setMaxDownloadBandwidth(bytes: number) {
        this.queryClient
            .execute(new InstanceEditCommand("serverinstance_max_download_total_bandwidth", bytes))
            .then(() => {
                this.maxDownloadBandwidth = bytes;
            })
            .catch(error => {
                throw error;
            });
    }

    // ADD DOCS
    setMaxUploadBandwidth(bytes: number) {
        this.queryClient
            .execute(new InstanceEditCommand("serverinstance_max_upload_total_bandwidth", bytes))
            .then(() => {
                this.maxUploadBandwidth = bytes;
            })
            .catch(error => {
                throw error;
            });
    }

    // ADD DOCS
    setServerDefaultTemplateGroup(groupId: number) {
        this.queryClient
            .execute(new InstanceEditCommand("serverinstance_template_serverdefault_group", groupId))
            .then(() => {
                this.serverDefaultTemplateGroup = groupId;
            })
            .catch(error => {
                throw error;
            });
    }

    // ADD DOCS
    setChannelDefaultTemplateGroup(groupId: number) {
        this.queryClient
            .execute(new InstanceEditCommand("serverinstance_template_channeldefault_group", groupId))
            .then(() => {
                this.channelDefaultTemplateGroup = groupId;
            })
            .catch(error => {
                throw error;
            });
    }

    // ADD DOCS
    setChannelAdminTemplateGroup(groupId: number) {
        this.queryClient
            .execute(new InstanceEditCommand("serverinstance_template_channeladmin_group", groupId))
            .then(() => {
                this.channelAdminTemplateGroup = groupId;
            })
            .catch(error => {
                throw error;
            });
    }

    // ADD DOCS
    setServerQueryFloodCommands(commands: number) {
        this.queryClient
            .execute(new InstanceEditCommand("serverinstance_serverquery_flood_commands", commands))
            .then(() => {
                this.serverQueryFloodCommands = commands;
            })
            .catch(error => {
                throw error;
            });
    }

    // ADD DOCS
    setServerQueryFloodTime(time: number) {
        this.queryClient
            .execute(new InstanceEditCommand("serverinstance_serverquery_flood_time", time))
            .then(() => {
                this.serverQueryFloodTime = time;
            })
            .catch(error => {
                throw error;
            });
    }

    // ADD DOCS
    setServerQueryFloodBanTime(banTime: number) {
        this.queryClient
            .execute(new InstanceEditCommand("serverinstance_serverquery_flood_ban_time", banTime))
            .then(() => {
                this.serverQueryBanTime = banTime;
            })
            .catch(error => {
                throw error;
            });
    }
}
