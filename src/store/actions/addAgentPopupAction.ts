export const ADD_AGENT_POPUP = 'ADD_AGENT_POPUP';
export type AgentAction = {
  type: string;
};
export function addAgentPopup(): AgentAction {
  return {
    type: ADD_AGENT_POPUP,
  };
}
