module.exports.config = {
    name: "goibotv2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "Gọi Bot Version 3",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 2,
    denpendencies: {}
};

module.exports.handleReply = async function({ api, args, Users, event, handleReply }) {
    var name = await Users.getNameUser(event.senderID);
    switch (handleReply.type) {
        case "reply":
            {
                var idad = global.config.ADMINBOT;
                for (let ad of idad) {
                    api.sendMessage({
                        body: "Tin nhắn từ" + name + ":\n" + event.body,
                        mentions: [{
                            id: event.senderID,
                            tag: name
                        }]
                    }, ad, (e, data) => global.client.handleReply.push({
                        name: this.config.name,
                        messageID: data.messageID,
                        messID: event.messageID,
                        author: event.senderID,
                        id: event.threadID,
                        type: "goibot"
                    }))
                }
                break;
            }
        case "goibot":
            {
                api.sendMessage({ body: `${event.body}`, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, data) => global.client.handleReply.push({
                    name: this.config.name,
                    author: event.senderID,
                    messageID: data.messageID,
                    type: "reply"
                }), handleReply.messID);
                break;
            }
    }
};


module.exports.handleEvent = async({ event, api, Users, Threads }) => {
    var { threadID, messageID, body, senderID } = event;
    if (senderID == global.data.botID) return;

    const moment = require("moment-timezone");
    var time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
    let name = await Users.getNameUser(event.senderID);
    var idbox = event.threadID;
    let uidUser = event.senderID;
    let dataThread = await Threads.getData(event.threadID);
    let threadInfo = dataThread.threadInfo;
    const listAdmin = global.config.ADMINBOT;

    var tl = [
        "Chào bạn đáng iu", "Hi, bạn kêu mình có việc gì👀", "Vợ gọi có việc gì không?",
        "How to hack Free Fire?",
        `${name}` + ", Nếu tui có vấn đề gì thì hãy dùng %1called để ns cho Admin nhaa :>",
        `${name}` + ", B-Bot đây nè><",
        `${name}` + ", Bạn kêu tui đk?👀",
        `${name}` + ", Hmm...ko bt ns j lun á ~~",
        `${name}` + ", Admin cần 10k VND là đủ :<",
        `${name}` + ", Yêu Admin hog❤?",
        `${name}` + ", Chào bạn cuti trước màn hình nhé<3",
        `${name}` + ", I LOVE YOU SO MUCH❤",
        `${name}` + ", Admin tớ tên Hiếu <3",
        `${name}` + ", https://www.facebook.com/hieu200814 đây là admin của tớ"
    ];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    // Gọi bot
    var arr = ["bot","bot ơi","bot oi","yêu bot","bot đâu"];
    arr.forEach(value => {
        let str = value[0].toUpperCase() + value.slice(1);
    if (body === value.toUpperCase() | body === value | str === body) {
            let nameT = threadInfo.threadName;
            modules = "------ Gọi bot ------\n";
            console.log(modules, value + "|", nameT);
            api.sendMessage(rand, threadID, () => {
                var idad = listAdmin;
                for (var idad of listAdmin) {
                    api.sendMessage(`=== Bot tag ===\n\n👥Box Name: ${nameT}\n🔰ID box: ${idbox}\n💖Name User: ${name} \n💕ID User: ${uidUser}\n🕒Time: ${time}\n😍Gọi bot: ${value}`,
                        idad, (error, info) =>
                        global.client.handleReply.push({
                            name: this.config.name,
                            author: senderID,
                            messageID: info.messageID,
                            messID: messageID,
                            id: idbox,
                            type: "goibot"
                        })
                    );
                }
            });
        }
    });
}

module.exports.run = async({ event, api }) => {
    return api.sendMessage("( \\_/)                                                                            ( •_•)                                                                            // >🧠                                                            Đưa não cho bạn lắp vào đầu nè.\nCó biết là lệnh Noprefix hay không?", event.threadID)
}