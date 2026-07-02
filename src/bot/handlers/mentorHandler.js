import { Context } from "telegraf"
import { bot } from "#main"
/**
 * 
 * @param {Context} ctx 
 * @returns 
 */

export async function mentorHandler(ctx){
    await ctx.answerCbQuery()
    bot.pushStage(ctx, mentorHandler)
}