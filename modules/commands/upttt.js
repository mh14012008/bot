module.exports.config = {
	name: "uptime2",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "uptime",
	commandCategory: "uptime",
	cooldowns: 2,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("➤D/MM/YYYY HH:mm:ss");
	const timeStart = Date.now();
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link = ["https://i.imgur.com/D2UV0Dy.jpeg"];
var callback = () => api.sendMessage({body:`➳Bot and Admin Information

➜Admin : Joshua Sy, Selena Herkizch

»Bot Name : 【${global.config.BOTNAME}】

⫸Bot Prefix : 》${global.config.PREFIX}《

➼Bot work : ➺${hours} : ${minutes} : ${seconds}

➺Today Is : ${juswa}

►Thanks for using ${global.config.BOTNAME}`,attachment: fs.createReadStream(__dirname + "/cache/juswa.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.gif")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.gif")).on("close",() => callback());
   };