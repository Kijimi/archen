module.exports = (client, channel) => {
	console.log(`New ${channel.type.toUpperCase()} channel created with ID ${channel.id}`);
};