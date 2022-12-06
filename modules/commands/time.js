module.exports.config = {
  name: "time",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuanDz",
  description: "Xem ngày giờ",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 0,
  dependencies: []
};

module.exports.run = async function ({ api, event, args, Currencies, Users }) {
  const moment = require("moment-timezone");
  var ngay = moment.tz('Asia/Ho_Chi_Minh').format('D/MM/YYYY');
  var gio = moment.tz('Asia/Ho_Chi_Minh').format('HH:mm:ss');
  var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  let name = await Users.getNameUser(event.senderID);
  return api.sendMessage(`🎀───── •🌸• ─────🎀\n👋 𝗛𝗲𝗹𝗹𝗼, ${name}\nㅤ𝗖𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝟭 𝗻𝗴𝗮̀𝘆 𝘁𝗼̂́𝘁 𝗹𝗮̀𝗻𝗵\nㅤ𝗕𝗮̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${gio} ⏰\nㅤ📅 𝐍𝐠𝐚̀𝐲: ${ngay} (${thu})\nㅤ💟 𝗧𝗵𝗶́𝗻𝗵: 𝗖𝘂, 𝗖𝘂𝗖𝗹𝟮 𝘃𝗮̀ 𝗙𝗲𝟯𝗼𝟰 𝘁𝗵𝗶̀ 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗸𝗲̂́𝘁 𝘁𝘂̉𝗮\nㅤ𝗖𝗼̀𝗻 𝗮𝗻𝗵 𝘃𝗮̀ 𝗲𝗺 𝘁𝗵𝗶̀ 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗸𝗲̂́𝘁 𝗵𝗼̂𝗻\n🎀───── •🌸• ─────🎀`, event.threadID, event.messageID)
}