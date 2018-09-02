exports.run = async (client, message, args, level) => {
	const { RichEmbed } = require('discord.js');
	const question = args.join(" ");
	const responses = [
		// Affirmative
		"It is certain",
		"It is decidedly so",
		"Without a doubt",
		"Yes, definitely",
		"You may rely on it",
		"As I see it, yes",
		"Most likely",
		"Outlook good",
		"Yes",
		"Signs point to yes",
		// Non-committal
		"Reply hazy, try again",
		"Ask again later",
		"Better not tell you now",
		"Cannot predict now",
		"Concentrate and ask again",
		// Negative
		"No",
		"Nope",
		"Don't count on it",
		"My reply is no",
		"My sources say no",
		"Outlook not so good",
		"Very doubtful"
	];
	const embed = new RichEmbed()
		.setColor('#232323')
		.setDescription(`\:8ball: ${responses.shuffle()[0]}, <@${message.author.id}>`);

	return message.channel.send({ embed });
};

exports.conf = {
	name: '8ball',
	aliases: [
		'8b'
	]
};