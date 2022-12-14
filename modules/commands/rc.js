
module.exports.config = {
  name: "rc",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "mindat",
  description: "Chat แบฉn danh qua bot",
  commandCategory: "Cรดng Cแปฅ",
  usages: "[random/id/check]",
  cooldowns: 0
}

const fs = require('fs-extra');
const axios = require('axios');
const rcp = require('path').resolve(__dirname, 'cache', 'rcp.json');
module.exports.onLoad = function () {
  if (!fs.existsSync(rcp)) fs.writeFileSync(rcp, '[]');
}

module.exports.run = async function ({ api, event, Users, args }) {
  const { messageID, threadID, isGroup } = event;
  const o = (m, c = () => { }, id = threadID) => api.sendMessage(m, id, c, messageID);
  const s = api.sendMessage;
  if (isGroup) return o("๐๐ฎฬฃ๐ป ๐ฐ๐ต๐ถฬ ๐ฐ๐ผฬ ๐๐ต๐ฒฬฬ ๐ฑ๐ฬ๐ป๐ด ๐ฟ๐ฐ ๐๐ฟ๐ผ๐ป๐ด ๐๐ถ๐ป ๐ป๐ต๐ฎฬฬ๐ป ๐ฟ๐ถ๐ฒฬ๐ป๐ด ๐๐ผฬฬ๐ถ ๐ฏ๐ผ๐ ๐๐ต๐ผฬ๐ถ ๐ป๐ต๐ฒฬ ๐ฝ");
  var rc = {};
  rc.root = threadID;
  rc.head = null;
  rc.isWaiting = false;
  rc.isStarted = false;
  rc.isError = false;
  rc.rootIsIncognito = true;
  rc.headIsIncognito = true;
  rc.isRandom = false;

  switch (args[0]) {
    case 'random':
      var data = require(rcp);
      if (data.some(e => (e.root == threadID || e.head == threadID))) return o("๐๐ฎฬฃ๐ป ๐ต๐ถ๐ฒฬฃฬ๐ป ๐ด๐ถ๐ผฬฬ ๐ป๐ด๐ผฬฬ๐ถ ๐ฐ๐ต๐ผฬฬ ๐ธ๐ฒฬฬ๐ ๐ป๐ผฬฬ๐ถ ๐๐ผฬฬ๐ถ ๐บ๐ผฬฃฬ๐ ๐ป๐ด๐ฬ๐ผฬฬ๐ถ ๐ธ๐ต๐ฎฬ๐ฐ. ๐๐ต๐ผฬ๐ป๐ด ๐๐ต๐ฒฬฬ ๐๐ต๐ฬฬฃ๐ฐ ๐ต๐ถ๐ฒฬฃฬ๐ป ๐๐ฒฬ๐ ๐ฐ๐ฎฬฬ๐ ๐ป๐ฎฬ๐ ๐ธ");
      rc.isRandom = true;
      o("๐๐ฬฃ๐ง ๐ฏ๐ฎฬฬ๐ ๐๐ก๐จฬฃ๐ง ๐ฆ๐จ๐๐ ๐ญ๐ขฬ๐ฆ ๐ค๐ข๐ฬฬ๐ฆ ๐ง๐ ๐ฬฬ๐ฎ ๐ง๐ก๐ข๐ฬ๐ง.\n๐๐ฬฃ๐ง ๐๐จฬ ๐ฆ๐ฎ๐จฬฬ๐ง ๐ฬฬ๐ง ๐ ๐ข๐ฬฬ๐ฎ ๐ญ๐ก๐ฬ๐ง ๐ฉ๐ก๐ฬฃฬ๐ง ?\n\n๐๐๐ฉ๐ฅ๐ฒ ๐ฏ๐จฬฬ๐ข ๐ฌ๐จฬฬ ๐ ๐ง๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐ฬฬ๐ง ๐๐๐ง๐ก, ๐ฌ๐จฬฬ ๐ ๐ง๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐๐จฬ๐ง๐  ๐ค๐ก๐๐ข ๐ญ๐ก๐ฬ๐ง ๐ฉ๐ก๐ฬฃฬ๐ง ๐", (_, i) => global.client.handleReply.push({ type: 'incognitoRootRandomHead', name: this.config.name, author: threadID, messageID: i.messageID, data: rc }));
      break;
    case 'reject':
      var data = require(rcp);
      if (data.some(e => e.head == threadID && e.isWaiting)) {
        let rj = data.findIndex(e => e.head == threadID);
        o("๐๐ฬฃ๐ง ๐ฏ๐ฎฬฬ๐ ๐ญ๐ฎฬฬ ๐๐ก๐จฬฬ๐ข ๐ค๐ฬฬ๐ญ ๐ง๐จฬฬ๐ข ๐ฏ๐จฬฬ๐ข ๐ง๐ ๐ฎฬ๐จฬฬ๐ข ๐ฅ๐ข๐ฬ๐ง ๐ก๐ฬฃฬ ๐ฟ๐", () => {
          s("๐๐ ๐ฎฬ๐จฬฬ๐ข ๐ฅ๐ข๐ฬ๐ง ๐ก๐ฬฃฬ ๐ฏ๐ฎฬฬ๐ ๐ญ๐ฎฬฬ ๐๐ก๐จฬฬ๐ข ๐ค๐ฬฬ๐ญ ๐ง๐จฬฬ๐ข ๐ฏ๐จฬฬ๐ข ๐๐ฬฃ๐ง ๐ฟ๐", data[rj].root);
          data.splice(rj, 1);
          fs.writeFileSync(rcp, JSON.stringify(data, null, 4));
        });
      } else o("๐๐ก๐จฬ๐ง๐  ๐๐จฬ ๐ง๐ ๐ฎฬ๐จฬฬ๐ข ๐ฅ๐ข๐ฬ๐ง ๐ก๐ฬฃฬ ๐ง๐ฬ๐จ ๐ก๐ข๐ฬฃฬ๐ง ๐ง๐ ๐จฬฬ๐ข ๐๐ก๐จฬฬ ๐ค๐ฬฬ๐ญ ๐ง๐จฬฬ๐ข ๐๐ฎฬ๐ ๐๐ฬฃ๐ง ๐ฟ๐");
      break;
    case 'accept':
      var data = require(rcp);
      if (data.some(e => e.head == threadID && e.isWaiting)) {
        let ac = data.find(e => e.head == threadID && e.isWaiting);
        o("๐๐ฬฃ๐ง ๐ฏ๐ฎฬฬ๐ ๐๐ก๐ฬฬ๐ฉ ๐ง๐ก๐ฬฃฬ๐ง ๐ค๐ฬฬ๐ญ ๐ง๐จฬฬ๐ข ๐ฏ๐จฬฬ๐ข ๐ง๐ ๐ฎฬ๐จฬฬ๐ข ๐ฅ๐ข๐ฬ๐ง ๐ก๐ฬฃฬ ๐\n๐๐ฬฃ๐ง ๐๐จฬ ๐ฆ๐ฎ๐จฬฬ๐ง ๐ฬฬ๐ง ๐ ๐ข๐ฬฬ๐ฎ ๐ญ๐ก๐ฬ๐ง ๐ฉ๐ก๐ฬฃฬ๐ง ?\n\n๐๐๐ฉ๐ฅ๐ฒ ๐ฏ๐จฬฬ๐ข ๐ฌ๐จฬฬ ๐ ๐ง๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐ฬฬ๐ง ๐๐๐ง๐ก, ๐ฌ๐จฬฬ ๐ ๐ง๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐๐จฬ๐ง๐  ๐ค๐ก๐๐ข ๐ญ๐ก๐ฬ๐ง ๐ฉ๐ก๐ฬฃฬ๐ง ๐", (_, i) => global.client.handleReply.push({ type: 'incognitoHead', name: this.config.name, author: threadID, messageID: i.messageID, data: ac }))
      }
      break;
    case 'end':
    case 'leave':
    case '-l':
      var data = require(rcp);
      if (data.some(e => (e.root == threadID || e.head == threadID))) {
        var end = data.findIndex(e => (e.root == threadID || e.head == threadID));
        var endData = data[end];
        var enderId = endData.root == threadID ? endData.root : endData.head;
        var remain = endData.root == threadID ? endData.head : endData.root;
        var enderIncognito = endData.root == threadID ? endData.rootIsIncognito : endData.headIsIncognito;
        o("๐๐ฬฃ๐ง ๐ฏ๐ฎฬฬ๐ ๐ค๐ฬฬ๐ญ ๐ญ๐ก๐ฎฬ๐ ๐๐ฎ๐จฬฃฬ๐ ๐ญ๐ซ๐จฬ ๐๐ก๐ฎ๐ฒ๐ฬฃฬ๐ง ๐", async (er) => {
          var enderName = await Users.getNameUser(enderId);
          var msg = enderIncognito == false ? `${enderName} ๐ฏ๐ฎฬฬ๐ ๐ซ๐จฬฬ๐ข ๐ค๐ก๐จฬ๐ข ๐๐ฎ๐จฬฃฬ๐ ๐ญ๐ซ๐จฬ ๐๐ก๐ฎ๐ฒ๐ฬฃฬ๐ง.` : "๐๐ ๐ฎฬ๐จฬฬ๐ข ๐ฅ๐ข๐ฬ๐ง ๐ก๐ฬฃฬ ๐ฏ๐ฎฬฬ๐ ๐ซ๐จฬฬ๐ข ๐ค๐ก๐จฬ๐ข ๐๐ฎ๐จฬฃฬ๐ ๐ญ๐ซ๐จฬ ๐๐ก๐ฎ๐ฒ๐ฬฃฬ๐ง.";
          return s(msg, remain);
        });
        data.splice(end, 1);
        fs.writeFileSync(rcp, JSON.stringify(data, null, 4));
      } else o("๐๐ก๐จฬ๐ง๐  ๐๐จฬ ๐๐ฎ๐จฬฃฬ๐ ๐ญ๐ซ๐จฬ ๐๐ก๐ฎ๐ฒ๐ฬฃฬ๐ง ๐ง๐ฬ๐จ ๐ก๐ข๐ฬฃฬ๐ง ๐๐ข๐ฬฬ๐ง ๐ซ๐.");
      break;
    case "data":
      var data = require(rcp);
      console.log(JSON.stringify(data));
      break;
    case "check":
    case "info":
    case "-i":
      var data = require(rcp);
      if (data.some(e => (e.root == threadID || e.head == threadID))) {
        var rcData = data.find(e => (e.root == threadID || e.head == threadID));
        var incognito = rcData.root == threadID ? rcData.headIsIncognito : rcData.rootIsIncognito;
        var msg = '๐๐ง๐๐จ๐ซ๐ฆ๐๐ญ๐ข๐จ๐ง ๐จ๐ ๐๐:';
        msg += '\n\n- ๐ฌ๐ผ๐๐ฟ ๐๐: ' + threadID;
        if (incognito == true) msg += '\n- ๐ข๐๐ต๐ฒ๐ฟ: ๐๐ ๐ถ๐ ๐ต๐ถ๐ฑ๐ฑ๐ฒ๐ป';
        else {
          var name = await Users.getNameUser((rcData.head == threadID ? rcData.root : rcData.head));
          msg += '\n- ๐ข๐๐ต๐ฒ๐ฟ: ' + (rcData.head == threadID ? rcData.root : rcData.head) + ' - ' + name;
        }
        msg += '\n- ๐ฆ๐๐ฎ๐๐๐: ' + (rcData.isWaiting ? '๐ช๐ฎ๐ถ๐๐ถ๐ป๐ด ๐ณ๐ผ๐ฟ ๐ฎ๐ฐ๐ฐ๐ฒ๐ฝ๐.' : rcData.isStarted ? '๐๐ฒ ๐ฐ๐ต๐ฎ๐๐๐ถ๐ป๐ด.' : '???');
        return o(msg);
      } else o("๐๐ก๐จฬ๐ง๐  ๐๐จฬ ๐๐ฎ๐จฬฃฬ๐ ๐ญ๐ซ๐จฬ ๐๐ก๐ฎ๐ฒ๐ฬฃฬ๐ง ๐ง๐ฬ๐จ ๐ก๐ข๐ฬฃฬ๐ง ๐๐ข๐ฬฬ๐ง ๐ซ๐");
    default:
      var data = require(rcp);
      if (data.some(e => (e.root == threadID || e.head == threadID))) return o("๐๐ฎฬฃ๐ป ๐ต๐ถ๐ฒฬฃฬ๐ป ๐ฐ๐ผฬ ๐ญ ๐ธ๐ฒฬฬ๐ ๐ป๐ผฬฬ๐ถ ๐ธ๐ต๐ฎฬ๐ฐ ๐ป๐ฒฬ๐ป ๐ธ๐ต๐ผฬ๐ป๐ด ๐๐ต๐ฒฬฬ ๐๐ต๐ฬฬฃ๐ฐ ๐ต๐ถ๐ฒฬฃฬ๐ป ๐๐ฒฬ๐ ๐ฐ๐ฎฬฬ๐ ๐ป๐ฎฬ๐.");
      if (!args[0] || isNaN(args[0])) return o("๐๐ฎ๐ข ๐ฅ๐จฬ๐ง๐  ๐ง๐ก๐ฬฃฬ๐ฉ ๐๐ ๐ง๐ ๐ฎฬ๐จฬฬ๐ข ๐๐ฬฃ๐ง ๐ฆ๐ฎ๐จฬฬ๐ง ๐ค๐ฬฬ๐ญ ๐ง๐จฬฬ๐ข ๐ญ๐ซ๐จฬ ๐๐ก๐ฎ๐ฒ๐ฬฃฬ๐ง ๐");
      rc.head = args[0];
      if (data.some(e => (e.root == rc.head || e.head == rc.head))) return o('๐๐ ๐ฎฬ๐จฬฬ๐ข ๐๐ฬฃ๐ง ๐ฆ๐ฎ๐จฬฬ๐ง ๐ค๐ฬฬ๐ญ ๐ง๐จฬฬ๐ข ๐ก๐ข๐ฬฃฬ๐ง ๐ญ๐ซ๐จ๐ง๐  ๐ ๐ค๐ฬฬ๐ญ ๐ง๐จฬฬ๐ข ๐ค๐ก๐ฬ๐, ๐ฏ๐ฎ๐ข ๐ฅ๐จฬ๐ง๐  ๐ญ๐ก๐ฎฬฬ ๐ฅ๐ฬฃ๐ข ๐ฌ๐๐ฎ.')
      o(`๐๐ฬฃ๐ง ๐ฏ๐ฎฬฬ๐ ๐ฒ๐ฬ๐ฎ ๐๐ฬฬ๐ฎ ${args[0]} ๐ค๐ฬฬ๐ญ ๐ง๐จฬฬ๐ข ๐ญ๐ซ๐จฬ ๐๐ก๐ฎ๐ฒ๐ฬฃฬ๐ง ๐\n๐๐ฬฃ๐ง ๐๐จฬ ๐ฆ๐ฎ๐จฬฬ๐ง ๐ฬฬ๐ง ๐ ๐ข๐ฬฬ๐ฎ ๐ญ๐ก๐ฬ๐ง ๐ฉ๐ก๐ฬฃฬ๐ง ?\n\n๐๐๐ฉ๐ฅ๐ฒ ๐ฏ๐จฬฬ๐ข ๐ฌ๐จฬฬ ๐ ๐ง๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐ฬฬ๐ง ๐๐๐ง๐ก, ๐ฌ๐จฬฬ ๐ ๐ง๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐๐จฬ๐ง๐  ๐ค๐ก๐๐ข ๐ญ๐ก๐ฬ๐ง ๐ฉ๐ก๐ฬฃฬ๐ง ๐`, (_, i) => global.client.handleReply.push({ type: 'incognitoRoot', name: this.config.name, author: threadID, messageID: i.messageID, data: rc }));
      break;
  }
}

