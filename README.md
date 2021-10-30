# Discord Music Bot 🤖
TLDR `fast-music-bot#8003`

Incase your wondering, `fast` stands for Fay, Alex, Song Temple. 
⚠️ Speed is not guaranteed by our little bot, 
but it's best efforts to be your personal music manager is 🎧 ⏯️ 🎵

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
- 3: Sarah, age 21, is a senior at the University of Pennsylvannia who is currently working towards her Bachelors degree in Data Science. She was born in Philadelphia and is very fond of the city life and what it has to offer. When having time outside of classes she likes to spend time with friends going to local shops and restaurants around the campus area. She also runs an online Dnd campaign every Saturday night with another group of friends as the dungeon master. She is an avid music listener and likes to share new songs with her friends. She is very outgoing and likes to help out at the Animal Humane society near the university since she loves animals. When she was young she had two dogs, a golden retriever named Sammy and a labrador retriever named Leila, both of whom where from a local animal rescue place which is what sparked her interest at volunteering at these shelters. She uses Discord to talk with her friends, and to talk with people who join her Dnd sessions online. She wants to make her Dnd sessions more interesting and would like ways to spice them up. She feels that having a music bot in her servers will help add more flare and suspense to her sessions. She finds that listening to music helps her concentrate on her studies and believes that it would be beneficial to have a music bot in her servers. It would also allow her to easily share songs with her friends.

#### Initial Proposal: 
- [feedback on proposal](https://github.com/CIS3296SoftwareDesignF21/feedback-on-proposals-section-001-m-w-11-am/issues/18)


# How to Setup / Install

Install all required dependecies with one of the following commands:
```
npm install discord.js @discordjs/rest discord-api-types
yarn add discord.js @discordjs/rest discord-api-types
pnpm add discord.js @discordjs/rest discord-api-types
```

Create a bot, you can follow either tutorial [DiscordJS Guide](https://discordjs.guide/preparations/#installing-node-js) or [Create Your Own Discord Bot - Youtube](https://www.youtube.com/watch?v=j_sD9udZnCk)



# Installing
Please follow the readme instructions for [discordjs](https://github.com/discordjs/discord.js)

# Troubleshooting

This app uses the [ytdl-core](https://github.com/fent/node-ytdl-core) npm package
to stream from YouTube, which is frequently updated as YouTube makes changes. 
If your bot has issues downloading a particular track, try again later or check 
for an updated version of the dependency.

# How to Run
`node main.js`


# Prefix Commands

All commands are shown with `/` as a prefix

- `/play <query>`: Play or search for a track
- `/play` Resume a paused track or play the latest track from the queue if the player is disconnected
- `/pause`: Pause the currently playing track
- `/leave`: Disconnect the bot from the voice channel
- `/nowplaying`: Retrieve the current track and queued tracks
- `/skip`: Skip currently playing track and play the next track in the queue
- `/help`: Bring up help menu

Queued tracks automatically play when the last track finishes.

