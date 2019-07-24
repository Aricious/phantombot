const commando = require('discord.js-commando');
const Discord = require('discord.js');

class SayCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "say",
            group: "fun",
            memberName: "say",
            description: "Have Phantom echo what you said.",
            usage: ""
        });
    }

    async run(client , message, args)
    {
        if(!msg) {return message.reply("You need to provide a message!"); }

        message.delete().catch();
        if (message.author.id === client.owner.id) {return message.channel.send(msg); }
        return message.channel.send(`${message.author.username} (${message.author.id}) wanted to say: ${msg}`);
    };
}


exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: ["echo", "talk"],
    permLevel: 0,
    botPerms: [],
};

module.exports = SayCommand;