module.exports = (client) => {
    const guild = '770687714471313409'  
    const ChannelID ='770688287442075698' // Channel You Want the Welcome Message to be Sent
    const targetChannelID = '770688288901169172' // Channel Where Like #rules
    
    client.on('guildMemberAdd', (member) => {
        console.log(member)
    
        const messaga = `Welcome to Aeros Arabia! Thanks For Joining Our Airlines.<@${member.id}>  Please Verify Here  ${member.guild.channels.cache.get(targetChannelID).toString()}` // Ignore Above
        
        const channel = member.guild.channels.cache.get(ChannelID)
        channel.send(`Hello <@${member.id}> Welcome to **TjSploits**. Thanks for joining our server. Please read the rules here ${member.guild.channels.cache.get(targetChannelID).toString()}Have fun!, Your also member #${guild.member_count}!`) // Custom Welcome Message
        })
    }
    