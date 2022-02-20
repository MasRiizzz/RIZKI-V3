const {tiktokdownload} = require('tiktok-scraper-without-watermark')

let handler = async (m, { conn, text }) => {
  await m.reply(wait)
  api = await tiktokdownload(text)
  conn.sendFile(m.chat, api.wm, '', wm, m)
}

handler.command = /^(tiktokwm)$/i
handler.help = ['tiktokwm']
handler.tags = ['downloader']

module.exports = handler
