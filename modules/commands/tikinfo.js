export default {
    name: "spamsms", // Tên lệnh, được sử dụng trong việc gọi lệnh
    version: "1.0.0", // phiên bản của module này
    hasPermssion: 0, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
    credits: "LevannQuoc", // Công nhận module sở hữu là ai
    description: "Spam SMS Đến 1 Số Bởi Lê Văn Quốc", // Thông tin chi tiết về lệnh
    commandCategory: "Tiện ích", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
    usages: "< username >", // Cách sử dụng lệnh
    cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
    dependencies: {
        "axios": "",
        "fs": ""
    }
};
import axios from "axios";
import fs from "fs-extra"
import ps, { dirname } from "path";
import { fileURLToPath } from 'url';
import request from 'request';
const __dirname = dirname(fileURLToPath(import.meta.url));
export async function run({ api, event, args, utils, UsersAll }) {
    const { threadID } = event;
    if (!args[0]) return api.sendMessage("Bạn chưa nhập tên tài khoản của người dùng cần xem thông tin", threadID);
    const username = value[0];
    try {
        axios.get(encodeURI(`https://nnquangpro.com/spammomo.php?phone="${username}`)).then(async (res) => {
            api.sendMessage("Spam Momo Lần 1 Status:Done", threadID);
axios.get(encodeURI(`https://nnquangpro.com/spammomo.php?phone="${username}`)).then(async (res) => {
            api.sendMessage("Spam Momo Lần 2 Status:Done", threadID);

}
