import { Context } from "telegraf"
import { bot } from "#main"

/**
 * 
 * @param {Context} ctx 
 */
export function backCallbackHandler(ctx){
    ctx.answerCbQuery()
    const backStage = bot.states[ctx.session.state]?.previous
    ctx.session.aiContext = []
    if(!backStage) return
    backStage.perform(ctx)
}