export enum GroupType {
    /** 
     * Server group permission 
     */
    ServerGroup = 0,

    /** 
     * Client specific permission 
     */
    GlobalClient = 1,

    /** 
     * Channel specific permission 
     */
    Channel = 2,

    /** 
     * Channel group permission 
     */
    ChannelGroup = 3,

    /** 
     * Channel-client specific permission 
     */
    ChannelClient = 4
}