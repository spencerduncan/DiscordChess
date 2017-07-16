const Discord = require('discord.js');
const client = new Discord.Client();

const Board = require('./board.js');

const fs = require('fs');

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
        message.reply('```' + Board.printboard() + '```');
        return;
    }
    if (message.content.startsWith("move")) {
        //todo, rewrite to PGN or algebraic
        let cmd = message.content.slice(5);
        if (cmd.length != 4 ){
            message.reply("Bad move length, try again.");
            return;
        }
        if (Number(cmd) == NaN){
            message.reply("Bad Syntax")
        }
        let c1 = Number(cmd[0])-1;
        let r1 = Number(cmd[1])-1;
        let c2 = Number(cmd[2])-1;
        let r2 = Number(cmd[3])-1;
        Board.move(c1, r1, c2, r2);
        message.reply('```' + Board.printboard() + '```');
    }
    if (message.content === 'reset') {
        Board.reset();
        message.reply('```' + Board.printboard() + '```');
        return;
    }
});
