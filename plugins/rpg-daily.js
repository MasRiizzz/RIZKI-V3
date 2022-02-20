const cooldown = 86400000
let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastclaim)
    let _timers = (cooldown - __timers)
    let timers = clockString(_timers)
    if (new Date - user.lastclaim > cooldown) {
        conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan 1000 💵money dan 1 potion`, m)
        global.db.data.users[m.sender].money += 1000
        global.db.data.users[m.sender].potion += 1
        global.db.data.users[m.sender].lastclaim = new Date * 1
    } else {
        stttr = `silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`
        m.reply(stttr)
    }
}
handler.help = ['claim']
handler.tags = ['rpg']
handler.command = /^(claim|daily)$/i

handler.cooldown = cooldown

module.exports = handler


function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    console.log({ ms, h, m, s })
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

