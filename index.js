const {Client, MessageEmbed} = require('discord.js');
const bot = new Client({intents: 131071});

bot.on("ready" , () => {
    console.log("Louise is on air...")
    bot.user.setActivity("Sex&Cie", {type: "WATCHING"})
});

// Variables de rôles séparateurs
var Rgenre = "971011468088705114"
var Rorient = "971011387767799828"
var Rage = "971011312089968660"
var Rrelat = "971011246197456926"
var Rdm = "971011123711188992"
var Rvoc = "971010788405948457"
var Rnude = "971010552132431892"
var Rkink = "971010656042102845"

// Variable salons
var Sbienvenue = "970037715586396201"
var Saurevoir = "970037715586396202"
var Sannonce = "972810370995585074"
var Sjugement = "970272096448024617"
var Ssuggestion = "970275838656380948"

bot.on("guildMemberAdd" , member =>{
        var Wrandom = ["Un personnage est apparu","Un nouvel inconnu à la collection !","Oh ! Hey !"];
        var WrandomPick = Wrandom[Math.floor(Math.random() * Wrandom.length)];

        const Wembed = new MessageEmbed()
            .setAuthor({name: member.guild.name})
            .setColor('GREEN')
            .setTitle(`${WrandomPick}`)
            .setDescription(`Bienvenue ${member.displayName}`)
            .setThumbnail(member.guild.iconURL())
            .setImage(member.displayAvatarURL())
            .setTimestamp()

    bot.channels.cache.get(Sbienvenue).send({embeds: [Wembed]});
    member.roles.add(Rgenre);
    member.roles.add(Rorient);
    member.roles.add(Rage);
    member.roles.add(Rrelat);
    member.roles.add(Rdm);
    member.roles.add(Rvoc);
    member.roles.add(Rnude);
    member.roles.add(Rkink);
});

bot.on("guildMemberRemove" , member =>{
    var Brandom = ["Un personnage est disparu :(","Un nouvel inconnu parti trop tôt...","Oh ! Au revoir..."];
    var BrandomPick = Brandom[Math.floor(Math.random() * Brandom.length)];

    const Bembed = new MessageEmbed()
        .setAuthor({name: member.guild.name})
        .setColor('RED')
        .setTitle(`${BrandomPick}`)
        .setDescription(`Au revoir ${member.user.tag}`)
        .setThumbnail(member.guild.iconURL())
        .setImage(member.displayAvatarURL())
        .setTimestamp()

bot.channels.cache.get(Saurevoir).send({embeds: [Bembed]});
});

bot.on("messageCreate", message => {
    if(message.author.bot) return

    if(message.content === `&sepa ${message.mentions.members.first()}`) {
        var mmember = message.mentions.members.first()
        mmember.roles.add(Rgenre)
        mmember.roles.add(Rorient)
        mmember.roles.add(Rage)
        mmember.roles.add(Rrelat)
        mmember.roles.add(Rdm)
        mmember.roles.add(Rvoc)
        mmember.roles.add(Rnude)
        mmember.roles.add(Rkink)
        message.reply(`Rôles ajoutés à ${mmember} !`).then(message.delete(5000));
    };
});

bot.login(process.env.TOKEN)
