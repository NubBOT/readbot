/*
  * Sript By Thadz BotZ
  * Contact : wa.me/6282352239289
  * Library : @adiwajshing/baileys
*/
global.ownerNumber = '6282352239289@s.whatsapp.net';//ganti nomor lu
global.ownerName = 'Wibuu';//ganti nama lu
global.botName = 'Xbotz-MD';//ganti nama bot lu
global.gopay = 'gopaylu'
global.dana = '6282352239289'
global.pulsa = '6282352239289'
global.ovo = 'ovolu'
global.vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ 'FN:Bang Wibuu\n'//ganti nama lu
+ 'TEL;type=CELL;type=VOICE;waid=6282352239289:+62 823-5223-9289\n'//ganti nomor lu tanpa ngubah format
+ 'END:VCARD';
global.onlyGroup = (pushname) => {
  return `*Maaf ${pushname} Perintah ini hanya dapat digunakan di group*`;
};
global.onlyAdmin = (pushname) => {
   return `*Maaf ${pushname} Perintah ini hanya dapat digunakan oleh admin group*`;
};
global.botAdmin = (pushname) => {
   return `*Maaf ${pushname} Perintah ini hanya dapat digunakan ketika bot menjadi admin*`;
};
global.notText = (prefix, cmd, pushname) => {
   return `*Maaf ${pushname}*

_Parameter text belum dimasukan_
ex: ${prefix + cmd} yourtext `;
};
global.onlyCreator = (pushname) => {
	return `*Maaf ${pushname} Perintah ini hanya dapat digunakan oleh owner bot*`;
	};
global.help = (list, prefix, pushname) => {
	return `
Halo ${pushname}

========================
Main Menu:
========================
${list} ${prefix}owner
${list} ${prefix}menu
${list} ${prefix}ping
========================
Store Menu:
========================
${list} ${prefix}pricelist [ff/ml]
${list} ${prefix}format
${list} ${prefix}payment
${list} ${prefix}proses
${list} ${prefix}done
========================
Grup Menu:
========================
${list} ${prefix}group [open/close]
${list} ${prefix}editinfogroup [admin/all]
${list} ${prefix}hidetag
${list} ${prefix}add @tag
${list} ${prefix}kick @tag
${list} ${prefix}promote
${list} ${prefix}demote
${list} ${prefix}resetlink
${list} ${prefix}linkgroup
${list} ${prefix}setname
${list} ${prefix}setdesc
========================
Other Menu:
========================
${list} ${prefix}sticker
${list} ${prefix}sgif
`;//Menu bot
};
global.dmFF = () => {
	return `
	*DIAMOND FREE FIRE*
_VIA ID_
70    💎 = Rp 10.000
140    💎 = Rp. 20.000


*_Pengisian Diamonds Legal 100%_*

*_Untuk lebih lengkapnya bisa chat admin 👇_*
http://wa.me//6288232991394
`;//ganti text lu
};
global.dmML = () => {
	return `
	*DIAMOND MOBILE LEGENDS*
_VIA ID + SERVER_
65    💎 = Rp 15.500
86    💎 = Rp. 22.000


*_Pengisian Diamonds Legal 100%_*

*_Untuk lebih lengkapnya bisa chat admin 👇_*
http://wa.me//6288232991394
`;//ganti text lu
};
global.formm = (tanggal) => {
	return `
*NICK:*
*UID:*
*NOMINAL:*
*HARGA:*

*Pastikan Format Benar !!*
*Jika Salah Isi Format Maka Diamond Gak Masuk*
*Kami tidak akan bertanggung jawab !!*
*Terima kasih*

${tanggal}
`;//ganti text lu
};
global.pross = (jam, tanggal) => {
	return `
_Orderan Sedang Di Proses Silakan Di Tunggu_

*⏰ Jam ⵓ* _${jam} WIB_
*📅 Tanggal ⵓ* _${tanggal}_

_Pesanan Sedang Di Proses Harap Di Tunggu Ya Kak !!_
`;//ganti text lu
};
global.donn = (jam, tanggal) => {
	return `
_Done Kak Orderan Telah Di Proses_

*⏰ Jam ⵓ* _${jam} WIB_
*📅 Tanggal ⵓ* _${tanggal}_


_All Trx No Reff !!_
`;//ganti text lu
};
