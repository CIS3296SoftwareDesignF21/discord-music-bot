# Discord Music Bot 🤖
TLDR `fast-music-bot#8003`
 
⚠️ Speed is not guaranteed by our little bot, 
but it's best efforts to be your personal music manager is 🎧 ⏯️ 🎵

### What Is This App, you ask?
This app allows you to play audio tracks in a Discord voice channel while on a server
of your choice.

# Required
Node Version 16 or higher : https://nodejs.org/en/
FFMPEG : https://www.ffmpeg.org/
NPM : https://www.npmjs.com/

Video on how to install FFMPEG : https://www.youtube.com/watch?v=IECI72XEox0

# Set up 
Clone repository to personal device.
- `git clone https://github.com/CIS3296SoftwareDesignF21/discord-music-bot.git`

Open command prompt and use cd to move to this files directory

Use npm to install needed dependencies.
- `npm install`

You will need to create your own bot. To do this follow the steps shown:
![Inkedstep1_LI](https://user-images.githubusercontent.com/65259858/143979704-abe0b286-3340-4a39-bfa6-2755b43ec903.jpg)
![Inkedstep2_LI](https://user-images.githubusercontent.com/65259858/143979707-3776733c-8e6e-4136-a860-c5b067f27728.jpg)
![Inkedstep3_LI](https://user-images.githubusercontent.com/65259858/143979712-f639c3d2-7895-4974-997b-2c8a4301c82d.jpg)
![step4](https://user-images.githubusercontent.com/65259858/143979715-2510a8b4-492c-42a0-8324-29a59f7c03f2.PNG)
![step5](https://user-images.githubusercontent.com/65259858/143979724-493323dc-179d-4a51-ac61-db0227d7227b.PNG)

Use the link provided to add this bot to whatever server you want (Make sure that admin privaledges are checked off when adding bot to a server).
Next, copy your token and client id from the bots page in the developer portal and paste them inside of the .env file in their respective locations. 
Inside of Discord go to `user settings > advanced >` and make sure that developer mode is enabled. 
Once you do that right click on the server your bot was added in and click `Copy ID` at the bottom. This is your guild id and add it to .env.

# How to run
Once dependencies have been installed use node to run code.
- `node .`

# Prefix Commands

All commands are shown with `/` as a prefix

- `/play <query>`: Play or search for a track
- `/pause`: Pause the currently playing track
- `/leave`: Disconnect the bot from the voice channel
- `/resume`: Resume the current song 
- `/queue`: View the song queue
- `/shuffle`: Shuffle the queue
- `/loop`: Set loop mode
- `/nowplaying`: Retrieve the current track and queued tracks
- `/skip`: Skip currently playing track and play the next track in the queue
- `/back`: Play previous song
- `/help`: Bring up help menu
- `/clear <int>`: Clear n number of messages

Queued tracks automatically play when the last track finishes.

