import {
  REQUEST_AGENTS_START,
  REQUEST_AGENTS_SUCCESS,
  REQUEST_AGENTS_FAIL,
} from '../actions/agentAction';
import {
  UPDATE_RESOURCE_START,
  UPDATE_RESOURCE_SUCCESS,
  UPDATE_RESOURCE_FAIL,
} from '../actions/updateResourceAction';

const initialState = {
  status: 'idle',
  items: [],
};

function convertNewResource(agentId, resourceIndex, agents) {
  const agent = agents.find((agent) => {
    return agent.id === agentId;
  });
  const newResources = agent.resources.filter(
    (resource, index) => index !== resourceIndex
  );
  const newAgent = { ...agent, resources: newResources };
  return newAgent;
}

function convertNewAgents(itemId, resourceIndex, agents) {
  return agents.map((agent) => {
    if (agent.id === itemId) {
      return convertNewResource(itemId, resourceIndex, agents);
    } else {
      return agent;
    }
  });
}

export function agentsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_AGENTS_START:
      return { ...state, status: 'loading' };
    case REQUEST_AGENTS_SUCCESS:
      return { ...state, status: 'success', items: action.payload };
    case REQUEST_AGENTS_FAIL:
      return { ...state, status: 'fail' };
    case UPDATE_RESOURCE_START:
      return { ...state, status: 'loading' };
    case UPDATE_RESOURCE_SUCCESS:
      return {
        ...state,
        status: 'success',
        items: convertNewAgents(
          action.payload.agentId,
          action.payload.resourceIndex,
          state.items
        ),
      };
    case UPDATE_RESOURCE_FAIL:
      return { ...state, status: 'fail', error: action.payload.error };
    default:
      return state;
  }
}
