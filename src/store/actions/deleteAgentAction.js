import { deleteAgentApi } from '../../services/agents/api';

export const DELETE_AGENT_START = 'DELETE_AGENT_START';
export const DELETE_AGENT_SUCCESS = 'DELETE_AGENT_SUCCESS';
export const DELETE_AGENT_FAIL = 'DELETE_AGENT_FAIL';

function deleteAgentStart() {
  return {
    type: 'DELETE_AGENT_START',
  };
}

function deleteAgentSuccess(payload) {
  return {
    type: 'DELETE_AGENT_SUCCESS',
    payload: payload,
  };
}
function deleteAgentFail(payload) {
  return {
    type: 'DELETE_AGENT_FAIL',
    payload: payload,
  };
}
export function deleteAgent(agentId) {
  return function (dispatch) {
    dispatch(deleteAgentStart);
    deleteAgentApi(agentId).then(
      (response) => {
        dispatch(deleteAgentSuccess(response.id));
      },
      (err) => dispatch(deleteAgentFail(err))
    );
  };
}
