module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "CatalizCS",
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

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`🍊『 ${global.config.PREFIX} 』🍭 • ${(!global.config.BOTNAME) ? "🐣𝘽𝘽𝙊𝙏-𝙏𝙏𝙏-𝘾𝘼𝙍𝙆🐣" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`►▂▃▅▆𝐋𝐨𝐚𝐝𝐢𝐧𝐠...𝟏𝟎𝟎%▆▅▃▂\n⫸ 𝑲𝒆̂́𝒕 𝒏𝒐̂́𝒊 𝒕𝒉𝒂̀𝒏𝒉 𝒄𝒐̂𝒏𝒈 ⫷\n●▬▬▬▬▬๑⇩⇩๑▬▬▬▬▬●\n[⚜️] 𝑩𝒐𝒕 𝑪𝒂̣̆𝒄 [⚜️]\n[⚜️] 𝐃𝐚𝐧𝐡 𝐬á𝐜𝐡 𝐥ệ𝐧𝐡 !help và !menu\n●▬▬▬▬▬๑⇧⇧๑▬▬▬▬▬●
\n❛━━･❪ 𝑷𝒓𝒆𝒇𝒊𝒙 [ ! ]❫･━━❜\n[⚜️] 𝒃𝒐𝒕 𝒄𝒂̂𝒏 𝒔𝒑𝒂𝒎 𝒄𝒂́𝒄 𝒄𝒖 𝒚𝒆̂𝒏 𝒕𝒂̂𝒎 𝒏𝒉𝒂𝒂 [⚜️] \n[⚜️] 𝘽𝙤𝙩 𝙙𝙪̛𝙤̛̣𝙘 𝙙𝙞𝙚̂̀𝙪 𝙝𝙖̀𝙣𝙝 𝙫𝙖̀ 𝙦𝙪𝙖̉𝙣 𝙡𝙞́ 𝙗𝙤̛̉𝙞 𝘼𝙙𝙢𝙞𝙣: 𝑷𝒉𝒂̣𝒎 𝑴𝒊𝒏𝒉 𝑯𝒊𝒆̂́𝒖 [⚜️] \n🐣𝐂𝐇𝐔́𝐂 𝐂𝐀́𝐂 𝐁𝐀̣𝐍 𝐒𝐀̀𝐈 𝐁𝐎𝐓 𝐕𝐔𝐈 𝐕𝐄̉🐣`, attachment: fs.createReadStream(__dirname + "/cache/joinMp4/hello2.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "💗 𝑯𝒆𝒍𝒍𝒐 𝒄𝒐𝒏 𝒗𝒐̛̣ {name} .\n🐳 𝐂𝐡𝐚̀𝐨 𝐌𝐮̛̀𝐧𝐠 𝐄𝐦 𝐘𝐞̂𝐮 {name}.\n𝐓𝐨̛́𝐢 𝐕𝐨̛́𝐢 𝐍𝐡𝐨́𝐦 𝐂𝐮̉𝐚 {threadName}.\n{type} 𝐋𝐚̀ 𝐂𝐮̣𝐜 𝐂𝐮̛𝐧𝐠 𝐓𝐡𝐮̛́ {soThanhVien} 𝐂𝐮̉𝐚 𝐁𝐎𝐓 🥲 𝑻𝒖̛𝒐̛𝒏𝒈 𝒕𝒂́𝒄 𝒏𝒉𝒊𝒆̂̀𝒖 𝒗𝒂̀𝒐 𝒏𝒉𝒆́ 𝒉𝒐𝒏𝒈 𝒍𝒂̀ 𝒂̆𝒏 𝒌𝒊𝒄𝒌 𝒏𝒉𝒆́ 🍀" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  '𝐂𝐚́𝐜 𝐁𝐚̣𝐧' : '𝐁𝐚̣𝐧')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}