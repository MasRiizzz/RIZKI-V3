const { sticker1, sticker5 } = require('../lib/sticker')
const { writeExifVid } = require('../lib/exif')

let handler = async (m, { conn, text }) => {
    ggi = {
        "key": {
            "remoteJid": "1203630227212435259@g.us",
            "fromMe": false,
            "participant": "0@s.whatsapp.net"
        },
        "message": {
            "conversation": `_*${m.name}*_`,
        }
    }
    let stiker = false
    try {
    	let [packname, ...author] = text.split`|`
        author = (author || []).join`|`
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (/webp/.test(mime)) {
            let img = await q.download()
            if (!img) throw `balas stiker dengan perintah ${usedPrefix + command} <packname>|<author>`
            stiker = await sticker5(img, false, packname || '', author || '')
        } else if (/image/.test(mime)) {
            let img = await q.download()
            if (!img) throw `balas stiker dengan perintah ${usedPrefix + command} <packname>|<author>`
            stiker = await sticker5(img, false, packname || '', author || '')
        } else if (/video/.test(mime)) {
            if ((q.msg || q).seconds > 10) return m.reply('max is 10 seconds!')
            let img = await q.download()
            if (!img) throw `balas stiker dengan perintah ${usedPrefix + command} <packname>|<author>`
            stiker = await writeExifVid(img, {packname: packname || '', author: author || ''})
        } else if (m.quoted.text) {
            if (isUrl(m.quoted.text)) stiker = await sticker(false, m.quoted.text, packname || '', author || '')
            else throw 'URL is not valid! end with jpg/gif/png'
        }
    } catch (e) {
        throw e
    }
    finally {
        if (stiker) {
          m.reply(stiker_wait)
            await conn.sendFile(m.chat, stiker, '', wm, ggi, 0, {fileLength:1e+100,"contextInfo": { "mentionedJid": [m.sender]}})
        }
        else {

            throw 0
        }
    }
}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^(wm)$/i
handler.premium = true
module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'))
}
