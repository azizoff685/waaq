let handler = m => m

let levelling = require('../lib/levelling')
handler.before = m => {
  let user = global.DATABASE.data.users[m.sender]
	if (!user.autolevelup) return !0
	let before = user.level * 1
	while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
	if (before !== user.level) m.reply(`
Təbrik edirəm, səviyyə yüksəldiniz!
*${before}* -> *${user.level}*
Yoxlamaq üçün *.profile* istifadə edin
	`.trim())
}

module.exports = handler
