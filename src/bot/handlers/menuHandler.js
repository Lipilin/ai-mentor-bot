import { Context } from "telegraf"
import { menuInlineKeyboard } from "../keyboards/menuInlineKeyboard.js"
import { bot } from "#main"
import { Config } from "../../Config.js"

/** 
 * @param {Context} ctx
*/

export async function menuHandler(ctx){
    ctx.session.state = menuHandler.name
    await ctx.answerCbQuery()
    await ctx.editMessageText(Config.MAIN_MENU, {parse_mode: "HTML", reply_markup: menuInlineKeyboard.reply_markup})
    .catch((err) => console.log(err))
}