/*
  * Sript By Thadz BotZ
  * Contact : wa.me/6288232991394
  * Library : @adiwajshing/baileys
*/
require('./lib/config');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, downloadContentFromMessage, toBuffer, generateWAMessageFromContent, proto,generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys');
const axios = require("axios");
const util = require("util")
const Crypto = require("crypto")
const colors = require('colors/safe');
const fs = require('fs');
const os = require("os");
const speed = require('performance-now');
const chalkanim = require('chalk-animation');
const moment = require("moment-timezone");
const { exec, spawn, execSync } = require('child_process')
const ffmpeg = require('fluent-ffmpeg')
const { performance } = require('perf_hooks')
const path = require("path")
moment.tz.setDefault('Asia/Jakarta').locale("id");
module.exports = client = async (client, msg) => {
try {
const list = "⇝";
const type = Object.keys(msg.message)[0];
const body = (type === 'conversation') ? msg.message.conversation : (type == 'imageMessage') ? msg.message.imageMessage.caption : (type == 'videoMessage') ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''
const budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
const prefix = /^[./~!#%^&=\,;:()z]/.test(body) ? body.match(/^[./~!#%^&=\,;:()z]/gi) : '#';
const isCommand = body.startsWith(prefix);
const cmd = isCommand ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null;
const time = moment(new Date()).format("HH:mm");
const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
const jam = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const text = msg.message.conversation;
const isGroup = msg.key.remoteJid.endsWith('@g.us');
const from = msg.key.remoteJid;
const content = JSON.stringify(msg.message);
const args = body.trim().split(/ +/).slice(1);
const q = args.join(" ");
const botNumber = client.user.id.split(':')[0] + '@s.whatsapp.net';
const pushname = msg.pushName || "No Name";
const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid;
const groupMetadata = isGroup ? await client.groupMetadata(from) : '';
const uwong = isGroup ? await groupMetadata.participants : '';
const groupAdmins = isGroup ? await uwong.filter(v => v.admin !== null).map(a => a.id) : '';
const groupOwner = isGroup ? await client.groupMetadata.owner : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
const isGroupAdmins = groupAdmins.includes(sender) || false;
const groupName = isGroup ? groupMetadata.subject : "";
const isMedia = (type === 'imageMessage' || type === 'videoMessage');
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

await client.sendReadReceipt(from, msg.key.participant, [msg.key.id]);
if (isGroup && isCommand) {
console.log(colors.green.bold("[ CMD ] =>") + " " + colors.brightCyan(time,) + " " + colors.black.bgYellow(cmd) + " " + colors.green("From") + " " + colors.magenta(pushname) + " " + colors.green("in") + " " + colors.blue(groupName));
} else if (!isGroup && isCommand) {
console.log(colors.green.bold("[ CMD ] =>") + " " + colors.brightCyan(time,) + " " + colors.black.bgYellow(cmd) + " " + colors.green("From") + " " + colors.magenta(pushname) + " " + colors.green("in") + " " + colors.blue("Private"));
}
const createSerial = (size) => {
return Crypto.randomBytes(size).toString('hex').slice(0, size)
};
const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}
const reply = (teksnya) => {
client.sendMessage(from, { text: teksnya },{ quoted: msg});
};
			
switch (cmd) {
	case 'ping':
case 'botstatus':
case 'statusbot':
case 'speed':
               timestampe = speed();
latensie = speed() - timestampe
reply(`_*Test Ping*_\nRespon Pesan ${latensie.toFixed(4)} Detik 💬`)
break
                break
case 'pricelist':
if (args.length == 0) return reply(`Pilih Game nya [ff/ml]\nContoh ${prefix + cmd} ml`)
if (args[0] === 'ff') {
await client.sendMessage(from, {text: dmFF()})
} else if (args[0] === 'ml') {
await client.sendMessage(from, {text: dmML()})
}
break
case 'proses':
if (!isGroup) return reply(onlyGroup(pushname));
if (!isGroupAdmins) return reply(onlyAdmin(pushname));
client.sendMessage(from, {text: pross(jam, tanggal)})
break
case 'done':
if (!isGroup) return reply(onlyGroup(pushname));
if (!isGroupAdmins) return reply(onlyAdmin(pushname));
client.sendMessage(from, {text: donn(jam, tanggal)})
break
case 'format':
client.sendMessage(from, {text: formm(tanggal)})
break
break
case 'payment':
payy = `*「 PAYMENT 」*
• *Gopay : ${gopay}*
• *Dana : ${dana}*
• *Ovo : ${ovo}*
• *Pulsa : ${pulsa}*
• *Scan Qris Di Atas !!*`
client.sendMessage(from, { image: {url: './src/qr.jpg'}, caption: payy})
break
case 's':
case 'sticker':
case 'stiker':
case 'sgif':
case 'stickergif':
case 'stikergif':
try {
	reply('_Sedang di prosess..._')
if (msg.message.imageMessage || msg.message.extendedTextMessage.contextInfo?.quotedMessage.imageMessage) {
					stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
					buffer = Buffer.from([])
					for await(const chunk of stream) {
						buffer = Buffer.concat([buffer, chunk])
					}
					rand1 = getRandom('.jpg')
					rand2 = getRandom('.webp')
					fs.writeFileSync(`./${rand1}`, buffer)
					ffmpeg(`./${rand1}`)
					.on("error", console.error)
					.on("end", () => {
						client.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) })
						fs.unlinkSync(`./${rand1}`)
						fs.unlinkSync(`./${rand2}`)
					})
					.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
					.toFormat('webp')
					.save(`${rand2}`)
				} else if (msg.message.videoMessage || msg.message.extendedTextMessage.contextInfo?.quotedMessage.videoMessage) {
					stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
					buffer = Buffer.from([])
					for await(const chunk of stream) {
						buffer = Buffer.concat([buffer, chunk])
					}
					rand1 = getRandom('.mp4')
					rand2 = getRandom('.webp')
					fs.writeFileSync(`./${rand1}`, buffer)
					ffmpeg(`./${rand1}`)
					.on("error", console.error)
					.on("end", () => {
						client.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) })
						fs.unlinkSync(`./${rand1}`)
						fs.unlinkSync(`./${rand2}`)
					})
					.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
					.toFormat('webp')
					.save(`${rand2}`)
                } else {
reply(`_Kirim gambar/video dengan caption ${prefix + cmd}/ reply gambar/video dengan perintah ${prefix + cmd}_`)
}
} catch (e) {
console.log(colors.red(e))
reply(`_Maaf error, coba lagi dengan reply gambar/video dengan caption ${prefix + cmd}, *jika tetap terjadi lapor ke owner bot*_`)
}
break

