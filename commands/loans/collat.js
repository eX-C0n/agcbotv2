module.exports = {
    name: "collat",
    aliases: ["collateral"],
    category: "loans",
    description: "collat item(s) with a player",
    usage: "!collat @user details of the trade (who's trading what)",
    run: async (client, message, args) => {
        let loaner = message.member;
        let loanee = message.mentions.users.first();
        let loanargs = message.content.split(args[0]);
        var attachment = (message.attachments).array();
        let url = attachment[0].url
        var loan = loanargs[1];
        if (!loaner) return message.reply("I don't know how this happened. Big error.. try again?\nProper Syntax: ``!collat @username details of the trade``");
        if (!loanee) return message.reply("who is on the other end of the collateral trade?\nProper Syntax: ``!collat @username details of the trade``");
        if (!loan) return message.reply("it seems as if you have included no items...\nProper Syntax: ``!collat @username details of the trade``");
        
        if (message.attachments.size > 0) {
            message.channel.send("**Please click the ✅ reaction below to confirm.**\n" + loaner + " has a collateral trade with " + loanee + ". details: **" + loan + "**\n", {files: [url]})    
            .then(() => message.delete())
            .then(() => console.log('Attached image from a COLLAT:\n', attachment[0].url, "\n"));
        } else {
            message.channel.send("**Please click the ✅ reaction below to confirm.**\n" + loaner + " has a collateral trade with " + loanee + ". details: **" + loan + "**")
            .then(() => message.delete());
        }
    }
}
