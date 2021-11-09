const { SlashCommand, CommandOptionType } = require('slash-create');
const Discord = require('discord.js');

module.exports = class extends SlashCommand{
	
	constructor(creator) {
		super(creator, {
			name: 'help',
			aliases: ['h'],
			description: 'Displays help menu',
			
			guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
		});	
	}

    async run(bot, message, args)
    {
        const help = new Discord.MessageEmbed()
        .setColor("AQUA")
        .setTitle('Prefix: `/`')
        .setAuthor("Command List", message.author.displayAvatarURL())
        .addFields({
            name: 'help',
            value: 'displays the help menu',
            name: 'play <query>',
            value: 'Plays specified song by /nYouTube link or by search terms',
            name: 'pause',
            value: 'Pauses current song',
            name: 'leave',
            value: 'Makes bot leave channel'
        },)
        message.channel.send(help)
    }
};