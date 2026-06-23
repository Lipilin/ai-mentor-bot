import { Bot } from './bot/Bot.js'
import dotenv from 'dotenv'
dotenv.config()
const bot = new Bot(process.env.TOKEN)
bot.init()
.then(() => console.log('Bot started'))
.catch((err) => console.log(err))