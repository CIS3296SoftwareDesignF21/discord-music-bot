const { QueryType } = require('discord-player');
const { SlashCommand, CommandOptionType } = require('slash-create');

module.exports = class extends SlashCommand{
	//creator is client obj
	constructor(creator) {
		super(creator, {
			name: 'play',
			group: 'commands',
			description: 'Play a song',
			options: [ {
				name: 'query',
				type: CommandOptionType.STRING,
				description: 'The song you want to play',
				required: true
			} ],
			
			guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
		});	
	}
	// ctx is message obj
	async run (ctx) {
		
		const { client } = require('..');
		await ctx.defer();
		
		const guild = client.guilds.cache.get(ctx.guildID);
		const channel = guild.channels.cache.get(ctx.channelID);
		const query = ctx.options.query;
		const searchResult = await client.player
		
		.search(query, {
			requestedBy: ctx.user,
			searchEngine: QueryType.AUTO
			})
			
		.catch(() => {
			console.log('he');
		});
		
		if (!searchResult || !searchResult.tracks.length) return void ctx.sendFollowUp({ content: 'No results were found!' });
		
		const queue = await client.player.createQueue(guild, {
			metadata: channel
		});
		
		const member = guild.members.cache.get(ctx.user.id) ?? await guild.members.fetch(ctx.user.id);
		try {
			//connect to voice channel
			if (!queue.connection) await queue.connect(member.voice.channel);
		} catch {
			void client.player.deleteQueue(ctx.guildID);
			return void ctx.sendFollowUp({ content: 'Could not join your voice channel!' });
		}
		
		await ctx.sendFollowUp({ content: `⏱ | Loading your ${searchResult.playlist ? 'playlist' : 'track'}...` });
		searchResult.playlist ? queue.addTracks(searchResult.tracks) : queue.addTrack(searchResult.tracks[0]);
		if (!queue.playing) await queue.play();
		
	}
	
};
