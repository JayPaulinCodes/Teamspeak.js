import { InstanceEditCommand } from "../websocket/queryCommands/commands/InstanceEditCommand";
import { QueryClient } from "../client/QueryClient";
import { Base } from "./Base";

export class ServerInstance extends Base {
    /**
     * Uptime in seconds
     * 
     * Server Instance Property: INSTANCE_UPTIME
     */
    uptime: number;
    
    /**
     * Current server date and time as UTC timestamp
     * 
     * Server Instance Property: HOST_TIMESTAMP_UTC
     */
    hostTimestampUTC: number;
    
    /**
     * Number of virtual servers running
     * 
     * Server Instance Property: VIRTUALSERVERS_RUNNING_TOTAL
     */
    virtualServersRunning: number;
    
    /**
     * Current bandwidth used for outgoing file transfers (Bytes/s)
     * 
     * Server Instance Property: CONNECTION_FILETRANSFER_BANDWIDTH_SENT
     */
    fileTransferBandwidthSent: number;
    
    /**
     * Current bandwidth used for incoming file transfers (Bytes/s)
     * 
     * Server Instance Property: CONNECTION_FILETRANSFER_BANDWIDTH_RECEIVED
     */
    fileTransferBandwidthReceived: number;
    
    /**
     * Total amount of packets sent
     * 
     * Server Instance Property: CONNECTION_PACKETS_SENT_TOTAL
     */
    packetsSent: number;
    
    /**
     * Total amount of packets received
     * 
     * Server Instance Property: CONNECTION_PACKETS_RECEIVED_TOTAL
     */
    packetsReceived: number;
    
    /**
     * Total amount of bytes sent
     * 
     * Server Instance Property: CONNECTION_BYTES_SENT_TOTAL
     */
    bytesSent: number;
    
    /**
     * Total amount of bytes received
     * 
     * Server Instance Property: CONNECTION_BYTES_RECEIVED_TOTAL
     */
    bytesReceived: number;
    
    /**
     * Average bandwidth used for outgoing data in the last second (Bytes/s)
     * 
     * Server Instance Property: CONNCONNECTION_BANDWIDTH_SENT_LAST_SECOND_TOTALECTION_BYTES_RECEIVED_TOTAL
     */
    bandwidthSentLastSecond: number;
    
    /**
     * Average bandwidth used for incoming data in the last second (Bytes/s)
     * 
     * Server Instance Property: CONNECTION_BANDWIDTH_RECEIVED_LAST_SECOND_TOTAL
     */
    bandwidthReceivedLastSecond: number;
    
    /**
     * Average bandwidth used for outgoing data in the last minute (Bytes/s)
     * 
     * Server Instance Property: CONNECTION_BANDWIDTH_SENT_LAST_MINUTE_TOTAL
     */
    bandwidthSentLastMinute: number;
    
    /**
     * Average bandwidth used for incoming data in the last minute (Bytes/s)
     * 
     * Server Instance Property: CONNECTION_BANDWIDTH_RECEIVED_LAST_MINUTE_TOTAL
     */
    bandwidthReceivedLastMinute: number;
    
    /**
     * Database revision number
     * 
     * Server Instance Property: SERVERINSTANCE_DATABASE_VERSION
     */
    databaseVersion: number | null;
    
    /**
     * Default ServerQuery group ID
     * 
     * Server Instance Property: SERVERINSTANCE_GUEST_SERVERQUERY_GROUP
     */
    serverQueryGuestGroup: number | null;
    
    /**
     * Default template group ID for administrators on new virtual servers (used to create initial token)
     * 
     * Server Instance Property: SERVERINSTANCE_TEMPLATE_SERVERADMIN_GROUP
     */
    serverAdminTemplateGroup: number | null;
    
    /**
     * TCP port used for file transfers
     * 
     * Server Instance Property: SERVERINSTANCE_FILETRANSFER_PORT
     */
    fileTransferPort: number | null;
    
    /**
     * Max bandwidth available for outgoing file transfers (Bytes/s)
     * 
     * Server Instance Property: SERVERINSTANCE_MAX_DOWNLOAD_TOTAL_BANDWITDH
     */
    maxDownloadBandwidth: number | null;
    
    /**
     * Max bandwidth available for incoming file transfers (Bytes/s)
     * 
     * Server Instance Property: SERVERINSTANCE_MAX_UPLOAD_TOTAL_BANDWITDH
     */
    maxUploadBandwidth: number | null;
    
    /**
     * Default server group ID used in templates
     * 
     * Server Instance Property: SERVERINSTANCE_TEMPLATE_SERVERDEFAULT_GROUP
     */
    serverDefaultTemplateGroup: number | null;
    
    /**
     * Default channel group ID used in templates
     * 
     * Server Instance Property: SERVERINSTANCE_TEMPLATE_CHANNELDEFAULT_GROUP
     */
    channelDefaultTemplateGroup: number | null;
    
