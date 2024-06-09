export enum HostBannerMode {
    /**
     * do not adjust
     */
    NoAdjust = 0,
    
    /**
     * adjust but ignore aspect ratio (like TeamSpeak 2)
     */
    IgnoreAspect = 1,
    
    /**
     * adjust and keep aspect ratio
     */
    KeepAspect = 2,
}