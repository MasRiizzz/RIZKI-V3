const { webp2mp4 } = require('../lib/webp2mp4')
let handler = async (m, { conn }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!/webp/.test(mime)) throw 'reply stickernya'
    m.reply(wait)
    let img = await q.download()
    res = await webp2mp4(img)
    conn.sendFile(m.chat, res, '', wm, m, false, {mimetype:'video/gif'})
}


handler.command = ['tomp4','togif']
handler.help = ['tomp4','togif']
handler.tags = ['sticker']

module.exports = handler
