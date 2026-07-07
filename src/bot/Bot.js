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
import { auth, errorCatcher, aiController } from "#middlewares"

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

    initializeMiddlewares(){
        this.bot.use(session({
            defaultSession: () => ({
                state: null,
                aiContext: [],
                aiFree: true, 
            })
        }))
        this.bot.use(auth)
        this.bot.use(aiController)
        this.bot.catch(errorCatcher)
    }

    initializeActions(){
        this.bot.command('start', (ctx) => startHandler(ctx))
        this.bot.action(Config.MENU_CALLBACK, (ctx) => menuHandler(ctx))
        this.bot.action(Config.PAYMENT_CALLBACK, (ctx) => paymentHandler(ctx))
        this.bot.action(Config.MENTOR_CALLBACK, (ctx) => mentorHandler(ctx))
        this.bot.action(Config.ACCOUNT_CALLBACK, (ctx) => accountHandler(ctx))
        this.bot.action(Config.BACK_CALLBACK, (ctx) => backCallbackHandler(ctx))
        this.bot.on(message('text'), (ctx) => questionHandler(ctx))
    }

    async init(){
        if(!this.token) throw new Error('Token is required')
        this.bot = new Telegraf(this.token)
        this.initializeStates()
        this.initializeMiddlewares()
        this.initializeActions()
        this.bot.launch()   
    }
}

export { Bot }