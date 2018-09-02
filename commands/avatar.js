exports.run = async (client, message, args, level) => {
    let msg = await message.channel.send("Generating avatar...");
    let target = message.mentions.users.first() || message.author;

    await message.channel.send({files : [
      {
        attachment: target.displayAvatarURL,
        name: "avatar.png"
      }
    ]});

    msg.delete();
}

exports.conf = {
	name: 'avatar',
	aliases: []
};