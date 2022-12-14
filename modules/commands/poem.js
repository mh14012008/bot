module.exports.config = {
  name: "poem",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuanDz",
  description: "Thแบฃ Thรญnh",
  commandCategory: "Tรฌnh Yรชu",
  cooldowns: 3
};
function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const fetch = global.nodemodule["node-fetch"];
  const request = require('request');
  const res = await axios.get(`https://apituandz1407.herokuapp.com/api/hearing.php`);
  var poem = res.data.data;
  const fs = require("fs");
  const moment = require("moment-timezone");
  var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '๐๐ก๐ฎฬ ๐๐ก๐ฬฃฬ๐ญ'
  if (thu == 'Monday') thu = '๐๐ก๐ฎฬฬ ๐๐๐ข'
  if (thu == 'Tuesday') thu = '๐๐ก๐ฎฬฬ ๐๐'
  if (thu == 'Wednesday') thu = '๐๐ก๐ฎฬฬ ๐๐ฎฬ'
  if (thu == "Thursday") thu = '๐๐ก๐ฎฬฬ ๐๐ฬ๐ฆ'
  if (thu == 'Friday') thu = '๐๐ก๐ฎฬฬ ๐๐ฬ๐ฎ'
  if (thu == 'Saturday') thu = '๐๐ก๐ฎฬฬ ๐๐ฬ๐ฒ'
  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const timeStart = Date.now();
  axios.get('https://apituandz1407.herokuapp.com/api/couple.php').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
    let callback = function () {
      api.sendMessage({
        body: `ใค๐ === ๐๐ฬ๐ฎ ๐๐ก๐ขฬ๐ง๐ก === ๐\n\n๐ธโโโโ โขโค๏ธโ๐ฅโข โโโโ๐ธ\n\n${poem}\n\n๐โโโโ โขโค๏ธโ๐ฅโข โโโโ๐\n ๐ต๐๐๐๐ฬฬ๐ ๐ป๐ฬฬ๐ ๐ป๐ฬ๐ โค๏ธ\n\nใคใคใค๐ฎ ${thu} ๐ฎ\nโณ ${gio} โณ`,
        attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
    };
    request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
  })
}