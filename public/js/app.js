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

client.login('NTQ3NDM4NjgxODA4NTY4MzIw.D02zuA.7lJE8z8vZgX61UccgHGF8T8r7Uc');