let handler = (m, { usedPrefix, command, text }) => {
    if (!text) throw `contoh:\n${usedPrefix + command} 2002 02 25`

    const date = new Date(text)
    if (date == 'Invalid Date') throw date
    const d = new Date()
    const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
    const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    
    const zodiac = getZodiac(birth[1], birth[2])
    const ageD = new Date(d - date)
    const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

    const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
    const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Selamat ulang tahun yang ke-${age} 🥳` : age

    const teks = `
Anadan Olma : ${birth.join('-')}
Gələn Ad Günü : ${birthday.join('-')}
Yaş : ${cekusia}
Bürc : ${zodiac}
`.trim()
    m.reply(teks)
}
handler.help = ['burc *2002 02 25*']
handler.tags = ['tools']

handler.command = /^burc[kc]$/i

module.exports = handler

const zodiak = [
    ["Oğlaq", new Date(1970, 0, 1)],
    ["Dolça", new Date(1970, 0, 20)],
    ["Balıq", new Date(1970, 1, 19)],
    ["Qoç", new Date(1970, 2, 21)],
    ["Buğa", new Date(1970, 3, 21)],
    ["Əkizlər", new Date(1970, 4, 21)],
    ["Xərçəng", new Date(1970, 5, 22)],
    ["Şir", new Date(1970, 6, 23)],
    ["Qız", new Date(1970, 7, 23)],
    ["Tərəzi", new Date(1970, 8, 23)],
    ["Əqrəb", new Date(1970, 9, 23)],
    ["Oxatan", new Date(1970, 10, 22)],
    ["Oğlaq", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
}
