module.exports.config = {
  name: "hi",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "ManhG",
  description: "",
  commandCategory: "Other",
  usages: "",
  cooldowns: 0,
  denpendencies: {
    "fs-extra": "",
    "request": ""
  }
};

module.exports.handleEvent = async ({
  event,
  api,
  Users
}) => {
  const fs = global.nodemodule["fs-extra"];
  var {
    threadID,
    messageID,
    body,
    senderID
  } = event;
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["hi"] !== "undefined" && thread["hi"] == false) return;

  let name = await Users.getNameUser(event.senderID);
  if (senderID == api.getCurrentUserID()) return;

  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  //trả lời
  var msg = {
    body: `🌸 🐒 𝐇𝐞𝐥𝐥𝐨 𝐗𝐢𝐧 𝐂𝐡𝐚̀𝐨 𝐁𝐞́ ${name}
🥀𝐂𝐡𝐮́𝐜 𝐁𝐞́🥀🏵️ ${name} 𝐂ó  𝐌ộ𝐭 𝐍𝐠à𝐲 𝐓ố𝐭 𝐋à𝐧𝐠 𝐕à 𝐒ả𝐧𝐠 𝐊𝐡𝐨á𝐢🥳🙈
𝟐 𝟑 𝐂𝐨𝐧 𝐌ự𝐜🐕
𝐀𝐧𝐡 𝐘ê𝐮 𝐄𝐦 𝐂ự𝐜🥲
𝟑 𝐂𝐡𝐚𝐢 𝐓ă𝐧𝐠 𝐋ự𝐜😆
𝐘ê𝐮 𝐄𝐦 𝐂ă𝐧𝐠 𝐍𝐠ự𝐜❤️`,
    attachment: (await global.nodemodule["axios"]({
      url: (await global.nodemodule["axios"]("https://apikanna.change-itit.repl.co")).data.data,
      method: "GET",
      responseType: "stream"
    })).data
  }
  // Gọi bot
  var arr = ["hi", "hello", "lô", "hí lô", "chào", "hăi", "hí", "hai"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "hi thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "hi success!",
  }
}

module.exports.run = async function({
  api,
  event,
  Threads,
  getText
}) {
  const {
    threadID,
    messageID
  } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
  else data["hi"] = true;

  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
        }