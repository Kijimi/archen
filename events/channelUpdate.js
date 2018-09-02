module.exports = (client, oldChannel, newChannel) => {
	console.log(`Channel [${oldChannel.id}] (${oldChannel.type.toUpperCase()}) was updated.`);
};