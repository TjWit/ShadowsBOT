const Discord = require('discord.js');

module.exports = {
    name: 'falsepositive',
    description: "says what an fp is",
    execute(message, args){
        const fpEmbed = new Discord.MessageEmbed()
	.setColor('#1BFF00')
	.setTitle('What is a false positive?')
	.setURL('https://sites.google.com/view/tjexploits/home')
	.setAuthor('TjSploits', 'https://img.techpowerup.org/201113/tjsploits-logo.png', 'https://sites.google.com/view/tjexploits/home')
	.setDescription('Hmm, I see you needed help remembering what a false positive is! No worries!')
	.setThumbnail('https://img.techpowerup.org/201113/tjsploits-logo.png')
	.addFields(
		{ name: 'What is an executor exactly?', value: 'False positive, which is sometimes written as f/p, is an expression commonly used in cybersecurity to denote that a file or setting has been flagged as malicious when its not.', inline: true },
	)
	.setTimestamp()
	.setFooter(`Requested by ${message.author.username}`, `https://img.techpowerup.org/201113/tjsploits-logo.png`)

message.channel.send(fpEmbed);

    }
}