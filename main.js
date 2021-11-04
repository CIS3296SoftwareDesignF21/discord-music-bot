const {Client, Intents} = require('discord.js');
require("dotenv").config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log('Fast_Music_Bot is online!');
});

client.login(process.env.TOKEN);