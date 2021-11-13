const { QueryType } = require('discord-player');
const { SlashCommand} = require('slash-create');

module.exports = class extends SlashCommand{
	
	constructor(creator) {
		super(creator, {
			name: 'pause',
			description: 'Pause a song',
			guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
		});	
	}
	
	async run (ctx) {
		
		const { client } = require('..');
		await ctx.defer();
		
		const queue = await client.player.getQueue(ctx.guildID);
		if (!queue || !queue.playing) return void ctx.sendFollowUp({ content: '? | No music is being played!' });
		const paused = queue.setPaused(true);
		await ctx.sendFollowUp({ content: paused ? "⏸ | Paused!" : "❌ | Something went wrong!" });
		
	}
	
};