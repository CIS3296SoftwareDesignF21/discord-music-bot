const { GuildMember } = require('discord.js');

module.exports = {
<<<<<<< HEAD

=======
	
>>>>>>> 0ff7821c9343ac284ce0cf218077c55c6460fdb6
	name: 'skip',
	description: 'Skip to the current song',
	async execute(interaction, player) {
		if (!(interaction.member instanceof GuildMember) || !interaction.member.voice.channel) {
			return void interaction.reply({
				content: 'You are not in a voice channel!',
				ephemeral: true,
			});
		}
<<<<<<< HEAD

=======
		
>>>>>>> 0ff7821c9343ac284ce0cf218077c55c6460fdb6
		if (
			interaction.guild.me.voice.channelId &&
			interaction.member.voice.channelId !== interaction.guild.me.voice.channelId
		) {
			return void interaction.reply({
				content: 'You are not in my voice channel!',
				ephemeral: true,
			});
		}
<<<<<<< HEAD

=======
		
>>>>>>> 0ff7821c9343ac284ce0cf218077c55c6460fdb6
		await interaction.deferReply();
		const queue = player.getQueue(interaction.guildId);
		if (!queue || !queue.playing)
			return void interaction.followUp({
				content: '❌ | No music is being played!' });
        const currentTrack = queue.current;
        const success = queue.skip();
        return void interaction.followUp({
            content: success ? `✅ | Skipped **${currentTrack}**!` : '❌ | Something went wrong!'
        });
	},


<<<<<<< HEAD
};
=======
};
>>>>>>> 0ff7821c9343ac284ce0cf218077c55c6460fdb6
