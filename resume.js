const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	
	data: new SlashCommandBuilder()
	
            .setName('resume')
            .setDescription('Resume the current song'),

    async execute(interaction) {
        
        const { client } = require('..');
        await ctx.defer();
		
		const queue = client.player.getQueue(ctx.guildID);
		if (!queue || !queue.playing) return void ctx.sendFollowUp({ content: '❌| No music is being played!' });
		const paused = queue.setPaused(false);
		return void ctx.sendFollowUp({ content: paused ? '▶ | Resumed!' : '❌ | Something went wrong!' });
		
    },
};
