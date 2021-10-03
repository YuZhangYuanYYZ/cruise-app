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
  TOGGLE_FAVORITE_START,
  TOGGLE_FAVORITE_SUCCESS,
  TOGGLE_FAVORITE_FAIL,
} from '../actions/toggleFavoriteAction';
import {
  CREATE_AGENT_START,
  CREATE_AGENT_SUCCESS,
  CREATE_AGENT_FAIL,
} from '../actions/AddAgentInfoAction';
import { SELECT_AGENT } from '../actions/selectAgentTypeAction';

import {
  DELETE_AGENT_START,
  DELETE_AGENT_SUCCESS,
  DELETE_AGENT_FAIL,
} from '../actions/deleteAgentAction';
import { ADD_AGENT_POPUP } from '../actions/addAgentPopupAction';

// prop StateType
const initialState = {
  status: 'idle',
  addAgentPopupVisibility: false,
  favoriteState: [],
  items: [],
  renderSelect: 'all',
};

function convertNewAgents(items, newAgent) {
  return items.map((agent) => {
    return agent.id === newAgent.id ? newAgent : agent;
  });
}

function convertAgentFavoriteState(state, agentId, favoriteAgentInprogress) {
  const agentInState = state.favoriteState.find(
    (item) => item.agentId === agentId
  );
  if (agentInState) {
    return state.favoriteState.map((item) => {
      if (item.agentId === agentId) {
        return {
          agentId,
          toggleFavoriteAgentInprogress: favoriteAgentInprogress,
        };
      } else {
        return item;
      }
    });
  } else {
    return [
      ...state.favoriteState,
      { agentId, toggleFavoriteAgentInprogress: favoriteAgentInprogress },
    ];
  }
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
    case DELETE_AGENT_START:
      return { ...state, status: 'loading' };
    case DELETE_AGENT_SUCCESS:
      return {
        ...state,
        items: state.items.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    case DELETE_AGENT_FAIL:
      return { ...state, status: 'fail', error: action.payload.error };
    case TOGGLE_FAVORITE_START:
      return {
        ...state,
        favoriteState: convertAgentFavoriteState(state, action.payload, true),
      };
    case TOGGLE_FAVORITE_SUCCESS:
      return {
        ...state,
        favoriteState: convertAgentFavoriteState(
          state,
          action.payload.id,
          false
        ),
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...action.payload,
            };
          }
          return item;
        }),
      };
    case TOGGLE_FAVORITE_FAIL:
      return {
        ...state,
        favoriteState: convertAgentFavoriteState(
          state,
          action.payload.id,
          false
        ),
      };
    default:
      return state;
  }
}
