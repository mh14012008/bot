module.exports.config = {
  name: "time",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuanDz",
  description: "Xem ngร y giแป",
  commandCategory: "Tiแปn รญch",
  usages: "",
  cooldowns: 0,
  dependencies: []
};

module.exports.run = async function ({ api, event, args, Currencies, Users }) {
  const moment = require("moment-timezone");
  var ngay = moment.tz('Asia/Ho_Chi_Minh').format('D/MM/YYYY');
  var gio = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss');
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '๐๐ก๐ฎฬ ๐๐ก๐ฬฃฬ๐ญ'
  if (thu == 'Monday') thu = '๐๐ก๐ฎฬฬ ๐๐๐ข'
  if (thu == 'Tuesday') thu = '๐๐ก๐ฎฬฬ ๐๐'
  if (thu == 'Wednesday') thu = '๐๐ก๐ฎฬฬ ๐๐ฎฬ'
  if (thu == "Thursday") thu = '๐๐ก๐ฎฬฬ ๐๐ฬ๐ฆ'
  if (thu == 'Friday') thu = '๐๐ก๐ฎฬฬ ๐๐ฬ๐ฎ'
  if (thu == 'Saturday') thu = '๐๐ก๐ฎฬฬ ๐๐ฬ๐ฒ'
  let name = await Users.getNameUser(event.senderID);
  return api.sendMessage(`๐โโโโโ โข๐ธโข โโโโโ๐\n๐ ๐๐ฒ๐น๐น๐ผ, ${name}\nใค๐๐ต๐ฬ๐ฐ ๐ฏ๐ฎฬฃ๐ป ๐ญ ๐ป๐ด๐ฎฬ๐ ๐๐ผฬฬ๐ ๐น๐ฎฬ๐ป๐ต\nใค๐๐ฎฬ๐ ๐ด๐ถ๐ผฬฬ ๐น๐ฎฬ: ${gio} โฐ\nใค๐ ๐๐ ๐ฬ๐ฒ: ${ngay} (${thu})\nใค๐ ๐ง๐ต๐ถฬ๐ป๐ต: ๐๐, ๐๐๐๐น๐ฎ ๐๐ฎฬ ๐๐ฒ๐ฏ๐ผ๐ฐ ๐๐ต๐ถฬ ๐ฐ๐ผฬ ๐๐ต๐ฒฬฬ ๐ธ๐ฒฬฬ๐ ๐๐ฬ๐ฎ\nใค๐๐ผฬ๐ป ๐ฎ๐ป๐ต ๐๐ฎฬ ๐ฒ๐บ ๐๐ต๐ถฬ ๐ฐ๐ผฬ ๐๐ต๐ฒฬฬ ๐ธ๐ฒฬฬ๐ ๐ต๐ผฬ๐ป\n๐โโโโโ โข๐ธโข โโโโโ๐`, event.threadID, event.messageID)
}