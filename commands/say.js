const Discord = require('discord.js');

module.exports = {
    name: 'say',
    description: 'Reapeats your message than deletes you because @Shadow is better :)',
    async execute(message, args) {
        const msg = args.join(" ");
        if (!msg) return message.channel.send('You need to spesify a mesage you want me to say');

        message.delete();
        message.channel.send(msg);
    }
}