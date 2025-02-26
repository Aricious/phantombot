const commando = require('discord.js-commando');
const discord = require('discord.js');

class BanCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: "ban",
            group: "admin",
            memberName: "ban",
            description: "bans someone"
        });
    }

    async run(message, args)
    {
        if (!message.mentions.users.size) {
            return message.reply('You need to tag a user in order to ban them!');
        }
        else {
            // grab the "first" mentioned user from the message
            // this will return a `User` object, just like `message.author`
            const taggedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

            if (!taggedUser) {
                message.channel.send('Can\'t find user!');
            }

            let days = parseInt(args[1]);
            let reason = null;

            reason = args.slice(1).join(' ');
            

            if (!message.member.hasPermission('MANAGE_MEMBERS')) {
                return message.channel.send('No permission, can\'t do it pal!');
            }
            if (taggedUser.hasPermission('MANAGE_MESSAGES')) {
                return message.channel.send('The person can\'t be baned!');
            }

            const banEmbed = new discord.RichEmbed()
                .setTitle('~Ban~')
                .setColor(0xbc0000)
                .addField('Baned User', `${taggedUser} with ID: ${taggedUser.id}`)
                .addField('Baned By', `<@${message.author.id}> with ID: ${message.author.id}`)
                .addField('Baned From', `${message.channel}`)
                .addField('Reason', reason)
                .setTimestamp(new Date())
                .setFooter('RIP');
            
            const banChannel = message.guild.channels.find('name', 'incidents');
            if (!banChannel) {
                return message.channel.send('Can\'t find incidents channel');
            }

            message.guild.member(taggedUser).ban(reason, days);
            banChannel.send(banEmbed);
            return 'finished';
        }
    }
}

module.exports = BanCommand;