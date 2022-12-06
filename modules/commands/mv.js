module.exports.config = {
  name: "mv",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "xem ảnh hiện có trên bot",
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

     if (args.length == 0) return api.sendMessage(`🎞 𝐃𝐚𝐧𝐡 𝐒𝐚́𝐜𝐡 𝐕𝐢𝐝𝐞𝐨 🎞\n\n𝟏. 𝐌𝐕 𝐆𝐚́𝐢 ❤️\n𝟐. 𝐌𝐕 𝐒𝐞𝐱 💚\n𝟑. 𝐌𝐕 𝐓𝐢𝐤𝐭𝐨𝐤 💜\n\n𝐃𝐮̀𝐧𝐠 /𝐦𝐯  (𝐯𝐢𝐝𝐞𝐨 𝐛𝐚̣𝐧 𝐜𝐚̂̀𝐧 𝐱𝐞𝐦)\n
`, event.threadID, event.messageID);

     if (args[0] == "gái") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://Ryanair-Web-Api-Phan-Duy.chauminhtri2022.repl.co/api/gaixinhtiktok.php').then(res => {
  var video = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `𝐕𝐢𝐝𝐞𝐨 𝐆𝐚́𝐢 𝐗𝐢𝐧𝐡 𝐍𝐞̇ ❤️\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
  if (args[0] == "tiktok") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://Ryanair-Web-Api-Phan-Duy.chauminhtri2022.repl.co/api/gaixinhtiktok.php').then(res => {
  var video = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `𝐕𝐢𝐝𝐞𝐨 𝐓𝐢𝐤𝐭𝐨𝐤 𝐍𝐞̀ 💞\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
    if (args[0] == "sex") {
  var money = (await Currencies.getData(event.senderID)).money
  if (money >= 1000) {
  axios.get('https://Ryanair-Web-Api-Phan-Duy.chauminhtri2022.repl.co/api/videosex.php').then(res => {
  var video = res.data.data;
  let callback = function () {
          api.sendMessage({
            body: `𝐕𝐢𝐝𝐞𝐨 𝐒𝐞𝐱 𝐍𝐞̀🤫\n-1000 đô`,
            attachment: fs.createReadStream(__dirname + `/cache/boobs.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.mp4`), event.messageID);
        };
        request(video).pipe(fs.createWriteStream(__dirname + `/cache/boobs.mp4`)).on("close", callback);
        Currencies.setData(event.senderID, options = {money: money - 1000})
      })
  } else return api.sendMessage("Bạn cần 1000 đô",event.threadID,event.messageID);
  }
  }