export const GET_AGENT_ID = 'GET_AGENT_ID';
export function getAgentId(payload) {
  return {
    type: GET_AGENT_ID,
    payload,
  };
}
