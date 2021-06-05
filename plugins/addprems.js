let handler = async (m, { conn }) => {
  
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (global.prems.includes(who.split`@`[0])) throw 'premium olan birini necə premium edim?!'
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `Salam, @${who.split`@`[0]}. artıq Premium istifadəçisiniz!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['addprem *@user*']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)prem$/i
handler.rowner = true
module.exports = handler
