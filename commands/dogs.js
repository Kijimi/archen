exports.run = async (client, message, args, level) => {
try{
    const { RichEmbed } = require('discord.js');
    const superagent = require("superagent");
    let {body} = await superagent

    .get(`https://dog.ceo/api/breeds/image/random`);

    let embed = new RichEmbed()
        .setImage(body.message)
        .setColor('RANDOM')

    message.channel.send(embed);
    
}catch(e){
    console.log(e.stack);
    }
}
exports.conf = {
	name: 'dogs',
	aliases: []	//	Array of aliases for the command.
};
