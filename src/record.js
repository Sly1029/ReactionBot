
require("discord.js");



class MessageChecker{

	constructor(discord, client){
		console.log("ready");
		this.client = client;
		this.discord = discord;
		
	}


	checkForMessages(){
		
		this.client.on('message', this.checkValidImageLink);

	}

	checkValidImageLink(message){
		let isLink = message.content.includes(".png") || message.content.includes(".jpg") || message.content.includes(".mp4");
		let isMessageAttachement = message.attachments.size > 0;
		console.log(message.attachments.size);	

		console.log(`isLink ${isLink}  attachment ${isMessageAttachement}`);

		if (isLink || isMessageAttachement){
			message.react('\uD83D\uDC4D');
		}

		

	}
}
module.exports = MessageChecker;

