import 'dotenv/config'
import { Bot } from './bot/Bot.js'
export { prisma } from './prisma.js'
export const bot = new Bot(process.env.TOKEN)
bot.init()
.then(() => console.log('Bot started'))
.catch((err) => console.log(err))