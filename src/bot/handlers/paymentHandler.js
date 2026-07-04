import { Context } from "telegraf"

/**
 * 
 * @param {Context} ctx
 */

export async function paymentHandler(ctx){
    await ctx.answerCbQuery()
    ctx.session.state = bot.states[paymentHandler.name]
}