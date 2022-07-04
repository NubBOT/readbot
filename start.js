/*
  * Sript By Thadz BotZ
  * Contact : wa.me/6288232991394
  * Library : @adiwajshing/baileys
*/
require('./lib/config.js');
const { default: makeWASocket, Browsers, AnyMessageContent, delay, proto, generateWAMessageFromContent, DisconnectReason, fetchLatestBaileysVersion, useSingleFileAuthState } = require('@adiwajshing/baileys');
const fs = require('fs');
const pino = require ('pino');
const { exec } = require("child_process")
const { Boom } = require('@hapi/boom')
const chalkanim = require('chalk-animation');
const { state, saveState } = useSingleFileAuthState(`./session.json`);

const startBot = async() => {
const { version, isLatest } = await fetchLatestBaileysVersion();

console.log('\n=========================');
console.log('Author  : Thadz BotZ');
console.log('GitHub  : http://github.com/thadzbotz');
console.log('Library : @adiwajshing/baileys');
console.log('=========================\n');
const client = makeWASocket({ version, logger: pino({ level: 'silent' }), printQRInTerminal: true, auth: state, browser: ['ByThadzBotZ', 'Chrome', '3.0.0'] });

client.ev.on('messages.upsert', async ({ messages }) => {
const msg = messages[0];
if (msg.fromMe) return;
require('./index')(client, msg);
});

client.ev.on('group-participants.update', async (apdet) =>{
console.log(apdet)
})

client.ev.on('connection.update', (update) => {
	console.log('Bot Connect: ', update)
if (update.connection === 'open');
if (update.connection === 'close')
startBot()

})


client.ev.on('creds.update', saveState);
};


startBot();

