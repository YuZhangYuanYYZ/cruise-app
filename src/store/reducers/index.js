import { combineReducers } from 'redux';
import { agentsReducer } from './agentsReducer';
import { popupInfoReducer } from './popupInfoReducer';

export default combineReducers({
  agents: agentsReducer,
  popupInfo: popupInfoReducer,
});
