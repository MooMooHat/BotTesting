/*
  Send a user a link to their avatar
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'Mzg2MzM1NTI5NDMzNTYzMTM3.DQOcEw.3M9xTOuKbMoGOHl7nLcvfS8crao';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('Hey Monokuma?', () => {
  console.log('What's your command, you bastard?');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "Link me my avatar"
  if (message.content === 'Link me my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

// Log our bot in
client.login(token);
