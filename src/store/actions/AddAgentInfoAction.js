import { postAgentToAPI } from '../../services/agents/api';
export const CREATE_AGENT_START = 'CREATE_AGENT_START';
export const CREATE_AGENT_SUCCESS = 'CREATE_AGENT_SUCCESS';
export const CREATE_AGENT_FAIL = 'CREATE_AGENT_FAIL';

export function addAgentInfoStart() {
  return {
    type: CREATE_AGENT_START,
  };
}

export function addAgentInfoSuccess(payload) {
  return {
    type: CREATE_AGENT_SUCCESS,
    payload,
  };
}

export function addAgentInfoFail(payload) {
  return {
    type: CREATE_AGENT_FAIL,
    payload,
  };
}

export function addAgentInfo(newAgent) {
  return function (dispatch) {
    dispatch(addAgentInfoStart());
    postAgentToAPI(newAgent).then(
      (response) => {
        dispatch(addAgentInfoSuccess(response));
      },
      (err) => {
        dispatch(addAgentInfoFail(err));
      }
    );
  };
}
