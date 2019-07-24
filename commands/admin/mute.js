const commando = require('discord.js-commando');

class MuteCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "mute",
            group: "admin",
            memberName: "mute",
            description: "Mutes someone"
        });
    }

    async run(message, args)
    {
        let mutedUser = message.guild.member(message.mentions.users.first());
        if(!mutedUser)
        {
            message.channel.send("Sorry, Unable to find that user!");
            return;
        }
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
        {
            message.channel.send("You don't have the privileges to mute other users!");
            return;
        }
            

        }
    }

   module.exports = MuteCommand;