const { randomInt, randomFill } = require('crypto')
const { Telegraf } = require('telegraf')
const bot = new Telegraf('5024386870:AAG4NE8k5rbQirXJazYXBdIgfXcT2nI0nwI') //сюда помещается токен, который дал botFather
bot.start((ctx) => ctx.reply('Welcome')) //ответ бота на команду /start
bot.help((ctx) => ctx.reply('Send me a sticker')) //ответ бота на команду /help
bot.on('sticker', (ctx) => ctx.reply('')) //bot.on это обработчик введенного юзером сообщения, в данном случае он отслеживает стикер, можно использовать обработчик текста или голосового сообщения
bot.hears('hi', (ctx) => ctx.reply('Hey there'))  // bot.hears это обработчик конкретного текста, данном случае это - "hi"
bot.hears('как дела?', (ctx) => ctx.reply('Отлично!'))
bot.on('text', (ctx) => {
    let msg = ctx.message.text;
    if (msg.toLowerCase() == 'кто я?') {
        ctx.reply(`Tы - ${ctx.message.from.first_name}`)
    }
    else if (msg.toLowerCase() == 'в рот его компот') {
        let r = Math.random() < 0.5
        r == true ? ctx.reply('да и врот его компот') : ctx.reply('хуй знает блять')

    }
})
console.log('SErcer started');
bot.launch() // запуск бота

