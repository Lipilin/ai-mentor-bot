import { Config } from "../Config.js"

export const menuInlineKeyboard = {
    reply_markup: {
        inline_markup: [
            [{text: "Купить Дополнитльные Запросы", callback_data: Config.PAYMENT_CALLBACK}],
            [{text: "Задать Вопрос по Курсу", callback_data: Config.MENTOR_CALLBACK}], 
            [{text: "Аккаунт", callback_data: Config.ACCOUNT_CALLBACK}], 
        ]
    }
}