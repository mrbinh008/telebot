const TelegramBot = require("node-telegram-bot-api");
const fs = require('fs');
// Đường dẫn đến tệp cấu hình JSON
const configPath = './config.json';
const configData = fs.readFileSync(configPath, 'utf8');
const config = JSON.parse(configData);
// Danh sách từ khóa bị cấm
const bannedWords = config.bannedWords;
// Danh sách id người dùng có quyền admin
const adminIds = config.adminIds;
const isBannedWord = config.isBannedWord;
const isBannedLink = config.isBannedLink;
require('dotenv').config();

const telegramToken = process.env['BOT_TOKEN'];
const bot = new TelegramBot(telegramToken, {polling: true});
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
        "/buy - Zoro buy\n" +
        "/broker_partner - Zoro broker partner\n" +
        "/launchpad_ieo - Zoro launchpad IEO\n" +
        "/ecosystem - Zoro ecosystem\n" +
        "/warning - Zoro warning\n" +
        "/support - Zoro support\n" +
        "/social - Zoro social\n" +
        "/community - Zoro community\n" +
        "/promotion - Zoro promotion\n" +
        "/minigame - Zoro minigame\n" +
        "/info - Show your info\n" +
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
                    text: '✅ProBit',
                    url: 'https://www.probit.com/en-us/ieo/zrt-round2/0'
                },
                {
                    text: '✅Coinsbit',
                    url: 'https://coinsbit.io/vn/ieo-list/ZRT_123'
                },
                {
                    text: '✅Pinksale',
                    url: 'https://www.pinksale.finance/launchpad/0x362F99acAB238fCf557a657b5b259396a06761e0?chain=BSC'
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
                    text: '✅ProBit',
                    url: 'https://www.probit.com/en-us/ieo/zrt-round2/0'
                },
                {
                    text: '✅Coinsbit',
                    url: 'https://coinsbit.io/vn/ieo-list/ZRT_123'
                },
                {
                    text: '✅Pinksale',
                    url: 'https://www.pinksale.finance/launchpad/0x362F99acAB238fCf557a657b5b259396a06761e0?chain=BSC'
                }
            ]
        ]
    }
    let message = "What is ZoroToken?\n";
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
                    text: '✅ProBit',
                    url: 'https://www.probit.com/en-us/ieo/zrt-round2/0'
                },
                {
                    text: '✅Coinsbit',
                    url: 'https://coinsbit.io/vn/ieo-list/ZRT_123'
                },
                {
                    text: '✅Pinksale',
                    url: 'https://www.pinksale.finance/launchpad/0x362F99acAB238fCf557a657b5b259396a06761e0?chain=BSC'
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
    let message = "🎉 Announcement about Zororium - Receive 500ZRT in the Airdrop! 🎉\n" +
        "\n" +
        "Join this exciting Airdrop now and receive fantastic rewards! 🎁\n" +
        "\n" +
        "🔹 Click the link to participate in the Airdrop:\n" +
        "bom.so/QbOXsX\n" +
        "🔹 The event starts on 23/10 and ends on 31/10\n" +
        "🔹 Receive a 40% ZRT reward from Zororium upon completing the minigame and an additional 60% ZRT after 3 months\n" +
        "\n" +
        "Follow X (mandatory): https://twitter.com/zorotokenio\n" +
        "\n" +
        "🎮✨ Remember to carefully read the rules and conditions of each campaign before participating.\n" +
        "#minigame #zrt #Airdrop #Zororium";
    bot.sendMessage(chatId, message);
});
bot.onText(/\/buy/, (msg) => {
    const chatId = msg.chat.id;
    const inlineKeyboard = {
        inline_keyboard: [
            [
                {
                    text: '✅ProBit',
                    url: 'https://www.probit.com/en-us/ieo/zrt-round2/0'
                },
                {
                    text: '✅Coinsbit',
                    url: 'https://coinsbit.io/vn/ieo-list/ZRT_123'
                },
                {
                    text: '✅Pinksale',
                    url: 'https://www.pinksale.finance/launchpad/0x362F99acAB238fCf557a657b5b259396a06761e0?chain=BSC'
                }
            ]
        ]
    };
    let message = "ZRT purchase links:\n" +
        "✅ProBit: https://www.probit.com/en-us/ieo/zrt-round1/0\n\n" +
        "✅Coinsbit: https://coinsbit.io/vn/ieo-list/ZRT_123\n\n" +
        "✅Pinksale: https://www.pinksale.finance/launchpad/0x362F99acAB238fCf557a657b5b259396a06761e0?chain=BSC\n";
    bot.sendMessage(chatId, 'ZRT purchase links:', {
        reply_markup: inlineKeyboard
    });
});
bot.onText(/\/broker_partner/, (msg) => {
    const chatId = msg.chat.id;
    let message = "✅ Zororium would like to announce: In order for the group discussion to revolve around the topic of Zororium's potential and strong development, topics about profit analysis for investors.   \n" +
        "- Zororium officially sets up groups for partners who are marketing companies, KOLs or individual marketers.   \n" +
        "- Therefore, we will delete any posts about marketing and advertising, and permanently ban members who violate repeatedly.   \n" +
        "  \n" +
        "❗️Choose the right place to advertise. We only work with big companies, not unverified individuals. That's how we prevent scammer from affecting Zororium's work.  \n" +
        "  \n" +
        "⭐️ https://t.me/+6Sil0SGOgl9jODU1\n";
    bot.sendMessage(chatId, message);
})
bot.onText(/\/launchpad_ieo/, (msg) => {
    const chatId = msg.chat.id;
    const inlineKeyboard = {
        inline_keyboard: [
            [
                {
                    text: '✅ProBit',
                    url: 'https://www.probit.com/en-us/ieo/zrt-round2/0'
                },
                {
                    text: '✅Coinsbit',
                    url: 'https://coinsbit.io/vn/ieo-list/ZRT_123'
                },
                {
                    text: '✅Pinksale',
                    url: 'https://www.pinksale.finance/launchpad/0x362F99acAB238fCf557a657b5b259396a06761e0?chain=BSC'
                }
            ]
        ]
    };
    let message = "👍IEO & Launchpad campaigns:\n" +
        "- Coinsbit | Pinksale | Probit | Bitforex | Coinstore | Azbit | XT | Toobit | Bitmart.\n" +
        "- Implementation period: Ends October 31th. \n" +
        "- Buy Zororirum $ZRT Tokens on Pinksale and Coinsbit with a minimum of $50, and get a whopping 20% back on your total transaction from Team Zororium! \n" +
        "- Choose your reward: 💰10% in USDT or a generous 20% in ZRT! 🎉  \n";
    bot.sendMessage(chatId, message, {
        reply_markup: inlineKeyboard
    });
});
bot.onText(/\/ecosystem/, (msg) => {
    const chatId = msg.chat.id;
    let message = "💎Upcoming projects in the One Piece Fanclub ecosystem:👈\n" +
        "\n" +
        "✅ Vegapunk (Launching in October 2023)\n" +
        "✅ Smoker (Launching in November 2023)\n" +
        "✅ Sabo (Launching in December 2023)\n";
    bot.sendMessage(chatId, message);
})
bot.onText(/\/warning/, (msg) => {
    const chatId = msg.chat.id;
    let message = "⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️\n\n" + "❌ All SPAM messages will be deleted, and members engaging in frequent SPAM behavior will be blocked from the group.\n"
    bot.sendMessage(chatId, message);
});
bot.onText(/\/support/, (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name;
    const lastName = msg.from.last_name;
    const userName = lastName ? `${firstName} ${lastName}` : firstName;
    let message = `Hi ${userName}! ` + "👉 List of Administrators in the Zororium Global Community:\t\n" +
        "  \n" +
        "@Monkey_Zororium\t\n" +
        "@ace_zororium\t\n" +
        "@nico_zororium\t\n" +
        "@beckman_zororium\t\n" +
        "@bonney_zororium \n" +
        "  \n" +
        "🚨Note:\t\n" +
        "\t\n" +
        "- For any inquiries, please inbox to get them resolved.\t\n" +
        "- Do not spam unrelated information about the Zororium project in the group to avoid affecting other members.\t\n" +
        "- Absolutely do not click on unfamiliar links or scan suspicious QR codes\n";
    bot.sendMessage(chatId, message);
});
bot.onText(/\/social/, (msg) => {
    const chatId = msg.chat.id;
    const inlineKeyboard = {
        inline_keyboard: [
            [
                {
                    text: '✅Website',
                    url: 'https://zorotoken.io/'
                },
                {
                    text: '✅Twitter',
                    url: 'https://twitter.com/zorotokenio'
                },
                {
                    text: '✅Discord',
                    url: 'https://discord.gg/h6RDpFXb'
                },
                {
                    text: '✅Youtube',
                    url: 'https://www.youtube.com/@zororiumcoin'
                },
            ]
        ]
    }
    let message = "Zororium's social channels:\n" +
        "✅Website: https://zorotoken.io/\n" +
        "✅Twitter: https://twitter.com/zorotokenio\n" +
        "✅Discord: https://discord.gg/h6RDpFXb\n" +
        "✅Youtube: https://www.youtube.com/@zororiumcoin\n";
    bot.sendMessage(chatId, message, {
        reply_markup: inlineKeyboard
    });
});
bot.onText(/\/community/, (msg) => {
    const chatId = msg.chat.id;
    const inlineKeyboard = {
        inline_keyboard: [
            [
                {
                    text: '🌐 Global Room',
                    url: 'https://t.me/zororiumen'
                },
                {
                    text: '🇻🇳 Vietnamese Room',
                    url: 'https://t.me/zororiumvietnam'
                }
            ],
            [
                {
                    text: '🇯🇵 Jananese Room',
                    url: 'https://t.me/Zororiumjp'
                },
                {
                    text: '🇨🇳 Chinese Room',
                    url: 'https://t.me/Zororiumcn'
                }
            ],
            [
                {
                    text: '🇰🇷 Korean Room',
                    url: 'https://t.me/Zororiumkr'
                },
                {
                    text: '🇲🇨 Indonesian Room',
                    url: 'https://t.me/Zororiumid'
                }
            ],
            [
                {
                    text: '🇵🇭 Philippines',
                    url: 'https://t.me/zororiumph'
                },
                {
                    text: ' 🇲🇽 Mexico Room',
                    url: 'https://t.me/Zororiummx'
                }
            ],
            [
                {
                    text: '🇬🇧United Kingdom Room',
                    url: 'https://t.me/Zororiumuk'
                },
                {
                    text: '🇺🇲 United State of America Room',
                    url: 'https://t.me/Zororiumus'
                }
            ],
            [
                {
                    text: '🇳🇬 Nigeria Room',
                    url: 'https://t.me/Zororiumng'
                },
                {
                    text: '🇿🇦 South Africa Room',
                    url: 'https://t.me/Zororiumza'
                }
            ],
            [
                {
                    text: '🇹🇷 Turkey Room',
                    url: 'https://t.me/zororiumtr'
                },
                {
                    text: '🇲🇦 Maroc Room',
                    url: 'https://t.me/zororiumma'
                }
            ],
            [
                {
                    text: '🇱🇾 Libya Room',
                    url: 'https://t.me/zororiumly'
                }
            ]
        ]
    }
    let message = "John our <b>Telegram Communities</b> for your preferred language by clicking the links below.\n" ;
    bot.sendMessage(chatId, message, {
        reply_markup: inlineKeyboard,
        parse_mode: 'HTML'
    });
})
bot.onText(/\/promotion/, (msg) => {
    const chatId = msg.chat.id;
    const inlineKeyboard = {
        inline_keyboard: [
            [
                {
                    text: '✅ProBit',
                    url: 'https://www.probit.com/en-us/ieo/zrt-round2/0'
                },
                {
                    text: '✅Coinsbit',
                    url: 'https://coinsbit.io/vn/ieo-list/ZRT_123'
                },
                {
                    text: '✅Pinksale',
                    url: 'https://www.pinksale.finance/launchpad/0x362F99acAB238fCf557a657b5b259396a06761e0?chain=BSC'
                }
            ]
        ]
    };
    let message = "📢📢📢📢📢📢📢📢📢\n\n" +
        "✅ Want Zoro Tokens for Free? 💲\n" +
        "\n" +
        "🛡️ Buy Zororirum $ZRT Tokens on Pinksale, Coinsbit and Probit with a minimum of $50, and get a whopping 20% back on your total transaction from Team Zororium!\n" +
        "\n" +
        "Choose your reward: 💰10% in USDT or a generous 20% in ZRT! 🎉 \n" +
        "\n" +
        "🌟 Why wait? 👉 Hurry, click now to buy Zorium $ZRT Tokens and unlock your bonus! 💎👈\n";
    bot.sendMessage(chatId, message, {
        reply_markup: inlineKeyboard
    });
})
bot.onText(/\/minigame/, (msg) => {
    const chatId = msg.chat.id;
    let message = "🎉🎉🎉🎉🎉🎉🎉🎉🎉\n\n" +
        "💲Don't miss the opportunity with the most potential Zororium super project in 2023 according to my analysis. Quickly find out project information to buy $ZRT at the best price right now. Will list simultaneously on many exchanges, will definitely grow over 1000%.\n" +
        "\n" +
        "🪙Zororium is having a very attractive Airdrop program, everyone quickly hunt for rewards to get rich.\n" +
        "MINI GAME: Airdrop 300M $ZRT (65.000USDT) Token:\n" +
        "\n" +
        "🎁1000$ZRT gift: Share and post about $ZRT's exchange listing roadmap on Twitter(X) platform with hastag #Comic_Coin_Zororium\n" +
        "🎁5000$ZRT gift: Post to 10 groups on Telegram with at least 5000 members\n" +
        "🎁Gift 10000 $ZRT if you add 50 people to <a href='http://t.me/zororiumen'>the group</a>\n" +
        "\n" +
        "🏆The TOP 10 most interested people will immediately receive a gift of 1.000.000 $ZRT directly from the team.\n" +
        "\n" +
        "👑<a href='https://bscscan.com/token/0x40db4356751a9015c60cf8cbb456a581be39d6fc'>Trading Volume</a> | <a href='https://pinksale.notion.site/Zororium-KYC-Verification-61e7b2dfd16d4b47ace89cb203706df4?pvs=4'>KYC</a> | Audit | Safu.\n" +
        "\n" +
        "👍IEO & Launchpad campaigns:\n" +
        "- <a href='https://coinsbit.io/vn/ieo-list/ZRT_123'>Coinsbit</a> | <a href='https://www.pinksale.finance/launchpad/0x362F99acAB238fCf557a657b5b259396a06761e0?chain=BSC'> Pinksale </a>| <a href='https://www.probit.com/en-us/ieo/zrt-round2/0'> Probit </a> | Bitforex | Coinstore | Azbit | XT | Toobit | Bitmart.\n" +
        "- Implementation period: Ends October 31th. \n" +
        "- Buy Zororirum $ZRT Tokens on  <a href='https://www.pinksale.finance/launchpad/0x362F99acAB238fCf557a657b5b259396a06761e0?chain=BSC'>Pinksale </a> and <a href='https://coinsbit.io/vn/ieo-list/ZRT_123' >Coinsbit</a> with a minimum of $50, and get a whopping 20% back on your total transaction from Team Zororium! \n" +
        "- Choose your reward: 💰10% in USDT or a generous 20% in ZRT! 🎉  \n" +
        "\n" +
        "👍Listing campaigns: \n" +
        "- Phase 1: Coinsbit, Probit, Bitmart, Bitforex… (November 1th)\n" +
        "- Phase 2: OKX, Huobi (HTX), Kucoin, Binance. (November 11th)\n" +
        "\n" +
        "👍Official portal: <a href='https://zorotoken.io/'>Website</a> | <a href='https://zorotoken.io/roadmap-2/'>Roadmap</a> | <a href='https://zorotoken.io/wp-content/uploads/2023/07/Zororium-EBOOKwhitepaper.pdf'>Whitepaper</a>  | <a href='https://zorotoken.io/zororium-tokennomics-2/'>Tokenomics</a> \n" +
        "\n" +
        "🗯ZORORIUM'S SOCIAL NETWORK\n" +
        "\n" +
        "✈️Telegram: <a href='https://t.me/zororiumen'>International 🌐</a> | <a href='https://t.me/zororiumvietnam'>Vietnamese 🇻🇳</a> | <a href='https://t.me/Zororiumjp'> Jananese 🇯🇵 </a> | <a href='https://t.me/Zororiumcn'>Chinese 🇨🇳 </a> | <a href='https://t.me/Zororiumkr'>Korean 🇰🇷</a> | <a href='https://t.me/Zororiumid'>Indonesian 🇲🇨</a> | <a href='https://t.me/Zororiumph'>Philippines 🇵🇭</a> | <a href='https://t.me/Zororiumin'>India 🇮🇳</a> | <a href='https://t.me/Zororiummx'>Mexico 🇲🇽</a> | <a href='https://t.me/Zororiumuk'>United Kingdom 🇬🇧</a> | <a href='https://t.me/Zororiumus'>United State of America 🇺🇲</a> | <a href='https://t.me/Zororiumng'>Nigeria 🇳🇬</a> | <a href='https://t.me/Zororiumly'>Libya 🇱🇾</a> | <a href='https://t.me/Zororiumza'>South Africa 🇿🇦</a> | <a href='https://t.me/Zororiuktr'>Turkey 🇹🇷</a> | <a href='https://t.me/Zororiumma'>Morocco 🇲🇦</a> | <a href='https://t.me/Zororiumau'>Australia 🇦🇺</a> \n" +
        "\n" +
        "🐤<a href='https://twitter.com/zorotokenio'>Twitter</a> | <a href='https://discord.gg/h6RDpFXb'>👾Discord</a> | <a href='https://www.reddit.com/user/zororiumcoin'>🐳 Reddit</a> | <a href='https://www.youtube.com/@zororiumcoin'>📹Youtube</a>";
    bot.sendMessage(chatId, message,{
        parse_mode: 'HTML'
    });
})
// Xử lý tin nhắn spam
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    const userId = Number(msg.from.id);
    // bot.sendMessage(chatId, `Your message: ${checkBannedLinkStatus()} , ${checkBannedWordStatus()}`);
    bot.getChatMember(chatId, userId).then((chatMember) => {
        const isAdmin = chatMember.status === 'administrator' || chatMember.status === 'creator';
        if (!isAdmin) {
            if (checkBannedLinkStatus() && containsLink(text)) {
                bot.deleteMessage(chatId, msg.message_id);
            }
            if (checkBannedWordStatus() && containsBannedWord(text)) {
                bot.deleteMessage(chatId, msg.message_id);
            }
        }
    }).catch((error) => {
        console.error(error);
        bot.sendMessage(chatId, 'Đã xảy ra lỗi khi xử lý tin nhắn');
    });
});
// Các lệnh quản trị viên
bot.onText(/\/controller/, (msg, match) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    let message = "Các lệnh quản trị viên:\n" +
        "/set_rule <id> - Thêm quyền quản trị viên cho người dùng có id <id>\n" +
        "/unset_rule <id> - Xóa quyền quản trị viên của người dùng có id <id>\n" +
        "/set_blacklist <word> - Thêm từ khóa <word> vào danh sách cấm\n" +
        "/rm_blacklist <word> - Xóa từ khóa <word> khỏi danh sách cấm\n" +
        "/list_blacklist - Hiển thị danh sách từ khóa bị cấm\n" +
        "/on_banned_link - Bật chế độ cấm liên kết\n" +
        "/off_banned_link - Tắt chế độ cấm liên kết\n" +
        "/on_blacklist - Bật chế độ cấm từ khóa\n" +
        "/off_blacklist - Tắt chế độ cấm từ khóa\n" +
        "/info - Hiển thị thông tin người dùng\n" +
        "/test - Kiểm tra quyền quản trị viên\n";
    if (checkRule(userId)) {
        bot.sendMessage(chatId, message);
    }
});
bot.onText(/\/info/, (msg) => {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const firstName = msg.from.first_name;
    const lastName = msg.from.last_name;
    const userName = lastName ? `${firstName} ${lastName}` : firstName;
    bot.sendMessage(chatId, `Your info:\n` +
        `ID: ${userId}\n` +
        `Name: ${userName}`);
})
bot.onText(/\/test/, (msg) => {
    const chatId = msg.chat.id;
    const userId = Number(msg.from.id);
    if (!checkRule(userId)) {
        bot.deleteMessage(chatId, msg.message_id);
    } else {
        bot.sendMessage(chatId, 'ok');
    }
})
bot.onText(/\/list_blacklist/, (msg) => {
    const chatId = msg.chat.id;
    let message = "Danh sách từ khóa bị cấm:\n";
    for (const word of bannedWords) {
        message += word + ",\n";
    }
    bot.sendMessage(chatId, message);
})
bot.onText(/\/set_blacklist (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const text = match[1];
    setBannedWords(text);
    bot.sendMessage(chatId, `Đã thêm từ khóa ${text} vào danh sách cấm`);
})
bot.onText(/\/rm_blacklist (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const text = match[1];
    let flag;
    bannedWords.includes(text) ? flag = true : flag = false;
    if (flag) {
        removeBannedWord(text);
        bot.sendMessage(chatId, `Đã xóa từ khóa ${text} khỏi danh sách cấm`);
    } else {
        bot.sendMessage(chatId, `Từ khóa ${text} không có trong danh sách cấm`);
    }
});
bot.onText(/\/on_banned_link/, (msg) => {
    const chatId = msg.chat.id;
    config.isBannedLink = true;
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    bot.sendMessage(chatId, 'Đã bật chế độ cấm liên kết');
});
bot.onText(/\/off_banned_/, (msg) => {
    const chatId = msg.chat.id;
    config.isBannedLink = false;
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    bot.sendMessage(chatId, 'Đã tắt chế độ cấm liên kết');
});
bot.onText(/\/on_blacklist/, (msg) => {
    const chatId = msg.chat.id;
    config.isBannedWord = true;
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    bot.sendMessage(chatId, 'Đã bật chế độ cấm từ khóa cấm');
});
bot.onText(/\/off_blacklist/, (msg) => {
    const chatId = msg.chat.id;
    config.isBannedWord = false;
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    bot.sendMessage(chatId, 'Đã tắt chế độ từ khóa cấm');
});
bot.onText(/\/unset_rule (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const text = match[1];
    let flag;
    adminIds.includes(Number(text)) ? flag = true : flag = false;
    if (!flag) {
        bot.sendMessage(chatId, `Người dùng có id ${text} không có trong danh sách admin`);
    } else {
        unsetAdmin(Number(text));
        bot.sendMessage(chatId, `Đã xóa quyền admin của người dùng có id ${text}`);
    }
});
bot.onText(/\/set_rule (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const text = match[1];
    setAdminIds(text * 1);
    bot.sendMessage(chatId, `Đã thêm người dùng có id ${text} vào danh sách admin`);
})

