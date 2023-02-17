let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `MULTISERVICIOS DEL AGUILA

• COMUNIDAD DE MULTISERVICIOS DEL AGUILA https://chat.whatsapp.com/IhVetw24HXCDK9FGTncU7H
• Grupo de Chat de Ventas en WhatsApp https://chat.whatsapp.com/BEbIis63ocGHrd5hGfBGVx
• Ventas por Mayor y Menor de Netflix: https://chat.whatsapp.com/I0Zn15B66hFBAQM6vcHOmM
• Página de Facebook https://web.facebook.com/people/MultiStreamingPer%25C3%25BA/100089617760470/
• Venta de seguidores,Comentarios,Vistas de todas las plataformas ( INSTAGRAM,YOUTUBE,FACEBOOK,TIKTOK..Y mas)

PLATAFORMAS STREAMING LO MEJOR DEL ETRETENIMIENTO AQUÍ
Cuentas y perfiles x mayor y menor
👀 PRECIO COMODO 👀
🇵🇪IPTV SMARTERS X MAYOR Y MENOR🇵🇪
🇵🇪NETFLIX FULL HD PREMIUM X MAYOR Y MENOR🇵🇪
🇵🇪 Crunchyroll🇵🇪
🇵🇪DIRECTV GO X MAYOR Y MENOR🇵🇪
🇵🇪COMBO PLUS -Disney+/star+🇵🇪
ALQUILER MENSUAL
🇵🇪Disney+🇵🇪
🇵🇪Star+🇵🇪
🇵🇪MOVISTAR TV🇵🇪
🇵🇪HBOMAX X MAYOR Y MENOR🇵🇪
🇵🇪AMAZON PRIME VIDEO X MAYOR Y MENOR🇵🇪
🇵🇪PARAMOUNT PLUS🇵🇪
🇵🇪YOUTUBE PREMIUM X MAYOR Y MENOR🇵🇪
🇵🇪SPOTIFY X MAYOR Y MENOR🇵🇪
ALQUILER MENSUAL
🔑 *RENOVABLES MES A MES
*⺀𝙸 𝙽 𝚅 𝙾 𝙲 𝙰 𝙽 𝙳 𝙾 - 𝙶 𝚁 𝚄 𝙿 𝙾⺀*\n\n❏ ${oi}\n\n❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `┣👻 @${mem.id.split('@')[0]}\n`}
teks += `└𝐌𝐔𝐋𝐓𝐈𝐒𝐄𝐑𝐕𝐈𝐂𝐈𝐎𝐒 𝐃𝐄𝐋 𝐀𝐆𝐔𝐈𝐋𝐀`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['inf <mesaje>','informacion <mesaje>']
handler.tags = ['group']
handler.command = /^(inf|informacion)$/i
handler.admin = true
handler.group = true
export default handler
