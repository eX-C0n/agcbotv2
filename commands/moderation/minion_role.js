module.exports = {
    name: "m",
    aliases: "minion",
    category: "moderation",
    description: "give maniac role",
    usage: " ",
    run: async (client, message, args) => {
        if (message.channel.id === ('674890889939779585')) {
            let role = message.guild.roles.find(r => r.name === "Minion Maniacs");
            message.member.addRole(role);
        }
    }
}