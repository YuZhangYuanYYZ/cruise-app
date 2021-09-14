import { updateAgentInAPI } from '../../services/agents/api';
export const TOGGLE_FAVORITE_START = 'TOGGLE_FAVORITE_START';
export const TOGGLE_FAVORITE_SUCCESS = 'TOGGLE_FAVORITE_SUCCESS';
export const TOGGLE_FAVORITE_FAIL = 'TOGGLE_FAVORITE_FAIL';

export function toggleFavoriteStart() {
  return {
    type: TOGGLE_FAVORITE_START,
  };
}

export function toggleFavoriteSuccess(payload) {
  return {
    type: TOGGLE_FAVORITE_SUCCESS,
    payload,
  };
}

export function toggleFavoriteFail(payload) {
  return {
    type: TOGGLE_FAVORITE_FAIL,
    payload,
  };
}

export function toggleFavoriteAgentStatus(agent) {
  const newAgent = {
    ...agent,
    isFavorite: !agent.isFavorite,
  };
  return function (dispatch) {
    dispatch(toggleFavoriteStart());
    updateAgentInAPI(newAgent).then(
      (response) => {
        dispatch(toggleFavoriteSuccess(response));
      },
      (err) => {
        dispatch(toggleFavoriteFail(err));
      }
    );
  };
}