let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Sual:* ${m.text}
*Cavab verin:* ${pickRandom(['Bəli','Bəlkədə','Ola bilər','Yəqin ki, yox','Yox','Mümkün deyil'])}
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['apakah <teks>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

