import { Config } from "../../Config.js"
import { Context } from "telegraf"

export const responseDivider = {
    /**
    * @param { Context } ctx
    * @param { String } reply
    */
    divide: async function(ctx, reply){
        const replyLength = reply.length / Config.TELEGRAM_MESSAGE_LENGTH_LIMIT
        for(let i = 0; i < replyLength; i++){
            let start = i * Config.TELEGRAM_MESSAGE_LENGTH_LIMIT
            let end = Math.min(start + Config.TELEGRAM_MESSAGE_LENGTH_LIMIT, reply.length);
            await ctx.reply(reply.slice(start , end), {parse_mode: Config.ANSWER_FORMAT})
        }
    }
}