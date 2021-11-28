const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pause')
		.setDescription('Pauses currently playing song.'),
	async execute(interaction) {
		
		const { client } = require('..');
		await interaction.defer();
		
		const queue = await client.player.getQueue(interaction.guildID);
		if (!queue || !queue.playing) return void interaction.sendFollowUp({ content: '? | No music is being played!' });
		const paused = queue.setPaused(true);
		await interaction.sendFollowUp({ content: paused ? "⏸ | Paused!" : "❌ | Something went wrong!" });
		
	},
};
