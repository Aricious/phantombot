const commando = require('discord.js-commando');
const Discord = require('discord.js');

class EightBallCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "8ball",
            group: "simple",
            memberName: "8ball",
            description: "Mysterious 8ball.."
        });
    }

    async run(message, args)
    {
        if(!args[0]) return message.reply("Please ask a full question!");
        let replies = ["Yes.", "No.", "It's a possibility.", "Ask again later"];

        let result = Math.floor((Math.random() * replies.length));
        let question = args

        let ballembed = new Discord.RichEmbed()
        .setThumbnail()
        .setAuthor(message.author.tag)
        .setColor("#FF9900")
        .addField("Question", question)
        .setAuthor(message.author.tag)
        .addField("Answer", replies[result])
        .setTimestamp()
        .setFooter("Aricious is a big noob");

        message.channel.send(ballembed);
    }
}

module.exports = EightBallCommand;