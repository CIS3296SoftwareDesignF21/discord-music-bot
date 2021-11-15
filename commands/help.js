const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Displays all available commands.'),
    async execute(interaction)
    {
        interaction.reply('/help\n  Displays the help menu\n/play <query>\n Plays specified song by YouTube link or by search terms\n/pause\n   Pauses current song\n/leave\n   Makes bot leave channel');
    }
};