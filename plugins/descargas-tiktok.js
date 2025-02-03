import fetch from 'node-fetch';

var handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) {
        return conn.reply(m.chat, '⁂ 𝒊𝒏𝒈𝒓𝒆𝒔𝒂 𝒖𝒏 𝒍𝒊𝒏𝒌 𝒗𝒂𝒍𝒊𝒅𝒐 𝒅𝒆 𝒕𝒊𝒌𝒕𝒐𝒌', m);
    }

    try {
        await conn.reply(m.chat, "🏔️ Espere un momento, estoy descargando su video.", m);

        const tiktokData = await tiktokdl(args[0]);

        if (!tiktokData || !tiktokData.data || !tiktokData.data.play) {
            return conn.reply(m.chat, "Error: No se pudo obtener el video.", m);
        }

        const videoURL = tiktokData.data.play;

        if (videoURL) {
            await conn.sendFile(m.chat, videoURL, "tiktok.mp4", "𝐴𝑞𝑢𝑖 𝑡𝑖𝑒𝑛𝑒𝑠 (¬◡¬)✧", m);
        } else {
            return conn.reply(m.chat, "No se pudo descargar.", m);
        }
    } catch (error1) {
        return conn.reply(m.chat, `Error: ${error1.message}`, m);
    }
};

handler.help = ['tiktok'].map((v) => v + ' *<link>*');
handler.tags = ['descargas'];
handler.command = ['tiktok', 'tt'];

handler.disable = false;
handler.register = true;
handler.limit = true;

export default handler;

async function tiktokdl(url) {
    let tikwm = `https://www.tikwm.com/api/?url=${url}?hd=1`;
    let response = await (await fetch(tikwm)).json();
    return response;
}