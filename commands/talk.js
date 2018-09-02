exports.run = async (client, message, args, level) => {
try{
    const axios = require("axios");
    let cs;
    const api_key = 'CC7yrbJDBivC_tyitHMl_dsEasA';
    const msg = args.join(" ");
    axios({
      method: 'GET',
      url: `http://www.cleverbot.com/getreply?key=${api_key}&input=${msg}&cs=${cs}`,
      responseType: 'json'
    }).then(res => {
      const data = res.data;
      cs = data.cs;
      return message.reply(data.output);
    }).catch(e => {
      return console.log(e);	
    });
}catch(e){
    console.log(e.stack);
}   
}
exports.conf = {
	name: 'talk',
	aliases: []	//	Array of aliases for the command.
};