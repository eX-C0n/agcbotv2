module.exports = {
    name: "borrow",
    aliases: [""],
    category: "loans",
    description: "Borrow item(s) from a player",
    usage: "!borrow @user items youre borrowing from user",
    run: async (client, message, args) => {
        let loanee = message.member;
        let loaner = message.mentions.users.first();
        let loanargs = message.content.split(args[0]);
        var attachment = (message.attachments).array();
        let url = attachment[0].url
        var loan = loanargs[1];
        if (!loanee) return message.reply("I don't know how this happened. Big error.. try again?\nProper Syntax: ``!borrow @user items youre borrowing from user``");
        if (!loaner) return message.reply("please specify the member that is loaning you the items.\nProper Syntax: ``!borrow @user items youre borrowing from user``");
        if (!loan) return message.reply("it seems as if you have included no items.\nProper Syntax: ``!borrow @user items youre borrowing from user``");
        
        if (message.attachments.size > 0) {
            message.channel.send("**Please click the ✅ reaction below to confirm.**\n" + loaner + " is loaning to " + loanee + ": **" + loan + "**\n", {files: [url]})
            .then(() => message.delete())
            .then(() => console.log('Attached image from a BORROW:\n', attachment[0].url, "\n"));
        } else {
            message.channel.send("**Please click the ✅ reaction below to confirm.**\n" + loaner + " is loaning to " + loanee + ": **" + loan + "**")
            .then(() => message.delete())  
        }
    }
}

