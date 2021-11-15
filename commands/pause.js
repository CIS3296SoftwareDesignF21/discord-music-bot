const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('pause')
		.setDescription('Pauses currently playing song.'),
	async execute(interaction) {
		
		const { client } = require('..');
		await ctx.defer();
		
		const queue = await client.player.getQueue(ctx.guildID);
		if (!queue || !queue.playing) return void ctx.sendFollowUp({ content: '? | No music is being played!' });
		const paused = queue.setPaused(true);
		await ctx.sendFollowUp({ content: paused ? "⏸ | Paused!" : "❌ | Something went wrong!" });
		
	},
};