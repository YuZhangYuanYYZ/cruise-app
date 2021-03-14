import { combineReducers } from 'redux';
import { agentsReducer } from './agentsReducer';
import { getAgentIdReducer } from './getAgentIdReducer';

export default combineReducers({
  agents: agentsReducer,
  agentId: getAgentIdReducer,
});
