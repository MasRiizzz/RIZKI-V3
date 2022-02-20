const {tiktokdownload} = require('tiktok-scraper-without-watermark')

let handler = async (m, { conn, text }) => {
  m.reply(wait)
  api = await tiktokdownload(text)
  conn.sendFile(m.chat, api.nowm, '', wm, m)
}

handler.command = /^(tiktok)$/i
handler.help = ['tiktok']
handler.tags = ['downloader']

module.exports = handler
