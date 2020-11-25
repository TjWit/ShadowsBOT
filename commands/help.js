const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "sends you an embed with help :)",
    execute(message, args){
        const helpEmbed = new Discord.MessageEmbed()
	.setColor('#7a1111')
	.setTitle('TjSploits Help')
	.setURL('https://sites.google.com/view/tjexploits/home')
	.setAuthor('TjSploits', 'https://img.techpowerup.org/201113/tjsploits-logo.png', 'https://sites.google.com/view/tjexploits/home')
	.setDescription('Hmm, I see you need some help. Well here I am!')
	.setThumbnail('https://img.techpowerup.org/201113/tjsploits-logo.png')
	.addFields(
		{ name: 'Commands', value: 'For a list of all the commands use `$commands`', inline: true },
		{ name: 'ModMail', value: 'To get in contact with the mods please use the command `$contact`', inline: true },
	)
	.addField('Mods', 'We are always here to help, please just ping any of us! `$mods`', true)
	.setTimestamp()
	.setFooter(`Requested by ${message.author.username}`, `https://img.techpowerup.org/201123/6df1e1afcc9a4b7f0544efd4c1e3c6be.jpg`)

message.channel.send(helpEmbed);

    }
}