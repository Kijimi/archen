module.exports = (client, message) => {
	if (message.channel.type === 'dm' || message.author.bot) return;	//	Ignore bot message or DM messages
	console.log(`${message.author.username}'s message [${message.content}] was deleted in ${message.channel.name}`);
	if (message.author.id === config.botId) return;	//	Don't do anything if these are true
};