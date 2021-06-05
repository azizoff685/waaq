let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/add/i, '')
    if (!m.quoted) throw 'Mesaj yanıtla!'
    if (!text) throw `Siyahını görmək üçün *${usedPrefix}list${which}* yazın`
    let msgs = global.DATABASE._data.msgs
    if (text in msgs) mesaj siyahısında qeydiyyatdan keçib`'${text}' atmaq`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`Mesaj siyahısına mesaj uğurla əlavə edildi '${text}'
    
Akses dengan ${usedPrefix}get${which} ${text}`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <text>')
handler.tags = ['database']
handler.command = /^add(vn|msg|video|audio|img|sticker)$/

module.exports = handler
