module.exports = (client, role) => {
	console.log(`Role [${role.name}] was created in guild ${role.guild.name} with permissions: ${role.permissions}.`);
};