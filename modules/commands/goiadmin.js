module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "Tag admin",
  commandCategory: "không cần dấu lệnh",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = async function ( { api, event } ) {
    var idad = ["100061883144653",""];
    for (const id of idad) {
    if (!id) return
    if (!idad) return
    if(!event.body) return
    if (Object.keys(event.mentions) == id) {
      var msg = ["Tag Admin làm gì vậy bé :3","Ko làm ny Admin thì đừng tag","Admin đang ngắm bạn đó,đừng tag nux tránh làm phiền Admin ngắm :3","Làm NY Admin rồi tính tiếp","Tag vừa thui, cậu chủ đang học bài","Tag Admin làm gì, yêu Bot đây nè >=[","Có gì không bạn,sao lại tg Admin làm gì?"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    else return
    }
}
module.exports.run = async function ( { api, event } ) {
api.sendMessage(`Tự động Reply những ai tag Admin yêu quý của Bot`,event.threadID,event.messageID)
}