// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: ${{secrets.STDLIB_SECRET_TOKEN}});

await lib.discord.channels['@0.2.0'].messages.create({
  channel_name: `#general`,
  content: ` `,
  embeds: [{
    "type": "rich",
    "title": "Available commands",
    "description": [
      `\`${process.env.PREFIX}play <query>\`: Play or search for a track`,
      `\`${process.env.PREFIX}play\` Resume a paused track or play the latest track from the queue if the player is disconnected`,
      `\`${process.env.PREFIX}pause\`: Pause the currently playing track`,
      `\`${process.env.PREFIX}disconnect\`: Disconnect the bot from the voice channel`,
      `\`${process.env.PREFIX}nowplaying\`: Retrieve the current track and queued tracks`,
      `\`${process.env.PREFIX}queue\`: Same as ${process.env.PREFIX}nowplaying`,
      `\`${process.env.PREFIX}enqueue <query>\`: Add a track to the queue`,
      `\`${process.env.PREFIX}skip\`: Skip currently playing track and play the next track in the queue`,
      `\`${process.env.PREFIX}clearqueue\`: Clear the current queue`,
      `\`${process.env.PREFIX}help\`: Bring up this help menu`
    ].join('\n'),
    "color": 0x00aaaa
  }]
});
