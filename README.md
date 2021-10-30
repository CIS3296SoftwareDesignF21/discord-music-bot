# Discord Music Bot aka fast-music-bot
Incase your wondering, `fast` stands for Fay Alex Shuang Temple. Speed is not guaranteed by our little bot, but it's best efforts to be your personal music manager is! 

### What Is This App, you ask?
This app allows you to play audio tracks in a Discord voice channel
of your choice:

<!-- TODO add <img src="./readme-gallery/play-track.png" style="max-width: 60%"> -->

It also contains a simple system for queueing tracks in advance:

<!-- TODO add <img src="./readme-gallery/enqueue-track-screenshot.png" style="max-width: 60%"> -->

You can search for tracks or enter a direct YouTube link!
🎵 

## Vision Statement
FOR Discord Server Suscribers 
WHO want to listen to music 
The Discord Music Bot is a simple Discord Bot 
THAT will be able to play, pause, and skip videos by command
UNLIKE listening to music via separete tabs (in the browser) or applications on a machine
OUR PRODUCT will reduce context switching for those who want to listen to music while using Discord.

## Personas
- 1: Designated Peak XV, age 28, is a traveling DJ based out of Philadelphia. She was born in Columbia, Missouri. She obtained a Bachelor's degree from Franklin & Marshall in Neuroscience. She has a partner who owns a Medical Marijuana Clinic. Together they live in Old City, Philadelphia. When she's not creating music she likes to spend time exercising, exploring trails and philosophy, appreciating the city's architecture, and dancing salsa and bachata. She uses Discord to stay connected with her peers and fans. She likes to be able to share her creations and listen to other's sets wherever she goes. She currently uses SoundCloud to share and explore sets. SoundCloud now requires paid subscription for ad-free listening. She is open to using the Discord Music Bot if she can play, pause, and add music to queue sets -- while chatting with her mates.
- 2: Alan, age 17, is a senior high school in Philadelphia. He uses Discord to stay connected with his friends. He likes to listen to music while working on his homework and can share his music with his friends with they are playing online games together like League of Legends and Counter-Strik. He also uses Spotify to share music with his friend but he is not a fan to pay that subscription fee. He is using the Discord Music Bot since is a lot simpler to use and able to share the music at free cost. Plus, he can invite the bot to the channel and share it with his friends.
- 3: 

#### Initial Proposal: 
- [feedback on proposal](https://github.com/CIS3296SoftwareDesignF21/feedback-on-proposals-section-001-m-w-11-am/issues/18)


# How to Setup

The only required setup is to get the id of a voice channel you would like to
designate as your server's "radio channel". You can find this id by right
clicking a voice channel in your server with developer mode enabled:

<!-- TODO add <img src="./readme-gallery/copy-voice-channel-id.png" style="max-width: 60%"> -->

If you need help enabling developer mode, [see this section of the official guide](https://autocode.com/guides/how-to-build-a-discord-bot/#faq-1).

Otherwise, you just need to pick a prefix for your bot, and you're all set!

# Prefix Commands

All commands are shown with `!` as a prefix, but you can set whatever you'd like
during setup or afterwards by modifying the `PREFIX` environment variable. 
_(notice we have our variable set to `bi` right now)_

- `!play <query>`: Play or search for a track
- `!play` Resume a paused track or play the latest track from the queue if the player is disconnected
- `!pause`: Pause the currently playing track
- `!disconnect`: Disconnect the bot from the voice channel
- `!nowplaying`: Retrieve the current track and queued tracks
- `!queue`: Same as `!nowplaying`
- `!enqueue <query>`: Add a track to the queue
- `!skip`: Skip currently playing track and play the next track in the queue
- `!clearqueue`: Clear the current queue
- `!help`: Bring up help menu

Queued tracks automatically play when the last track finishes.

# Troubleshooting

This app uses the [ytdl-core](https://github.com/fent/node-ytdl-core) npm package
to stream from YouTube, which is frequently updated as YouTube makes changes. 
If your bot has issues downloading a particular track, try again later or check 
for an updated version of the dependency.

### Thank You!

# How to Run
