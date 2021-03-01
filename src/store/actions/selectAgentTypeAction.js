export const SELECT_AGENT = 'SELECT_AGENT';

export function selectAgentTypeAction(payload) {
  return {
    type: SELECT_AGENT,
    payload,
  };
}
