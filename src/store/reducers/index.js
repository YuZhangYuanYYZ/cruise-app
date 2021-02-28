import { combineReducers } from 'redux';
import { agentsReducer } from './agentsReducer';

export default combineReducers({ agents: agentsReducer });
