import { Context } from "telegraf"
import { Config } from "../../Config.js"
import { backInlineKeyboard } from "../keyboards/backInlineKeyboard.js"
import { setAccountInfo } from "../services/account/setAccountInfo.js"
import { bot } from "#main"

/**
 * 
 * @param {Context} ctx
 */

export async function paymentHandler(ctx){
    await ctx.answerCbQuery()
    ctx.session.state = bot.states[paymentHandler.name]
    ctx.session.user.tokens = Number(process.env.DEFAULT_TOKEN_QUANTITY)
    await setAccountInfo(ctx.session)
    await ctx.reply(Config.PAYMENT_SUCCESS, backInlineKeyboard)
}