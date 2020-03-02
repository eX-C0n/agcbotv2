module.exports = {
    name: "online",
    aliases: ["on", "o"],
    category: "info",
    description: "is the bot online?",
    usage: "!online",
    run: async (client, message, args) => {
        message.channel.send("Thanks for asking, I am online!");
    }
}