module.exports = {
    name: "pvt",
    aliases: ["private", "PVT"],
    category: "promotions",
    description: "promotes mentioned user to PVT",
    usage: "!pvt <@user>",
    run: async (client, message, args) => {
        if(message.member.roles.find(r => r.name === "Staff")) { //if user has "staff" role
            let member = message.guild.member(message.mentions.users.first()); //grab member for promo
            let role = message.guild.roles.find(r => r.name === "Private"); //grab role for promo
        if (!member) return message.reply('oops! Please mention a user to promote to Private.'); //didnt @ anyone
          await message.delete(); //delete command
          await member.addRole(role); //add private
          await message.channel.send('<:rank1ban:682371645209313280> GZ! ' + member + ' has been promoted to a Private! <:rank1ban:682371645209313280>');
        } else {message.reply("Sorry, only staff can use this command.");}
    }
}