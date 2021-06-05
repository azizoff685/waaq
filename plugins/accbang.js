let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Yox'
  if (isAdmin) throw 'Artıq admin olduğuma baxmayaraq'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
