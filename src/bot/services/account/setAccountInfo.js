import { prisma } from "#main"

export async function setAccountInfo(userObject){
    userObject.tokens = Number(process.env.DEFAULT_TOKEN_QUANTITY)
    await prisma.user.upsert({
        where: {
            telegramId: userObject.telegramId
        }, 
        update: {
            tokens: userObject.tokens
        }, 
        create: userObject
    }).catch((err) => console.log(err))
}