let handler = async (m, { conn, args, usedPrefix }) => {
  conn.math = conn.math ? conn.math : {}
  if (args.length < 1) throw `
Mode: ${Object.keys(modes).join(' | ')}

İstifadəyə dair nümunələr: ${usedPrefix}math orta
`.trim()
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) throw `
Mode: ${Object.keys(modes).join(' | ')}

İstifadəyə dair nümunələr: ${usedPrefix}math orta
`.trim()
  let id = m.chat
  if (id in conn.math) return conn.reply(m.chat, 'Bu söhbətdə hələ də cavabsız suallar var', conn.math[id][0])
  let math = genMath(mode)
  conn.math[id] = [
    await conn.reply(m.chat, `Nəticə *${math.str}*?\n\nTimeout: ${(math.time / 1000).toFixed(2)} Saniyə\nDüzgün Cavab: ${math.bonus} XP`, m),
    math, 4,
    setTimeout(() => {
      if (conn.math[id]) conn.reply(m.chat, `Vaxt Tükəndi!\nCavab ${math.result}`, conn.math[id][0])
      delete conn.math[id]
    }, math.time)
  ]
}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math/i

module.exports = handler

let modes = {
  çoxasan: [-3, 3,-3, 3, '+-', 15000, 10],
  asan: [-10, 10, -10, 10, '*/+-', 20000, 40],
  orta: [-40, 40, -20, 20, '*/+-', 40000, 150],
  çətin: [-100, 100, -70, 70, '*/+-', 60000, 350],
  çoxçətin: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
  dəlilik: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
  mümkünatsız: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
} 

let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function genMath(mode) {
  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
  let a = randomInt(a1, a2)
  let b = randomInt(b1, b2)
  let op = pickRandom([...ops])
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
  if (op == '/') [a, result] = [result, a]
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result
  }
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from]
  from = Math.floor(from)
  to = Math.floor(to)
  return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
