module.exports = {
    name: "vote",
    aliases: ["v"],
    category: "moderation",
    description: "Creates a vote. up, down, meh",
    usage: "!vote blah blah",
    run: async (client, message, args) => {
        message.react('👍')
			.then(() => message.react(message.guild.emojis.get('649274633941418007')))
			.then(() => message.react('👎'));
    }
}