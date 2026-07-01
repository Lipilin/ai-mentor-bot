import { Context } from "telegraf"
import { menuInlineKeyboard } from "../keyboards/menuInlineKeyboard.js"

/** 
 * @param {Context} ctx
*/

export async function menuHandler(ctx){
    await ctx.editMessageText(`Выберите опицю: `, {reply_markup: menuInlineKeyboard.reply_markup})
}