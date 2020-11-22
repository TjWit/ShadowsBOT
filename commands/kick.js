const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'kicks a user :)',
    async execute(message, args) {
        const kickUser = message.mentions.users.first();

        if (!message.member.hasPermission('ADMINISTRATOR')) {
            let falsekickEmbed = new Discord.MessageEmbed()
            .setTitle('Kick Member')
            .setDescription('Sorry, but not sorry :)... You do not have permission to do that!')
            .setTimestamp()
            .setColor('#7a1111');
            return message.channel.send(falsekickEmbed)
        }

        if (kickUser) {
            var member = message.guild.member(kickUser);

            if (member) {
                member.kick('You have not listined to the #rules').then(() => {
                    let kickEmbed = new Discord.MessageEmbed()
                    .setTitle('Kick Member')
                    .setDescription(`You kicked the user <${kickUser}> sucessfully ✔`)
                    .addFields(
                        { name: '**Moderator**', value: `${message.author}`}
                    )
                    .setTimestamp()
                    .setFooter('TjSploits')
                    .setColor('#55eb34');
                    message.channel.send(kickEmbed);
                })
            }
        }
    }
}