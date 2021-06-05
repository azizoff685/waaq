function handler(m) {
  // Bu sadəcə bir nümunədir, şərh verməyin -_-
  // F this.sendContact(m.chat, '994503457533', 'Azizoff', m)
  this.sendContact(m.chat, '994503457533', 'Azizoff', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
