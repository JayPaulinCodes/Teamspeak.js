(async () => {
    const TeamspeakJs = require("../lib/index.js");
    // console.log(TeamspeakJs);
    
    const client = new TeamspeakJs.QueryClient({
        webSocketManagerOptions: {
            socketOptions: {
                host: "192.168.2.100",
                port: 10011
            }
        },
        username: "devBot",
        password: "aVBnK4vX"
    });
    
    client.on("debug", (type, data) => {
        const debugItem = {
            type,
            data
        }
        console.log(debugItem);
    });
    
    client.on("error", (type, data) => {
        console.log(type, data);
    });
    
    client.on("ready", () => {
        console.log("Ready!");
    });

    // const connectionInfo = await client.getServerQueryConnectionInfo();
    // console.log(connectionInfo);

    // const versionInfo = await client.getServerVersionInfo();
    // console.log(versionInfo);

    const hostInfo = await client.getServerHostInfo();
    console.log(hostInfo);

})();