import { Context } from "telegraf"
import { bot } from "#main"

/**
 * 
 * @param {Context} ctx 
 */
export function backCallbackHandler(ctx){
    let backStage = bot.getPrevStage(ctx)
    if(backStage){
        return backStage(ctx)
    }
}