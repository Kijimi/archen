exports.run = async (client, message, args, level) => {
try{
    const Discord = require("discord.js");
    let suggestion = args.join(" ").slice(0);
        if(!suggestion) return message.reply("No suggestion was provided!");

    let suggestEmbed = new Discord.RichEmbed()
    .setDescription("Suggestion")
    .setColor("#bf7fbf")
    .addField("Suggestion By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Suggestion", suggestion);

let suggestionchannel = message.guild.channels.find(`name`, "suggestions");
    if(!suggestionchannel) return message.channel.send("Couldn't find the suggestions channel. Do I have permissions to view this channel?");
suggestionchannel.send(suggestEmbed);
}
catch(e){
    console.log(e.stack);
    }
};

exports.conf = {
	name: 'suggest',
	aliases: [
        "suggestion"
    ]	//	Array of aliases for the command.
};