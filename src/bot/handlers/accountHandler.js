import { Context } from "telegraf"
import { backInlineKeyboard } from "../keyboards/backInlineKeyboard.js"
import { bot } from "#main"
import { Config } from "../../Config.js"

/**
 * 
 * @param { Context } ctx 
 */

export async function accountHandler(ctx){
    await ctx.answerCbQuery()
    await ctx.editMessageText(
        Config.ACCOUNT_PAGE(ctx),
        { parse_mode: 'HTML', ...backInlineKeyboard}
    ).catch((err) => console.log(err))
    ctx.session.state = accountHandler.name
}