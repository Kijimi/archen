module.exports = (client, message) => {
	const config = require("/home/kiji/archen/archen/bot.js");
	const makeEmbed = require("/home/kiji/archen/archen/bot.js")
	const moment = require("moment")
	if (message.channel.type === 'dm' || message.author.bot) return;	//	Ignore bot message or DM messages
	console.log(`${message.author.username}'s message [${message.content}] was deleted in ${message.channel.name}`);
	if (message.author.id === config.botId) return;	//	Don't do anything if these are true
	makeEmbed('red', `Message sent by ${message.author.tag} deleted in #${message.channel.name}`, message.cleanContent, `ID: ${message.id}  •  ${moment().format('MMM Do YYYY, H:mm:ss')}`, message.author);
};