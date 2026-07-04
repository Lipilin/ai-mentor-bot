import { ai } from '../services/ai_agent/AiChain.js'
import { mentorHandler } from './mentorHandler.js'
import { Context } from "telegraf"
import { bot } from "#main"
import { checkUserTokens, setAccountInfo} from "../services/account/index.js"
import { Config } from '../../Config.js'
import { backInlineKeyboard } from '../keyboards/backInlineKeyboard.js'

/**
 * 
 * @param { Context } ctx 
 */

export async function questionHandler(ctx){
    if(checkUserTokens(ctx) && bot.getCurrentStage(ctx) == mentorHandler){
        await ai.peformPipeline(ctx.message.text)
            .then(async (response) => {
                ctx.session.user.tokens -= 1
                await setAccountInfo(ctx.session)
                ctx.reply(response)
            })
            .catch((err) => {
                console.log(err)
                ctx.reply(Config.MENTOR_PAGE_PROCESS_ERROR)
            })
    }else{
        ctx.reply(Config.MENTOR_PAGE_BLOCK_ERROR, backInlineKeyboard)
    }
}
