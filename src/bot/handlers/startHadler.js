import { typeInlineKeyboard } from '../keyboards/getTypeInlineKeboard.js'

function startHandler(ctx) {
    ctx.reply(`Привет, ${ctx.from.first_name} я бот AI-ментор! Задавай любые вопросы по курсам Eglinik Cources!`)
    ctx.reply(`Выбери тип вопроса, который тебя интересует: `, typeInlineKeyboard)
}

export { startHandler }