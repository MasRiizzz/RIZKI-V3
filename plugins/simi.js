handler = (m, {conn, text}) => {
  try {
    conn.fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=rey2k21&text=${text}`)
    .then(api => {
      m.reply(api.result)
    })
  } catch {
    m.reply(eror)
  }
}

handler.tags = ['fun']
handler.command = ['simi']
handler.help = ['simi']

module.exports = handler
