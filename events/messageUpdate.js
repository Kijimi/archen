module.exports = (client, oldMessage, newMessage) => {
	if (oldMessage.author.bot || oldMessage.channel.type === 'dm') return;
	if (oldMessage.content !== newMessage.content) {
		console.log(`${oldMessage.author.username}'s message was updated in ${oldMessage.channel.name}: [${oldMessage}] --> [${newMessage}]`);
	}
};