import { createSlice } from '@reduxjs/toolkit';

export const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState: {
    appLoading: false,
    gitHubData: {},
    status: 'idle',
    error: null,
  },
  reducers: {
    setAppLoading: (state, action) => {
      state.appLoading = action.payload;
    },
    setRepositoryList: (state, action) => {
      state.gitHubData = action.payload;
    }
  }
});

export const { setRepositoryList, setAppLoading } = repositoriesSlice.actions;
export default repositoriesSlice.reducer;
