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
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "๐ญ๐ฎฬฬฃ ๐ซ๐จฬฬ๐ข" : "๐๐ขฬฃ ๐๐๐ ๐ฅ๐จฬฃ๐/๐ค๐ข๐๐ค";
 if (type == "๐ญ๐ฎฬฬฃ ๐ซ๐จฬฬ๐ข") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`Khรดng thแป thรชm lแบกi thร nh viรชn ${name} vร o nhรณm :( `, event.threadID)
   } else api.sendMessage(`๐๐ข๐๐ค ๐ก๐จ๐ฬฃ๐ญ ๐ญ๐ก๐ฬ๐ง๐ก ๐๐จฬ๐ง๐  ๐๐ป๐๐ถ๐ผ๐๐ !! \n๐ฟ ๐๐ฬ ${name} ๐๐ฬ ๐ซ๐จฬฬ๐ข ๐ง๐ก๐จฬ๐ฆ ๐ง๐ก๐ฎฬ๐ง๐  ๐๐ฬ ๐๐ฎฬ๐จฬฬฃ๐ ๐๐จ๐ญ ๐ญ๐ก๐ฬ๐ฆ ๐ฅ๐ฬฃ๐ข ๐ง๐ก๐จฬฬ ๐ผ๐ป๐น ๐บ๐ผ๐ฑ๐ฒ ๐๐ป๐๐ถ๐ผ๐๐ \n๐๐ฎ๐จฬฬ๐ง ๐ซ๐จฬฬ๐ข ๐ญ๐ก๐ขฬ ๐ค๐ฬ๐ฎ ๐๐๐ ๐ค๐ข๐๐ค ๐ง๐ก๐ :<<`, event.threadID);
  })
 }
}