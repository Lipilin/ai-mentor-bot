import { Config } from "../../Config.js"

export const backInlineKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [{text: Config.BACK_TEXT, callback_data: Config.BACK_CALLBACK}]
        ]
    }
}