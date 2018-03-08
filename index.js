const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
var servers = {};
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setGame(".help | Bot By NiceGames");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}serverinfo`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
     .setDescription("Server Information")
     .setColor("#15f153")
     .setThumbnail(sicon)
     .addField("שם השרת", message.guild.name)
     .addField("Created On", message.guild.createdAt)
     .addField("הצטרפת ב", message.member.joinedAt)
     .addField("אנשים בטירה", message.guild.memberCount);

   return message.channel.send(serverembed);
  }




   if(cmd === `${prefix}botinfo`){

   let bicon = bot.user.displayAvatarURL;
   let botembed = new Discord.RichEmbed()
   .setDescription("Bot Informtaion")
   .setColor("#15f153")
   .setThumbnail(bicon)
   .addField("Bot Name", bot.user.username)
   .addField("Created On", bot.user.createdAt);

     return message.channel.send(botembed);
   }
   if(cmd === `${prefix}שלום`){
    return message.channel.send("שלום!");
   }

   if (cmd === `${prefix}report`){
   var reportchannel = bot.channels.get('412328162975023104');
           var reporteduser = message.mentions.users.first();
           var shoter = message.content.split(' ');
           var reportreason = message.content.split(' ').slice(3).join(' ');

           if (message.author.id === reporteduser) {
               return message.reply('You cant punish yourself :wink:')
           }

           if (message.mentions.users.size < 1) {
               return message.reply('You need to mention someone to report him!')
           }

           reportchannel.send(`Maniak: ${message.author.tag}\nReported user: ${reporteduser}\nReason: ${reportreason}`);
   }

   if (cmd === `${prefix}help`){
   message.reply('שולח לך בפרטי נודר');

   message.author.send(`${prefix}serverinfo - info about the server\n\
${prefix}report - report someone for breaking the server rules
${prefix}botinfo - info about the bot`);
   }



});

bot.login(botconfig.token);
