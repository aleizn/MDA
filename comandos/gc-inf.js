let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*๐ผ๐ด๐ฝ๐๐ฐ๐น๐ด:* ${pesan}`
let teks = `MULTISERVICIOS DEL AGUILA

โข COMUNIDAD DE MULTISERVICIOS DEL AGUILA https://chat.whatsapp.com/IhVetw24HXCDK9FGTncU7H
โข Grupo de Chat de Ventas en WhatsApp https://chat.whatsapp.com/BEbIis63ocGHrd5hGfBGVx
โข Ventas por Mayor y Menor de Netflix: https://chat.whatsapp.com/I0Zn15B66hFBAQM6vcHOmM
โข Pรกgina de Facebook https://web.facebook.com/people/MultiStreamingPer%25C3%25BA/100089617760470/
โข Venta de seguidores,Comentarios,Vistas de todas las plataformas ( INSTAGRAM,YOUTUBE,FACEBOOK,TIKTOK..Y mas)

PLATAFORMAS STREAMING LO MEJOR DEL ETRETENIMIENTO AQUร
Cuentas y perfiles x mayor y menor
๐ PRECIO COMODO ๐
๐ต๐ชIPTV SMARTERS X MAYOR Y MENOR๐ต๐ช
๐ต๐ชNETFLIX FULL HD PREMIUM X MAYOR Y MENOR๐ต๐ช
๐ต๐ช Crunchyroll๐ต๐ช
๐ต๐ชDIRECTV GO X MAYOR Y MENOR๐ต๐ช
๐ต๐ชCOMBO PLUS -Disney+/star+๐ต๐ช
ALQUILER MENSUAL
๐ต๐ชDisney+๐ต๐ช
๐ต๐ชStar+๐ต๐ช
๐ต๐ชMOVISTAR TV๐ต๐ช
๐ต๐ชHBOMAX X MAYOR Y MENOR๐ต๐ช
๐ต๐ชAMAZON PRIME VIDEO X MAYOR Y MENOR๐ต๐ช
๐ต๐ชPARAMOUNT PLUS๐ต๐ช
๐ต๐ชYOUTUBE PREMIUM X MAYOR Y MENOR๐ต๐ช
๐ต๐ชSPOTIFY X MAYOR Y MENOR๐ต๐ช
ALQUILER MENSUAL
๐ *RENOVABLES MES A MES
*โบ๐ธ ๐ฝ ๐ ๐พ ๐ฒ ๐ฐ ๐ฝ ๐ณ ๐พ - ๐ถ ๐ ๐ ๐ฟ ๐พโบ*\n\nโ ${oi}\n\nโ *๐ด๐๐ธ๐๐๐ด๐๐ฐ๐:*\n`
for (let mem of participants) {
teks += `โฃ๐ป @${mem.id.split('@')[0]}\n`}
teks += `โ๐๐๐๐๐๐๐๐๐๐๐๐๐๐ ๐๐๐ ๐๐๐๐๐๐`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['inf <mesaje>','informacion <mesaje>']
handler.tags = ['group']
handler.command = /^(inf|informacion)$/i
handler.admin = true
handler.group = true
export default handler
