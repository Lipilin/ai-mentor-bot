import { Config } from '../../Config.js'
import { startInlineKeyboard } from '../keyboards/startInlineKeyboard.js'
import { Context } from 'telegraf'

/**
 * 
 * @param {Context} ctx 
 */

export async function startHandler(ctx) {
    await ctx.reply(Config.START_PAGE_TEXT(ctx), startInlineKeyboard)
}