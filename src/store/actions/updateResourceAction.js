import { updateResource } from '../../services/resource/api';

export const UPDATE_RESOURCE_START = 'UPDATE_RESOURCE_START';
export const UPDATE_RESOURCE_SUCCESS = 'UPDATE_RESOURCE_SUCCESS';
export const UPDATE_RESOURCE_FAIL = 'UPDATE_RESOURCE_FAIL';

export const updateResourceStart = () => {
  return {
    type: 'update_RESOURCE_START',
  };
};

export const updateResourceSuccess = (agentId, resourceIndex) => {
  return {
    type: 'UPDATE_RESOURCE_SUCCESS',
    payload: {
      agentId,
      resourceIndex,
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

export function deletResource(agentId, resourceIndex) {
  return function (dispatch) {
    dispatch(updateResourceStart());
    updateResource(agentId, resourceIndex).then(
      (responseData) => {
        dispatch(updateResourceSuccess(agentId, resourceIndex));
        return responseData;
      },
      (err) => {
        dispatch(updateResourceFail(err));
        return err;
      }
    );
  };
}
