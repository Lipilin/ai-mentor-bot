import { Config } from "../../../Config.js"

export async function googleAgentPrompt(agentWrapper){
    const interaction = await agentWrapper.agent.models.generateContent({
        model: process.env.GOOGLE_MODEL,
        contents: agentWrapper.prompt,
    }).catch((err) => { 
        throw err 
    })
    return interaction.output_text
}