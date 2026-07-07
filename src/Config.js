import { textsConfig } from './texts/textsConfig.js'

export const Config = {
    MENU_CALLBACK: 'MENU_CALLBACK', 
    PAYMENT_CALLBACK: 'PAYMENT_CALLBACK',
    MENTOR_CALLBACK: 'MENTOR_CALLBACK',
    ACCOUNT_CALLBACK: 'ACCOUNT_CALLBACK', 
    BACK_CALLBACK: `BACK_CALLBACK`, 
    USER_ROLE: `user`, 
    AGENT_ROLE: `model`,
    WAITING_ACTION: `typing`, 
    ANSWER_FORMAT: `HTML`,
    TELEGRAM_MESSAGE_LENGTH_LIMIT: `4096`,
    ...textsConfig
}