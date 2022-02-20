handler = async (m, {conn, text}) => {
    if (!text) throw eror
    if(!text.includes('@')) throw eror
    try {
        users = m ? m : m.quoted
        user = users.mentionedJid
        for (i of user) {
            await conn.groupParticipantsUpdate(
                m.chat, 
                [i],
                "remove" 
            )
        }
    } catch {
        m.reply(eror)
    }

}

handler.admin = true
handler.botAdmin = true
handler.group = true

handler.command = ['kick']
handler.help = ['kick @user']
handler.tags = ['group']

module.exports = handler
