const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "leave",
            group: "music",
            memberName: "leave",
            description: "Leaves the voice channel"
        });
    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                if(!servers[message.guild.id])
                {
                    servers[message.guild.id] = {queue: []}
                }
                message.member.voiceChannel.leave()
                    .then(connection =>{
                        var server = servers[message.guild.id];
                        message.reply("Successfully Left!");
                        server.queue.push(args);
                        Play(connection, message);
                })
            }
        }
        else
        {
            message.reply("You must be in a voice channel!");
        }
    }
}

module.exports =  LeaveChannelCommand;