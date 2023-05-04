import {setRepositoryList, setAppLoading} from '../reduser/repositoriesReducer';

const FETCH_REPOSITORIES_URL = 'https://api.github.com/search/repositories'

export const fetchRepositories = (searchValue) => {
  return async function (dispatch) {
    dispatch(setAppLoading(true));

    try {
      let response = await fetch(`${FETCH_REPOSITORIES_URL}?q=${searchValue}`)
      let responseJSON = await response.json()

      dispatch(setRepositoryList(responseJSON));
      dispatch(setAppLoading(false));
    } catch (error) {
      console.error('We have a problem => ',error);
      dispatch(setAppLoading(false));
    }
  };
};
