import { GoogleGenAI } from "@google/genai"
import { clientPrompts } from "./prompts/clientPrompts.js"
import { googleAgentPrompt } from "./agentsApi.js"
import { Config } from "../../../Config.js"

const googleAgent = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY
})

const aiChainStages = [
    {
        agent: googleAgent,
        meta: {role: Config.USER_ROLE},
        prompt: clientPrompts.ANSWER_QUESTION,
        promptFunction: googleAgentPrompt
    },
    {
        agent: googleAgent,
        meta: {role: Config.USER_ROLE},
        prompt: clientPrompts.CLEAR_TEXT_AND_PRESENT,
        promptFunction: googleAgentPrompt
    }
]

export default aiChainStages