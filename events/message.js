/**
 * Message event handler. This is not the place to add commands. Each command will be handled as its own file.
 */
module.exports = (client, message) => {
	if (message.author.bot) return;
	const isAdmin			= (message.author.id === client.config.ownerId);

	if (!message.system) {
		let username = message.member !== null ? message.member.displayName : message.author.tag;
		console.log(`${username}: ${message.cleanContent}`);
	}

	const args				= message.content.slice(client.config.prefix.length).trim().split(/ +/g);
	const command		= args.shift().toLowerCase();
	const cmd				= client.commands.get(command) || client.commands.get(client.aliases.get(command));

	/**
	*	Non-command messages
	*/
	if(message.content.indexOf(client.config.prefix) !== 0) {
		
		/**
		 * Interact with non-command messages. Useful for filtering or reacting to specific triggers.
		 */

		return;	//	Leave this here
	}

	if (cmd) {
		return cmd.run(client, message, args);
	}
};