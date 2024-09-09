/**
 * The following enumerations can be used to change the behavior of various ServerQuery commands
 */
export enum HostMessageMode {
    /**
     * don't display anything
     */
    None = 0,
    
    /**
     * display message in chatlog
     */
    Log = 1,
    
    /**
     * display message in modal dialog
     */
    Modal = 2,
    
    /**
     * display message in modal dialog and close connection
     */
    ModalQuit = 3,
}