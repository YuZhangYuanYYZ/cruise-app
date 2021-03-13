import {
  REQUEST_AGENTS_START,
  REQUEST_AGENTS_SUCCESS,
  REQUEST_AGENTS_FAIL,
} from '../actions/agentAction';
import {
  UPDATE_AGENT_START,
  UPDATE_AGENT_SUCCESS,
  UPDATE_AGENT_FAIL,
} from '../actions/updateResourceAction';

import {
  CREATE_AGENT_START,
  CREATE_AGENT_SUCCESS,
  CREATE_AGENT_FAIL,
} from '../actions/AddAgentInfoAction';
import { SELECT_AGENT } from '../actions/selectAgentTypeAction';

import { ADD_AGENT_POPUP } from '../actions/addAgentPopupAction';

const initialState = {
  status: 'idle',
  addAgentPopupVisibility: false,
  items: [],
  renderSelect: 'all',
};

function convertNewAgents(items, newAgent) {
  return items.map((agent) => {
    return agent.id === newAgent.id ? newAgent : agent;
  });
}

export function agentsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_AGENT_POPUP:
      return {
        ...state,
        addAgentPopupVisibility: !state.addAgentPopupVisibility,
      };
    case REQUEST_AGENTS_START:
      return { ...state, status: 'loading' };
    case REQUEST_AGENTS_SUCCESS:
      return { ...state, status: 'success', items: action.payload };
    case REQUEST_AGENTS_FAIL:
      return { ...state, status: 'fail' };
    case UPDATE_AGENT_START:
      return { ...state, status: 'loading' };
    case UPDATE_AGENT_SUCCESS:
      return {
        ...state,
        status: 'success',
        items: convertNewAgents(state.items, action.payload.agent),
      };
    case UPDATE_AGENT_FAIL:
      return { ...state, status: 'fail', error: action.payload.error };

    case CREATE_AGENT_START:
      return { ...state, status: 'loading' };
    case CREATE_AGENT_SUCCESS:
      return { ...state, items: [...state.items, action.payload] };
    case CREATE_AGENT_FAIL:
      return { ...state, status: 'fail', error: action.payload.error };
    case SELECT_AGENT:
      return { ...state, renderSelect: action.payload };
    default:
      return state;
  }
}
