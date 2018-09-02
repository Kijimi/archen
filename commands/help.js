exports.run = async (client, message, args, level) => {
	const embed = new Discord.RichEmbed()    
        .setTitle("SylvBot's List of Commands")
        .setColor("#2e6cd1")
        .addField("Here are a list of commands that any user can use.", "Please note that I encourage you to use these commands in #bot-spam. Abuse of these commands elsewhere may lead to potential repurcussions.")
        .addField("Fun Commands", ".8ball\nResponds with an 8ball answer.\n\n.dogs, .ilikedogs\nUploads a photo of a cute doggo.\n\n.talk\nTalk to me!")
        .addField("Role Commands", ".roles\nDisplays a list of applicable roles and a guide on how to apply them.\n\n.addrole\nPrompts you to add a role\n\n.removerole\nPrompts you to remove a role.")
		.addField("Informational/Misc. Commands", ".avatar, .avatar [@username]\nDisplays your own avatar, or if mentioned, another user's avatar.\n\n.suggest <suggestion>, .suggestion <suggestion>\nAllows users to make a suggestion, which will then be shown on the suggestions channel.\n\n.userinfo, .userinfo [@username]\nDisplays information about your Discord account, or if mentioned, another user's account.");
    message.react("📧")
	return message.author.send(embed);
};

exports.conf = {
	name: 'help',
	aliases: []
};