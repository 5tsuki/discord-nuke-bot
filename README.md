# Discord Nuke Bot

![Screenshot](https://i.imgur.com/nwRhvrE.png)

## What does it do?

It's a Discord Bot to troll your friends, nothing else.
When the command `!nuke` is used the bot disconnects all the user connected in any voice channel.

## Setup

- Go to [Discord's Developer Portal](https://discord.com/developers/applications) and create your Bot and copy your bot token.
- Create a `.env` file containing `DISCORD_API_TOKEN=yourtoken`.
- Change the string containing `serverid` and `channelid` in `index.js`. (You might change it in a way to get them dynamically, I really wasn't bothered to do that)
- Use the [DiscordAPI Permission Calculator](https://discordapi.com/permissions.html#2147483647) to invite the bot to your own server.

## Built With

- [Discord.js](https://discord.js.org/) - A powerful node.js module that allows you to interact with the Discord API very easily.
