const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Serial Nömrəsini Daxil Edin'
  let user = global.DATABASE._data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Yanlış Serial Nömrəsi'
  user.registered = false
  m.reply(`Qeydiyyat Uğurla Pozuldu!`)
}
handler.help = ['qysil', 'ister'].map(v => 'qysil' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['exp']

handler.command = /^qysil(ister)?$/i
handler.register = true

module.exports = handler

