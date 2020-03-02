module.exports = {
    name: "loan",
    aliases: [""],
    category: "loans",
    description: "Loan an item(s) to a player",
    usage: "!loan @user items youre loaning",
    run: async (client, message, args) => {
        let loaner = message.member;
        let loanee = message.mentions.users.first();
        let loanargs = message.content.split(args[0]);
        var attachment = (message.attachments).array();
        let url = attachment[0].url
        var loan = loanargs[1];
        if (!loaner) return message.reply("I don't know how this happened. Big error.. try again?\nProper Syntax: ``!loan @username items you are loaning``");
        if (!loanee) return message.reply("please specify the member to which you are loaning.\nProper Syntax: ``!loan @username items you are loaning``");
        if (!loan) return message.reply("it seems as if you have included no items.\nProper Syntax: ``!loan @username items you are loaning``");
        
        if (message.attachments.size > 0) {
            message.channel.send("**Please click the ✅ reaction below to confirm.**\n" + loaner + " is loaning to " + loanee + ": **" + loan + "**\n", {files: [url]})
            .then(() => message.delete())
            .then(() => console.log('Attached image from a LOAN:\n', attachment[0].url, "\n"));
        } else {
            message.channel.send("**Please click the ✅ reaction below to confirm.**\n" + loaner + " is loaning to " + loanee + ": **" + loan + "**")
            .then(() => message.delete())  
        }
    } 
}