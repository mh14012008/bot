module.exports.config = {
    name: "pending",
    version: "1.0.6",
    credits: "CatalizCS mod by Kadeer",
    hasPermssion: 2,
    description: "Quản lý tin nhắn chờ của bot",
    commandCategory: "Admin",
    usages: "[u] [t] [a]",
    cooldowns: 5
};

module.exports.handleReply = async function({ api, event, handleReply, getText }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { body, threadID, messageID } = event;
    var count = 0;

    if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) {
        const index = (body.slice(1, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            console.log(singleIndex);
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`${singleIndex} Không phải là một con số hợp lệ`, threadID, messageID);
        }
        return api.sendMessage(`Đã từ chối thành công!`, threadID, messageID);
    }
    else {

        const index = body.split(/\s+/);
        const fs = require("fs");       
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`${singleIndex} Không phải là một con số hợp lệ`, threadID, messageID);
            api.unsendMessage(handleReply.messageID);
            api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by Kadeer" : global.config.BOTNAME}`, handleReply.pending[singleIndex - 1].threadID, api.getCurrentUserID());
            api.sendMessage("", event.threadID, () => api.sendMessage({body:`》 𝑪𝒐𝒏𝒏𝒆𝒄𝒕𝒊𝒐𝒏 𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍 《\n\n▂▃▅▆𝐋𝐨𝐚𝐝𝐢𝐧𝐠...𝟏𝟎𝟎%▆▅▃▂\n   ⫸ 𝑲𝒆̂́𝒕 𝒏𝒐̂́𝒊 𝒕𝒉𝒂̀𝒏𝒉 𝒄𝒐̂𝒏𝒈 ⫷\n●▬▬▬▬▬๑⇩⇩๑▬▬▬▬▬●\n⚠𝓛𝓾𝓪̣̂𝓽 𝑩𝑶𝑻-𝑵𝑻𝑻-𝑫𝒁\n⏩ 𝐻𝑎̣𝑛 𝑐ℎ𝑒̂́ 𝑠𝑝 🔞, .𝙝𝙚𝙡𝙥 .𝙢𝙚𝙣𝙪 𝙣𝙝𝙖 𝙩𝙝𝙖𝙣𝙠𝙨
\n●▬▬▬▬▬๑⇧⇧๑▬▬▬▬▬●\n        ❛━━･❪  𝑷𝒓𝒆𝒇𝒊𝒙 [ . ]  ❫･━━❜\n📝Nhập .ad sẽ có thông tin của adminbot\n📲𝑴𝒐̣𝒊 𝒕𝒉𝒂̆́𝒄 𝒎𝒂̆́𝒄 𝒍𝒊𝒆̂𝒏 𝒉𝒆̣̂ 𝒂𝒅𝒎𝒊𝒏\n⚜𝑄𝑇𝑉 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑑𝑢̀𝑛𝑔 '.ℎ𝑒𝑙𝑝 𝑟𝑢𝑙𝑒' đ𝑒̂̉ 𝑥𝑒𝑚 ℎ𝑢̛𝑜̛́𝑛𝑔 𝑑𝑎̂̃𝑛 𝑣𝑎̀ 𝑠𝑒𝑡 𝑏𝑎̉𝑛𝑔 𝑙𝑢𝑎̣̂𝑡 𝑏𝑜𝑥\n⚜𝑇ℎ𝑎̀𝑛ℎ 𝑣𝑖𝑒̂𝑛 𝑑𝑢̀𝑛𝑔 '.𝑟𝑢𝑙𝑒' đ𝑒̂̉ 𝑥𝑒𝑚 𝑙𝑢𝑎̣̂𝑡 𝑏𝑜𝑥 𝑐𝑢̉𝑎 𝑚𝑖̀𝑛ℎ\n◆━━━━━━━━━━━━━◆\n𝐓𝐡𝐢𝐬 𝐛𝐨𝐭 𝐦𝐚𝐝𝐞 𝐛𝐲 𝑩𝒐𝒕 𝑻𝒂̀𝒊. 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐮𝐬𝐢𝐧𝐠\n© 𝙰𝚍𝚖𝚒𝚗𝒊🌸`, attachment: fs.createReadStream(__dirname + "/cache/pending/pending.mp4")} ,handleReply.pending[singleIndex - 1].threadID));
            count+=1;
            
        }
        return api.sendMessage(`Đã phê duyệt thành công!`, threadID, messageID);
    }
}

module.exports.run = async function({ api, event, args, permission, handleReply }) {
        if (args.join() == "") {api.sendMessage("Bạn có thể dùng pending:\nPending user: Hàng chờ người dùng\nPending thread: Hàng chờ nhóm\nPending all:Tất cả hàng chờ ",event.threadID, event.messageID);
    }
        const content = args.slice(1, args.length);   
     switch (args[0]) {
    case "user":
    case "u":
    case "-u":
    case "User": {
    const permission = ["100001123562099"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Quyền lồn biên giới?", event.threadID, event.messageID);
    const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("Không thể lấy danh sách đang chờ!", threadID, messageID) }

      const list = [...spam, ...pending].filter(group => group.isGroup == false);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`»「PENDING」«\n❯ Tổng số người dùng cần duyệt: ${list.length} người dùng ❮\n⥥⥥⥥ Reply số thư tự bên dưới để duyệt ⥥⥥⥥\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("»「PENDING」«\n❯ Hiện tại không có người dùng nào trong hàng chờ ❮", threadID, messageID);
}
    case "thread":
    case "-t":
    case "t":
    case "Thread": {
        const permission = ["100001123562099"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Quyền lồn biên giới?", event.threadID, event.messageID);
     const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("Không thể lấy danh sách đang chờ!", threadID, messageID) }

    const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`»「PENDING」«\n❯ Tổng số nhóm cần duyệt: ${list.length} nhóm ❮\n⥥⥥⥥ Reply số thư tự bên dưới để duyệt ⥥⥥⥥\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("»「PENDING」«\n❯ Hiện tại không có nhóm nào trong hàng chờ ❮", threadID, messageID);
        }
    case "all":
    case "a":
    case "-a":
    case "al": {
        const permission = ["100001123562099"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Quyền lồn biên giới?", event.threadID, event.messageID);
     const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("Không thể lấy danh sách đang chờ!", threadID, messageID) }

            const listThread = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);
        const listUser = [...spam, ...pending].filter(group => group.isGroup == false)
    const list = [...spam, ...pending].filter(group => group.isSubscribed);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`»「PENDING」«\n❯ Tổng số User & Thread cần duyệt: ${list.length} User & Thread ❮\n⥥⥥⥥ Reply số thư tự bên dưới để duyệt ⥥⥥⥥\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("»「PENDING」«\n❯ Hiện tại không có User & Thread nào trong hàng chờ ❮", threadID, messageID);
        }
    }       
}