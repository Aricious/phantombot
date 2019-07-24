const commando = require('discord.js-commando');
const Discord = require('discord.js');
const fs = require("fs")

class ratCliffCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "ratcliff",
            group: "fun",
            memberName: "ratcliff",
            description: "i dont know why"
        });
    }

    async run(message, args)
    {
        let ratcliffResponses = JSON.parse(fs.readFileSync("./data/ratcliff.json"));
        let randomnumber = Math.floor(Math.random() * ratcliffResponses.responses.length);
        return message.reply(ratcliffResponses.responses[randomnumber]);
    }
}

module.exports = ratCliffCommand;