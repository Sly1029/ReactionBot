'use strict';
const MessageChecker = require("./record.js")
const Discord = require("discord.js");
require('dotenv').config();




const client = new Discord.Client();


client.once('ready', () => {

	console.log("READY");	


});

client.login(process.env.API_KEY);
const messagechecker = new MessageChecker(Discord, client);
messagechecker.checkForMessages();
