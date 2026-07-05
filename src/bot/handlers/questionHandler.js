import { ai } from '../services/ai_agent/AiChain.js'
import { mentorHandler } from './mentorHandler.js'
import { Context } from "telegraf"
import { checkUserTokens, setAccountInfo} from "../services/account/index.js"
import { Config } from '../../Config.js'
import { backInlineKeyboard } from '../keyboards/backInlineKeyboard.js'
import { bot } from '#main'
/**
 * 
 * @param { Context } ctx 
 */

export async function questionHandler(ctx){
    const isCorrectState = ctx.session?.state == bot.states[mentorHandler.name]
    if(checkUserTokens(ctx) && isCorrectState){
        await ai.peformPipeline(ctx.session.aiContext, ctx.message.text)
            .then(async (response) => {
                ctx.session.user.tokens -= 1
                await setAccountInfo(ctx.session)
                await ctx.reply(response, {parse_mode: 'Markdown'})
                await ctx.reply(Config.CONTINUE_MENTOR, backInlineKeyboard)
            })
            .catch((err) => {
                console.log(err)
                ctx.reply(Config.MENTOR_PAGE_PROCESS_ERROR, backInlineKeyboard)
            })
    }else if(isCorrectState){
        ctx.reply(Config.MENTOR_PAGE_BLOCK_ERROR, backInlineKeyboard)
    }
}
