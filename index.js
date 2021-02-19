const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user
        .setPresence({ activity: { name: 'ooya' }, status: 'brr' });
});

client.on('message', (msg) => {
    if (msg.content === '!nuke') {
        const list = client.guilds.cache.get('serverid'); // change the string with server id where you invited the bot in.
        let numberOfKicks = 0;
        let whoWasKicked = '';
        list.members.cache.forEach((member) => {
            if (member.voice.kick()) {
                whoWasKicked += `${member.user} \n`;
                numberOfKicks++;
            }
        });
        const nukeMessage = new Discord.MessageEmbed()
            .setColor('#E70E00')
            .setDescription(`${msg.author} ha droppato una nuke`)
            .setThumbnail('https://webstockreview.net/images/nuke-clipart-vector-1.png')
            .addFields(
                { name: 'Data e ora', value: `${new Date(msg.createdTimestamp).toUTCString()}`, inline: true },
                { name: 'Numero di utenti disconnessi', value: `${numberOfKicks}`, inline: true },
                { name: 'Utenti disconnessi', value: `${whoWasKicked}`, inline: false }
            );
        const channel = client.channels.cache.find((channel) => channel.id === 'channelid'); // change the string with channel id where it needs to send the recap message
        channel.send(nukeMessage);
    }
});

client.login(process.env.DISCORD_API_TOKEN);
