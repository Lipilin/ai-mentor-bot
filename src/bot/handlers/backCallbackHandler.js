import { Context } from "telegraf"
import { bot } from "#main"

/**
 * 
 * @param {Context} ctx 
 */
export function backCallbackHandler(ctx){
    ctx.answerCbQuery()
    const backStage = ctx.session.state?.previous
    if(!backStage) return
    backStage.perform(ctx)
}