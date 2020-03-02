const { Client, RichEmbed, Collection, MessageAttachment } = require("discord.js");
const { config } = require("dotenv");
const fs = require("fs");

const client = new Client({

});

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

config({
  path: __dirname + "/.env"
});

["command"].forEach(handler => {
  require(`./handler/${handler}`)(client);
});


client.on("ready", () => {
  console.log(`${client.user.username} is ONLINE\n`);

  client.user.setPresence({
    status: "online",
    game: {
      name: "you watching me",
      type: "WATCHING"
    }
  });
});

client.on("message", async message => {
  //console.log(`${message.channel.name} - ${message.author.username}: ${message.content} `);

  const prefix = "!";
  if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);
});




client.on("message", async message => { //message.content.includes arguments

//DELETE !M KILL COMMANDS
/*if (message.channel.id === ('674890889939779585')) {
  if (message.content.startsWith("!m k ") || message.content.startsWith("!m kill ") || message.content === ('y')) {
    message.delete(5000);
  }
}*/

if (message.content.includes("👀")) {
  message.channel.send({files: ["./images/eyes1.jpg"]});
}

//Q&A TRIVIA
if (message.channel.id === ('674895896693047302') || message.channel.id === ('675602123836096523')) {
  if (message.content.includes("What does G.A.G. stand for?")) {
    message.channel.send('Group of Advanced Gardeners');
    }
    if (message.content.includes('What magic level do you need to wield a Black salamander?')) {
    message.channel.send('70');
    }
    if (message.content.includes('What clue level gives ornament kits for Rune scimitars?')) {
    message.channel.send('beginner');
    }
    if (message.content.includes('Which RuneScape god is the god of law & justice?')) {
    message.channel.send('arma');
    }
    if (message.content.includes('the name of the boat that you use around Lake Molch?')) {
    message.channel.send('boaty');
    }
    if (message.content.includes('What is the name of the monkey who is king of Ape Atoll?')) {
    message.channel.send('Awowogei');
    }
    if (message.content.includes('What is this player wearing? The Robes')) {
    message.channel.send('darkness');
    }
    if (message.content.includes('Who is the Herblore skill master?')) {
    message.channel.send('Kaqemeex');
    }
    if (message.content.includes('What crafting level do you need to create a wieldable Crab claw?')) {
    message.channel.send('15');
    }
    if (message.content.includes('What is the combat level of the Kalphite Queen?')) {
    message.channel.send('333');
    }
    if (message.content.includes('When you die with Chinchompas in your inventory, they will dissappear, UNLESS you are where?')) {
    message.channel.send('wilderness');
    }
    if (message.content.includes('Wearing the full Gracefull outfit restores run energy by how much % faster?')) {
    message.channel.send('30');
    }
    if (message.content.includes('What is the name of the metal that Dragon items are made of?')) {
    message.channel.send('Orikalkum');
    }
    if (message.content.includes('What is the name of the Dwarven child you rescue in the Dwarf Cannon quest?')) {
    message.channel.send('lollk');
    }
    if (message.content.includes('In what quest do you fight an exact copy of yourself?')) {
    message.channel.send('lunar diplomacy');
    }
    if (message.content.includes('What is the race of the NPC called Wormbrain?')) {
    message.channel.send('goblin');
    }
    if (message.content.includes('either of the POH rooms you can build at level 1')) {
    message.channel.send('garden');
    }
    if (message.content.includes('dwarf that loves Redberry pies?')) {
    message.channel.send('thurgo');
    }
    if (message.content.includes('NPC that sells you Dwarf Cannon')) {
    message.channel.send('Nulodion');
    }
    if (message.content.includes('Iron ore rocks are there outside the Ardougne')) {
    message.channel.send('6');
    }
    if (message.content.includes('slayer level do you need to kill Mogres?')) {
    message.channel.send('32');
    }
    if (message.content.includes('What is the exact amount of XP for 99 in a skill?')) {
    message.channel.send('13034431');
    }
    if (message.content.includes('Strength level do you need to wield the Granite Hammer')) {
    message.channel.send('50');
    }
    if (message.content.includes('can you get a clothing makeover from?')) {
    message.channel.send('Thessalia');
    }
    if (message.content.includes('King Black Dragon always drops the same quantity of')) {
    message.channel.send('15');
    }
    if (message.content.includes('in a skill, what level would it be?')) {
    message.channel.send('73');
    }
    if (message.content.includes('How much special attack energy does the')) {
    message.channel.send('25%');
    }
    if (message.content.includes('the missing word in this name, which belongs to the Zamorakian')) {
    message.channel.send('yama');
    }
    if (message.content.includes('restores 20% run energy, and reduces your run energy depletion rate by how much %')) {
    message.channel.send('70');
    }
    if (message.content.includes('ow many Marks of Grace does full')) {
    message.channel.send('260');
    }
    if (message.content.includes('The Happy Heroes Emporium, a weapon store in the Heroes Guild, sells')) {
    message.channel.send('200k');
    }
    if (message.content.includes('What is the name of this town? Image:')) {
    message.channel.send('Piscatoris Fishing Colony');
    }
    if (message.content.includes('Which weapon, or type of weapon, has a special attack called')) {
    message.channel.send('heavy ballista');
    }
    if (message.content.includes('Which JMod is the current')) {
    message.channel.send('rogue');
    }
    if (message.content.includes('Which NPC is said to have created the Giant Mole')) {
    message.channel.send('Malignius Mortifer');
    }
    if (message.content.includes('famously unofficially won a deadman mode tournament')) {
    message.channel.send('woox');
    }
    if (message.content.includes('% chance of receiving a Golden nugget from Paydirt in the Motherlode')) {
    message.channel.send('3');
    }
    if (message.content.includes('What item has the examine text:')) {
    message.channel.send('Phoenix');
    }
    if (message.content.includes('What mining level do you need to mine amethyst')) {
    message.channel.send('92');
    }
    if (message.content.includes('Name any type of Wyvern found in the Wyvern Cave on Fossil Island.')) {
    message.channel.send('ancient');
    }
    if (message.content.includes('the name of the specialized weapon you get from completing A Taste of Hope?')) {
    message.channel.send('ivandis flail');
    }
    if (message.content.includes('is the combat level of Cerberus')) {
    message.channel.send('318');
    }
    if (message.content.includes('Lantadyme & Potato cactus')) {
    message.channel.send('magic');
    }
    if (message.content.includes('The chance of receiving the Baby Mole pet from Giant Mole is 1 in what?')) {
    message.channel.send('3000');
    }
    if (message.content.includes('boss drops the Tyrannical ring')) {
    message.channel.send('callisto');
    }
    if (message.content.includes('prayer makes boosted stats last how much % longer?')) {
    message.channel.send('50');
    }
    if (message.content.includes('What NPC do you talk to to start the Dwarf Cannon quest?')) {
    message.channel.send('Captain Lawgof');
    }
    if (message.content.includes('https://i.imgur.com/U2fJMDa.jpg')) {
    message.channel.send('Museum Camp');
    }
    if (message.content.includes('Which slayer master requires a combat level of 70 to use?')) {
    message.channel.send('Chaeldar');
    }
    if (message.content.includes('What color is the Shoulder parrot received from beginner clues?')) {
    message.channel.send('green');
    }
    if (message.content.includes('the name of the resistance group trying to free Morytania from Lord draken')) {
    message.channel.send('Myreque');
    }
    if (message.content.includes('What woodcutting level do you need to use a Mithril Axe?')) {
    message.channel.send('21');
    }
    if (message.content.includes('What item is the highest prayer bonus for the feet slot?')) {
    message.channel.send('devout boots');
    }
    if (message.content.includes('What helmet are you given on completion of The Fremennik Isles quest?')) {
    message.channel.send('neitiznot');
    }
    if (message.content.includes('What part of Fossil Island do Herbiboars inhabit?')) {
    message.channel.send('mushroom forest');
    }
    if (message.content.includes('Which NPC do you talk to in order to begin the Ernest the Chicken quest?')) {
    message.channel.send('veronica');
    }
    if (message.content.includes('perk from Slayer stores cost')) {
    message.channel.send('120');
    }
    if (message.content.includes('Name any monster which drops a Zenyte Shard')) {
    message.channel.send('demonic gorilla');
    }
    if (message.content.includes('the combat level of Sarachnis?')) {
    message.channel.send('318');
    }
    if (message.content.includes('the only clue scroll tier that can give Green')) {
    message.channel.send('medium');
    }
    if (message.content.includes('https://i.imgur.com/jh0kAHG.png')) {
    message.channel.send('wintertodt camp');
    }
    if (message.content.includes('Out of Iron Ore and Coal, which is more likely to give Unidentified minerals in the mining guild')) {
    message.channel.send('coal');
    }
    if (message.content.includes('What is the name of the goddess of Monkeys and Apes')) {
    message.channel.send('Marimbo');
    }
    if (message.content.includes('What Barrows set has a healing effect')) {
    message.channel.send('guthans');
    }
    if (message.content.includes('What Crafting level do you need to make a Broodoo shield?')) {
    message.channel.send('35');
    }
    if (message.content.includes('Where is Historian Seth Minas found?')) {
    message.channel.send('varrock museum');
    }
    if (message.content.includes('What is the name of this monster, found in a quest?')) {
    message.channel.send('Evil creature');
    }
    if (message.content.includes('https://i.imgur.com/GOZvFtR.jpg')) {
    message.channel.send('swamp tar');
    }
    if (message.content.includes('What quest rewards you with an item that teleports you to the Theatre of Blood?')) {
    message.channel.send('a taste of hope');
    }
    if (message.content.includes('Who was the first player to complete the Inferno?')) {
    message.channel.send('woox');
    }
    if (message.content.includes('Doors of Dinh sit infront of which')) {
    message.channel.send('wintertodt');
    }
    if (message.content.includes('the name of the katana-wielding merchant in Port Phasmatys')) {
    message.channel.send('Ak-Haranu');
    }
    if (message.content.includes('the maximum amount of targets a Black Chinchompa can hit at once?')) {
    message.channel.send('10');
    }
    if (message.content.includes('Which NPC redeems codes for commemorative items?')) {
    message.channel.send('diango');
    }
    if (message.content.includes('is the name of the Saradomin Justiciar you fight in The Mage Arena 2')) {
    message.channel.send('Zachariah');
    }
    if (message.content.includes('In which city would you find the NPC called Hervi?')) {
    message.channel.send('keldagrim');
    }
    if (message.content.includes('the name of Juliet')) {
    message.channel.send('draul leptoc');
    }
    if (message.content.includes('What is the House Party world?')) {
    message.channel.send('330');
    }
    if (message.content.includes('Which clue scroll tier is above Hard?')) {
    message.channel.send('elite');
    }
    if (message.content.includes('boss drops the Jar of Eyes')) {
    message.channel.send('sarachnis');
    }
    if (message.content.includes('the name of the Guildmaster and founder of the Farming Guild?')) {
    message.channel.send('jane');
    }
    if (message.content.includes('Which revenant has the highest combat level')) {
    message.channel.send('dragon');
    }
    if (message.content.includes('what rate does the Ancient Wyvern drop Granite boots? 1 in')) {
    message.channel.send('600');
    }
    if (message.content.includes('What is the only ring to give a stab bonus')) {
    message.channel.send('Treasonous');
    }
    if (message.content.includes('Which Falador guard famously dies in the Garden of Tranquility quest?')) {
    message.channel.send('Bob... OR Billy... not sure. try both');
    }
    if (message.content.includes('the name of the Wine Shop owner, in Draynor Village?')) {
    message.channel.send('Fortunato');
    }
    if (message.content.includes('Uri Transform Emote')) {
    message.channel.send('300');
    }
    if (message.content.includes('Name any Ancient Magicks teleport')) {
    message.channel.send('Annakarl');
    }
    if (message.content.includes('From what quest do you get goldsmith gauntlets as a reward?')) {
    message.channel.send('family crest');
    }
    if (message.content.includes('chance of receiving a Hard Clue from a Nature Impling? 1 in')) {
    message.channel.send('100');
    }
    if (message.content.includes('clothing do you get from the Freaky Forester Random event?')) {
    message.channel.send('lederhosen');
    }
    if (message.content.includes(' mining level is required to access the upper level of the Motherlode mine?')) {
    message.channel.send('72');
    }
    if (message.content.includes('How many achievement diary regions are there?')) {
    message.channel.send('12');
    }
    if (message.content.includes('What is the maximum amount of charges a Ring of Suffering can hold?')) {
    message.channel.send('100000');
    }
    if (message.content.includes('the name of the Ardougne Farming Shop NPC')) {
    message.channel.send('richard');
    }
    if (message.content.includes('chance of inflicting venom when attacking with the Toxic Blowpipe is')) {
    message.channel.send('25');
    }
    if (message.content.includes('is the mayor of Witchhaven')) {
    message.channel.send('Mayor Eustace Hobb / Hobb');
    }
    if (message.content.includes('Strength Skillcape allows you to teleport to which guild?')) {
    message.channel.send('warriors');
    }
    if (message.content.includes('The Armadyl Crossbow model is a recolored version of which crossbow?')) {
    message.channel.send('hunters');
    }
    if (message.content.includes('Where in RuneScape would you find Hofuthand?')) {
    message.channel.send('grand exchange');
    }
    if (message.content.includes('What Spiritual Creature requires the highest Slayer level to kill')) {
    message.channel.send('mage');
    }
    if (message.content.includes('what quest do you retrieve items from the Fitzharmon brothers')) {
    message.channel.send('family crest');
    }
    if (message.content.includes('What monster drops 2000 cannonballs in one drop?')) {
    message.channel.send('corp');
    }
    if (message.content.includes('many quest points do you need to enter the Champions')) {
    message.channel.send('32');
    }
    if (message.content.includes('NPC you speak to for spectating people in the Theatre of Blood')) {
    message.channel.send('abigaila');
    }
    if (message.content.includes('https://i.imgur.com/ba8melH.png')) {
    message.channel.send('Amulet of the damned');
    }
    if (message.content.includes(' what Agility level can you use the Ape Atoll agility course')) {
    message.channel.send('48');
    }
    if (message.content.includes('What shield requires 50 agility to wear')) {
    message.channel.send('Crystal shield');
    }
    if (message.content.includes('Crafting XP do you get from spinning wool into a Ball of Wool')) {
    message.channel.send('2.5');
    }
    if (message.content.includes('RuneScape was created by the')) {
    message.channel.send('Gower');
    }
    if (message.content.includes('What is the name of this armor piece, obtainable from the Theatre of Blood?')) {
    message.channel.send('Justiciar legguards');
    }
    if (message.content.includes('What is Elvarg')) {
    message.channel.send('83');
    }
    if (message.content.includes('How many Minnows do you exchange to get 1 Raw Shark?')) {
    message.channel.send('40');
    }
    if (message.content.includes('What Construction level do you need to build a Marble lectern?')) {
    message.channel.send('77');
    }
    if (message.content.includes('the chance of receiving a Dragon chainbody from a Thermonuclear smoke devil?')) {
    message.channel.send('2000');
    }
    if (message.content.includes('What quest NPC stands next to the Astral Altar')) {
    message.channel.send('Oneiromancer');
    }
    if (message.content.includes('What agility level do you need to use the Prifddinas Agility Course')) {
    message.channel.send('75');
    }
    if (message.content.includes('What island is north-west of Fossil Island')) {
    message.channel.send('Lithkren');
    }
    if (message.content.includes('Not including the default color, how many different colors can you recolor your Graceful into')) {
    message.channel.send('7');
    }
    if (message.content.includes('much XP do you get from mining an Iron ore')) {
    message.channel.send('35');
    }
    if (message.content.includes('Which ring turns your player model into a bush')) {
    message.channel.send('ring of nature');
    }
    if (message.content.includes('Guthix appointed a Snake to guard the Tears of Guthix, and to judge who is worthy to enter, what is the snakes name?')) {
    message.channel.send('juna');
    }
    if (message.content.includes('the combat level of TzKal-Zuk?')) {
    message.channel.send('1400');
    }
    if (message.content.includes('What kind of key do you need to access the Slayer')) {
    message.channel.send('brittle');
    }
    if (message.content.includes('the name of the fishing shop owner in Catherby?')) {
    message.channel.send('harry');
    }
    if (message.content.includes('What is the name of the chieftain of Rellekka?')) {
    message.channel.send('brundt');
    }
    if (message.content.includes('Name either one of the Grosteque Guardians')) {
    message.channel.send('dusk');
    }
    if (message.content.includes('What fishing level do you need for Barbarian Fishing?')) {
    message.channel.send('48');
    }
    if (message.content.includes('What type of Tree requires level 50 Woodcutting to cut?')) {
    message.channel.send('mahogany');
    }
    if (message.content.includes('Where is Robin Hood, the NPC, found?')) {
    message.channel.send('Port Phasmatys');
    }
    if (message.content.includes('Who is the protagonist of the 2017 Christmas holiday event?')) {
    message.channel.send('wise old man');
    }
    if (message.content.includes('What is the name of the superior version of the Jelly monster?')) {
    message.channel.send('Vitreous Jelly');
    }
    if (message.content.includes('the name of the hunchbacked fisher on the shore of Brimhaven?')) {
    message.channel.send('Lubufu');
    }
    if (message.content.includes('What magic level is required to use the Smoke Blitz spell?')) {
    message.channel.send('74');
    }
    if (message.content.includes('https://i.imgur.com/Wv6feNx.png')) {
    message.channel.send('Toktz-ket-xil');
    }
    if (message.content.includes('the name of the Mage Arena banker?')) {
    message.channel.send('Gundai');
    }
    if (message.content.includes('Which staff provides infinite air and earth runes?')) {
    message.channel.send('dust');
    }
    if (message.content.includes('What is the name of the superior version of the Cave Crawler monster?')) {
    message.channel.send('Chasm Crawler');
    }
    if (message.content.includes('the maximum total level')) {
    message.channel.send('2277');
    }
    if (message.content.includes('what city would you find the Silver Cog Director')) {
    message.channel.send('Keldagrim');
    }
    if (message.content.includes('Complete the name of this miniquest:')) {
    message.channel.send('alfred');
    }
    if (message.content.includes('How often do Minnow fishing spots move')) {
    message.channel.send('15');
    }
    if (message.content.includes('the name of the NPC in the Nature Grotto')) {
    message.channel.send('Filliman Tarlock');
    }
    if (message.content.includes('construction level is required to construct a Mounted Emblem')) {
    message.channel.send('80');
    }
    if (message.content.includes('What Magic level do you need to use the Enfeeble spell')) {
    message.channel.send('73');
    }
    if (message.content.includes('the name of the NPC which insures pets?')) {
    message.channel.send('Probita');
    }
    if (message.content.includes('Name one of the upgraded versions of Silverlight')) {
    message.channel.send('arclight');
    }
    if (message.content.includes('which island would you find Rimae Sirsalis')) {
    message.channel.send('Lunar isle');
    }
    if (message.content.includes('https://i.imgur.com/7BYG3Wq.png')) {
    message.channel.send('West Ardougne');
    }
    if (message.content.includes('Which NPC is the solution to the cryptic clue')) {
    message.channel.send('Father Jean');
    }
    if (message.content.includes('Name any RuneScape God')) {
    message.channel.send('saradomin');
    }
    if (message.content.includes('What goes G.A.G. stand for')) {
    message.channel.send('Group of Advanced Gardeners');
    }
    if (message.content.includes('Under what castle does the Theatre of Blood lie')) {
    message.channel.send('Ver sinhaza');
    }
    if (message.content.includes('is a prayer which increases your strength bonus by how much %')) {
    message.channel.send('15');
    }
    if (message.content.includes('What strength level do you need to open the entrance to the Bandos')) {
    message.channel.send('70');
    }
    if (message.content.includes('https://i.imgur.com/AgPbpfV.png')) {
    message.channel.send('nardah');
    }
    if (message.content.includes('Who is the Taskmaster for the Varrock Diaries')) {
    message.channel.send('toby');
    }
    if (message.content.includes('The Rigour prayer increases your ranged attack bonus by how much %')) {
    message.channel.send('20');
    }
    if (message.content.includes('What Hunter level do you need to catch Black chinchompas?')) {
    message.channel.send('73');
    }
    if (message.content.includes('the maximum amount of XP you can get in a skill')) {
    message.channel.send('200m');
    }
    if (message.content.includes('What is the name of the pet thats obtainable from the Theatre of Blood')) {
    message.channel.send('lil zik');
    }
    if (message.content.includes('Village, is the brother of which famous NPC')) {
    message.channel.send('hans');
    }
    if (message.content.includes('How many water runes does a single Ice Barrage cast cost')) {
    message.channel.send('6');
    }
    if (message.content.includes('Where is the only place you can find Sulliuscep')) {
    message.channel.send('fossil island');
    }
    if (message.content.includes('From what do you get the equippable Shoulder Parrot')) {
    message.channel.send('beginner clue');
    }
    if (message.content.includes('https://i.imgur.com/8sQio4W.png')) {
    message.channel.send('fenkenstrain castle');
    }
    if (message.content.includes('Which monster drops the Jar of swamp')) {
    message.channel.send('zulrah');
    }
    if (message.content.includes('What Agility level do you need to use the Arceuus Essence Mine shortcut')) {
    message.channel.send('73');
    }
    if (message.content.includes('How much XP do you get from using a Dragon Bone on a lit Gilded Altar')) {
    message.channel.send('252');
    }
    if (message.content.includes('https://i.imgur.com/n0g6EYV.png')) {
    message.channel.send('lunar isle');
    }
    if (message.content.includes('https://i.imgur.com/M5hYiHt.png')) {
    message.channel.send('fishing guild');
    }
    if (message.content.includes('At what Runecrafting level do you start making 10 Air Runes per essence')) {
    message.channel.send('99');
    }
    if (message.content.includes('the only monster that always drops an Ancient shard')) {
    message.channel.send('skotizo');
    }
    if (message.content.includes('How many skills are there')) {
    message.channel.send('23');
    }
    if (message.content.includes('In what quest do you fight the Ice Troll King')) {
    message.channel.send('The Fremennik Isles');
    }
    if (message.content.includes('Which NPC will create a Dragonfire Shield for the player if they do not have the required Smithing leve')) {
    message.channel.send('Oziach');
    }
    if (message.content.includes('What item is used to fill a Druid Pouch')) {
    message.channel.send('Mort myre fungi');
    }
    if (message.content.includes('Bandosian guards drop 2 rare items with a 1 in 1 million chance, name either of them')) {
    message.channel.send('bandos boots');
    }
    if (message.content.includes('Name the blue coloured crystal that Cerberus drops.')) {
    message.channel.send('eternal');
    }
    if (message.content.includes('https://i.imgur.com/8qonq5M.png')) {
    message.channel.send('Flambeed ');
    }
    if (message.content.includes('There are 6 types of Rune God armor sets:')) {
    message.channel.send('ancient');
    }
    if (message.content.includes('What is the name of the random event person who goes around donating to victims of crime')) {
    message.channel.send('Rick Turpentine');
    }
    if (message.content.includes('Out of these kinds of Wyverns, which has the highest combat level')) {
    message.channel.send('long-tailed');
    }
    if (message.content.includes('What boss drops the Jar of souls')) {
    message.channel.send('cerberus');
    }
    if (message.content.includes('What NPC gives the player a Collection Log')) {
    message.channel.send('the collector');
    }
    if (message.content.includes('What NPC do you talk to for starting the Monkey Madness quest')) {
    message.channel.send('Narnode Shareen');
    }
    if (message.content.includes('What is the name of the special weapon used during the first phase of killing Lady Verzik')) {
    message.channel.send('dawnbringer');
    }
    if (message.content.includes('How many clue scroll tiers are there?')) {
    message.channel.send('6');
    }
    if (message.content.includes('What Slayer level do you need to kill Cerberus')) {
    message.channel.send('91');
    }
    if (message.content.includes('Which item gives the highest Magic Attack bonus out of: Occult')) {
    message.channel.send('occult');
    }
    if (message.content.includes('Which GWD Boss has the highest combat level')) {
    message.channel.send('zammy');
    }
    if (message.content.includes('What Herblore level do you need to mix Extra Strong Weapon Poison Potions')) {
    message.channel.send('73');
    }
    if (message.content.includes('Arrav, famous owner of the Shield of Arrav, has a statue of himself in which building')) {
    message.channel.send('Heroes guild');
    }
    if (message.content.includes('At Castle Wars, whats the color/god of the middle portal')) {
    message.channel.send('guthix');
    }
    if (message.content.includes('https://i.imgur.com/OPlRcgF.jpg')) {
    message.channel.send('draynor village');
    }
    if (message.content.includes('In the 2019 Christmas Event, players received a shield with what type of NPC on it')) {
    message.channel.send('gnome');
    }
    if (message.content.includes('the name of the Mace shop owner in Falador?')) {
		message.channel.send('Flynn');
    }
    if (message.content.includes('In what quest do you have to solve a puzzle with a skull on a door?')) {
		message.channel.send('a taste of hope');
    }
    if (message.content.includes('https://i.imgur.com/hxY9YH5.png')) {
		message.channel.send('molanisk');
		}
    if (message.content.includes('https://i.imgur.com/VSwcxKV.png')) {
		message.channel.send('82');
		}
    if (message.content.includes('https://i.imgur.com/jh0kAHG.png')) {
		message.channel.send('wintertodt camp');
		}
    if (message.content.includes('The Altar of Guthix is found in which town')) {
		message.channel.send('Taverley');
		}
    if (message.content.includes('George Laxmeister, Arnold Lydspor, Ramara du Croissant and Herman Caranos all reside in which town?')) {
		message.channel.send('Piscatoris Fishing colony');
		}
    if (message.content.includes('https://i.imgur.com/TotObmx.png')) {
		message.channel.send('Mining guild');
		}
    if (message.content.includes('What mining level do you need to mine Lunar ore?')) {
		message.channel.send('60');
		}
    if (message.content.includes('How many arms does a Karambwan have?')) {
		message.channel.send('8');
		}
    if (message.content.includes('https://i.imgur.com/JzrxcBe.png')) {
		message.channel.send('pest control');
		}
    if (message.content.includes('Rommik, Brian, Hetty and Taria all live in which town?')) {
		message.channel.send('rimmington');
		}
    if (message.content.includes('the name of the Witch in Rimmington?')) {
		message.channel.send('hetty');
		}
    if (message.content.includes('level do you need to pickpocket a Master Farmer')) {
		message.channel.send('38');
		}
    if (message.content.includes('https://i.imgur.com/Xky6aFW.png')) {
		message.channel.send('Burthorpe');
		}
    if (message.content.includes('dropping a Black Mask is 1 in')) {
		message.channel.send('512');
		}
    if (message.content.includes('https://i.imgur.com/ZGbaVwM.png')) {
		message.channel.send('woodcutting guild');
		}
    if (message.content.includes('Name any Content Developer for OSRS')) {
		message.channel.send('ash');
    }
    /*
    if (message.content.includes('')) {
		message.channel.send('');
		}
    if (message.content.includes('')) {
		message.channel.send('');
		}
    if (message.content.includes('')) {
		message.channel.send('');
		}
    if (message.content.includes('')) {
		message.channel.send('');
		}
    if (message.content.includes('')) {
		message.channel.send('');
		}
    if (message.content.includes('')) {
		message.channel.send('');
		}
    if (message.content.includes('')) {
		message.channel.send('');
		}
    if (message.content.includes('')) {
		message.channel.send('');
		}
		*/
  }

//MEE6 DELETE MESSAGES
if (message.author.bot) {
  if (message.content.includes("you can't use that")) {message.delete();}
  if (message.content.includes("this command is disabled in this channel")) {message.delete();}
}

//REACT TO LOAN MESSAGES
if (message.author.bot) {
  if (message.content.includes("is loaning to")) {message.react("✅");}
  if (message.content.includes("has a collateral trade with")) {message.react("✅");}
  if (message.content.includes("has repaid")) {message.react("✅");}
  if (message.content.includes("is returning to")) {message.react("✅");}
  
  if (message.content.includes("is loneing to")) {message.react("✅");} //for me only
  if (message.content.includes("this command is for the bot creator only")) {message.react("❌");}
}
});





//ADD REACTED MEMBERS TO LOAN MESSAGES
client.on('messageReactionAdd', (messageReaction, user) => { 
  if(user.bot) return; 
  const { message, emoji } = messageReaction; 
  if(emoji.name === "✅") { 
    if(message.author.bot) { 
            // code to run when that emoji is reacted on …
            message.edit(message.content + `\n${user} has reacted to confirm`);
    }
  }
});

//LOG DELETED MESSAGES WITH TIMESTAMP
client.on("messageDelete", (messageDelete) => {
  require('console-stamp')(console, '[mm.dd.yy @ HH:MM:ss]');
  console.log(` \nDELETED MESSAGE: "${messageDelete.content}"\nIN CHANNEL: "${messageDelete.channel.name}"\nBY AUTHOR: "${messageDelete.author.tag}"\n `)
 });

client.login(process.env.TOKEN);