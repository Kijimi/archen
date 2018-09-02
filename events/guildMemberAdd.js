module.exports = (client, member) => {
	console.log(`${member.user.tag} has joined ${member.guild.name}!`);
	makeEmbed('green', 'User joined', null, null, member.user);
};