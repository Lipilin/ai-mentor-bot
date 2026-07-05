import { Config } from "../../../Config.js"

export async function googleAgentPrompt(agentWrapper, rawContext){
    const context = generateGoogleAgentContext(rawContext)
    const interaction = await agentWrapper.agent.models.generateContent({
        model: process.env.GOOGLE_MODEL,
        contents: context,
    }).catch((err) => { 
        throw err 
    })
    return interaction.text
}

/**
 * 
 * @typedef {Object} googleContent
 * @property {string} role
 * @property {Object} meta 
 */

/**
 * 
 * @param {googleContent[]} context 
 * @returns {Array}
 */

export function generateGoogleAgentContext(context){
    const contents = []
    for(const content of context){
        contents.push({
            role: content.meta.role,
            parts: [{text: content.text}]
        })
    }
    return contents
}