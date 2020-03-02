module.exports = {
    name: "cpl",
    aliases: ["corporal", "CPL"],
    category: "promotions",
    description: "promotes mentioned user to cpl",
    usage: "!cpl <user>",
    run: async (client, message, args) => {
        if(message.member.roles.find(r => r.name === "Staff")) {
            let member = message.guild.member(message.mentions.users.first()); //grab member for promo
            let role = message.guild.roles.find(r => r.name === "Corporal"); //grab role for promo
        if (!member) return message.reply('oops! Please mention a user to promote to Corporal.'); //didnt @ anyone
          await message.delete(); //delete command
          await member.addRole(role); //add Corporal
          await member.removeRole('581254553664487436'); //remove private
          await message.channel.send('<:rank2ban:682371645641326633> GZ! ' + member + ' has been promoted to a Corporal! <:rank2ban:682371645641326633>');
        } else {message.reply("Sorry, only staff can use this command.");}
    }
}