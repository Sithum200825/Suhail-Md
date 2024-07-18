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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_48_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNixcbiAgICAgICAgMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc2LFxuICAgICAgICA3NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDc2LFxuICAgICAgICA3MSxcbiAgICAgICAgODksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDcwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDYwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIsXG4gICAgICAgIDY0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOUDRJZjlPK1RLWFBuajNHNG9Hcm14UWdpZUJkbnBaR0lNbmdLU1RQQnAwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsQWJYODhqTlRVLWpsaktGRGZWUGtRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFjNDUzNWZhLTk2OGQtNDNjYS05MjFiLWVkNGI3MWJhMzc2NFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNCxcbiAgICAgIDE1MSxcbiAgICAgIDExMCxcbiAgICAgIDIyMSxcbiAgICAgIDU4LFxuICAgICAgNDcsXG4gICAgICAxODMsXG4gICAgICAzOSxcbiAgICAgIDI0MyxcbiAgICAgIDExMSxcbiAgICAgIDgsXG4gICAgICA5OSxcbiAgICAgIDE5LFxuICAgICAgMjQ3LFxuICAgICAgMTQyLFxuICAgICAgMzIsXG4gICAgICA5MSxcbiAgICAgIDExOCxcbiAgICAgIDE1MCxcbiAgICAgIDE0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MCxcbiAgICAgIDIyOSxcbiAgICAgIDIzMixcbiAgICAgIDIyMSxcbiAgICAgIDQ4LFxuICAgICAgMjIxLFxuICAgICAgMjExLFxuICAgICAgMjI4LFxuICAgICAgMCxcbiAgICAgIDIxMSxcbiAgICAgIDE3MCxcbiAgICAgIDE4MCxcbiAgICAgIDI5LFxuICAgICAgMTQ5LFxuICAgICAgMTQxLFxuICAgICAgMTQsXG4gICAgICAxOTksXG4gICAgICAyNDEsXG4gICAgICAxMzcsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjdUQUpKTE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzQyMDkzMDE5OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4La04Lec4Lap4LeTXCIsXG4gICAgXCJsaWRcIjogXCIxNDI2OTIxMzQ3NDAwMDE6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUExoOUp3REVPM280YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnVVJMWFRyT25NQjcreGhjSlZ3VktOakNuTk91cmlPOHJTSG9XazRUT2lVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpHYVdBejl5Zlk4akR3VDVKcnhGaXNtYzRCVWtNY2NvYm40eVBvRTlzMkxJNmJSZDBaUjNaVll1eTg1TXZKb0RwckFMSzdOZFRDYkNOekt4bHJNRUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitCMjA2YzBLWlI0c3BHTzZnakIzcEk2bW5nU1FIY1oxSGY1bWhJMjg5V1Z6ajBCUXlsNmt4S3ZMbHZlaEsrK0NVV21PS0t3T1NWME1yVFc5cE9HckRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQyMDkzMDE5OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTI2NzMxMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
