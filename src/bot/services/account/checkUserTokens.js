import { Context } from "telegraf";

/**
 * @param { Context } ctx
 * @returns { boolean }
 */
export function checkUserTokens(ctx){
    return ctx?.session?.user?.tokens > 0
}