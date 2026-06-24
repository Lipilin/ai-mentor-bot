import { Config } from "../Config.js"

export const startInlineKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [{text: "Основное Меню", callback_data: Config.MENU_CALLBACK}],
        ]
    } 
}