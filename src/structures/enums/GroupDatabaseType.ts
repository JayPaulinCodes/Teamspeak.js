export enum GroupDatabaseType {
    /** 
     * Template group (used for new virtual servers)
     */
    Template = 0,
    
    /** 
     * Regular group (used for regular clients) 
     */
    Regular = 1,
    
    /** 
     * Global query group (used for ServerQuery clients) 
     */
    Query = 2
}