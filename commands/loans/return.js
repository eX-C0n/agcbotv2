module.exports = {
    name: "return",
    aliases: ["payback", "giveback", "repay"],
    category: "loans",
    description: "return a loan to a player",
    usage: "!return @user items youre returning",
    run: async (client, message, args) => {
        let loanee = message.member;
        let loaner = message.mentions.users.first();
        let loanargs = message.content.split(args[0]);
        var attachment = (message.attachments).array();
        let url = attachment[0].url
        var loan = loanargs[1];
        if (!loanee) return message.reply("I don't know how this happened. Big error.. try again?\nProper Syntax: ``!return @username items you are returning``");
        if (!loaner) return message.reply("please specify the member to which you are returning the loan to.\nProper Syntax: ``!return @username items you are returning``");
        if (!loan) return message.reply("it seems as if you have included no items...\nProper Syntax: ``!return @username items you are returning``");

        if (message.attachments.size > 0) {
            message.channel.send("**Please click the ✅ reaction below to confirm.**\n" + loanee + " is returning to " + loaner + ": **" + loan + "**\n", {files: [url]})
            .then(() => message.delete())
            .then(() => console.log('Attached image from a RETURN:\n', attachment[0].url, "\n"));
        } else {
            message.channel.send("**Please click the ✅ reaction below to confirm.**\n" + loanee + " is returning to " + loaner + ": **" + loan + "**")
            .then(() => message.delete());
        }
    }
}

