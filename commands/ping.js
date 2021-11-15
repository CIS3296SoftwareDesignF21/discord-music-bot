const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Responds with Pong!'),
    async execute(interaction) {
        interaction.reply('Pong!');
    },
};