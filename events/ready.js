module.exports = async client => {
    client.disableEveryone = true;
    client.disabledEvents = [   //  Don't track some events, can yield a minor performance improvement
        'TYPING_START',
        'VOICE_STATE_UPDATE',
        'VOICE_SERVER_UPDATE',
        'MESSAGE_REACTION_REMOVE',
        'MESSAGE_REACTION_REMOVE_ALL',
        'CHANNEL_PINS_UPDATE',
        'USER_NOTE_UPDATE',
        'RELATIONSHIP_ADD',
        'RELATIONSHIP_REMOVE'
    ];

    if(client.user.username !== client.config.botUsername) {
        client.user.setUsername(client.config.botUsername);
    }

    client.user.setPresence({
        status: "online",
        afk: false,
        game: {
            name: client.config.initialGame,
            type: 0
        }
    });

    process.stdout.write('\033c');	//	Clear console

    console.log(`Ready to serve ${client.users.size} users in ${client.guilds.size} servers.`);
};