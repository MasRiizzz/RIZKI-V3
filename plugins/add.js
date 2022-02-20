handler = async (m, {conn, text}) => {
    if (!text) throw eror
    try {
        await conn.groupParticipantsUpdate(
            m.chat, 
            [`${text}@s.whatsapp.net`],
            "add" 
        )
    } catch {
        m.reply(eror)
    }

}

handler.admin = true
handler.botAdmin = true
handler.group = true

handler.command = ['add']
handler.help = ['add 62xxxxxxxxx']
handler.tags = ['group']

module.exports = handler
