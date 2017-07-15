const Discord = require('discord.js');
const client = new Discord.Client();

fs = require('fs');

fs.readFile('./token', 'utf8', function (err, data){
    if (err){
            return console.log(err);
    }
    client.login(data);
});

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});
