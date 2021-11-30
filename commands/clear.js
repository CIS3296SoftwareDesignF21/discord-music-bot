module.exports = {
	name: 'clear',
	description: 'Clears number of messages up to 100',
	options: [
		{
		name: 'num',
		type: 4, //INTEGER
		description: 'The number of messages you want to delete up to 100.',
		required: true,
		},
		],
		async execute(interaction) {
			const amount = interaction.options.getInteger('num');

			if (amount < 1 || amount > 100) {
				return interaction.reply({ content: 'You need to input a number between 1 and 100.', ephemeral: true });
			}
			await interaction.channel.bulkDelete(amount, true).catch(error => {
				console.error(error);
				interaction.reply({ content: 'There was an error trying to clear messages in this channel!', ephemeral: true });
			});

			return interaction.reply({ content: `Successfully cleared \`${amount}\` messages.`, ephemeral: true });
		},
};