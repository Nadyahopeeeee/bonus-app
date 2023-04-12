import { bonusReducer } from '../reduser/bonusReducer';
import { post, get } from '../helpers';

export const bonusTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_TOKEN: 'SET_TOKEN',
  SET_BONUS_DATA: 'SET_BONUS_DATA',
};

const bonusActions = {
  setLoading: (payload) => ({ type: bonusTypes.SET_LOADING, payload }),
  setToken: (payload) => ({ type: bonusTypes.SET_TOKEN, payload }),
  setBonus: (payload) => ({ type: bonusTypes.SET_BONUS_DATA, payload }),
};

export const fetchToken = (url, payload) => {
  return function (dispatch) {
    dispatch(bonusActions.setLoading(true));

    post(url, payload)
      .then((response) => response.json())
      .then((data) => {
        dispatch(bonusActions.setToken(data));
        dispatch(bonusActions.setLoading(false));
      })
      .catch(dispatch(bonusActions.setLoading(false)));
  };
};

export const fetchBonusData = (url) => {
  return function (dispatch) {
    dispatch(bonusActions.setLoading(true));

    get(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(bonusActions.setBonus(data));
      })
      .catch(dispatch(bonusActions.setLoading(false)));
  };
};
