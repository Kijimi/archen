module.exports = (client, member) => {
	console.log(`${member.user.tag} has left ${member.guild.name}`);
	makeEmbed('orange', 'User left', null, null, member.user);
};