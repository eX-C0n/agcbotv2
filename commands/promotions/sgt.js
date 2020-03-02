module.exports = {
    name: "sgt",
    aliases: ["sergeant", "SGT"],
    category: "promotions",
    description: "promotes mentioed user to sgt",
    usage: "!sgt <user>",
    run: async (client, message, args) => {
        if(message.member.roles.find(r => r.name === "Staff")) {
            let member = message.guild.member(message.mentions.users.first()); //grab member for promo
            let role = message.guild.roles.find(r => r.name === "Sergeant");
        if (!member) return message.reply('oops! Please mention a user to promote to Sergeant.'); //didnt @ anyone
          await message.delete(); //delete command
          await member.addRole(role); //add Sergeant
          await member.removeRole('581255023686844445'); //remove Corporal
          await member.removeRole('581254553664487436'); //remove Private
          await message.channel.send('<:rank3ban:682371645821812766> GZ! ' + member + ' has been promoted to a Sergeant! <:rank3ban:682371645821812766>');
        } else {message.reply("Sorry, only staff can use this command.");}
    }
}