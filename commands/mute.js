exports.run = async (client, message, args, level) => {
    const { RichEmbed } = require('discord.js');
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You are missing the permission `MANAGE_MESSAGES` and cannot use this command.");
    if(args[0] == "help"){
      message.reply("Usage: .mute <user> <1s/m/h/d> [reason]");
      return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Couldn't find user.");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("You cannot mute this user because they have the permission `MANAGE_MESSAGES`.");
    let reason = args.join(" ").slice(2);
    if(!reason) return message.reply("Please supply a reason.");
  
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("You did not specify a time.");
  
    message.delete().catch(O_o=>{});
  
    try{
      await tomute.send(`You've been muted for ${mutetime} because ${reason}.`)
    }catch(e){
      message.channel.send(`@${tomute.id} has been muted, but they have disabled direct messages from server members. They will be muted for ${mutetime} because ${reason}.`)
    }
  
    let muteembed = new Discord.RichEmbed()
    .setDescription(`Mute executed by ${message.author}`)
    .setColor("#FFA500")
    .addField("Muted User", tomute)
    .addField("Muted in", message.channel)
    .addField("Time", message.createdAt)
    .addField("Length", mutetime)
    .addField("Reason", reason);
  
    let incidentschannel = message.guild.channels.find(`name`, "staff-logs");
    if(!incidentschannel) return message.reply("Please create a incidents channel first!");
    incidentschannel.send(muteembed);
  
    await(tomute.addRole(muterole.id));
  
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> has been unmuted.`);
    }, ms(mutetime));
  
  
  //end of module
}

exports.conf = {
	name: 'mute',
	aliases: []
};