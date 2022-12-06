module.exports.config = {
  name: "ad",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Kiểm tra thông tin admin bot.",
  commandCategory: "Thông tin adminbot",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/IqMtyrP.gif",
"https://i.imgur.com/KhZP4I6.mp4",
"https://i.imgur.com/zlRP3m2.gif",
"https://i.imgur.com/KX6sQo9.gif",
 ];
  var callback = () => api.sendMessage({body:`===🌦️ADMIN-BOT🌦️===
 👀 𝗡𝗮𝗺𝗲: 𝐏𝐡𝐚̣𝐦 𝐌𝐢𝐧𝐡 𝐇𝐢𝐞̂́𝐮
 ❎ 𝗔𝗴𝗲: 𝟏𝟒+
 👦 𝑩𝒐𝒚: 𝑵𝒂𝒎 
 🙄 𝗬𝗲𝗮𝗿 𝗢𝗳 𝗕𝗶𝗿𝘁𝗵: 14/1/2008
 💫 𝗛𝗲𝗶𝗴𝗵𝘁 / 𝗪𝗲𝗶𝗴𝗵𝗲𝗱: 𝟏𝒎7 / 50𝒌𝒈
 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽𝘀: ...𝙢 𝙝𝙞𝙚̂̉𝙪
 😎 𝗟𝗶𝘃𝗶𝗻𝗴 𝗶𝗻: Vĩnh Phúc
 🤔 𝗟𝗶𝘃𝗲 𝗶𝗻: Vĩnh Phúc 🌚
 👫 𝗧𝗮𝘀𝘁𝗲: 𝒄𝒖𝒕𝒐:)
 🌸 𝗖𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿: 𝒉𝒊𝒆̂̀𝒏 𝒅𝒆̂̃ 𝒈𝒂̂̀𝒏, 𝒗𝒖𝒊 𝒕𝒊́𝒏𝒉, 𝒄𝒐̣𝒄
 📱 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://www.facebook.com/hieuvinhphuc20081
📢 𝗟𝘂̛𝘂 𝗬́ :
- 𝑽𝒖𝒊 𝒍𝒐̀𝒏𝒈 𝒌𝒉𝒐̂𝒏𝒈 𝒔𝒑𝒂𝒎 𝒌𝒉𝒊 𝒔ử 𝒅𝒖̣𝒏𝒈 đ𝒆̂̉ 𝒕𝒓𝒂́𝒏𝒉 𝒅𝒊𝒆 𝒃𝒐𝒕
- 𝑲𝒉𝒐̂𝒏𝒈 𝒔ử 𝒅𝒖̣𝒏𝒈 𝒍ệ𝒏𝒉 𝒏𝒉𝒊𝒆̂̀𝒖 𝒄𝒖̉𝒂 𝒍ệ𝒏𝒉 đ𝒐́
- 𝑯𝒂̣𝒏 𝒄𝒉𝒆̂́ 𝑺𝒑𝒂𝒎 𝒏𝒖𝒅𝒆 𝒌𝒉𝒐̂𝒏𝒈 𝒄𝒉𝒊 𝒍𝒂̀ 𝒄𝒉𝒂̣̆𝒏 𝒅𝒖̀𝒏𝒈 𝑩𝒐𝒕
- 𝑵𝒆̂́𝒖 𝒃𝒐𝒕 𝒌𝒐 𝒉𝒐𝒂̣𝒕 độ𝒏𝒈 𝒉𝒂𝒚 𝒃𝒊̣ 𝒍ỗ𝒊 𝒉𝒂𝒚 𝒍𝒊𝒆̂𝒏 𝒉ệ 𝒇𝒂𝒄𝒆𝒃𝒐𝒐𝒌 đ𝒆̂̉ đượ𝒄 𝒍𝒊𝒆̂𝒏 𝒉ệ 𝒕𝒓ự𝒄 𝒕𝒊𝒆̂́𝒑 𝒗ớ𝒊 𝒎𝒊̀𝒏𝒉
- 𝑯𝒂̃𝒚 𝒚𝒆̂𝒖 𝑨𝒅𝒎𝒊𝒏 𝑩𝒐𝒕 𝒗𝒊̀ 𝑨𝒅 𝒓𝒂̂́𝒕 𝒅𝒂̉𝒎 𝒅𝒂𝒏𝒈
=> 𝗖𝗮̉𝗺 𝗼̛𝗻 𝘃𝗮̀ 𝘆𝗲̂𝘂 𝗺𝗻 𝗻𝗵𝗶𝗲̂̀𝘂 𝗹𝗮̆́𝗺, 𝗵𝗮̃𝘆 𝗱𝗼̂̀𝗻𝗴 𝗵𝗮̀𝗻𝗵 𝗰𝘂̀𝗻𝗴 𝗕𝗼𝘁 𝘃𝗮̀ 𝗔𝗱 𝗻𝗵𝗮𝗮 <𝟯 \n ----• 𝘽𝘽𝙊𝙏𝘾𝘼𝙍𝙆 •----`,attachment: fs.createReadStream(__dirname + "/cache/5.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.gif")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.gif")).on("close",() => callback());
   };
