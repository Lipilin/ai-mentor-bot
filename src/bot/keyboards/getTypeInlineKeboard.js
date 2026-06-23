import { Config } from '../Config.js'

export const typeInlineKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [{text: 'Вопрос в Целом по Курсу', callback_data: Config.callback_data.cource_question}],
            [{text: 'Вопросы по Уроку', callback_data: Config.callback_data.lesson_questions}],
        ]
    }
}