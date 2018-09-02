exports.run = async (client, message, args) => {
    let target = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
        .setThumbnail(target.avatarURL)
        .setAuthor(target.username)
        .setColor("#5DADE2")
        .addField("Full Username", `${target.username}#${target.discriminator}`)
        .addField("ID", target.id)
        .addField("Created At", target.createdAt);

    message.channel.sendEmbed(embed);

    return;   };

exports.conf = {
	name: 'userinfo',
	aliases: []	
};
