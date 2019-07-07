const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.command('add', (ctx) => {
  ctx.reply('Added ', ctx.message)
})
bot.command('balance', ({ reply }) => reply('Yo'))
bot.command('help', Telegraf.reply('λ'))
bot.launch()