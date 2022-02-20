const cooldown = 2592000000
let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let _timers = (cooldown - (new Date - user.lastmonthly))
    let timers = clockString(_timers)
    if (new Date - user.lastmonthly > cooldown) {
        conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan 100000 💵money, 5 🎁Legendary crate dan 3 📦Pet crate`, m)
        user.money += 100000
        user.legendary += 5
        user.pet += 3
        user.lastmonthly = new Date * 1
    } else {
        m.reply(`silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`)
    }
}
handler.help = ['monthly']
handler.tags = ['rpg']
handler.command = /^(monthly)$/i

handler.cooldown = cooldown

module.exports = handler

function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    console.log({ ms, h, m, s })
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

