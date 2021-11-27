# Discord Music Bot 🤖
TLDR `fast-music-bot#8003`
 
⚠️ Speed is not guaranteed by our little bot, 
but it's best efforts to be your personal music manager is 🎧 ⏯️ 🎵

### What Is This App, you ask?
This app allows you to play audio tracks in a Discord voice channel while on a server
of your choice.

### What is it capable of?
One use case: As a Discord user I can search for tracks or enter a direct YouTube link using a slash-command 🎵 

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

### Testing Feedback 1:
Students explored the project and followed the README, their response are recorded in [rows 4:6](https://docs.google.com/spreadsheets/d/1jYA9q4IabKIgjCqV96hwbRkkyF9oupQqQQzoWI47qqI/edit#gid=0)


# How to Setup / Install

Install all required dependecies with one of the following commands:
```
npm install discord.js @discordjs/rest discord-api-types @discordjs/builders
yarn add discord.js @discordjs/rest discord-api-types
pnpm add discord.js @discordjs/rest discord-api-types
```

Create a bot, you can follow either tutorial [DiscordJS Guide](https://discordjs.guide/preparations/#installing-node-js) or [Create Your Own Discord Bot - Youtube](https://www.youtube.com/watch?v=j_sD9udZnCk)
To customize your commands you can follow,
[Implementing Slash Commands](https://www.youtube.com/watch?v=JdpJiPlVeaU&t=843s)



# Installing
Please follow the readme instructions for [discordjs](https://github.com/discordjs/discord.js)

# Troubleshooting

This app uses the [ytdl-core](https://github.com/fent/node-ytdl-core) npm package
to stream from YouTube, which is frequently updated as YouTube makes changes. 
If your bot has issues downloading a particular track, try again later or check 
for an updated version of the dependency.

### UML
![UMLClass_v1 0 2](https://user-images.githubusercontent.com/73084642/143722536-57752fab-f73d-40a7-8719-f197bb8e995c.png)

![bot_uml drawio](https://user-images.githubusercontent.com/65259858/140856874-4c01a86e-ff73-4672-a336-a98a2d0a62b8.png)

### Sequence Diagram
![fast-music-bot_v1 0 2](https://user-images.githubusercontent.com/73084642/142554240-e5bedfae-8f31-4901-923a-e256055a2a81.png)
![fast-music-bot_v1 0 1](https://user-images.githubusercontent.com/73084642/142047698-37c3a0db-ce5d-452a-8d35-f2b5a29beda9.png)
![fast-music-bot_v1 0 0](https://user-images.githubusercontent.com/73084642/141823510-f9e3d074-47cd-4602-ae08-aff2309633da.png)




# How to Run
`node main.js`


# Prefix Commands

All commands are shown with `/` as a prefix

- `/play <query>`: Play or search for a track
- `/play` Resume a paused track or play the latest track from the queue if the player is disconnected
- `/pause`: Pause the currently playing track
- `/leave`: Disconnect the bot from the voice channel
- `/resume`: Resume the current song 
- `/queue`: View the song queue
- `/shuffle`: Shuffle the queue
- `/loop`: Set loop mode
- `/nowplaying`: Retrieve the current track and queued tracks
- `/skip`: Skip currently playing track and play the next track in the queue
- `/help`: Bring up help menu
- `/clear <int>`: Clear n number of messages

Queued tracks automatically play when the last track finishes.

