const fs = require('fs');
const {Client, Collection, Intents} = require('discord.js');
require("dotenv").config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
<<<<<<< HEAD
	client.commands.set(command.data, command);
=======
	client.commands.set(command.commandName, command);
>>>>>>> de1b3a1d087ff6b0ace654cf54f013fc9a2c5ab9
}

client.once('ready', () => {
	console.log('Ready!');
});



client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(process.env.TOKEN);
