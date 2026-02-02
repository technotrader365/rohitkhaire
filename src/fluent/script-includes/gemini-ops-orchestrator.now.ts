import '@servicenow/sdk/global'
import { ScriptInclude } from '@servicenow/sdk/core'

export const GeminiOpsOrchestrator = ScriptInclude({
    $id: Now.ID['GeminiOpsOrchestrator'],
    name: 'GeminiOpsOrchestrator',
    script: Now.include('../../server/script-includes/gemini-ops-orchestrator.js'),
    description: 'Core AI orchestration engine for Gemini-Ops Builder Agent',
    apiName: 'x_1909902_geminiop.GeminiOpsOrchestrator',
    callerAccess: 'tracking',
    clientCallable: true,
    mobileCallable: false,
    sandboxCallable: false,
    accessibleFrom: 'public',
    active: true
})