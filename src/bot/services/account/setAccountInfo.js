import { prisma } from "#main"

const whereClause = (user) => ({
    telegramId: BigInt(user.telegramId)
})

const updatetClause = (user) => {
    if(user.tokens != undefined){
        return {
            tokens: user.tokens
        }
    }
    return {}
}

const createObject = (user) => ({
    ...user,
    tokens: Number(process.env.DEFAULT_TOKEN_QUANTITY)
})

/**
 * @param {*} session
 * @returns { void }
 */
export async function setAccountInfo(session){
    if (!session.user){
        session.user = {}
    }
    const newUserObject = await prisma.user.upsert({
        where: whereClause(session.user), 
        update: updatetClause(session.user),
        create: createObject(session.user)
    }).catch((err) => console.log(err))
    session.user = {
        ...newUserObject, 
        telegramId: newUserObject.telegramId.toString()
    }
}