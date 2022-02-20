const cooldowns = {
    lastadventure: {
        name: 'adventure',
        cooldown: require('./rpg-adventure').cooldown
    },
    lastclaim: {
        name: 'claim',
        cooldown: require('./rpg-daily').cooldown
    },
    lastweekly: {
        name: 'weekly',
        cooldown: require('./rpg-weekly').cooldown
    },
    lastmonthly: {
        name: 'monthly',
        cooldown: require('./rpg-monthly').cooldown
    }
}
let handler = async (m, { conn, usedPrefix }) => {
    const user = global.db.data.users[m.sender]
    let str = `
*—「 🕖 Cooldown 」—*
${Object.entries(cooldowns).map(([d, { name, cooldown }]) => `*Last ${name}:* ${new Date() - user[d] >= cooldown ? '✅' : '❌'}`).join('\n')}
`.trim()
    m.reply(str)
}
handler.help = ['cd', 'cooldown']
handler.tags = ['rpg']
handler.command = /^(cd|cooldown)$/i
module.exports = handler
