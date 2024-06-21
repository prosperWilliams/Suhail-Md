const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349161072794";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_30_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEzLFxuICAgICAgICA2OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDk0LFxuICAgICAgICAyNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyLFxuICAgICAgICA4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgODIsXG4gICAgICAgIDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0LFxuICAgICAgICAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcyLFxuICAgICAgICAzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMjI1LFxuICAgICAgICA1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc2LFxuICAgICAgICAzMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgODksXG4gICAgICAgIDE2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDgyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2LFxuICAgICAgICA2NixcbiAgICAgICAgMjIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNixcbiAgICAgICAgOTQsXG4gICAgICAgIDk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNixcbiAgICAgICAgNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICA5NixcbiAgICAgICAgMjEwLFxuICAgICAgICAzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE1LFxuICAgICAgICA2MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY05hVU5pUmRwM25HVWx3SXd5Q055QTJPbHF6ZngwbTdGeGhGaDFoREFaOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTYxMDcyNzk0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2NTBEQkNDNTBDM0MwMjdDQ0IxQzdENEJFMjgyMzU5QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkwMDkwMzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicEhIaG9pQmpRaDZxQ0wtTFRJZHU3d1wiLFxuICBcInBob25lSWRcIjogXCJkNTg4ZWM2Yy01ZjI2LTQzMzUtODMzMy0wNTU0Y2JmNGRiNmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzYsXG4gICAgICAxMTQsXG4gICAgICA2NSxcbiAgICAgIDQwLFxuICAgICAgMTYxLFxuICAgICAgMTczLFxuICAgICAgMTExLFxuICAgICAgMjgsXG4gICAgICAyNTEsXG4gICAgICA4MixcbiAgICAgIDEzNCxcbiAgICAgIDEyNSxcbiAgICAgIDE2NCxcbiAgICAgIDE3MyxcbiAgICAgIDEwNSxcbiAgICAgIDIxOSxcbiAgICAgIDQ2LFxuICAgICAgMzEsXG4gICAgICAyMTMsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgMTcxLFxuICAgICAgODQsXG4gICAgICAxMDEsXG4gICAgICA2NyxcbiAgICAgIDE5NSxcbiAgICAgIDIxNixcbiAgICAgIDM0LFxuICAgICAgMjA2LFxuICAgICAgMjUzLFxuICAgICAgNjksXG4gICAgICA4OCxcbiAgICAgIDEzOCxcbiAgICAgIDg4LFxuICAgICAgMTIwLFxuICAgICAgMTUxLFxuICAgICAgMTI4LFxuICAgICAgODQsXG4gICAgICAxNDgsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkFSWEVSOFZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjEwNzI3OTQ6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMDkzMTc0ODI0OTgyNToxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbVdweGdRKy8zWHN3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjFSbkJPdk9WbGJFeUdGK29pM1FtbmhIL0s2bVU4bGJlejV3ZEcyL0pSMmc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYlA3cEhpOVhsSEgwQ2k1dlF6R1k0VU5ReTl3aThiWkFpSVM5UENzSnJ2L01vNUpvTzEyckNnOUlLM1JlbWZ2SnRLOUh6S0hYYWdJRWRmdzR4UU5kQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYWlIN0FZdldwazhDYUwvSnRnKzdXUDEwYUN2eHhPR0c0dnRHeDcyckk3c01tS2d0QjllQmRWSDlRUFBYNzVaSitCWVFqb2NFaGszRnRuSnJ5dXhwQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2MTA3Mjc5NDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTAwOTAyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJIdlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkh2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiSGZZa291Q3N6MTFhU2tpRS9mZUR1V0g5TXl1K1k3OEFJWWxMYW1yRWtRUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1MDk3MzU0MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxODk4ODUyNDc2OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
