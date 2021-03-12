import { postAgentToAPI } from '../../services/agents/api';
export const ADD_AGENT_INFO_START = 'ADD_AGENT_INFO_START';
export const ADD_AGENT_INFO_SUCCESS = 'ADD_AGENT_INFO_SUCCESS';
export const ADD_AGENT_INFO_FAIL = 'ADD_AGENT_INFO_FAIL';

export function addAgentInfoStart() {
  return {
    type: ADD_AGENT_INFO_START,
  };
}

export function addAgentInfoSuccess(payload) {
  return {
    type: ADD_AGENT_INFO_SUCCESS,
    payload,
  };
}

export function addAgentInfoFail(payload) {
  return {
    type: ADD_AGENT_INFO_FAIL,
    payload,
  };
}

export function addAgentInfo(newAgent) {
  return function (dispatch) {
    dispatch(addAgentInfoStart());
    postAgentToAPI(newAgent).then(
      (response) => {
        console.log('response', response);
        dispatch(addAgentInfoSuccess(response));
      },
      (err) => {
        dispatch(addAgentInfoFail(err));
      }
    );
  };
}
