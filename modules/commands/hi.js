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
  //trแบฃ lแปi
  var msg = {
    body: `๐ธ ๐ ๐๐๐ฅ๐ฅ๐จ ๐๐ข๐ง ๐๐ก๐ฬ๐จ ๐๐ฬ ${name}
๐ฅ๐๐ก๐ฎฬ๐ ๐๐ฬ๐ฅ๐ต๏ธ ${name} ๐รณ  ๐แป๐ญ ๐๐ ร ๐ฒ ๐แป๐ญ ๐ร ๐ง๐  ๐ร  ๐แบฃ๐ง๐  ๐๐ก๐จรก๐ข๐ฅณ๐
๐ ๐ ๐๐จ๐ง ๐แปฑ๐๐
๐๐ง๐ก ๐รช๐ฎ ๐๐ฆ ๐แปฑ๐๐ฅฒ
๐ ๐๐ก๐๐ข ๐ฤ๐ง๐  ๐แปฑ๐๐
๐รช๐ฎ ๐๐ฆ ๐ฤ๐ง๐  ๐๐ แปฑ๐โค๏ธ`,
    attachment: (await global.nodemodule["axios"]({
      url: (await global.nodemodule["axios"]("https://apikanna.change-itit.repl.co")).data.data,
      method: "GET",
      responseType: "stream"
    })).data
  }
  // Gแปi bot
  var arr = ["hi", "hello", "lรด", "hรญ lรด", "chร o", "hฤi", "hรญ", "hai"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.languages = {
  "vi": {
    "on": "Bแบญt",
    "off": "Tแบฏt",
    "successText": "hi thร nh cรดng",
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