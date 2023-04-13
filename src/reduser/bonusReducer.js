import { bonusTypes } from '../actions/bonusActions';

const deafaulState = {
  tokenData: {},
  bonusData: {
    data: {
      dateBurning: '',
      forBurningQuantity: 0,
      currentQuantity: 0,
    },
  },
  isLoading: false,
  isModalVisiable: false,
};

export const bonusReducer = (state = deafaulState, action) => {
  switch (action.type) {
    case bonusTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case bonusTypes.SET_TOKEN:
      return {
        ...state,
        tokenData: action.payload,
      };
    case bonusTypes.SET_BONUS_DATA:
      return {
        ...state,
        bonusData: action.payload,
      };
    case bonusTypes.SET_MODAL_STATE:
      return {
        ...state,
        isModalVisible: action.payload,
      };
    default:
      return state;
  }
};
