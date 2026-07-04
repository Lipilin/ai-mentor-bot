import { session, Telegraf } from "telegraf"
import { message } from "telegraf/filters"
import { 
    menuHandler, 
    startHandler, 
    paymentHandler, 
    accountHandler,
    mentorHandler,
    backCallbackHandler,
    questionHandler
} from "#handlers"
import { Config } from "../Config.js"
import { auth } from "./middlewares/auth.js"
import { errorCatcher } from "./middlewares/errorCatcher.js"

class Bot {

    constructor(token){
        this.token = token
    }

    pushStage(ctx, stage){
        if(!ctx.session.stages) ctx.session.stages = []
        ctx.session.stages.push(stage)
    }

    getCurrentStage(ctx){
        return ctx.session.stages.pop()
    }

    getPrevStage(ctx){
        this.getCurrentStage(ctx)
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
        bot.use(auth)
        bot.command('start', (ctx) => startHandler(ctx))
        bot.action(Config.MENU_CALLBACK, (ctx) => menuHandler(ctx))
        bot.action(Config.PAYMENT_CALLBACK, (ctx) => paymentHandler(ctx))
        bot.action(Config.MENTOR_CALLBACK, (ctx) => mentorHandler(ctx))
        bot.action(Config.ACCOUNT_CALLBACK, (ctx) => accountHandler(ctx))
        bot.action(Config.BACK_CALLBACK, (ctx) => backCallbackHandler(ctx))
        bot.on(message('text'), (ctx) => questionHandler(ctx))
        bot.catch(errorCatcher)
        bot.launch()   
    }
}

export { Bot }