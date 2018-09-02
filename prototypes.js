/**
 * A collection of useful prototype methods I made
 */
module.exports = () => {
	String.prototype.toProperCase = function () {
		return this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	};

	String.prototype.usToSp = function () {
		return this.replace(/_/g, ' ');
	};

	String.prototype.scramble = function () {
		let a = this.split(""),
		n = a.length;

		for (let i = n - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			let tmp = a[i];
			a[i] = a[j];
			a[j] = tmp;
		}
		return a.join("");
	};

		function makeEmbed (color, title, message = null, footer = null, user = null) {
		const colors = {
			red: "#F44336",
			blue: "#3F51B5",
			green: "#4CAF50",
			yellow: "#FFEB3B",
			orange: "#FF9800"
		};
		
		if (!colors.hasOwnProperty(color)) return;	//	Do nothing if an invalid color is given
	
		let embed = new Discord.RichEmbed();
	
		embed.setColor(colors[color])
			.setDescription(`**${title}**${message != null ? '\n' + message : ''}`);
		if (user) embed.setAuthor(user.tag, user.displayAvatarURL);
		if (footer) {
			embed.setFooter(footer);
		} else {
			embed.setTimestamp();
		}
	
		staffChannel.send({ embed });
	};
	String.prototype.toProperCase = function () {
		return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	};
	
	Array.prototype.allValuesSame = function () {
		for(var i = 1; i < this.length; i++)
		{
			if(this[i] !== this[0])
				return false;
		}
		return true;
	};

	Array.prototype.shuffle = function () {
		let currentIndex = this.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = this[currentIndex];
			this[currentIndex] = this[randomIndex];
			this[randomIndex] = temporaryValue;
		}

		return this;
	};
};