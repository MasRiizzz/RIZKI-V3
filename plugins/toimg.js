let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/webp/.test(mime)) {
        m.reply(wait)
        let img = await q.download()
        conn.sendMessage(m.chat, {image:img,caption:wm},{quoted:m})
    } else {
        m.reply(`reply stickernya`)
    }
}


handler.command = ['toimg','toimage']
handler.help = ['toimg']
handler.tags = ['sticker']

module.exports = handler
