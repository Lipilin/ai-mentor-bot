import { Config } from "../../Config.js"

export const menuInlineKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [{text: "Обратиться к Ментору", callback_data: Config.MENTOR_CALLBACK}], 
            [{text: "Аккаунт", callback_data: Config.ACCOUNT_CALLBACK}], 
            [{text: "Купить Дополнитльные Запросы", callback_data: Config.PAYMENT_CALLBACK}],
        ]
    }
}