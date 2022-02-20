let handler = async (m, { conn }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (!(id in conn.tebakgambar)) throw false
    let json = conn.tebakgambar[id][1]
    let ans = json.result.answer
    let clue = ans.replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')
    m.reply('```' + clue + '```')
}
handler.command = /^tg$/i
handler.limit = true
module.exports = handler
