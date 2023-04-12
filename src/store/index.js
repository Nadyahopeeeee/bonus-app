import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { bonusReducer } from '../reduser/bonusReducer';

const rootReducer = combineReducers({
  bonusReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
