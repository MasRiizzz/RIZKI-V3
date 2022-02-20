handler = (m, {conn,text,usedPrefix,command}) => {
  if (!text) throw '- untuk membuka group:
${usedPrefix}${command} open

- untuk menutup group:
${usedPrefix}${command} close'
  switch (text.toLowerCase()) {
    case 'open':  
      await conn.groupSettingUpdate(m.chat, 'not_announcement')
      m.reply('sukses membuka group')
      break
    case 'close':
      await conn.groupSettingUpdate(m.chat, 'announcement')
      m.reply('sukses menutup group')
      break
    default:
      m.reply(`- untuk membuka group:
${usedPrefix}${command} open

- untuk menutup group:
${usedPrefix}${command} close`)
  }
}

handler.help = ['group *open / close*']
handler.tags = ['group']
handler.command = ['group', 'grup']
handler.botAdmin = true
handler.group = true
handler.admin = true

module.exports = handler
