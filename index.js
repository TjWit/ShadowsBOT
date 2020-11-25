const Discord = require('discord.js');

const fs = require('fs');

const client = new Discord.Client();

const prefix = '$'

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require (`./commands/${file}`);

    client.commands.set(command.name, command);
}

const welcome = require('./commands/welcome')

//When bot logs on
client.on('ready', () => {
    console.log('TjSploits bot is now online ✔');
    client.user.setActivity(`you DM me for help`, {type: 'WATCHING'})
welcome(client)
})
//Command Handler
client.on('message', async (message) =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()


    if (command == 'ping') {
       client.commands.get('ping').execute(message, args);
    }
    
    if (command ==='kick') {
        client.commands.get('kick').execute(message, args);
    }

    if (command ==='ban') {
        client.commands.get('ban').execute(message, args);
    }

    if (command ==='help') {
        client.commands.get('help').execute(message, args);
    }

    if (command ==='clear') {
        client.commands.get('clear').execute(message, args);
    }

    if (command ==='falsepositive') {
        client.commands.get(falsepositive).execute(message, args);
    }

    if (command ==='fp') {
        client.commands.get(falsepositive).execute(message, args);
    }

    if (command ==='commands') {
        client.commands.get(commands).execute(message, args);
    }

    if (command ==='cmds') {
        client.commands.get(commands).execute(message, args);
    }

    if (command ==='executor') {
        client.commands.get(executor).execute(message, args);
    }
})
//Modmail Admin Message
client.on('message', message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/)

    if (!message.channel.name.includes('mail')) {
        return;
    } else {
        if (isNaN(args[0])) {
            return message.channel.send('That is not a valid ID')
        }
        let storage = message.guild.members.cache;
        let memberId = storage.find(member => member.id.toLowerCase() === args[0])

        if (memberId) {
            const msg = message.content.slice(args[0].length + prefix.length).split(" ").join(" ");
            let mmEmbed = new Discord.MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`<@${message.author}>\n===================\n${msg}`)
            .setColor('#2e0200')
            .setFooter('TjSploits/Shadows')
            .setTimestamp();
            client.users.fetch(args[0]).then(user => user.send(mmEmbed).catch(err => console.log(err)));

            message.channel.send('Message was sent succesfully ✅')
        } else {
            return message.channel.send('Could not find that user 🚫');
        }
    }
})
//Modmail User 
client.on('message', message => {
    var msg = message.content;
    var n = message.author.username;

    if (message.channel.type ==='dm') {
        if (message.author.bot) return;

        let blacklisted = ['fuck', 'nigger', 'fucking', 'bitch', '$help', '$say', '$kick', '$ban', '$ping' ]

        let foundInText = false;
        for (var i in blacklisted) {
            message.delete
            if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
        }
        if (foundInText) {
            return message.channel.send('Please dont use that language here')
        }

        message.channel.send('Your message was sent, please wait for a response ✅');

        const mailMessage = `${message.author} ${msg}`
        let mmaEmbed = new Discord.MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(mailMessage)
            .setColor('#2e0200')
            .setFooter('TjSploits/Shadows')
            .setTimestamp();

        client.channels.fetch('779360430345945168').then(user => user.send(mmaEmbed).catch(err => console.log(err)));
    }
})

client.login(process.env.token);