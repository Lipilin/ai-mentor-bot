import stages from './aiChainStages.js'
import { Config } from "../../../Config.js"

class AiChain {

    constructor(){
        this.agents = stages
    }

    async performPipeline(aiContext = [], usersRequest){
        let response = ``
        console.log("Your context is %s\n----------\n", aiContext)
        aiContext.push({text: usersRequest, meta: {role: Config.USER_ROLE}})
        for (const agent of this.agents){
            aiContext.push({text: agent.prompt, meta: agent.meta})
            response = await agent.promptFunction(agent, aiContext)
            aiContext.push({text: response, meta: agent.meta})
        }
        return response
    }
}

export const ai = new AiChain()