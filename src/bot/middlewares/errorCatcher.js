import { Config } from "../../Config.js"

export async function errorCatcher(err, ctx){
    console.log(err)
    ctx.reply(Config.GENERAL_ERROR_MESSAGE, {parse_mode: 'HTML'})
}