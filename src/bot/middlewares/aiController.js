
import { Context } from "telegraf"
import { mentorHandler } from "#handlers"
import { bot } from "#main"

/**
 * 
 * @param {Context} ctx 
 * @param {Function} next 
 * @returns 
 */
export function aiController(ctx, next){
    if(!ctx?.session?.aiFree){
        if(ctx.callbackQuery){
            ctx.answerCbQuery()
        }
        return
    }
    if(ctx.session.state != bot.states[mentorHandler.name]){
        ctx.session.aiContext = []
    }
    next()
}