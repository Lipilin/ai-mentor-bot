import { Telegraf } from 'telegraf'
import { startHandler } from './handlers/startHadler.js'
import { menuHandler } from './handlers/menuHandler.js'
import { Config } from './Config.js'

class Bot {

    constructor(token){
        this.token = token
    }

    async init(){
        if(!this.token) throw new Error('Token is required')
        const bot = new Telegraf(this.token)
        bot.command('start', (ctx) => startHandler(ctx))
        bot.action(Config.MENU_CALLBACK, (ctx) => menuHandler(ctx))
        bot.action(Config.PAYMENT_CALLBACK, (ctx) => paymentHadler(ctx))
        bot.action(Config.MENTOR_CALLBACK, (ctx) => mentorHandler(ctx))
        bot.action(Config.ACCOUNT_CALLBACK, (ctx) => accountHadler(ctx))
        bot.launch()   
    }
}

export { Bot }