<<<<<<< HEAD
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });
const { Player } = require('discord-player');

// Create a new Player (you don't need any API Key)
const player = new Player(client);

// add the trackStart event so when a song will be played this message will be sent
player.on('trackStart', (queue, track) => queue.metadata.channel.send(`🎶 | Now playing **${track.title}**!`))

client.once('ready', () => {
    console.log("I'm ready !");
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    // /play Despacito
    // will play 'Despacito' in the voice channel
    if (interaction.commandName === 'play') {
        if (!interaction.member.voice.channelId) return await interaction.reply({ content: 'You are not in a voice channel!', ephemeral: true });
        if (interaction.guild.me.voice.channelId && interaction.member.voice.channelId !== interaction.guild.me.voice.channelId) return await interaction.reply({ content: 'You are not in my voice channel!', ephemeral: true });
        const query = interaction.options.get('query').value;
        const queue = player.createQueue(interaction.guild, {
            metadata: {
                channel: interaction.channel
            }
        });
        
        // verify vc connection
        try {
            if (!queue.connection) await queue.connect(interaction.member.voice.channel);
        } catch {
            queue.destroy();
            return await interaction.reply({ content: 'Could not join your voice channel!', ephemeral: true });
        }

        await interaction.deferReply();
        const track = await player.search(query, {
            requestedBy: interaction.user
        }).then(x => x.tracks[0]);
        if (!track) return await interaction.followUp({ content: `❌ | Track **${query}** not found!` });

        queue.play(track);

        return await interaction.followUp({ content: `⏱️ | Loading track **${track.title}**!` });
    }
});

client.login(process.env.TOKEN);
=======
const { QueryType } = require('discord-player');
const { SlashCommand, CommandOptionType } = require('slash-create');

module.exports = class extends SlashCommand{
	
	constructor(creator) {
		super(creator, {
			name: 'pause',
			aliases: ['p'],
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
	
};
>>>>>>> de1b3a1d087ff6b0ace654cf54f013fc9a2c5ab9
