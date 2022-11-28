const { EmbedBuilder } = require("discord.js")
const config = require("../config.js")
const request = require('request');
exports.run = async (client, message, args) => {

 
request(`https://api.mcsrvstat.us/2/${config.ip}`, function (error, response, body) {
  const json_body = JSON.parse(body);
  const onlinePlayers = json_body.players.online;
       const embed = new EmbedBuilder()
       .setTitle("Minecraft - Godzilla")
       .setDescription(`${config.name} Sunucusunda ${onlinePlayers} Aktif!`)
       .setColor("#ff0000")
  message.channel.send({embeds: [embed]})

})
}



exports.conf = {
  aliases: []
}

exports.help = {
  name: "sunucu"
}