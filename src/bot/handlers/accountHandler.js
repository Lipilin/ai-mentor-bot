import { Context } from "telegraf"
import { getAccountInfo } from "../services/account/getAccountInfo.js"
import { backInlineKeyboard } from "../keyboards/backInlineKeyboard.js"
import { bot } from "#main"
import { Config } from "../../Config.js"

/**
 * 
 * @param { Context } ctx 
 */
export async function accountHandler(ctx){
    await ctx.answerCbQuery()
    if(!ctx.session.user){
      ctx.session.user = await getAccountInfo(ctx.from.id)
    }
    await ctx.editMessageText(
        Config.ACCOUNT_PAGE(ctx),
        { parse_mode: 'HTML', ...backInlineKeyboard}
    ).catch((err) => console.log(err))
    bot.pushStage(ctx, accountHandler)
}