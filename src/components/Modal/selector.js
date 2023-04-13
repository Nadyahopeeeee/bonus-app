import { createSelector } from '@reduxjs/toolkit';

import moment from 'moment';

export const selectDateBurning = (state) => state.bonusReducer.bonusData?.data.dateBurning;
const selectCurrentQuantity = (state) => state.bonusReducer.bonusData?.data.currentQuantity;
const selectBurningQuantity = (state) => state.bonusReducer.bonusData?.data.forBurningQuantity;
const selectIsModalVisible = (state) => state.bonusReducer.isModalVisible;

export const selectBonusInfo = createSelector(
  [selectDateBurning, selectCurrentQuantity, selectBurningQuantity, selectIsModalVisible],
  (date, currentQuantity, burningQuantity, isModalVisible) => {
    const formattedDate = date ? moment(date).utc().format('DD.MM') : '';

    return {
      isModalVisible,
      date: formattedDate,
      currentQuantity,
      burningQuantity,
    };
  },
);
