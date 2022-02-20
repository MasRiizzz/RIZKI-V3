let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (id in conn.tebakanime) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakanime[id][0])
        throw false
    }
    let res = await fetch(global.API('lol', '/api/tebakchara', {}, 'apikey'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}ta untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakanime[id] = [
        await conn.sendFile(m.chat, json.result.image, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakanime[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.name}*`, conn.tebakanime[id][0])
            delete conn.tebakanime[id]
        }, timeout)
    ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^(tebakanim|tebakanime)/i

module.exports = handler
