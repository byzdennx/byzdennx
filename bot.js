const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const { MessageMedia } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    // Generate and display QR code for authentication
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', async (message) => {
    if (message.body === '.brat') {
        // Buat stiker dari gambar
        const media = MessageMedia.fromFilePath('path/to/your/image.png'); // Ganti dengan path gambar Anda
        await client.sendMessage(message.from, media, { sendMediaAsSticker: true });
    }
});

client.initialize();
