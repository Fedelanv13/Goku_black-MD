import path from 'path';
import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js';

// m.react('⏳');
    await conn.sendMessage(m.chat, { react: { text: '🥵', key: m.key } })
    let str = `Le explotaste el culo a diomar we`.trim();
    if (m.isGroup){

    let pp1 = 'https://telegra.ph/file/21543bac2383ce0fc6f51.mp4'
    let pp2 = 'https://telegra.ph/file/89891693613651230d6f0.mp4'
    const videos = [pp1, pp2];
    const video = videos[Math.floor(Math.random() * videos.length)];
    conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption:str, mentions: [m.sender] },{ quoted: estilo })
    };

  //  m.react('🔥');
}

handler.help = ['culodiomar @tag'];
handler.tags = ['fun'];
handler.command = ['explotarculodiomar','darduroadiomar']

export default handler;