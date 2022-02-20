const fetch = require('node-fetch')
const upload = require('../lib/uploadImage')
let handler = async (m, { conn }) => {
    q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!/jpeg/.test(mime)) throw 'reply stickernya'
    file = await q.download()
    url = await upload(file)
    m.reply(wait)
    let res = await fetch(global.API('xteam', '/videomaker/shaunthesheep', {url: url}, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.buffer()
    conn.sendFile(m.chat, json, '', wm, m)
}


handler.command = ['shaunthesheep','sts']
handler.help = ['shaunthesheep','sts']
handler.tags = ['maker']

module.exports = handler
