module.exports = {
    name: "ping",
    aliases: ["latency"],
    category: "info",
    description: "Return Latency and API Ping Times",
    run: async (client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging...`);

        msg.edit(`🏓 Pong\nCurrent Latency is ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI Latency ${Math.round(client.ping)}ms`);
    }
}