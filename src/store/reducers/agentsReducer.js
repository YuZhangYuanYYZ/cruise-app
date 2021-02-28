import {
  REQUEST_AGENTS_START,
  REQUEST_AGENTS_SUCCESS,
  REQUEST_AGENTS_FAIL,
} from '../actions';

const initialState = {
  status: 'idle',
  items: [],
};

export function agentsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_AGENTS_START:
      return { ...state, status: 'loading' };
    case REQUEST_AGENTS_SUCCESS:
      return { ...state, status: 'success', items: action.payload };
    case REQUEST_AGENTS_FAIL:
      return { ...state, status: 'fail' };
    default:
      return state;
  }
}
