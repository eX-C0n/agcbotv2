module.exports = {
    name: "setrsn",
    aliases: ["", ""],
    category: "moderation",
    description: "sets a users nickname when they link to the OS bot",
    usage: "<>",
    run: async (client, message, args) => {
        message.member.setNickname(message.content.replace("!setrsn ", ""));
    }
}