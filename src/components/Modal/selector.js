import { createSelector } from '@reduxjs/toolkit';

export const selectBonusInfo = (state) => state.bonusReducer.bonusData;

//data.dateBurning ?? '';
// const selectCurrentQuantity = (state) => state.bonusReducer.bonusData; //data.currentQuantity ?? '';
// const selectBurningQuantity = (state) => state.bonusReducer.bonusData; //data.forBurningQuantity ?? '';

// export const selectBonusInfo = createSelector([selectInfo], (bonusData) => {
//   return {
//     date: bonusData ? bonusData.data.dateBurning.moment().utc().format('DD.MM') : '',
//     currentQuantity: bonusData.data.currentQuantity ?? '',
//     burningQuantity: bonusData.data.forBurningQuantity ?? '',
//   };
// });
