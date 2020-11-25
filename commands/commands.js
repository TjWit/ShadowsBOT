const Discord = require('discord.js');

module.exports = {
    name: 'commands',
    description: "sends you an embed with all the commands",
    execute(message, args){
        const cmdsEmbed = new Discord.MessageEmbed()
	.setColor('#1BFF00')
	.setTitle('Shadows Commands')
	.setURL('https://sites.google.com/view/tjexploits/home')
	.setAuthor('TjSploits', 'https://img.techpowerup.org/201113/tjsploits-logo.png', 'https://sites.google.com/view/tjexploits/home')
	.setDescription('Hmm, I see you needed help remembering some commands! No worries!')
	.setThumbnail('https://img.techpowerup.org/201113/tjsploits-logo.png')
	.addFields(
		{ name: 'Command will be here', value: 'Description will be here'},
        { name: '$help', value: 'Sends the help embed (this is probably where you came from)'},
        { name: '$commands', value: 'This is it!', inline: true},
        { name: '$cmds', value: "This command is just another way to get this embed", inline: true},
        { name: '$youtube', value: 'Just a simple text message that sends the link to TjExploits YouTube channel'},
        { name: '$website', value: 'Once again just a simple command the sends the link to TjExploits website'},
        { name: '$executor', value: "If your dumb and you dont know what an executor is :)"},
        { name: '$falsepositive', value: 'Explains what a false positive is, can also be ran through `$fp`'}
	)
	.setTimestamp()
	.setFooter(`Requested by ${message.author.username}`, `https://img.techpowerup.org/201113/tjsploits-logo.png`)

message.channel.send(cmdsEmbed);

    }
}