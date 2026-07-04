import { setAccountInfo } from '../services/account/setAccountInfo.js'

export async function auth(ctx, next){
    if(!ctx.session.user){
        ctx.session.user = {
            name: `${ctx.from.first_name}_${ctx.from.id}`,
            telegramId: ctx.from.id,
        }
        await setAccountInfo(ctx.session)
        .catch((err) => console.log(err))
    }
    await next()
}