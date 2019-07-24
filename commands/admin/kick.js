const commando = require('discord.js-commando');

class KickCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "kick",
            group: "admin",
            memberName: "kick",
            description: "Kicks someone"
        });
    }

    async run(message, args)
    {
        let kickedUser = message.guild.member(message.mentions.users.first());
        if(!kickedUser)
        {
            message.channel.send("Sorry, Unable to find that user!");
            return;
        }
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
        {
            message.channel.send("You don't have the privileges to kick other users!");
            return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        message.guild.member(kickedUser).kick(reason)
        message.channel.send("Kicked" + kickedUser)
    }
}

module.exports = KickCommand;