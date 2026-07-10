
import { Context } from "telegraf"
import { mentorHandler } from "#handlers"
import { bot } from "#main"

/**
 * 
 * @param {Context} ctx 
 * @param {Function} next 
 * @returns 
 */
export async function aiController(ctx, next){
    if(!ctx.session.aiFree){
        if(ctx.callbackQuery){
            await ctx.answerCbQuery()
        }
        return
    }
    await next()
}