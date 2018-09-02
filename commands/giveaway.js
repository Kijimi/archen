exports.run = async (client, message, args) => {
try
{	if (args.length < 2) return;
	const { RichEmbed } = require('discord.js');
	const giveawayLimit = args[0];
	const giveawayItem = args.slice(1).join(' ');

	let timeLeft = giveawayLimit;
	let description = `"${giveawayItem}"`;
	let entered = [];
	let filter = m => m.content.toLowerCase() === 'enter';

	let embed = new RichEmbed()
		.setColor("RANDOM")
		.setTitle(description)
		.setDescription('Type `enter` in this channel to enter!')
		.setFooter(`This giveaway ends in ${timeLeft} seconds`);

	message.channel.send('Giveaway!', { embed }).then(msg => {

		const collector = msg.channel.createMessageCollector(filter, { time: (giveawayLimit * 1000) });

		collector.on('collect', m => {
			const userId = m.author.id;
			
			if (!entered.includes(userId)) {
				entered.push(userId);
				m.react('✅');
			}

		});

		collector.on('end', () => {
			if (entered.length < 1) {
				return message.channel.send(`No one entered the giveaway for **${giveawayItem}**\n\nA winner cannot be chosen.`).then(() => {
					msg.delete();
				});
			} else {
				let winner = entered.shuffle()[0];
				winnerText = `Congratulations, <@${winner}>! You've won **${giveawayItem}**`;

				return message.channel.send(winnerText).then(() => {
					msg.delete();
				});
			}
		});
	});
}catch(e){
	console.log(e.stack);
	}
}
exports.conf = {
	name: 'giveaway',
	aliases: [
		'ga',
		'raffle'
	]
};