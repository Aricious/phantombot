const commando = require('discord.js-commando');
const Discord = require('discord.js');

class EightBallCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "slotmachine",
            group: "fun",
            memberName: "slotmachine",
            description: "Spin the slot machine and get the epic victory royale"
        });
    }

    async run(message, args)
    {
        
    }
}

module.exports = EightBallCommand;