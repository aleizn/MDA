let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `PERFILES 👇👥 ( PROMOCIÓN ) SOLO POR HOY 1/02/23
OJO SOLO X HOY ULTIMO DIA DE REMATE PERFILES
AL PRIVADO POCAS PROMOCIONES QUEDAN

🔥 Disney 6 soles soles
🔥 Star 7 soles soles
🔥 Hbomax 5 soles
🔥 Paramount plus 5 soles
🔥 Amazon prime 5 soles
🔥 crunchyroll a 5 soles

😋 COMBOS DE PERFILES 👇🏻


🔥 Netflix + Hbomax a 15 soles
🔥 Netflix + Amazon a 15 soles
🔥 Netflix + paramount a 15 soles
🔥 Netflix + IPTV a 20 soles
🔥 Netflix + DGO ORO a 20 soles
🔥 Netflix X 3 MESES 28 soles
🔥 Netflix X 6 MESES soles 55 SOLES
🔥 Netflix + Hbomax + Star + Disney a 33 soles (GRATIS SPOTIFY GRATIS)
🔥 Netflix + Hbomax + Star + Disney + IPTV a 40 soles (GRATIS SPOTIFY GRATIS)
🔥 Netflix + Hbomax + Star + Disney + IPTV + amazon prime a 48 soles (GRATIS SPOTIFY GRATIS)
🔥 Netflix + Hbomax + Star + Disney + IPTV + amazon prime + crunchyroll 60 soles (GRATIS SPOTIFY GRATIS)
🔥 Hbomax + Star o Disney a 20 soles (GRATIS SPOTIFY GRATIS)
🔥 Star + Disney + Hbomax a20 soles
🔥 Amazon prime + Disney
*⺀𝙸 𝙽 𝚅 𝙾 𝙲 𝙰 𝙽 𝙳 𝙾 - 𝙶 𝚁 𝚄 𝙿 𝙾⺀*\n\n❏ ${oi}\n\n❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `┣👻 @${mem.id.split('@')[0]}\n`}
teks += `└𝐌𝐔𝐋𝐓𝐈𝐒𝐄𝐑𝐕𝐈𝐂𝐈𝐎𝐒 𝐃𝐄𝐋 𝐀𝐆𝐔𝐈𝐋𝐀`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['promo <mesaje>','promos <mesaje>']
handler.tags = ['group']
handler.command = /^(promo|promos)$/i
handler.admin = true
handler.group = true
export default handler
