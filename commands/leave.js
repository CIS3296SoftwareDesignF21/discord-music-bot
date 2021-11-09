const { SlashCommand, CommandOptionType } = require('slash-create');

module.exports = class extends SlashCommand {
    
    constructor(creator) {
		super(creator, {
			name: 'leave',
			aliases: ['l'],
			description: 'Bot leaves channel',
            
			guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
		});	
	}
    async run(ctx) {
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