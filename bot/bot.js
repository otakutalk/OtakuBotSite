const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./package.json");

const botChannel = new Discord.WebhookClient('786570252888047627', 'XWj3-I97XdQdFsglQiUZh5FnoAg3s_a27hCNcNczXTTbGG9rSwENrKmWuMZyymyTrXvu');

client.once('ready', () => {
	console.log('Ready!');
});

var username = '';
var avatar = '';
client.on('message', message => {
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	
	if (message.member.roles.get('786409608394440705') || message.member.roles.get('771196262933856287') || message.member.roles.get('788097489596448768')) {
	
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;
	
	if (command === 'ping') {
		message.channel.send('Pong!');
	}
	
	if(command === 'list') {
		message.channel.send('List will be available shortly');
	}
	
	if(command === 'tsukki') {
		avatar = 'https://cdn.discordapp.com/attachments/532403178768039940/786402334367678534/bleh-7032.png';
		sendMessage('Tsukishima', avatar, message.channel.id);
	}
	
	if(command === 'yams') {
		sendMessage('Yamaguchi');
	}
	
	if(command === 'delete') {
	const amount = args.join(' '); // Amount of messages which should be deleted

	if (!amount) return message.reply('You haven\'t given an amount of messages which should be deleted!'); // Checks if the `amount` parameter is given
	if (isNaN(amount)) return message.reply('The amount parameter isn`t a number!'); // Checks if the `amount` parameter is a number. If not, the command throws an error

	if (amount > 100) return message.reply('You can`t delete more than 100 messages at once!'); // Checks if the `amount` integer is bigger than 100
	if (amount < 1) return message.reply('You have to delete at least 1 message!'); // Checks if the `amount` integer is smaller than 1

	/*async () => {
		await message.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
		message.channel.bulkDelete(messages)
	})}*/
	message.channel.bulkDelete(amount);
	}	// Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
	}else{
		message.reply('Sorry, you don\'t have the permissions for this command!');
	}
	
});

	function sendMessage(character, avatar, id) {
	console.log('Channel ID: ' + id);
	console.log('Avatar URL: ' + avatar);
	
	botChannel.send({
    username: character,
	avatar_url: avatar,
    content: 'I\'m here'
	});

	};

client.login('Nzg4MDU2MjgwMTI3NTA0NDE0.X9d8mg.EKfv0vgG3qgnhV8k_N33YEGcZuw');