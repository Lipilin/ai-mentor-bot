import { mentorHandler } from "#handlers"
import { bot } from "#main"

export function aiController(ctx, next){
    if(ctx.session.state != bot.states[mentorHandler.name]){
        ctx.session.aiContext = []
    }
    next()
}