let handler = async (m, { conn, args }) => {
  let group = m.chat
  if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) group = args[0]
  if (!/^[0-9]{5,16}-[0-9]+@g\.us$/.test(group)) throw 'Bu Komut Yalnız Grup Üçündür'
  let groupMetadata = await conn.groupMetadata(group)
  if (!groupMetadata) throw 'qrup Metadata təyin edilməyib :\\'
  if (!'participants' in groupMetadata) throw 'istifadəçilər müəyyən edilməyib :('
  let me = groupMetadata.participants.find(user => user.jid === conn.user.jid)
  if (!me) throw 'Mən o qrupda deyiləm :('
  if (me.isAdmin !== true) throw 'Mən Admin Deyiləm T_T'
  m.reply('*Qrup Linki:*\nhttps://chat.whatsapp.com/' + await conn.groupInviteCode(group))
}
handler.help = ['linkqrup']
handler.tags = ['qrup']
handler.command = /^link(qr?up)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