    /**
     * Default channel administrator group ID used in templates
     * 
     * Server Instance Property: SERVERINSTANCE_TEMPLATE_CHANNELADMIN_GROUP
     */
    channelAdminTemplateGroup: number | null;
    
    /**
     * Max number of clients for all virtual servers
     * 
     * Server Instance Property: VIRTUALSERVERS_TOTAL_MAXCLIENTS
     */
    totalMaxclients: number;
    
    /**
     * Number of clients online on all virtual servers
     * 
     * Server Instance Property: VIRTUALSERVERS_TOTAL_CLIENTS_ONLINE
     */
    totalClientsOnline: number;
    
    /**
     * Number of channels on all virtual servers
     * 
     * Server Instance Property: VIRTUALSERVERS_TOTAL_CHANNELS_ONLINE
     */
    totalChannelsOnline: number;
    
    /**
     * Max number of commands allowed in seconds
     * 
     * Server Instance Property: SERVERINSTANCE_SERVERQUERY_FLOOD_COMMANDS
     */
    serverQueryFloodCommands: number | null;
    
    /**
     * Timeframe in seconds for commands
     * 
     * Server Instance Property: SERVERINSTANCE_SERVERQUERY_FLOOD_TIME
     */
    serverQueryFloodTime: number | null;
    
    /**
     * Time in seconds used for automatic bans triggered by the ServerQuery flood protection
     * 
     * Server Instance Property: SERVERINSTANCE_SERVERQUERY_FLOOD_BAN_TIME
     */
    serverQueryBanTime: number | null;

    constructor(queryClient: QueryClient, data: any) {
        super(queryClient)

        this.patch(data);        
    }

    protected patch(data: any) {
        this.uptime = data.instanceUptime;
        this.hostTimestampUTC = data.hostTimestampUtc;
        this.virtualServersRunning = data.virtualserversRunningTotal;
        this.fileTransferBandwidthSent = data.connectionFiletransferBandwidthSent;
        this.fileTransferBandwidthReceived = data.connectionFiletransferBandwidthReceived;
        this.packetsSent = data.connectionPacketsSentTotal;
        this.packetsReceived = data.connectionPacketsReceivedTotal;
        this.bytesSent = data.connectionBytesSentTotal;
        this.bytesReceived = data.connectionBytesReceivedTotal;
        this.bandwidthSentLastSecond = data.connectionBandwidthSentLastSecondTotal;
        this.bandwidthReceivedLastSecond = data.connectionBandwidthReceivedLastSecondTotal;
        this.bandwidthSentLastMinute = data.connectionBandwidthSentLastMinuteTotal;
        this.bandwidthReceivedLastMinute = data.connectionBandwidthReceivedLastMinuteTotal;
        this.databaseVersion = ("serverinstanceDatabaseVersion" in data) ? data.serverinstanceDatabaseVersion : null;
        this.serverQueryGuestGroup = ("serverinstanceGuestServerqueryGroup" in data) ? data.serverinstanceGuestServerqueryGroup : null;
        this.serverAdminTemplateGroup = ("serverinstanceTemplateServeradminGroup" in data) ? data.serverinstanceTemplateServeradminGroup : null;
        this.fileTransferPort = ("serverinstanceFiletransferPort" in data) ? data.serverinstanceFiletransferPort : null;
        this.maxDownloadBandwidth = ("serverinstanceMaxDownloadTotalBandwidth" in data) ? data.serverinstanceMaxDownloadTotalBandwidth : null;
        this.maxUploadBandwidth = ("serverinstanceMaxUploadTotalBandwidth" in data) ? data.serverinstanceMaxUploadTotalBandwidth : null;
        this.serverDefaultTemplateGroup = ("serverinstanceTemplateServerdefaultGroup" in data) ? data.serverinstanceTemplateServerdefaultGroup : null;
        this.channelDefaultTemplateGroup = ("serverinstanceTemplateChanneldefaultGroup" in data) ? data.serverinstanceTemplateChanneldefaultGroup : null;
        this.channelAdminTemplateGroup = ("serverinstanceTemplateChanneladminGroup" in data) ? data.serverinstanceTemplateChanneladminGroup : null;
        this.totalMaxclients = data.virtualserversTotalMaxclients;
        this.totalClientsOnline = data.virtualserversTotalClientsOnline;
        this.totalChannelsOnline = data.virtualserversTotalChannelsOnline;
        this.serverQueryFloodCommands = ("serverinstanceServerqueryFloodCommands" in data) ? data.serverinstanceServerqueryFloodCommands : null;
        this.serverQueryFloodTime = ("serverinstanceServerqueryFloodTime" in data) ? data.serverinstanceServerqueryFloodTime : null;
        this.serverQueryBanTime = ("serverinstanceServerqueryBanTime" in data) ? data.serverinstanceServerqueryBanTime : null;
    }

    setServerQueryGuestGroup(groupId: number) {
        this.queryClient.execute(new InstanceEditCommand("serverinstance_guest_serverquery_group", groupId))
            .then(() => {
                this.serverQueryGuestGroup = groupId;
            })
            .catch((error) => {
                throw error;
            });
    }
}