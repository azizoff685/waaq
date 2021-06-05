let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw `siyahını görmək üçün *${usedPrefix}list${which}* istifadə edin`
    let msgs = global.DATABASE._data.msgs
    if (!text in msgs) throw `'${text}' bu mesaj siyahıda yoxdur`
    delete msgs[text]
    m.reply(`'${text}''mesaj siyahısından uğurla silindi'`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
handler.tags = ['database']
handler.command = /^del(vn|msg|video|audio|img|sticker)$/

module.exports = handler
