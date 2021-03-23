import { SET_RESOURCE_POUPUP_PROPS } from '../actions/setResourcePopupPropsAction';

const initialState = {
  agentId: null,
};
export function setResourcePopupPropsReducer(state = initialState, action) {
  if (action.type === SET_RESOURCE_POUPUP_PROPS) {
    return {
      ...state,
      agentId: action.payload.agentId,
      agentIndex: action.payload.agentIndex,
    };
  } else {
    return state;
  }
}