module.exports.handleReply = async function ({ handleReply, api, event, Users }) {
  const { threadID, messageID, body } = event;
  const o = (m, c = () => { }, id = threadID) => api.sendMessage(m, id, c, messageID);
  const s = api.sendMessage;
  switch (handleReply.type) {
    case 'incognitoRootRandomHead':
      var rcData = require(rcp);
      var rc = handleReply.data;
      var headID;
      if (body == 0) {
        rc.rootIsIncognito = true;
        o("๐๐ฬฃ๐ง ๐ฏ๐ฎฬฬ๐ ๐๐ก๐จฬฃ๐ง ๐ฬฬ๐ง ๐ ๐ข๐ฬฬ๐ฎ ๐ญ๐ก๐ฬ๐ง ๐ฉ๐ก๐ฬฃฬ๐ง ๐ฅ");
      } else if (body == 1) {
        rc.rootIsIncognito = false;
        o("๐๐ฬฃ๐ง ๐ฏ๐ฎฬฬ๐ ๐๐ก๐จฬฃ๐ง ๐ก๐ข๐ฬฃฬ๐ง ๐ญ๐ก๐ฬ๐ง ๐ฉ๐ก๐ฬฃฬ๐ง ๐");
      }
      const userID = global.data.allUserID;
      headID = userID[Math.floor(Math.random() * userID.length)];
      var rootName = await Users.getNameUser(rc.root);
      var fbUrl = 'https://facebook.com/' + rc.root;
      s((rc.rootIsIncognito ? "๐๐จฬ ๐ ๐ง๐ ๐ฎฬ๐จฬฬ๐ข ๐ฅ๐ข๐ฬ๐ง ๐ก๐ฬฃฬ ๐ฬฬ๐ง ๐๐๐ง๐ก ๐ฆ๐ฎ๐จฬฬ๐ง ๐ญ๐ซ๐จฬ ๐๐ก๐ฎ๐ฒ๐ฬฃฬ๐ง ๐ฏ๐จฬฬ๐ข ๐๐ฬฃ๐ง" : `๐๐จฬฃฬ๐ญ ๐ง๐ ๐ฎฬ๐จฬฬ๐ข ๐ญ๐ฬ๐ง ${rootName} - ${fbUrl} ๐ฆ๐ฎ๐จฬฬ๐ง ๐ญ๐ซ๐จฬ ๐๐ก๐ฎ๐ฒ๐ฬฃฬ๐ง ๐ฏ๐จฬฬ๐ข ๐๐ฬฃ๐ง.`) + `\n๐๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐ญ๐ฎฬฬ ๐๐ก๐จฬฬ๐ข ๐ก๐ฬ๐ฒ ๐ง๐ก๐ฬฃฬ๐ฉ ๐ฅ๐ฬฃฬ๐ง๐ก: ${global.config.PREFIX}๐ฟ๐ฐ ๐ฟ๐ฒ๐ท๐ฒ๐ฐ๐\n๐๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐๐ก๐ฬฬ๐ฉ ๐ง๐ก๐ฬฃฬ๐ง ๐ก๐ฬ๐ฒ ๐ง๐ก๐ฬฃฬ๐ฉ ๐ฅ๐ฬฃฬ๐ง๐ก: ${global.config.PREFIX}๐ซ๐ ๐๐๐๐๐ฉ๐ญ`, headID, (er, i) => {
        if (er) o("ฤรฃ cรณ lแปi xแบฃy ra khi cแป kแบฟt nแปi vแปi ngฦฐแปi liรชn hแป.\nVui lรฒng thแปญ lแบกi sau.");
        else {
          o("๐๐ขฬ๐ฆ ๐ค๐ข๐ฬฬ๐ฆ ๐ญ๐ก๐ฬ๐ง๐ก ๐๐จฬ๐ง๐  !\n๐๐ฬ๐ฒ ๐๐ก๐จฬฬ ๐ฅ๐ฬฃฬ๐ง๐ก ๐ค๐ฬฬ๐ญ ๐ง๐จฬฬ๐ข ๐ญ๐ฎฬฬ ๐ฉ๐ก๐ขฬ๐ ๐๐ฬ๐ง ๐ค๐ข๐ โณ");
          rc.isWaiting = true;
          rc.head = headID;
          rcData.push(rc);
          fs.writeFileSync(rcp, JSON.stringify(rcData, null, 4));
        }
      });
      break;

    case 'incognitoHead':
      var rcData = require(rcp);
      var ac = handleReply.data;
      if (body == 1) {
        ac.headIsIncognito = true;
        o(`๐๐ฬฃ๐ง ๐๐ก๐จฬฃ๐ง ๐ฬฬ๐ง ๐ ๐ข๐ฬฬ๐ฎ ๐ญ๐ก๐ฬ๐ง ๐ฉ๐ก๐ฬฃฬ๐ง ๐ฅ\n๐๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐ค๐ฬฬ๐ญ ๐ญ๐ก๐ฎฬ๐ ๐๐ฎ๐จฬฃฬ๐ ๐ญ๐ซ๐จฬ ๐๐ก๐ฎ๐ฒ๐ฬฃฬ๐ง ๐ก๐ฬ๐ฒ ๐ง๐ก๐ฬฃฬ๐ฉ ๐ฅ๐ฬฃฬ๐ง๐ก: ${global.config.PREFIX}๐ซ๐ ๐๐ง๐`);
      } else if (body == 0) {
        ac.headIsIncognito = false;
        o(`๐๐ฬฃ๐ง ๐๐ก๐จฬฃ๐ง ๐ก๐ข๐ฬฃฬ๐ง ๐ญ๐ก๐ฬ๐ง ๐ฉ๐ก๐ฬฃฬ๐ง ๐\n๐๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐ค๐ฬฬ๐ญ ๐ญ๐ก๐ฎฬ๐ ๐๐ฎ๐จฬฃฬ๐ ๐ญ๐ซ๐จฬ ๐๐ก๐ฎ๐ฒ๐ฬฃฬ๐ง ๐ก๐ฬ๐ฒ ๐ง๐ก๐ฬฃฬ๐ฉ ๐ฅ๐ฬฃฬ๐ง๐ก: ${global.config.PREFIX}๐ซ๐ ๐๐ง๐`);
      }
      ac.isWaiting = false;
      ac.isStarted = true;
      var nameHead = await Users.getNameUser(ac.head);
      var fbUrl = 'fb.com/' + ac.head;
      var msg = (ac.headIsIncognito ? "๐๐ ๐ฎฬ๐จฬฬ๐ข ๐ฅ๐ข๐ฬ๐ง ๐ก๐ฬฃฬ ๐ฬฬ๐ง ๐๐๐ง๐ก ๐ฅ" : `${nameHead} - ${fbUrl}`) + ` ๐ฏ๐ฎฬฬ๐ ๐๐ก๐ฬฬ๐ฉ ๐ง๐ก๐ฬฃฬ๐ง ๐ค๐ฬฬ๐ญ ๐ง๐จฬฬ๐ข ๐ฏ๐จฬฬ๐ข ๐๐ฬฃ๐ง.\n๐๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐ค๐ฬฬ๐ญ ๐ญ๐ก๐ฎฬ๐ ๐๐ฎ๐จฬฃฬ๐ ๐ญ๐ซ๐จฬ ๐๐ก๐ฎ๐ฒ๐ฬฃฬ๐ง ๐ก๐ฬ๐ฒ ๐ง๐ก๐ฬฃฬ๐ฉ ๐ฅ๐ฬฃฬ๐ง๐ก: ${global.config.PREFIX}๐ซ๐ ๐๐ง๐`;
      await s(msg, ac.root);
      var prevData = rcData.find(e => e.root = ac.root);
      Object.keys(prevData).map((v) => prevData[v] = ac[v]);
      fs.writeFileSync(rcp, JSON.stringify(rcData, null, 4));
      break;

    case 'incognitoRoot':
      var rcData = require(rcp);
      var rc = handleReply.data;
      if (body == 1) {
        rc.rootIsIncognito = true;
        o("๐๐ฬฃ๐ง ๐ฏ๐ฎฬฬ๐ ๐๐ก๐จฬฃ๐ง ๐ฬฬ๐ง ๐ ๐ข๐ฬฬ๐ฎ ๐ญ๐ก๐ฬ๐ง ๐ฉ๐ก๐ฬฃฬ๐ง ๐ฅ");
      } else if (body == 0) {
        rc.rootIsIncognito = false;
        o("๐๐ฬฃ๐ง ๐ฏ๐ฎฬฬ๐ ๐๐ก๐จฬฃ๐ง ๐ก๐ข๐ฬฃฬ๐ง ๐ญ๐ก๐ฬ๐ง ๐ฉ๐ก๐ฬฃฬ๐ง ๐");
      }
      var rootName = await Users.getNameUser(rc.root);
      var fbUrl = 'fb.com/' + rc.root;
      s((rc.rootIsIncognito ? "๐๐จฬ ๐ ๐ง๐ ๐ฎฬ๐จฬฬ๐ข ๐ฅ๐ข๐ฬ๐ง ๐ก๐ฬฃฬ ๐ฬฬ๐ง ๐๐๐ง๐ก ๐ฆ๐ฎ๐จฬฬ๐ง ๐ญ๐ซ๐จฬ ๐๐ก๐ฎ๐ฒ๐ฬฃฬ๐ง ๐ฏ๐จฬฬ๐ข ๐๐ฬฃ๐ง" : `๐๐จฬฃฬ๐ญ ๐ง๐ ๐ฎฬ๐จฬฬ๐ข ๐ญ๐ฬ๐ง ${rootName} - ${fbUrl} ๐ฆ๐ฎ๐จฬฬ๐ง ๐ญ๐ซ๐จฬ ๐๐ก๐ฎ๐ฒ๐ฬฃฬ๐ง ๐ฏ๐จฬฬ๐ข ๐๐ฬฃ๐ง.`) + `\n๐๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐ญ๐ฎฬฬ ๐๐ก๐จฬฬ๐ข ๐ก๐ฬ๐ฒ ๐ง๐ก๐ฬฃฬ๐ฉ ๐ฅ๐ฬฃฬ๐ง๐ก: ${global.config.PREFIX}๐ฟ๐ฐ ๐ฟ๐ฒ๐ท๐ฒ๐ฐ๐\n๐๐ฬฬ๐ฎ ๐ฆ๐ฎ๐จฬฬ๐ง ๐๐ก๐ฬฬ๐ฉ ๐ง๐ก๐ฬฃฬ๐ง ๐ก๐ฬ๐ฒ ๐ง๐ก๐ฬฃฬ๐ฉ ๐ฅ๐ฬฃฬ๐ง๐ก: ${global.config.PREFIX}๐ซ๐ ๐๐๐๐๐ฉ๐ญ`, rc.head, (er, i) => {
        if (er) o("ฤรฃ cรณ lแปi xแบฃy ra khi cแป kแบฟt nแปi vแปi ngฦฐแปi liรชn hแป.\nVui lรฒng thแปญ lแบกi sau.");
        else {
          o("๐๐ฬ๐ฎ ๐๐ฬฬ๐ฎ ๐ญ๐ก๐ฬ๐ง๐ก ๐๐จฬ๐ง๐ \n๐๐ฬ๐ฒ ๐๐ก๐จฬฬ ๐ฅ๐ฬฃฬ๐ง๐ก ๐ค๐ฬฬ๐ญ ๐ง๐จฬฬ๐ข ๐ญ๐ฎฬฬ ๐ฉ๐ก๐ขฬ๐ ๐๐ฬ๐ง ๐ค๐ข๐ โณ");
          rc.isWaiting = true;
          rcData.push(rc);
          fs.writeFileSync(rcp, JSON.stringify(rcData));
        }
      });
      break;
  }
}

