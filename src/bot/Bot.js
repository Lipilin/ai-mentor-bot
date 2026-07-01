import { Telegraf } from 'telegraf'
import { 
    menuHandler, 
    startHandler, 
    paymentHandler, 
    accountHandler,
    mentorHandler
} from '#handlers'
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
        bot.action(Config.ACCOUNT_CALLBACK, (ctx) => accountHandler(ctx))
        bot.launch()   
    }
}

export { Bot }