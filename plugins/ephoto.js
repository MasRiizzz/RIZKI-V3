let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
let [effect, teks] = text.split('|')

let listeffect = `
NeonDevil
3DShiny
Zombie3D
WordGreen
Cloud
Metal
Neon
GraffitiColor
LightGalaxy
HotMetalic
Snake
Graffiti5
Graffiti3
Graffiti
Neon2
Thunder
StartsNight
Cake
WritingChalk
BirthdayCake
3DHologram
GalaxyStyle
LightEffects
GreenBrush
Cakes
StartsNight2
Glowing
WetGlass
BlackpinkNeon
3DCrack
3DUnderwater
Blackpink
BearLogo
Graffiti2
WaterColor
Clouds
PubgMascot
SummerBeach
NeonLight
SummerBeach2
1927
Glow
Wooden3D
Galaxy
GalaxyBat
BrokenGlass
ArtPaperCut
PaulScholes
Tiktok
Avengers
3DWood
Graffiti4
Graffiti6
MultiColor3D
RealisticVintage
Pornhub
Juventus
CaptainAmerica
`.trim()


    if (!effect) return conn.reply(m.chat, listeffect, m)
    if (!teks) return conn.reply(m.chat, 'Uhm... Teksnya?', m)

  await m.reply('Sedang membuat...')
 let hasil = await `https://api.dapuhy.xyz/api/ephoto/${effect}?text=${teks}&apikey=4oYjiJ6vJr`
 let caption = `*ephoto*\n\nEffect : ${effect}`

    conn.sendFile(m.chat, hasil, '', caption, m)
}
handler.help = ['ephoto <effect|teks>']
handler.tags = ['maker']
handler.command = /^(ephoto)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
