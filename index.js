const Commando = require('discord.js-commando');
const newUsers = [];
const discord = require('discord.js');
const music = require('discord.js-music-v11')
const bot = new Commando.Client({
    commandPrefix: "/"
});
const TOKEN ='NjAzNjA2NTIyMDc3MTE4NDcx.XTiB_g.kkNQXJHLDcM1wExBmgjZGHZs1eY' //put your token here
const client = new discord.Client();

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerGroup('fun', 'Fun');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('owner', 'Owner');
bot.registry.registerGroup('random', 'Random');
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};
music(bot);


bot.on('message', function(message){
    if(message.content == "memes")
    {
        let images = ["https://i.imgur.com/2AjcrYk.jpg","https://i.imgur.com/gKo7NhK.jpg","https://i.imgur.com/F1t5cmY.jpg","https://i.imgur.com/sAteveL.jpg","https://i.imgur.com/o4DyplJ.png","https://i.imgur.com/Ip5TsGl.png","https://i.imgur.com/5iGSx6E.jpg","https://i.imgur.com/SNW8Mzv.jpg","https://i.imgur.com/HGUF9OY.jpg","https://i.imgur.com/ZspLuyY.jpg","https://i.imgur.com/8YNxFkK.jpg","https://i.imgur.com/E861uY1.jpg","https://i.imgur.com/NnSdW3A.jpg","https://i.imgur.com/bJGx4zK.jpg","https://i.imgur.com/vl6Bo3s.jpg","https://i.imgur.com/9Af0QMu.jpg"];
        let result = Math.floor((Math.random() * images.length));
        const memeEmbed = new discord.RichEmbed()
        .setTitle("Memes")
        .setDescription("Daily Dose Of Memes")
        .setColor(0x00AE86)
        .setImage(images[result])
        .addField("Enjoy your meme", "Aricious is best memer", true)

        message.channel.send(memeEmbed);
    }
});

bot.on('message', function(message){
    if(message.content == 'kickedboi')
    {
        message.channel.send('Couldnt Kick Member due to lack of permissions, try again later or dont try at all with this command you little noob u wot fam i will rek u in 1v1 black ops no scopes and i will rek u in minecraft so wot m8 m8 m8 m8 m8 m8 m8')
    }
})

bot.on('message', function(message){
    if (message.content == 'Ping')
    {   
        message.reply('Pong')
        const pingEmbed = new discord.RichEmbed()
        .setTitle('Ping')
        .setColor(0x00A37C)
        .addField("Here is your ping:", "Aricious big noob", true)
        .addField(new Date().getTime() - message.createdTimestamp + " ms", "Phantom Bot is god", true)

        message.channel.send(pingEmbed);
    }
});


client.on("guildMemberAdd", (member) => {
    const guild = member.guild;
    if (!newUsers[guild.id]) newUsers[guild.id] = new discord.Collection();
    newUsers[guild.id].set(member.id, member.user);
  
    if (newUsers[guild.id].size > 10) {
      const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
      guild.channels.find(channel => channel.name === "general").send("Welcome our new users!\n" + userlist);
      newUsers[guild.id].clear();
    }
  });
  
  client.on("guildMemberRemove", (member) => {
    const guild = member.guild;
    if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
  });


bot.on('message', function(message){
    if(message.content == 'PhantomLoaderXAPSX')
    {
        message.reply('I am ready to function');
        
    }
});


bot.on('message', function(message){
    if(message.content == "phantom you actually suck")
    {
        message.reply('Nani?');
        message.reply('wot');
        message.reply('did u say');
        message.reply('about me');
        message.reply('1v1 me on lego m8')
        message.channel.send(":face_palm:" + "| your mom gay |")
    }
})
bot.on('message', function(message){
    if(message.content == "do you love me phantom")
    {
       message.channel.send('nah lol');
    }
})

bot.on('message', function(message){
    if(message.content == "corey")
    {
       message.channel.send('fam whats up');
    }
})

bot.on('message', function(message){
    if(message.content == 'phantom ur gay')
    {
        message.reply('no u');
    }
});

bot.on('ready', async() => {
    console.log("Ready");
    bot.user.setActivity("Prefix: / | Aricious ❤", {type: 'PLAYING'});
});

bot.login(TOKEN);
