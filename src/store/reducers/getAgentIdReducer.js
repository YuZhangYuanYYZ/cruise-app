import { GET_AGENT_ID } from '../actions/getAgentIdAction';

const initialState = {
  agentId: null,
};
export function getAgentIdReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AGENT_ID:
      return {
        ...state,
        agentId: action.payload.agentId,
      };
    default:
      return state;
  }
}
