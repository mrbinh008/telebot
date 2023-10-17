const TelegramBot = require("node-telegram-bot-api");
// const DbService = require('./services/db.service');
require('dotenv').config();

const telegramToken = process.env['BOT_TOKEN'];
const bot = new TelegramBot(telegramToken, {polling: true});

// DbService.connect().then(() => {
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name;
    const lastName = msg.from.last_name;
    const userName = lastName ? `${firstName} ${lastName}` : firstName;
    bot.sendMessage(chatId, `Hello, ${userName}! Welcome to bot`);
});
bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name;
    const lastName = msg.from.last_name;
    const userName = lastName ? `${firstName} ${lastName}` : firstName;
    let message = `Hi ${userName}! I'm Zoro Bot. I can help you with the following commands:\n` +
        "/roadmap - Zoro roadmap\n" +
        "/whitepaper - Zoro whitepaper\n" +
        "/listing - Zoro listing\n" +
        "/tokenomics - Zoro tokenomics\n" +
        "/airdrop - Zoro airdrop\n" +
        "/help - Zoro help\n";
    bot.sendMessage(chatId, message);
});
bot.onText(/\/roadmap/, (msg) => {
    const chatId = msg.chat.id;
    let message = `The expected price of Zoro Token is projected to reach $0.005 after listing.
Listing Price: The post-IEO listing price is expected to increase by at least 10% compared to the IEO price.
Zororium Roadmap\n` + "Phase 1: Initiation and Construction (from 6/2023 – October 2023)\n" + "Phase 2: Expanding Trading Operations through IEO (from 10/10/2023 – 31/10/2023)\n" + "Phase 3: Exchange Listing and Ecosystem Completion (from 1/11/2023)\n";
    const inlineKeyboard = {
        inline_keyboard: [
            [
                {
                    text: 'Open Roadmap',
                    url: 'https://zorotoken.io/roadmap-2/'
                },
                {
                    text: 'Buy Zorotoken',
                    url: 'https://coinsbit.io/ieo-list/ZRT_123'
                }
            ]
        ]
    };
    bot.sendMessage(chatId, message, {
        reply_markup: inlineKeyboard
    });
});
bot.onText(/\/whitepaper/, (msg) => {
    const chatId = msg.chat.id;
    const inlineKeyboard = {
        inline_keyboard: [
            [
                {
                    text: 'Open Whitepaper',
                    url: 'https://zorotoken.gitbook.io/zorotoken.io/introduction/what-is-zorotoken'
                },
                {
                    text: 'Buy Zorotoken',
                    url: 'https://coinsbit.io/ieo-list/ZRT_123'
                }
            ]
        ]
    }
    let message="What is ZoroToken?\n";
    bot.sendMessage(chatId, message, {
        reply_markup: inlineKeyboard
    });
});
bot.onText(/\/listing/, (msg) => {
    const chatId = msg.chat.id;
    const photoPath = ['https://zorotoken.io/wp-content/uploads/2023/10/photo_2023-10-14_14-19-16.jpg', 'https://zorotoken.io/wp-content/uploads/2023/10/Listing-Plan-2-2048x1226.png'];
    const media = photoPath.map((path) => ({
        type: 'photo',
        media: path
    }));
    bot.sendMediaGroup(chatId, media)
        .then(() => {
            console.log('Đã gửi nhiều ảnh thành công');
        })
        .catch((error) => {
            console.error('Lỗi khi gửi nhiều ảnh:', error);
        });
    // bot.sendMessage(chatId, 'Xin chào! Đây là bot listing');
});
bot.onText(/\/tokenomics/, (msg) => {
    const chatId = msg.chat.id;
    const message = "Stage 1 (from 20/06/2023): Issue 50 billion Zoro Tokens – Priced at $0.000075/ZRT.\n" +
        "Stage 2 (from 10/10/2023 to 31/10/2023): Issue 50 billion Zoro Tokens – Priced at $0.000225/ZRT.\n" +
        "Stage 3 (from 1/11/2023): Price will fluctuate based on the market after the project is listed on major exchanges.";
   const inlineKeyboard = {
        inline_keyboard: [
            [
                {
                    text: 'Open Tokenomics',
                    url: 'https://zorotoken.io/zororium-tokennomics/'
                },
                {
                    text: 'Buy Zorotoken',
                     url: 'https://coinsbit.io/ieo-list/ZRT_123'
                }
            ]
        ]
    };
    bot.sendMessage(chatId, message, {
        reply_markup: inlineKeyboard
    });

});
bot.onText(/\/airdrop/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Xin chào! Đây là airdrop');
});

