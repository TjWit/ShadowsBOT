const Discord = require('discord.js');

module.exports = {
    name: 'website',
    description: "sends the our website link",
    execute(message, args){
        const wbstEmbed = new Discord.MessageEmbed()
	.setColor('#1BFF00')
	.setTitle('TjSploits Website')
    .setURL('https://sites.google.com/view/tjexploits')
    .setTimestamp()
    .setFooter(`Requested by ${message.author.username}`)
    
message.channel.send(wbstEmbed);

    }
}