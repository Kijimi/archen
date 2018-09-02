module.exports = (client, messages) => {
	const channel = messages.first().channel.name;
	console.log(`${messages.array().length} messages have been deleted in ${channel}.`);
};