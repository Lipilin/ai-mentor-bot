import { Telegraf } from 'telegraf'
import { startHandler } from './handlers/startHadler.js'

class Bot {

    constructor(token){
        this.token = token
    }

    async init(){
        if(!this.token) throw new Error('Token is required')
        const bot = new Telegraf(this.token)
        bot.command('start', (ctx) => startHandler(ctx))
        bot.launch()    
    }
}

export { Bot }