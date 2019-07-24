const commando = require('discord.js-commando');
const discord = require('discord.js')
const reputation = require('../../reputation.json');
const fs = require("fs");


class ShowRepCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "showrep",
            group: "simple",
            memberName: "showrep",
            description: "Displays a user's reputation"
        });
    }

    async run(message, args)
    {
        let targetUser = message.guild.member(message.mentions.users.first());
        if(!targetUser){
            message.channel.send("Sorry, couldn't find that user!");
            return;
        }
        if(!reputation[message.author.id]){
            reputation[message.author.id] = {
                rep: 0
            };
        }
            let repEmbed = new discord.RichEmbed()
                .setTitle(targetUser.user.username + " Reputation")
                .addField("Reputation", (reputation[message.author.id].rep).toString(),false)
            message.channel.send(repEmbed);
            fs.writeFile("reputation.json", JSON.stringify(reputation), (err) =>{
                if(err){
                    console.log(err);
                }
            });
        }
    }

module.exports = ShowRepCommand;