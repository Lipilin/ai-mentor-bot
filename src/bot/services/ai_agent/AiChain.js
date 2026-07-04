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
            promptGenerate: function(){
                return  clientPrompts.DEFINE_COURSE(this.text)
            },
            promptFunction: googleAgentPrompt
        })
        this.agents.push({
            agent: googleAgent,
            promptGenerate: function(){
                return  clientPrompts.ANSWER_QUESTION(this.text)
            },
            promptFunction: googleAgentPrompt
        })
        this.agents.push({
            agent: googleAgent,
            promptGenerate: function(){
                return  clientPrompts.CLEAR_TEXT_AND_PRESENT(this.text)
            },
            promptFunction: googleAgentPrompt
        })
    }

    async peformPipeline(usersRequest){
        let response = ``
        let promptPart = usersRequest
        for (const agent of this.agents){
            agent.text = promptPart
            response = await agent.promptFunction(agent)
            promptPart = response
        }
        return response
    }
}

export const ai = new AiChain()