case 'editinfo':
case 'editinfogroup':
case 'editinfogrup':
if (!isGroup) return reply(onlyGroup(pushname));
if (!isGroupAdmins) return reply(onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(botAdmin(pushname));
if (args[0] === 'all') {
await client.groupSettingUpdate(from, 'unlocked')
} else if (args[0] === 'admin') {
await client.groupSettingUpdate(from, 'locked')
} else {
const buttons = [
  {buttonId: `${prefix}editinfo admin`, buttonText: {displayText: 'Only admin'}, type: 1},
  {buttonId: `${prefix}editinfo all`, buttonText: {displayText: 'All members'}, type: 1},
]
const buttonMessage = {
    text: "Klik Only admin untuk mengizinkan edit grup hanya admin, Klik All members untuk mengizinkan edit group untuk semua peserta group",
    footer: '',
    buttons: buttons,
    headerType: 1
}
const sendMsg = await client.sendMessage(from, buttonMessage)
}
break
case 'group':
case 'grup':
if (!isGroup) return reply(onlyGroup(pushname));
if (!isGroupAdmins) return reply(onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(botAdmin(pushname));
if (args[0] === 'close') {
await client.groupSettingUpdate(from, 'announcement')
} else if (args[0] === 'open') {
await client.groupSettingUpdate(from, 'not_announcement')
} else {
const buttons = [
  {buttonId: `${prefix}group open`, buttonText: {displayText: 'Open'}, type: 1},
  {buttonId: `${prefix}group close`, buttonText: {displayText: 'Close'}, type: 1},
]
const buttonMessage = {
    text: "Klik open untuk membuka group, Klik close untuk menutup group\n\n Klik Only admin untuk mengizinkan edit grup hanya admin, Klik All members untuk mengizinkan edit group untuk semua peserta group",
    footer: '',
    buttons: buttons,
    headerType: 1
}
const sendMsg = await client.sendMessage(from, buttonMessage)
}
break
case 'hidetag':
if (!q) return reply(notText(prefix, cmd, pushname));
if (!isGroup) return reply(onlyGroup(pushname));
if (!isGroupAdmins) return reply(onlyAdmin(pushname));
const id = uwong.map(v => v.id)
client.sendMessage(from, { text: `${q}`, mentions: id })
break
case 'promote':
if (!isGroup) return reply(onlyGroup(pushname));
if (!isGroupAdmins) return reply(onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(botAdmin(pushname));
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag orang yang ingin dipromosikan menjadi admin group');
const men = msg.message.extendedTextMessage.contextInfo.mentionedJid;
client.groupParticipantsUpdate(from, men,"promote");
break
case 'demote':
if (!isGroup) return reply(onlyGroup(pushname));
if (!isGroupAdmins) return reply(onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(botAdmin(pushname));
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag orang yang ingin di demote di group ini');
const mention = msg.message.extendedTextMessage.contextInfo.mentionedJid;
await client.groupParticipantsUpdate(from, mention,"demote");
break
case 'add':
try {
if (!isGroup) return reply(onlyGroup(pushname));
if (!isGroupAdmins) return reply(onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(botAdmin(pushname));
if (!q) return reply("Masukan nomor yang ingin ditambahkan di group\nex: !add 62881xxxxxxx")
nomor = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
await client.groupParticipantsUpdate(from, [nomor],"add")
} catch (e) {
reply('Maaf error')
}
break
case 'kick':
try {
if (!isGroup) return reply(onlyGroup(pushname));
if (!isGroupAdmins) return reply(onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(botAdmin(pushname));
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag orang yang ingin dikeluarkan dari group ini')
const mention = msg.message.extendedTextMessage.contextInfo.mentionedJid
await client.groupParticipantsUpdate(from, mention,"remove")
} catch (e) {
reply('Maaf error')
}
break
case 'resetlink':
case 'revoke':
if (!isGroup) return reply(onlyGroup(pushname));
if (!isGroupAdmins) return reply(onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(botAdmin(pushname));
await client.groupRevokeInvite(from)
break
case 'linkgroup':
if (!isGroup) return reply(onlyGroup(pushname));
if (!isGroupAdmins) return reply(onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(botAdmin(pushname));
const code = await client.groupInviteCode(from)
reply("https://chat.whatsapp.com/" + code)
break
case 'setdesc':
if (!isGroup) return reply(onlyGroup(pushname));
if (!isGroupAdmins) return reply(onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(botAdmin(pushname));
if (!q) return reply(notText(prefix,cmd, pushname));
client.groupUpdateDescription(from, q)
break
case 'setname':
if (!isGroup) return reply(onlyGroup(pushname));
if (!isGroupAdmins) return reply(onlyAdmin(pushname));
if (!isBotGroupAdmins) return reply(botAdmin(pushname));
if (!q) return reply(notText(prefix,cmd, pushname));
client.groupUpdateSubject(from, q);
break
case 'owner':
const sentMsg  = await client.sendMessage(from, { contacts: { contacts: [{ vcard }] }});
break
case 'help':
case 'menu':
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./src/menu.jpg') }, { upload: client.waUploadToServer })
                const template = generateWAMessageFromContent(from, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: help(list, prefix, pushname),
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Source Code',
                                    url: 'https://wa.me/6288232991394'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: '.ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Price List',
                                    id: '.pricelist'
                                }  
                         
                            }]
                        }
                    }
                }), { userJid: from, quoted: msg })
                client.relayMessage(from, template.message, { messageId: template.key.id })
            break

default: 
}
} catch (e) {
console.log(`${e}`)
}
}
