import { applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const store = combineReducers(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
