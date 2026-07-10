import { Context } from "telegraf"
import { bot } from "#main"
import { Config } from "../../Config.js"
import { backInlineKeyboard } from "../keyboards/backInlineKeyboard.js"
import { checkUserTokens } from "../services/account/index.js"

/**
 * 
 * @param {Context} ctx 
 * @returns 
 */

export async function mentorHandler(ctx){
    if(!checkUserTokens(ctx)){
        await ctx.editMessageText(Config.MENTOR_PAGE_BLOCK_ERROR, backInlineKeyboard)
    }else{
        await ctx.editMessageText(Config.MENTOR_PAGE_TEXT, backInlineKeyboard) 
    }
    ctx.session.state = mentorHandler.name
}