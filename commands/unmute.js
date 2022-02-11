const ms = require('ms')
const { Client, Message, MessageEmbed } = require('discord.js');
const fs =require('fs')

module.exports.config = {
    name: "unmute",
    aliases: ['um'],
    permissions: ['MANAGE_MESSAGES'],
    guildOnly: true,
    group: 'moderation',
    botperms: ['EMBED_LINKS'],
    description: "Unmute a user",
    usage: '.unmute [name]',
    example: '.unmute @Slayer',
}

module.exports.run = async (client, message, args) => {
        const userInput = message.mentions.members.last() ? message.mentions.members.last() : args[0]
    let mm ;
    try {
    if (userInput === args[0]) mm = await message.guild.members.fetch(args[0]); else mm = await message.mentions.members.last();
    } catch {

    }
    if (!mm) return message.channel.send(client.noMember);

    if (mm.id === client.user.id) return message.channel.send(client.main);

    let muteRole = require('../database/muterole.json')[message.guild.id].role;

    if (!require('../database/muterole.json')[message.guild.id]) {
        return message.channel.send(client.noMuteRole);
    }

    try {
        await message.guild.roles.fetch(muteRole)
    } catch {
        return message.channel.send(this.muteRoleInvalid)
    }
    let mRoleFetch = await message.guild.roles.fetch(muteRole);


    try {
    if (mRoleFetch.position >= message.guild.me.roles.highest.position) {
        return message.channel.send(client.roleHigherThanMe)
    }
} catch {

}
if (!mm.roles.cache.has(muteRole)) { return message.channel.send("**User is not Muted!**")}
else {
mm.roles.remove(muteRole).then(() => {
const UnMuted = new MessageEmbed()
.setColor(client.color)
.setDescription(`${client.success} _\`${mm.user.username}\` has been unmuted_ `)
message.channel.send(UnMuted)
})
}
}