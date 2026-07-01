import { prisma } from "#main"

/**
 * 
 * @param { BigInt } telegramId 
 * @returns { import("@prisma/client").User | null }
 */
export async function getAccountInfo(telegramId){
    const user = await prisma.user.findFirst( {
        where: {
            telegramId: telegramId
        }
    })
    return user
}