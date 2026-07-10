import 'dotenv/config'
import { Bot } from './bot/Bot.js'
import { initializeSessionStorageClient } from './redis.js'
export { prisma } from './prisma.js'
export const redisClient = await initializeSessionStorageClient(process.env.REDIS_PASSWORD, process.env.REDIS_HOST, process.env.REDIS_PORT)
export const bot = new Bot(process.env.TOKEN, redisClient)
bot.init()
.then(() => console.log('Bot started'))
.catch((err) => console.log(err))