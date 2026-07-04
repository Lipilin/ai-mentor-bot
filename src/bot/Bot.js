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
        this.states = {}
    }

    initializeStates(){
        function State(perform, previous = null){
            this.perform = perform
            this.previous = previous
        }
        this.states[startHandler.name] = new State()
        this.states[menuHandler.name] = new State(menuHandler)
        const menuHadlerWrapper = this.states[menuHandler.name] 
        this.states[paymentHandler.name] = new State(paymentHandler, menuHadlerWrapper)
        this.states[mentorHandler.name] = new State(mentorHandler, menuHadlerWrapper)
        this.states[accountHandler.name] = new State(accountHandler, menuHadlerWrapper)
    }

    async init(){
        if(!this.token) throw new Error('Token is required')
        const bot = new Telegraf(this.token)
        this.initializeStates()
        bot.use(session({
            defaultSession: () => ({
                state: null
            })
        }))
        bot.use(auth)
        bot.catch(errorCatcher)
        bot.command('start', (ctx) => startHandler(ctx))
        bot.action(Config.MENU_CALLBACK, (ctx) => menuHandler(ctx))
        bot.action(Config.PAYMENT_CALLBACK, (ctx) => paymentHandler(ctx))
        bot.action(Config.MENTOR_CALLBACK, (ctx) => mentorHandler(ctx))
        bot.action(Config.ACCOUNT_CALLBACK, (ctx) => accountHandler(ctx))
        bot.action(Config.BACK_CALLBACK, (ctx) => backCallbackHandler(ctx))
        bot.on(message('text'), (ctx) => questionHandler(ctx))
        bot.launch()   
    }
}

export { Bot }