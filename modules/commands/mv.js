module.exports.config = {
  name: "mv",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "xem แบฃnh hiแปn cรณ trรชn bot",
  commandCategory: "nsfw",
  usages: "mv",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
}

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies,getText}) => {
   
   const axios = require('axios');
    const request = require('request');
    const fs = require('fs-extra');

     if (args.length == 0) return api.sendMessage(`๐ ๐๐๐ง๐ก ๐๐ฬ๐๐ก ๐๐ข๐๐๐จ ๐\n\n๐. ๐๐ ๐๐ฬ๐ข โค๏ธ\n๐. ๐๐ ๐๐๐ฑ ๐\n๐. ๐๐ ๐๐ข๐ค๐ญ๐จ๐ค ๐\n\n๐๐ฎฬ๐ง๐  /๐ฆ๐ฏ  (๐ฏ๐ข๐๐๐จ ๐๐ฬฃ๐ง ๐๐ฬฬ๐ง ๐ฑ๐๐ฆ)\n
`, event.threadID, event.messageID);

     if (args[0] == "gรกi") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://Ryanair-Web-Api-Phan-Duy.chauminhtri2022.repl.co/api/gaixinhtiktok.php').then(res => {
  var video = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `๐๐ข๐๐๐จ ๐๐ฬ๐ข ๐๐ข๐ง๐ก ๐๐ฬ โค๏ธ\n-1000 ฤรด`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bแบกn cแบงn 1000 ฤรด",event.threadID,event.messageID);
  }
  if (args[0] == "tiktok") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://Ryanair-Web-Api-Phan-Duy.chauminhtri2022.repl.co/api/gaixinhtiktok.php').then(res => {
  var video = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `๐๐ข๐๐๐จ ๐๐ข๐ค๐ญ๐จ๐ค ๐๐ฬ ๐\n-1000 ฤรด`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bแบกn cแบงn 1000 ฤรด",event.threadID,event.messageID);
  }
    if (args[0] == "sex") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://Ryanair-Web-Api-Phan-Duy.chauminhtri2022.repl.co/api/videosex.php').then(res => {
  var video = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `๐๐ข๐๐๐จ ๐๐๐ฑ ๐๐ฬ๐คซ\n-1000 ฤรด`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bแบกn cแบงn 1000 ฤรด",event.threadID,event.messageID);
  }
  }