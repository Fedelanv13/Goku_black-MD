import axios from 'axios'
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, args, usedPrefix, command }) {
    let user = global.db.data.users[m.sender]
    let name2 = conn.getName(m.sender)
    let whe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
    let perfil = await conn.profilePictureUrl(whe, 'image').catch(_ => 'https://telegra.ph/file/0bb7e9e7c8cb4e820f1fe.jpg')

    if (user.registered === true) {
        return m.reply(`《★》𝗬𝗮 𝘁𝗲 𝗲𝗻𝗰𝘂𝗲𝗻𝘁𝗿𝗮𝘀 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗱𝗼.\n\n¿𝗤𝘂𝗶𝗲𝗿𝗲 𝘃𝗼𝗹𝘃𝗲𝗿 𝗮 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿𝘀𝗲?\n\n𝗨𝘀𝗲 𝗲𝘀𝘁𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 𝗽𝗮𝗿𝗮 𝗲𝗹𝗶𝗺𝗶𝗻𝗮𝗿 𝘀𝘂 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗼.\n*${usedPrefix}unreg*`)
    }

    if (!Reg.test(text)) return m.reply(`《★》Eʟ ғᴏʀᴍᴀᴛᴏ ɪɴɢʀᴇsᴀᴅᴏ ᴇs ɪɴᴄᴏʀʀᴇᴄᴛᴏ\n\nUsᴏ ᴅᴇʟ ᴄᴏᴍᴀɴᴅᴏ: ${usedPrefix + command} 𝗻𝗼𝗺𝗯𝗿𝗲.𝗲𝗱𝗮𝗱\nEᴊᴇᴍᴘʟᴏ : *${usedPrefix + command} ${name2}.14*`)

    let [_, name, splitter, age] = text.match(Reg)
    if (!name) return m.reply('《★》Eʟ ɴᴏʍ𝗯𝗿𝗲 ɴᴏ ᴘᴜᴇᴅᴇ ᴇsᴛᴀʀ ᴠᴀᴄɪᴏ.')
    if (!age) return m.reply('《★》Lᴀ ᴇᴅᴀᴅ ɴᴏ ᴘᴜᴇᴅᴇ ᴇsᴛᴀʀ ᴠᴀᴄɪ́ᴀ.')
    if (name.length >= 100) return m.reply('《★》El nombre es demasiado largo.')

    age = parseInt(age)
    if (age > 1000) return m.reply('《★》 *ʟᴀ ᴇᴅᴀᴅ ɪɴɢʀᴇsᴀᴅᴀ ᴇs ɪɴᴄᴏʀʀᴇᴄᴛᴀ*')
    if (age < 5) return m.reply('《★》 *ʟᴀ ᴇᴅᴀᴅ ɪɴɢʀᴇsᴀᴅᴀ ᴇs ɪɴᴄᴏʀʀᴇᴄᴛᴀ*')

    user.name = name.trim()
    user.age = age
    user.regTime = +new Date
    user.registered = true
    global.db.data.users[m.sender].money += 600
    global.db.data.users[m.sender].estrellas += 10
    global.db.data.users[m.sender].exp += 245
    global.db.data.users[m.sender].joincount += 5    

    let who;
    if (m.quoted && m.quoted.sender) {
        who = m.quoted.sender;
    } else {
        who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    }

let sn = createHash('md5').update(m.sender).digest('hex');
let regbot = `
╔═̴̸᪳᷍═̷✩⃢̴═⃨⃜═̶⃕╡̴˚̸᪵✧̷⃘⃛᪻᪻᪻᷼᷍✧̵⃨˚̷᪵╞̶⃔══⃢̸⃨⃜✩̷══̸͜͞═̸̸̸᪳͟╗
𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐎 𝐄𝐗𝐈𝐓𝐎𝐒𝐎
╚̷͓═̴̸᪳᷍═̷✩⃢̴═⃨⃜═̶⃕╡̴˚̸᪵✧̷⃘⃛᪻᪻᪻᷼᷍✧̵⃨˚̷᪵╞̶⃔══⃢̸⃨⃜✩̷══̸͜͞═̸̸̸᪳͟╝

﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡
*‧˚꒰🫧꒱༘‧: 𝐍𝐨𝐦𝐛𝐫𝐞:* ${name}
*‧˚꒰🔍꒱༘‧: 𝐄𝐝𝐚𝐝:* ${age}
꒰꛱ ͜ ꛱|꛱ ꛱͜ |꛱ ꛱͜ |꛱ ͜ ꛱|꛱ ͜ |୨🌔🏮୧꛱|꛱ ꛱͜ |꛱ ͜ ꛱ |꛱ ͜ ꛱|꛱ ꛱͜ |꛱ ͜ ꒱
*「💥」𝐑𝐞𝐜𝐨𝐦𝐩𝐞𝐧𝐬𝐚𝐬:*
ᦷᩘᦷ     ݂   🍅 ፡ Estrellas 🌟
ᦷᩘᦷ     ݂   🎴  ፡ 5 Blackcoins 🪙
ᦷᩘᦷ     ݂   🍅 ፡ 245 Experiencia 💸
ᦷᩘᦷ     ݂   🎴  ፡ 12 Tokens 💰
﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡﹏͜͡

 🍫 Usᥲ *#perfil* ⍴ᥲrᥲ ᥎ᥱr 𝗍ᥙ ⍴ᥱr𝖿іᥣ.
*usa el comando .Help para ver el menú y .verreg para ver tu verificación*

> (˶ᵔ ᵕ ᵔ˶) Recuerda seguír el canal de Goku black bot para estar al tanto de avisos y novedades del Bot 🔥
`

await conn.sendMessage(m.chat, {
    text: regbot,
    contextInfo: {
        externalAdReply: {
            title: '⊱『✅𝆺𝅥 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢(𝗔) 𝆹𝅥✅』⊰',
            thumbnailUrl: 'https://telegra.ph/file/0bb7e9e7c8cb4e820f1fe.jpg',
            mediaType: 1,
            body: 'cada día más god🔥
            renderLargerThumbnail: true,
            sourceUrl: 'https://whatsapp.com/channel/0029VaYh3Zm4dTnQKQ3VLT0h' // Aquí puedes agregar el link de tu canal de WhatsApp
        }
    }
}, { quoted: m });



/*    await m.react('📪')
  await conn.sendMessage(m.chat, {
           text: regbot, 
        contextInfo: {
            externalAdReply: {
                showAdAttribution: true,                      
                containsAutoReply: true,     
                renderLargerThumbnail": true,
                title: '⊱『✅𝆺𝅥 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢(𝗔) 𝆹𝅥✅』⊰',  
                body: dev,  
                containsAutoReply: true,
                showAdAttribution: true,
                mediaType: 1, 
                thumbnailUrl: 'https://telegra.ph/file/0bb7e9e7c8cb4e820f1fe.jpg' }}}, {quoted: m})
*/

let chtxt = `ੈ₊˚༅༴│↷◌⁺˖ 🌸 *𝐆𝐎𝐊𝐔 - 𝐁𝐋𝐀𝐂𝐊* 🌸
🔥ੈ₊˚༅༴│.👥 *𝚄𝚜𝚎𝚛* » ${m.pushName || 'Anónimo'}  
🔥ੈ₊˚༅༴│.📇 *𝚅𝚎𝚛𝚒𝚏𝚒𝚌𝚊𝚌𝚒𝚘́𝚗* » ${user.name}  
🔥ੈ₊˚༅༴│.🍰 *𝙴𝚍𝚊𝚍* » ${user.age} años  
🔥ੈ₊˚༅༴│.⌨️ *𝙳𝚎𝚜𝚌𝚛𝚒𝚙𝚌𝚒𝚘𝚗* » ${user.descripcion}  
🔥ੈ₊˚༅༴│.🍬 *𝙽𝚞𝚖𝚎𝚛𝚘 𝚍𝚎 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚘* »
⤷ ${sn}`;

    let channelID = '120363351515256850@newsletter';
        await conn.sendMessage(channelID, {
        text: chtxt,
        contextInfo: {
            externalAdReply: {
                title: "୧⍤⃝💐 𝐑͜͡𝐄͜͡𝐆͜͡𝐈͜͡𝐒͜͡𝐓͜͡𝐑͜͡𝐎͜͡  𝘾𝙊⃟𝙈𝙋𝙇𝙀᪵᪺𝙏⃨𝙊 ❛░⃟ ⃟°˟̫̫",
                body: '☠️ 𝑱𝒂𝒋𝒂, 𝒖𝒏 𝒏𝒖𝒆𝒗𝒐 𝒉𝒖𝒎𝒂𝒏𝒐 𝒆𝒏 𝒎𝒊 𝒃𝒂𝒔𝒆 𝒅𝒆 𝒅𝒂𝒕𝒐𝒔!',
                thumbnailUrl: perfil,
                sourceUrl: redes,
                mediaType: 1,
                showAdAttribution: false,
                renderLargerThumbnail: false
            }
        }
    }, { quoted: null });
};

handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar']

export default handler