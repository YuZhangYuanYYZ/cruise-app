export const SELECT_AGENT = 'SELECT_AGENT';
export type AgentAction = {
  type: string;
  payload: string;
};
export function selectAgentTypeAction(payload: string): AgentAction {
  return {
    type: SELECT_AGENT,
    payload,
  };
}
