const commando = require('discord.js-commando');
const Discord = require('discord.js');
class PositivityCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "positivequote",
            group: "simple",
            memberName: "positivequote",
            description: "Gives you a positive quote"
        });
    }

    async run(message, args)
    {
        message.reply("Here is your positive quote!");
        let replies = ["Live life to the fullest, and focus on the positive." , "Love yourself. It is important to stay positive because beauty comes from the inside out." , "When you think positive, good things happen." , "Each day, I come in with a positive attitude, trying to get better.", "Positive anything is better than negative nothing."];

        let result = Math.floor((Math.random() * replies.length));
        
        let quoteEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#FF9900")
        .addField("Quote", replies[result]);

        message.channel.send(quoteEmbed);
    }
}

module.exports = PositivityCommand;