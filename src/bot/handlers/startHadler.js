import { startInlineKeyboard } from '../keyboards/startInlineKeyboard.js'
import { setAccountInfo } from '../services/account/setAccountInfo.js'
import { Context } from 'telegraf'

/**
 * 
 * @param {Context} ctx 
 */

export async function startHandler(ctx) {
    if(!ctx.session.user){
        ctx.session.user = await setAccountInfo({
            name: `${ctx.from.first_name}_${ctx.from.id}`,
            telegramId: ctx.from.id,
        })
        .catch((err) => console.log(err))
    }
    ctx.reply(`Привет, ${ctx.from.first_name} я бот AI-ментор! Задавай любые вопросы по курсам Eglinik Cources!`, startInlineKeyboard)
}