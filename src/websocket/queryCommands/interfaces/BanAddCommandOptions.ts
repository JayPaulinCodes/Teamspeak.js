export default interface BanAddCommandOptions {
    ip: string | undefined;
    name: string | undefined;
    uniqueId: string | undefined;
    duration: number | undefined;
    reason: string | undefined;
}