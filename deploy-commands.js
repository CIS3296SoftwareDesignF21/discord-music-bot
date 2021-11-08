const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { CommandOptionType, Command } = require('slash-create');
require("dotenv").config();

const commands = [
	{
		name: "play",
		description: "Plays a song!",
		options: [
			{
				name: "query",
				type: CommandOptionType.STRING,
				description: "The song you want to play",
				required: true
			}
		]
	},
	{
		name: "pause",
		description: "Pause a song!",
		options: [
			{
				name: "query",
				type: CommandOptionType.STRING,
				description: "The song you want to pause",
				required: true
			}
		]
	}
];
// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const clientId = process.env.clientId;
const guildId = process.env.guildId;

// for (const file of commandFiles) {
// 	const command = require(`./commands/${file}`);
// 	commands.push(command.data.toJSON());
// }

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