module.exports.handleEvent = async function ({ event, api, Users }) {
  var { threadID, isGroup, body } = event;
  var tiny = async function (url) {
    const { data } = await axios.get('https://tinyurl.com/api-create.php?url=' + encodeURIComponent(url));
    return data;
  }
  if (isGroup == false) {
    if (body.startsWith(global.config.PREFIX)) return;
    const rcData = require(rcp);
    const o = (msg, id) => api.sendMessage(msg, id || threadID);
    if (rcData.some(e => (e.head == threadID || e.root == threadID))) {
      var data = rcData.find(e => (e.head == threadID || e.root == threadID));
      if (data.isStarted == true) {
        var sender = data.root == threadID ? data.root : data.head;
        var receiver = data.root == threadID ? data.head : data.root;
        var senderIncognito = data.root == threadID ? data.rootIsIncognito : data.headIsIncognito;
        if (senderIncognito == false) {
          var name = await Users.getNameUser(sender);
          body = `${name} ๐ ๐ฎฬฬ๐ข ๐ญ๐ข๐ง ๐ง๐ก๐ฬฬ๐ง ๐ญ๐จฬฬ๐ข ๐๐ฬฃ๐ง ๐:\n` + body;
        } else body = "๐๐ ๐ฎฬ๐จฬฬ๐ข ๐๐ขฬ ๐ฬฬ๐ง ๐ ๐ฎฬฬ๐ข ๐ญ๐ข๐ง ๐ง๐ก๐ฬฬ๐ง ๐ญ๐จฬฬ๐ข ๐๐ฬฃ๐ง ๐:\n" + body;
        if (event.attachments.length != 0) {
          body += '\n๐๐ฬฃฬ๐ฉ ๐ ๐ฎฬฬ๐ข ๐ค๐ฬ๐ฆ ๐:'
          for (var e of event.attachments) {
            var u = await tiny(e.url);
            body += '\n- ' + u;
          }
        }
        return o(body, receiver);
      }
    }
  }
}