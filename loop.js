const { SlashCommandBuilder, CommandOptionType } = require('@discordjs/builders');
const { QueueRepeatMode } = require('discord-player');

module.exports = { 

	data: new SlashCommandBuilder() 
			.setName('loop'),
			.setDescription('Keep the song looping.'),
			options: [{
				.setName('mode'),
				type: CommandOptionType.INTEGER,
				.setDescription('Loop type'),
				required: true,
				choices: [ {
					.setName('Off'),
					value: QueueRepeatMode.OFF
					},
					{
						.setName('Track'),
						value: QueueRepeatMode.TRACK
					},
					{
						.setName('Queue'),
						value: QueueRepeatMode.QUEUE
					},
					{
						.setName('Autoplay'),
						value: QueueRepeatMode.AUTOPLAY
					}
				]
			}],
			
    async execute(interaction) {
		
		const { client } = require('..');

        await ctx.defer();
        const queue = client.player.getQueue(ctx.guildID);
        if (!queue || !queue.playing) return void ctx.sendFollowUp({ content: '❌・| No music is being played!' });
        const loopMode = ctx.options.mode;
        const success = queue.setRepeatMode(loopMode);
        const mode = loopMode === QueueRepeatMode.TRACK ? '🔂' : loopMode === QueueRepeatMode.QUEUE ? '🔂' : '▶';
        return void ctx.sendFollowUp({ content: success ? `${mode} | Updated loop mode!` : '❌・| Could not update loop mode!' });
    }
};
