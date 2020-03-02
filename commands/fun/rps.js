const { RichEmbed } = require("discord.js");
const { promptMessage } = require("../../functions.js");

const chooseArr = ["🗻", "📰", "✂"];

module.exports = {
    name: "rps",
    category: "fun",
    description: "Rock Paper Scissors game. React to one of the emojis to play the game.",
    usage: "rps",
    run: async (client, message, args) => {
        const roleColor = message.guild.me.displayHexColor;
        const embed = new RichEmbed()
            .setColor(roleColor)
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setDescription("ROCK, PAPER, SCISSORS. Think you can beat me!? React below with your choice.")
            .setTimestamp();

        const m = await message.channel.send(embed);
        // Wait for a reaction to be added
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        // Get a random emoji from the array
        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        // Check if it's a win/tie/loss
        const result = await getResult(reacted, botChoice);
        // Clear the reactions
        await m.clearReactions();

        embed
            .setDescription("")
            .addField(result, `You picked: ${reacted}. I picked: ${botChoice}`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "GAH! You beat a bot! Impossible!";
            } else if (me === clientChosen) {
                return "It's a tie!";
            } else {
                return "I'm a bot, that's obviously why you lost!";
            }
        }
    }
}