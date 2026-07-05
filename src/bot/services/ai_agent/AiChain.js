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
            meta: {role: Config.USER_ROLE},
            prompt: clientPrompts.DEFINE_COURSE,
            promptFunction: googleAgentPrompt
        })
        this.agents.push({
            agent: googleAgent,
            meta: {role: Config.USER_ROLE},
            prompt: clientPrompts.ANSWER_QUESTION,
            promptFunction: googleAgentPrompt
        })
        this.agents.push({
            agent: googleAgent,
            meta: {role: Config.USER_ROLE},
            prompt: clientPrompts.CLEAR_TEXT_AND_PRESENT,
            promptFunction: googleAgentPrompt
        })
    }

    async peformPipeline(aiContext = [], usersRequest){
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