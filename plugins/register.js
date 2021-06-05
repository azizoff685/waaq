const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Zatən qeydiyyatdan keçmisiniz\nYeniden qeydiyyatdan keçmək istəyirsiz? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Yanlış format\n*${usedPrefix}qeydiyyat ad.yaş*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Ad boş qala bilməz (Hərflər)'
  if (!age) throw 'Yaş boş qala bilməz (Sayılar)'
  age = parseInt(age)
  if (age > 120) throw 'Yaş çox böyükdür 😂'
  if (age < 5) throw 'Körpələr Qeydiyyatdan Keçirilmir ._.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Qeydiyyat Uğurla Tamamlandı!

╭─「 Məlumat 」
│ Ad: ${name}
│ Yaş: ${age} tahun
│ SN: ${sn}
╰────
`.trim())
}
handler.help = ['qeydiyyat', 'qy', 'register'].map(v => v + ' <ad>.<yaş>')
handler.tags = ['exp']

handler.command = /^(qeydiyyat|qy(ister)?)$/i

module.exports = handler

