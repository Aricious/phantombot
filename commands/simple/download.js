const commando = require('discord.js-commando');
const Discord = require('discord.js');

class DownloadCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "download",
            group: "simple",
            memberName: "download",
            description: "Download's the exploit"
        });
    }

    async run(message, args)
  {
        if (message.substring(0, 1) == ';') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);

        switch(cmd) {

            case 'download':
                message.author.send(new Discord.Attachment('./data/Aricious', 'Aricious.zip') )
                .then(msg => {
                    // do something after message sends, if you want
                })
                .catch(console.error);
                break;
         }
     }
  }
}
module.exports = DownloadCommand;