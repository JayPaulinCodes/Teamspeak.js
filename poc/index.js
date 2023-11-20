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
        // console.log(debugItem);
    });
    
    client.on("error", (type, data) => {
        console.log(type, data);
    });
    
    client.on("ready", () => {
        console.log("Ready!");
    });
    
    client.on("flooding", () => {
        console.log("Flooding...");
    });

    // client.on("tokenused", () => {});
    // client.on("serveredited", () => {});
    // client.on("channeledited", () => {});
    // client.on("channelmoved", () => {});
    // client.on("channeldeleted", () => {});
    // client.on("channelcreated", () => {});
    // client.on("clientmoved", () => {});
    // client.on("textmessage", () => {});
    // client.on("serveredit", () => {});
    // client.on("clientdisconnect", () => {});
    // client.on("clientconnect", () => {});

    // const clientData = await client.getClientByServerId(17);
    // await clientData.resolveServerGroups();
    // await clientData.serverGroups[0].fetchPermissions();
    // console.log(clientData)


    
    client.on("serverNameUpdated", (invokingClient, newName) => {
        console.log(`LOG: ${invokingClient.nickname} (${invokingClient.uniqueId}) changed the server name to: ${newName}`);
    });
    
    client.on("clientMovedToChannel", (client, channel, invokingClient) => {
        console.log(`LOG: ${invokingClient.nickname} (${invokingClient.uniqueId} | ${invokingClient.ip}) moved ${client.nickname} (${client.uniqueId} | ${client.ip}) to channel '${channel.name}'`);
    });
    
    client.on("clientConnected", (client, channel) => {
        console.log(`LOG: ${client.nickname} (${client.uniqueId} | ${client.ip}) connected to channel '${channel.name}'`);
    });
    
    client.on("clientConnectionDropped", (client, channel, reason) => {
        console.log(`LOG: ${client.nickname} (${client.uniqueId} | ${client.ip}) lost connection to the server with reason: '${reason ?? ""}'`);
    });
    
    client.on("clientDisconnected", (client, channel, reason) => {
        console.log(`LOG: ${client.nickname} (${client.uniqueId} | ${client.ip}) disconnected from the server with reason: '${reason ?? ""}'`);
    });
    
    client.on("clientKicked", (client, invokingClient, channel, reason) => {
        console.log(`LOG: ${client.nickname} (${client.uniqueId} | ${client.ip}) was kicked from the server by ${invokingClient.nickname} (${invokingClient.uniqueId} | ${invokingClient.ip}) for reason: '${reason ?? ""}'`);
    });
    
    client.on("clientBanned", (client, invokingClient, channel, reason, time) => {
        console.log(`LOG: ${client.nickname} (${client.uniqueId} | ${client.ip}) was banned from the server for ${time} by ${invokingClient.nickname} (${invokingClient.uniqueId} | ${invokingClient.ip}) for reason: '${reason ?? ""}'`);
    });

    // client.execute(new TeamspeakJs.ChannelInfoCommand(1)).then((data) => {
    //     console.log(data);
    // })
    
    // const channel = await client.getChannelById(1);
    // console.log(channel)
})();