let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*πΌπ΄π½ππ°πΉπ΄:* ${pesan}`
let teks = `PERFILES ππ₯ ( PROMOCIΓN ) SOLO POR HOY 1/02/23
OJO SOLO X HOY ULTIMO DIA DE REMATE PERFILES
AL PRIVADO POCAS PROMOCIONES QUEDAN

π₯ Disney 6 soles soles
π₯ Star 7 soles soles
π₯ Hbomax 5 soles
π₯ Paramount plus 5 soles
π₯ Amazon prime 5 soles
π₯ crunchyroll a 5 soles

π COMBOS DE PERFILES ππ»


π₯ Netflix + Hbomax a 15 soles
π₯ Netflix + Amazon a 15 soles
π₯ Netflix + paramount a 15 soles
π₯ Netflix + IPTV a 20 soles
π₯ Netflix + DGO ORO a 20 soles
π₯ Netflix X 3 MESES 28 soles
π₯ Netflix X 6 MESES soles 55 SOLES
π₯ Netflix + Hbomax + Star + Disney a 33 soles (GRATIS SPOTIFY GRATIS)
π₯ Netflix + Hbomax + Star + Disney + IPTV a 40 soles (GRATIS SPOTIFY GRATIS)
π₯ Netflix + Hbomax + Star + Disney + IPTV + amazon prime a 48 soles (GRATIS SPOTIFY GRATIS)
π₯ Netflix + Hbomax + Star + Disney + IPTV + amazon prime + crunchyroll 60 soles (GRATIS SPOTIFY GRATIS)
π₯ Hbomax + Star o Disney a 20 soles (GRATIS SPOTIFY GRATIS)
π₯ Star + Disney + Hbomax a20 soles
π₯ Amazon prime + Disney
*βΊπΈ π½ π πΎ π² π° π½ π³ πΎ - πΆ π π πΏ πΎβΊ*\n\nβ ${oi}\n\nβ *π΄ππΈπππ΄ππ°π:*\n`
for (let mem of participants) {
teks += `β£π» @${mem.id.split('@')[0]}\n`}
teks += `βππππππππππππππ πππ ππππππ`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['promo <mesaje>','promos <mesaje>']
handler.tags = ['group']
handler.command = /^(promo|promos)$/i
handler.admin = true
handler.group = true
export default handler
