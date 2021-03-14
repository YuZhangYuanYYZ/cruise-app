import { combineReducers } from 'redux';
import { agentsReducer } from './agentsReducer';
import { setResourcePopupPropsReducer } from './setResourcePopupPropsReducer';

export default combineReducers({
  agents: agentsReducer,
  resourceProps: setResourcePopupPropsReducer,
});
