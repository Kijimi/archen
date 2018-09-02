module.exports = (client, oldMember, newMember) => {
	console.log(`${oldMember.displayName} was updated in ${oldMember.guild.name}.`);
};