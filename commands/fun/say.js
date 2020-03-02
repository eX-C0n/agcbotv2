const { RichEmbed } = require("discord.js");

module.exports = {
    name: "say",
    aliases: ["bc", "broadcast"],
    category: "fun",
    description: "Staff Only - Says your input via the bot",
    usage: "<input>",
    run: async (client, message, args) => {
        if(message.member.roles.find(r => r.name === "Staff")) {
            if (message.deletable) message.delete();
            if (args.length < 1)
                return message.reply("I have nothing to say...").then(message.delete(5000));


            const roleColor = message.guild.me.displayHexColor;
            if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
            .setColor(roleColor)
            .setDescription(args.slice(1).join(" "));

                message.channel.send(embed);
            } else {
                message.channel.send(args.join(" "));
            }
        } else {
            message.reply("Sorry, only Staff can use this command");
        }
    }
}