const {tiktokdownload} = require('tiktok-scraper-without-watermark')

let handler = async (m, { conn, text }) => {
  m.reply(wait)
  api = await tiktokdownload(text)
  conn.sendFile(m.chat, api.nowm, '', wm, m)
}

handler.help = ['tiktoknowm']
handler.tags = ['downloader']
handler.command = /^tiktoknowm$/i

module.exports = handler
