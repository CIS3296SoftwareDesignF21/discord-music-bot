const { QueryType } = require('discord-player');
const { SlashCommand, CommandOptionType } = require('slash-create');

module.exports = class extends SlashCommand{
	
	constructor(creator) {
		super(creator, {
			name: 'pause',
			aliases: ['s'],
			description: 'Pause a song',
			options: [ {
				name: 'query',
				type: CommandOptionType.STRING,
				description: 'The song you want to pause',
				required: true
			} ],
			
			guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
		});	
	}
	
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
			console.log('misuta Robotto');
		});
		
		if (!searchResult || !searchResult.tracks.length) return void ctx.sendFollowUp({ content: 'No results were found!' });
		
		const queue = await client.player.createQueue(guild, {
			metadata: channel
		});
		
		const member = guild.members.cache.get(ctx.user.id) ?? await guild.members.fetch(ctx.user.id);
		try {
			if (!queue.connection) await queue.connect(member.voice.channel);
		} catch {
			void client.player.getQueue(ctx.guildID);
			return void ctx.sendFollowUp({ content: 'Could not join your voice channel!' });
		}
		
		const paused = queue.setPaused(true);
		await ctx.sendFollowUp({ content: paused ? "⏸ | Paused!" : "❌ | Something went wrong!" });
		if (!queue || !queue.playing) await queue.stop();
		
	}
	
<<<<<<< HEAD
};
=======
};
>>>>>>> de1b3a1 (fix pause and command attribute access)
