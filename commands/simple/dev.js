const commando = require('discord.js-commando');
const Discord = require('discord.js');

class DevCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "dev",
            group: "simple",
            memberName: "dev",
            description: "Dev Stuffs"
        });
    }

    async run(message, args)
    {
        if(message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send("this is working Mr Developer!");
          } 
          else 
          {
            return message.reply(":x: " + "| You need to have the \"ADMINISTRATOR\" Permission")
          }
          
    }
}

module.exports = DevCommand;