module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "Tắt Bot.",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("[⚜️] =)) [⚜️]\n[🔰𝙊𝙁𝙁𝘽𝙊𝙏🔰] Bye cậu chủ nha em đi off đây:33",event.threadID, () =>process.exit(0))