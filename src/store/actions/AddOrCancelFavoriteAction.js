import { addOrCancelFavoriteToAPI } from '../../services/agents/api';
export const ADDORCANCEL_FAVORITE_START = 'ADDORCANCEL_FAVORITE_START';
export const ADDORCANCEL_FAVORITE_SUCCESS = 'ADDORCANCEL_FAVORITE_SUCCESS';
export const ADDORCANCEL_FAVORITE_FAIL = 'ADDORCANCEL_FAVORITE_FAIL';

export function addOrCancelFavoriteStart() {
  return {
    type: ADDORCANCEL_FAVORITE_START,
  };
}

export function addOrCancelFavoriteSuccess(payload) {
  return {
    type: ADDORCANCEL_FAVORITE_SUCCESS,
    payload,
  };
}

export function addOrCancelFavoriteFail(payload) {
  return {
    type: ADDORCANCEL_FAVORITE_FAIL,
    payload,
  };
}

export function addOrCancleFavoriteAgent(newAgent) {
  return function (dispatch) {
    dispatch(addOrCancelFavoriteStart());
    addOrCancelFavoriteToAPI(newAgent).then(
      (response) => {
        dispatch(addOrCancelFavoriteSuccess(response));
      },
      (err) => {
        dispatch(addOrCancelFavoriteFail(err));
      }
    );
  };
}
