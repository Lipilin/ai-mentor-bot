import { Redis } from '@telegraf/session/redis'
import { createClient } from 'redis'

export async function initializeSessionStorageClient(password, host, port){
    const client = await createClient({
        url: `redis://default:${password}@${host}:${port}`
    })
    client.on("connect", () => console.log("Redis started"))
    client.on("error", (err) => console.log(err))
    return Redis({client: client});
}