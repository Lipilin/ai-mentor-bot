import { Context } from "telegraf"

/**
 * 
 * @param {Context} ctx
 */

export async function paymentHandler(ctx){
    await ctx.answerCbQuery()
}