// Hàm kiểm tra nội dung
function containsLink(text) {
    // Sử dụng biểu thức chính quy để kiểm tra liên kết
    const linkRegex = /(https?:\/\/[^\s]+)|([a-zA-Z0-9-]+\.+[a-zA-Z0-9-.]+)/g;
    return linkRegex.test(text);
}

function containsBannedWord(text) {
    for (const word of bannedWords) {
        if (text.toLowerCase().includes(word.toLowerCase())) {
            return true;
        }
    }
    return false;
}

function setBannedWords(words) {
    if (fs.existsSync(configPath)) {
        if (!config.bannedWords.includes(words)) {
            config.bannedWords.push(words);
            fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        }
    } else {
        const config = {
            bannedWords: [words]
        };
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    }
}

function setAdminIds(userId) {
    if (fs.existsSync(configPath)) {
        if (!config.adminIds.includes(userId)) {
            config.adminIds.push(userId);
            fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        }
    } else {
        const config = {
            adminIds: [userId]
        };
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    }
}

function checkRule(userId) {
    return adminIds.includes(Number(userId));
}

function unsetAdmin(userId) {
    const index = config.adminIds.indexOf(userId);
    if (index !== -1) {
        config.adminIds.splice(index, 1);
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        console.log(`User ${userId} is no longer an admin.`);
    } else {
        console.log(`User ${userId} is not an admin.`);
    }
}

function removeBannedWord(word) {
    const index = config.bannedWords.indexOf(word);
    if (index !== -1) {
        config.bannedWords.splice(index, 1);
        fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
        console.log(`Banned word "${word}" has been removed.`);
    } else {
        console.log(`Banned word "${word}" not found.`);
    }
}

function checkBannedLinkStatus() {
    return isBannedLink;
}

function checkBannedWordStatus() {
    return isBannedWord;
}
