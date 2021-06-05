let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    global.DATABASE._data.chats[m.chat].sBye = text
    m.reply('Əlvida Uğurla Quruldu\n@user (Mention)')
  } else throw 'Mətn Hardadır?'
}
handler.help = ['setbye <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i
module.exports = handler

