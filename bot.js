const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"
const fs = require("fs"); 
const moment = require("moment");  
const ms = require("ms");
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
var x = client.channels.get("566244121551831070");
if (x) x.join();
});

client.on("ready", () => {
client.user.setStatus('online');
//client.user.setGame("System", "https://www.twitch.tv/idk");
  console.log("The 100. | Logged in! Server count: ${client.guilds.size}");
  client.user.setActivity("System Orders.",{type: 'PLAYING'});
});


const devs = ["380307890235506698", "id number 2"]// ايدي الخاص بحسابك
 
const adminprefix = "T";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'pt')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {// لجعل البوت في حاله الواتشنق
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {// لجعل البوت في حاله الاستماع
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     //Narox
    if (message.content.startsWith(adminprefix + 'setname')) {// لتغير اسم البوت
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done `)
  return message.reply("**Name Changed :white_check_mark:**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {// لتغير صوره البوت
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else    
  if (message.content.startsWith(adminprefix + 'st')) {// لعمل ستريمنق للبوت
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
});

client.login(process.env.BOT_TOKEN);
