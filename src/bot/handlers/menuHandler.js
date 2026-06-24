import { Context } from "telegraf"
import { menuInlineKeyboard } from "../keyboards/menuInlineKeyboard.js"

/** 
 * @param {Context} ctx
*/

export function menuHandler(ctx){
    ctx.editMessageText(`Выберите опцию`, menuInlineKeyboard)
}