var gtts = require('node-gtts')('en')
var path = require('path');
const fs = require('fs')

let handler = async (m, {conn, text}) => {
    api = await tts(text)
    conn.sendFile(m.chat, api, '', wm, m, true)
}


handler.command = ['tts']
handler.help = ['tts']
handler.tags = ['tools']

module.exports = handler
function tts(text) {
    return new Promise((resolve, reject) => {
      try {
        let filePath = path.join(__dirname, '../tmp', (1 * new Date) + '.wav')
        gtts.save(filePath, text, () => {
          resolve(fs.readFileSync(filePath))
          fs.unlinkSync(filePath)
        })
      } catch (e) { reject(e) }
    })
  }
