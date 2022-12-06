module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "botNoti");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "ducryo", "deptry");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
  ////////////////////////////////////////////////////////
  const thread = global.data.threadData.get(threadID) || {};
  if (typeof thread["joinNoti"] != "undefined" && thread["joinNoti"] == false) return;
  ///////////////////////////////////////////////////////
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`〘 ${global.config.PREFIX} 〙 ✇ ${(!global.config.BOTNAME) ? "Made by Duy" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`=== 𝗞𝗲̂́𝘁 𝗡𝗼̂́𝗶 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴 ===\n•  [ 𝐍𝐨𝐭𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧🏆 ] •\n𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐋𝐨𝐚𝐝 𝐃𝐚𝐭𝐚 𝐁𝐨𝐱 🌸\n◆━━━━━━━━━━◆\n𝘾𝙝𝙪́𝙘 𝘼𝙣𝙝 𝙀𝙢 𝙑𝙪𝙞 𝙑𝙚̉ 𝙏𝙧𝙤𝙣𝙜 𝙌𝙪𝙖́ 𝙏𝙧𝙞̀𝙣𝙝 𝘿𝙪̀𝙣𝙜 𝘽𝙤𝙩 𝙉𝙝𝙚́ 𝗠𝗼𝗮𝗵 🌸`, attachment: fs.createReadStream(__dirname + "/cache/botNoti/bot.mp4")} ,threadID));
	}