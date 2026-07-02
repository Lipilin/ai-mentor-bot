import { prisma } from "#main"

/**
 * @param {*} userObject 
 * @returns { import("@prisma/client").User | null }
 */
export async function setAccountInfo(userObject){
    userObject.tokens = Number(process.env.DEFAULT_TOKEN_QUANTITY)
    let user = await prisma.user.upsert({
        where: {
            telegramId: userObject.telegramId
        }, 
        update: {
            tokens: userObject.tokens
        }, 
        create: userObject
    }).catch((err) => console.log(err))
    return user
}