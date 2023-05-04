import { createSelector } from '@reduxjs/toolkit';

const selectGitHubData = (state) => state.repositories.gitHubData;

const selectRepositoryList = createSelector([selectGitHubData],(data)=> {
        if (Object.keys(data).length === 0) {
            return {
                repositories: []
            }
        }

        return {
            repositories: data.items
        };
    }
);

export default selectRepositoryList;