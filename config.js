const fs = require('fs');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) {
  dotenv.config({
    path: './config.env'
  });
}

const API = "https://api-aswin-sparky.koyeb.app";
const ALIVE = process.env.ALIVE || "HELLOLOLOLOLOLOLOLOLOLOLOLOLOLOLO";
const HANDLERS = process.env.HANDLER || "^";
const SESSION_ID = process.env.SESSION_ID || "A-S-W-I-N-S-P-A-R-K-Y:58057f5d1ed0a14b713d8edcbad110f4";
const SUDO = process.env.SUDO || '919656459062';
const AUTO_STATUS_VIEW = process.env.AUTO_STATUS_VIEW || "true";
const ALWAYS_ONLINE = process.env.ALWAYS_ONLINE || "false";
const DISABLE_PM = "false";
const PM_BLOCK = "false";
const PMB = "Sorry, I can't help you in private chat.";
const READ_MESSAGES = "false";
const BOT_INFO = process.env.BOT_INFO || "X-BOT-MD;ASWIN SPARKY;https://i.imgur.com/r3GZeiX.jpeg";
const URL = process.env.URL || "https://www.instagram.com/imspxxky";
const AUDIO_DATA = process.env.AUDIO_DATA || "X BOT MD;ASWIN SPARKY;https://i.imgur.com/fVCRCYG.jpeg";
const STICKER_DATA = process.env.STICKER_DATA || "X BOT MD;ASWIN SPARKY";
const WORK_TYPE = process.env.WORK_TYPE || 'public';
const DATABASE_URL = process.env.DATABASE_URL || "postgres://xendsiiiiiiiiiiiiiiiiiiiiiiiiiiii_user:HLdJP4y8oHxSqmojI5w5Zc1V04xJQQV2@dpg-cp9cv7kf7o1s739ur7n0-a.oregon-postgres.render.com/xendsiiiiiiiiiiiiiiiiiiiiiiiiiiii";
const HEROKU_APP_NAME = process.env.HEROKU_APP_NAME || "";
const HEROKU_API_KEY = process.env.HEROKU_API_KEY || "";
const KOYEB_API_KEY = process.env.KOYEB_API_KEY || "";
const AUTO_TYPE = process.env.AUTO_TYPE || "true";
const AUTO_REC = process.env.AUTO_REC || "true";

module.exports = {
  API,
  AUTO_REC,
  AUTO_TYPE,
  ALIVE,
  HANDLERS,
  SUDO,
  WORK_TYPE,
  SESSION_ID,
  STICKER_DATA,
  BOT_INFO,
  AUDIO_DATA,
  AUTO_STATUS_VIEW,
  ALWAYS_ONLINE,
  PM_BLOCK,
  PMB,
  READ_MESSAGES,
  DISABLE_PM,
  URL,
  VERSION:"3.2.0",
  HEROKU_API_KEY,
  HEROKU_APP_NAME,
  KOYEB_API_KEY,
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
