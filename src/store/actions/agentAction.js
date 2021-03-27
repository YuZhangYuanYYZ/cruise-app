import { getAgentsList } from '../../services/agents/api';

export const REQUEST_AGENTS_START = 'REQUEST_AGENTS_START';
export const REQUEST_AGENTS_SUCCESS = 'REQUEST_AGENTS_SUCCESS';
export const REQUEST_AGENTS_FAIL = 'REQUEST_AGENTS_FAIL';

const requestAgentsStart = () => {
  return {
    type: 'REQUEST_AGENTS_START',
  };
};

const requestAgentsSuccess = (payload) => {
  return {
    type: 'REQUEST_AGENTS_SUCCESS',
    payload,
  };
};
const requestAgentsFail = (payload) => {
  return {
    type: 'REQUEST_AGENTS_FAIL',
    payload,
  };
};

export function requestAgents() {
  return function (dispatch) {
    dispatch(requestAgentsStart());
    getAgentsList().then(
      (response) => {
        dispatch(requestAgentsSuccess(response));
      },
      (err) => {
        dispatch(requestAgentsFail(err));
      }
    );
  };
}
