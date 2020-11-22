const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'bans a user :)',
    async execute(message, args) {
        const banUser = message.mentions.users.first();

        if (!message.member.hasPermission('ADMINISTRATOR')) {
            let falsebanEmbed = new Discord.MessageEmbed()
                .setTitle('Kick Member')
                .setDescription('Sorry, but not sorry :)... You do not have permission to do that!')
                .setTimestamp()
                .setColor('#7a1111');
            return message.channel.send(falsebanEmbed)
        }

        if (banUser) {
            var member = message.guild.member(banUser);

            if (member) {
                member.ban({
                    reason: 'You have either broken rule #1 or have not listined to the ADMINS'
                }).then(() => {
                    let banEmbed = new Discord.MessageEmbed()
                        .setTitle('Ban Member')
                        .setDescription(`You banned the user <${banUser}> sucessfully ✔`)
                        .addFields(
                            { name: '**Moderator**', value: `${message.author}`}
                        )
                        .setTimestamp()
                        .setFooter('TjSploits')
                        .setColor('#55eb34');
                    message.channel.send(banEmbed);
                })
            }
        }
    }
}