import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import repositoriesReducer from '../reduser/repositoriesReducer';

export const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
  },
  middleware: [thunk],
});
