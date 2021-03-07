import { SENT_POPUP_INFO } from '../actions/sentPopupInfoAction';

const initialState = {
  visibility: false,
  agentId: null,
};
export function popupInfoReducer(state = initialState, action) {
  switch (action.type) {
    case SENT_POPUP_INFO:
      return {
        ...state,
        visibility: !state.visibility,
        agentId: action.payload.agentId,
      };
    default:
      return state;
  }
}
