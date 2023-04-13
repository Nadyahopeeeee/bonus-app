import { post, get } from '../helpers';

export const bonusTypes = {
  SET_LOADING: 'BONUS/SET_LOADING',
  SET_TOKEN: 'BONUS/SET_TOKEN',
  SET_BONUS_DATA: 'BONUS/SET_BONUS_DATA',
  SET_MODAL_STATE: 'BONUS/SET_MODAL_STATE',
};

export const bonusActions = {
  setLoading: (payload) => ({ type: bonusTypes.SET_LOADING, payload }),
  setToken: (payload) => ({ type: bonusTypes.SET_TOKEN, payload }),
  setBonus: (payload) => ({ type: bonusTypes.SET_BONUS_DATA, payload }),
  setModalState: (payload) => ({ type: bonusTypes.SET_MODAL_STATE, payload }),
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
        dispatch(bonusActions.setModalState(true));
      })
      .catch(() => {
        dispatch(bonusActions.setLoading(false));
        dispatch(bonusActions.setModalState(false));
      });
  };
};
