import { updateResource } from '../../services/resource/api';

export const UPDATE_RESOURCE_START = 'UPDATE_RESOURCE_START';
export const UPDATE_RESOURCE_SUCCESS = 'UPDATE_RESOURCE_SUCCESS';
export const UPDATE_RESOURCE_FAIL = 'UPDATE_RESOURCE_FAIL';

export const updateResourceStart = () => {
  return {
    type: 'update_RESOURCE_START',
  };
};

export const updateResourceSuccess = (agent) => {
  return {
    type: 'UPDATE_RESOURCE_SUCCESS',
    payload: {
      agent,
    },
  };
};
export const updateResourceFail = (error) => {
  return {
    type: 'UPDATE_RESOURCE_FAIL',
    payload: {
      error,
    },
  };
};

export function updateAgent(newAgent, itemId) {
  return function (dispatch) {
    dispatch(updateResourceStart());
    updateResource(newAgent, itemId).then(
      (agentData) => {
        dispatch(updateResourceSuccess(agentData));
        return agentData;
      },
      (err) => {
        dispatch(updateResourceFail(err));
        return err;
      }
    );
  };
}
