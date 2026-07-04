import { GoogleGenAI } from "@google/genai"
import { clientPrompts } from "./prompts/clientPrompts.js"
import { googleAgentPrompt } from "./agentsApi.js"
import { Config } from "../../../Config.js"

class AiChain {

    constructor(){
        this.agents = []
        const googleAgent = new GoogleGenAI({
            apiKey: process.env.GOOGLE_API_KEY
        })
        this.agents.push({
            agent: googleAgent,
            promptFunction: googleAgentPrompt
        })
        this.agents.push({
            agent: googleAgent,
            promptFunction: googleAgentPrompt
        })
    }

    async peformPipeline(usersRequest){
        let response = ``
        let prompt = usersRequest
        for (const agent of this.agents){
            agent.prompt = prompt
            response = await agent.promptFunction(agent)
            prompt = response
        }
        return response
    }
}

export const ai = new AiChain()