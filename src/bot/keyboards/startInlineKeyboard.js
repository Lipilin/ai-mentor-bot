import { Config } from "../../Config.js"

export const startInlineKeyboard = {
    reply_markup: {
        inline_keyboard: [
            [{text: Config.MAIN_MENU_BUTTOTN, callback_data: Config.MENU_CALLBACK}],
        ]
    } 
}