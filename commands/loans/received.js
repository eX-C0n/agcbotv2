module.exports = {
    name: "receive",
    aliases: ["recieved", "received", "recieve", "returned"],
    category: "loans",
    description: "Receive items back from another player.",
    usage: "!receive @user items that have been returned",
    run: async (client, message, args) => {
        let loaner = message.member;
        let loanee = message.mentions.users.first();
        let loanargs = message.content.split(args[0]);
        var attachment = (message.attachments).array();
        let url = attachment[0].url
        var loan = loanargs[1];
        if (!loaner) return message.reply("I don't know how this happened. Big error.. try again?\nProper Syntax: ``!receive @username items that have been returned``");
        if (!loanee) return message.reply("please specify the member of which has returned your items.\nProper Syntax: ``!receive @username items that have been returned``");
        if (!loan) return message.reply("it seems as if you have included no items being returned to you...\nProper Syntax: ``!receive @username items that have been returned``");
        
        if (message.attachments.size > 0) {
            message.channel.send("**Please click the ✅ reaction below to confirm.**\n" + loanee + " has repaid " + loaner + ": **" + loan + "**\n", {files: [url]})
            .then(() => message.delete())
            .then(() => console.log('Attached image from a RECEIVE:\n', attachment[0].url, "\n"));
        } else {
            message.channel.send("**Please click the ✅ reaction below to confirm.**\n" + loanee + " has repaid " + loaner + ": **" + loan + "**")
            .then(() => message.delete());
        }
    }
}