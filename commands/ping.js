exports.run = async (client, message, args, level) => {
        try{
        const msg = await message.channel.send("Calculating latency...");
        const Discord = require("discord.js");
        const embed = new Discord.RichEmbed()
            .setDescription(`${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`)
        message.channel.send(embed)
        msg.delete();
}catch(e){
    console.log(e.stack);
    }
}
exports.conf = {
	name: 'ping',
    aliases: []	
};