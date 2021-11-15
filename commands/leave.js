const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
    data: new SlashCommandBuilder()
		.setName('leave')
		.setDescription('Bot leaves current channel.'),
    async execute(interaction) {
        const { client } = require('..');
		await ctx.defer();
		
		const guild = client.guilds.cache.get(ctx.guildID);
		const channel = guild.channels.cache.get(ctx.channelID);

        const voiceChannel = message.guild.me.voice.channel;
 
        if(!voiceChannel) return message.channel.send("You need to be in a voice channel to stop the music!");

        await voiceChannel.leave();
        await message.channel.send('Leaving channel.')
    }
};