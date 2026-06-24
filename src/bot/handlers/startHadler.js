import { startInlineKeyboard } from '../keyboards/startInlineKeyboard.js'

export function startHandler(ctx) {
    ctx.reply(`Привет, ${ctx.from.first_name} я бот AI-ментор! Задавай любые вопросы по курсам Eglinik Cources!`, startInlineKeyboard)
}