import { session, Telegraf } from 'telegraf'
import { 
    menuHandler, 
    startHandler, 
    paymentHandler, 
    accountHandler,
    mentorHandler,
    backCallbackHandler
} from '#handlers'
import { Config } from "../Config.js"

class Bot {

    constructor(token){
        this.token = token
    }

    pushStage(ctx, stage){
        if(!ctx.session.stages) ctx.session.stages = []
        ctx.session.stages.push(stage)
    }

    getPrevStage(ctx){
        ctx.session.stages.pop()
        if (ctx.session.stages.length == 0) return menuHandler
        return ctx.session.stages.pop()
    }

    async init(){
        if(!this.token) throw new Error('Token is required')
        const bot = new Telegraf(this.token)
        bot.use(session({
            defaultSession: () => ({
                stages: []
            })
        }))
        bot.command('start', (ctx) => startHandler(ctx))
        bot.action(Config.MENU_CALLBACK, (ctx) => menuHandler(ctx))
        bot.action(Config.PAYMENT_CALLBACK, (ctx) => paymentHadler(ctx))
        bot.action(Config.MENTOR_CALLBACK, (ctx) => mentorHandler(ctx))
        bot.action(Config.ACCOUNT_CALLBACK, (ctx) => accountHandler(ctx))
        bot.action(Config.BACK_CALLBACK, (ctx) => backCallbackHandler(ctx))
        bot.launch()   
    }
}

export { Bot }