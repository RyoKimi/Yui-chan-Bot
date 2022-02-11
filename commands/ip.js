const { MessageEmbed } = require('discord.js')
module.exports.config = {
    name: "ip",
    aliases: ['getip', "atelier-ip", 'serverip', 'ipsv'],
    group: 'misc',
    description: "Return AtelierMC ip",
    usage: 'at!ip',
    example: 'at!ipsv'
}

module.exports.run = (client, message, args) => {
    const embed = new MessageEmbed()
    embed.setTitle("AtelierMC IP")
    embed.setDescription("__**Địa chỉ để kết nối đến AtelierMC**__")
    embed.addFields(
      { name: "IP Java", value: "play.ateliermc.tech ", inline: true },
      { name: "IP Java", value: "play.atelier-mc.ga", inline: true },
      { name: "IP Bedrock", value: "bedrock.ateliermc.tech |       bedrock.atelier-mc.ga |      Port: 19132", inline: true },
      { name: "Phiên bản", value: "1.16 - 1.18 | Lastest Bedrock version ( not Beta)" }
    )
    embed.setFooter("AtelierMC", message.guild.iconURL({ size: 1024, dynamic: true }))
    embed.setColor('00ffff')
    embed.setThumbnail(message.guild.iconURL({ size: 1024, dynamic: true }))

    message.channel.send(embed)
}