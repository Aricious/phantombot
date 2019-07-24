const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "flip",
            group: "simple",
            memberName: "flip",
            description: "Flip a coin"
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0){
            message.reply("Your coin landed on heads!");
        }
        else
        {
            message.reply("Your coin landed on tails!");
        }
    }
}

module.exports = CoinFlipCommand;