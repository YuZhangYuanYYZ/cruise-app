import { updateAgentInAPI } from '../../services/agents/api';

export const UPDATE_AGENT_START = 'UPDATE_AGENT_START';
export const UPDATE_AGENT_SUCCESS = 'UPDATE_AGENT_SUCCESS';
export const UPDATE_AGENT_FAIL = 'UPDATE_AGENT_FAIL';

export const updateAgentStart = () => {
  return {
    type: 'update_AGENT_START',
  };
};

export const updateAgentSuccess = (agent) => {
  return {
    type: 'UPDATE_AGENT_SUCCESS',
    payload: {
      agent,
    },
  };
};
export const updateAgentFail = (error) => {
  return {
    type: 'UPDATE_AGENT_FAIL',
    payload: {
      error,
    },
  };
};

export function updateAgent(newAgent, itemId) {
  return function (dispatch) {
    dispatch(updateAgentStart());
    updateAgentInAPI(newAgent, itemId).then(
      (agentData) => {
        dispatch(updateAgentSuccess(agentData));
        return agentData;
      },
      (err) => {
        dispatch(updateAgentFail(err));
        return err;
      }
    );
  };
}
