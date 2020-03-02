const { MessageAttachment } = require('discord.js');
module.exports = {
    name: "rip",
    aliases: [""],
    category: "",
    description: "",
    usage: "<>",
    run: async (client, message, args) => {
        if (message.attachments.size > 0) {
            var attachment = (message.attachments).array();
            // Send the attachment in the message channel with a content
            message.channel.send(attachment[0].url); 
        } else {
            message.channel.send("WELL, THIS DOESNT DO MUCH, EH? See if you can figure out what this command does................... I'd be curious to see if you can figure it out");
        }
    }
}