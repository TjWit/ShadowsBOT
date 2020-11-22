const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'gets the ping and bot latancy :)',
    async execute(message, args) {
        message.channel.send('Getting your ping...').then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            message.reply(`🤖Bot latency: **${ping}**, 📶API Latency: **${message.client.ws.ping}**`)
        })
    }
}