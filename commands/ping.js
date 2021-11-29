module.exports = {
    name: 'ping',
    description: 'Responds Pong!',
    async execute(interaction) {
        interaction.reply('Pong!');
    },
};