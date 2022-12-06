module.exports.config = {
	name: "hoatdong",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Ghi lại thông báo các hoạt đông của bot!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Users, Threads }) {
    const logger = require("../../utils/log");
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss | D/MM/YYYY");
    const time = process.uptime(),
		  hours = Math.floor(time / (60 * 60)),
		  minutes = Math.floor((time % (60 * 60)) / 60),
		  seconds = Math.floor(time % 60);

    //var datathread = (await Threads.getData(event.threadID)).threadInfo; // get name box By DMHoang
     // var namethread = datathread.threadName; // get name box By DMHoang
    //var name = (await Users.getData(event.author)).name // get name user By DMHoang
    if (!global.configModule[this.config.name].enable) return;

    var formReport =  "‼️🚫「 𝐓𝐇𝐎̂𝐍𝐆 𝐁𝐀́𝐎 」🚫‼️" +
                        "\n\n📣𝐇𝐚̀𝐧𝐡 𝐝𝐨̣̂𝐧𝐠: {task}" +
                        "\n⏰𝐓𝐡𝐨̛̀𝐢 𝐠𝐢𝐚𝐧: " + gio +
                        "\n⚡𝐔𝐩𝐭𝐢𝐦𝐞:  " + "[ " + hours + " : " + minutes + " : " + seconds + " ]" +
                        //"\n👑𝐓𝐞̂𝐧 𝐧𝐡𝐨́𝐦:\n" +"「 "+ namethread + " 」" + // add name box By DMHoang
                        "\n🧬𝐈𝐃: " + event.threadID +
                        //"\n🔎𝐓𝐞̂𝐧: " + name + // add name user By DMHoang
                        "\n📌𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤:\nwww.facebook.com/" + event.author,
        task = "";
    switch (event.logMessageType) {
        /*case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "Tên không tồn tại",
                    newName = event.logMessageData.name || "Tên không tồn tại";
            task = "Người dùng thay đổi tên nhóm từ: '" + oldName + "' thành '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }*/
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "𝐀𝐝𝐝 𝐁𝐨𝐭✅";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "𝐊𝐢𝐜𝐤 𝐛𝐨𝐭❌"
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);

    return api.sendMessage(formReport, global.config.ADMINBOT[0], (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
}