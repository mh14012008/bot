module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "DungUwU",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝐭𝐮̛̣ 𝐫𝐨̛̀𝐢" : "𝐛𝐢̣ 𝐐𝐓𝐕 𝐥𝐨̣𝐜/𝐤𝐢𝐜𝐤";
 if (type == "𝐭𝐮̛̣ 𝐫𝐨̛̀𝐢") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`Không thể thêm lại thành viên ${name} vào nhóm :( `, event.threadID)
   } else api.sendMessage(`𝐊𝐢𝐜𝐤 𝐡𝐨𝐚̣𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝗔𝗻𝘁𝗶𝗼𝘂𝘁 !! \n😿 𝐁𝐞́ ${name} 𝐝𝐚̃ 𝐫𝐨̛̀𝐢 𝐧𝐡𝐨́𝐦 𝐧𝐡𝐮̛𝐧𝐠 𝐝𝐚̃ 𝐝𝐮̛𝐨̛̣𝐜 𝐁𝐨𝐭 𝐭𝐡𝐞̂𝐦 𝐥𝐚̣𝐢 𝐧𝐡𝐨̛̀ 𝗼𝗻𝗹 𝗺𝗼𝗱𝗲 𝗔𝗻𝘁𝗶𝗼𝘂𝘁 \n𝐌𝐮𝐨̂́𝐧 𝐫𝐨̛̀𝐢 𝐭𝐡𝐢̀ 𝐤𝐞̂𝐮 𝐐𝐓𝐕 𝐤𝐢𝐜𝐤 𝐧𝐡𝐚 :<<`, event.threadID);
  })
 }
}