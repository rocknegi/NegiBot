const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',()=>{
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message',async msg =>{
    if(msg.content === '!hello'){
        msg.reply('Ayy lmao m8');
    }
        if(msg.content.includes('hello')){
            let decodedMsg = msg.content.split(" ");
             console.log(decodedMsg);
             
    }



        
    
});

client.login('NTQ4ODg0NTE4ODExOTkyMDY0.D1L1jg.M-q687jmfP1oVRP7zQrSfBnq6tM');