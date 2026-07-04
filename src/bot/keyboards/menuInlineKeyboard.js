import { Config } from "../../Config.js"

export const menuInlineKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [{text: Config.MENTOR_BUTTON, callback_data: Config.MENTOR_CALLBACK}], 
            [{text: Config.ACCOUNT_BUTTON, callback_data: Config.ACCOUNT_CALLBACK}], 
            [{text: Config.PAYMENT_BUTTON, callback_data: Config.PAYMENT_CALLBACK}],
        ]
    }
}