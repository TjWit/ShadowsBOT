const Discord = require('discord.js');

module.exports = {
    name: 'executor',
    description: "says what an executor is",
    execute(message, args){
        const exeEmbed = new Discord.MessageEmbed()
	.setColor('#1BFF00')
	.setTitle('What is an executor?')
	.setURL('https://sites.google.com/view/tjexploits/home')
	.setAuthor('TjSploits', 'https://img.techpowerup.org/201113/tjsploits-logo.png', 'https://sites.google.com/view/tjexploits/home')
	.setDescription('Hmm, I see you needed help remembering some what a `Executor` is! No worries!')
	.setThumbnail('https://img.techpowerup.org/201113/tjsploits-logo.png')
	.addFields(
		{ name: 'What is an executor exactly?', value: '**Script Executors:** These exploits are centered around allowing users load Lua code into the Roblox client to execute as a regular script or disembodied code. Script executors tend not to be just limited to Lua you run in game or Studio, but also come with special features.', inline: true },
	)
	.setTimestamp()
	.setFooter(`Requested by ${message.author.username}`, `https://img.techpowerup.org/201113/tjsploits-logo.png`)

message.channel.send(exeEmbed);

    }
}