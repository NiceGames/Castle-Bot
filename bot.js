const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
var servers = {};
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setGame(".help | Bot By NiceGames");
});

bot.login(botconfig.token);
