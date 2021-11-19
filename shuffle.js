const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	
	data: new SlashCommandBuilder()
		.setName( 'shuffle')
        .setDescription( 'Shuffle the queue.'),

    async execute(interaction) {

        const { client } = require('..');

        await ctx.defer();

        const queue = client.player.getQueue(ctx.guildID);
        if (!queue || !queue.playing) return void ctx.sendFollowUp({ content: '❌ | No music is being played!' });
        
        await queue.shuffle();
        ctx.sendFollowUp({ content: '✅ | Queue has been shuffled!' });
    }
};
