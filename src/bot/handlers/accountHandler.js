import { Context } from "telegraf"
import { getAccountInfo } from "../services/account/getAccountInfo.js"
/**
 * 
 * @param { Context } ctx 
 */
export async function accountHandler(ctx){
    let user = await getAccountInfo(ctx.from.id)
    await ctx.editMessageText(
        `
      <pre>
      👤  ПРОФИЛЬ
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━
      Имя    │ ${user.name}
      Баллы  │ ${user.tokens} ток.
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━
      </pre>
        `,
        { parse_mode: 'HTML' }
    )
}