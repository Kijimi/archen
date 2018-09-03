if (process.version.slice(1).split(".")[0] < 8) throw new Error("App requires Node 8.0.0 or higher. Update Node on your system.");

const Discord = require('discord.js');
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);
const fs = require('fs');

class Bot extends Discord.Client {
	constructor (options) {
		super (options);

		this.config = require("./config.js").config;
		this.commands = new Discord.Collection();
		this.aliases = new Discord.Collection();
		this.appPath = __dirname;
	}
}

const client = new Bot();

require(`${client.appPath}/prototypes.js`)(client);

const init = async () => {
	/**
	* Load commands
	*/
	const commandFiles = await readdir(`${client.appPath}/commands/`);
	console.log(`Loading ${commandFiles.length} commands...`);
	commandFiles.forEach(f => {
		try {
			const commandName = f.split(".")[0];
			const props = require(`${client.appPath}/commands/${f}`);
			if (f.split(".").slice(-1)[0] !== "js") return;
			console.log(`Loaded command [${commandName}]`);
			client.commands.set(props.conf.name, props);
			props.conf.aliases.forEach(alias => {
				client.aliases.set(alias, props.conf.name);
			});
		} catch (e) {
			console.trace(e);
			process.exit(1);
		}
	});
	/* ===================================================== */

	/**
	* Load events
	*/
	const eventFiles = await readdir(`${client.appPath}/events/`);
	console.log(`Loading ${eventFiles.length} events...`);
	eventFiles.forEach(file => {
		try {
			const eventName = file.split(".")[0];
			const event = require(`${client.appPath}/events/${file}`);
			client.on(eventName, event.bind(null, client));
			delete require.cache[require.resolve(`${client.appPath}/events/${file}`)];
			console.log(`Loaded event [${file.replace('.js', '')}]`);
		} catch (e) {
			console.trace(e);
			process.exit(1);
		}
	});	
	/* ===================================================== */

	/**
	* Log the bot into its account
	*/
	client.login(client.config.token);
	/* ===================================================== */
};


init();


/**
* Listen for CTRL+C and shut the bot down gracefully
*/
process.on('SIGINT', () => {
	console.log('Caught shutdown signal');
	client.destroy().then(() => {
		console.log('Client destroyed, exiting...');
		process.exit(1);
	}).catch(err => {
		console.log('Caught error when destroying client, shutting down anyways...\n', err);
		process.exit(1);
	});
});

process.on("uncaughtException", err => {
	const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
	console.trace("Uncaught Exception: ", errorMsg);
});

process.on("unhandledRejection", err => {
	console.trace("Uncaught Promise Error: ", err);
});