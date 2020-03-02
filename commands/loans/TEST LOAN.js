module.exports = {
    name: "lone",
    aliases: [""],
    category: "loans",
    description: "test loaning an item",
    usage: "!lone @user testing",
    run: async (client, message, args, MessageAttachment ) => {
        function log(message) {
            console.log(message);
            fs.writeFileSync('./logs/log-file.txt');
          }
        if (message.author.id === ('373469491574734854')) {
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
                message.channel.send("**Please click the ✅ reaction below to confirm.**\n" + loaner + " is loneing to " + loanee + ": **" + loan + "**\n", {files: [url]})
                .then(() => message.delete())
                .then(() => console.log('Attached image from a LOAN:\n', attachment[0].url, "\n"));
            } else {
                message.channel.send("**Please click the ✅ reaction below to confirm.**\n" + loaner + " is loneing to " + loanee + ": **" + loan + "**").then(() => message.delete())  
            }
        } else {
            message.reply("this command is for the bot creator only.").then(() => message.delete()); 
        }
    }
}

