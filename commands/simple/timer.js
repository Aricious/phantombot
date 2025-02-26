const commando = require('discord.js-commando');
const Discord = require('discord.js');
const ms = require('ms');
class timerCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "timer",
            group: "simple",
            memberName: "timer",
            description: "timer things"
        });
    }

    async run(message, args)
    {
        let Timer = args[0];

        if(!args[0]){
          return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");
        }
      
        if(args[0] <= 0){
          return message.channel.send(":x: " + "| Please Enter a time period followed by \"s or m or h\"");
        }
        message.channel.send(":white_check_mark: " + "| Timer Started for: " + `${ms(ms(Timer), {long: true})}`)
      
        setTimeout(function(){
          message.channel.send(message.author.toString() + ` The Timer Has FINISHED!, it lasted: ${ms(ms(Timer), {long: true})}`)
      
        }, ms(Timer));
    }
}

module.exports = timerCommand;