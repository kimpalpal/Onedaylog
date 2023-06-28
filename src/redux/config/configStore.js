import { createStore } from 'redux';
import { combineReducers } from 'redux';
import MainList from '../modules/MainList';

const rootReducer = combineReducers({
  MainList
});
const store = createStore(rootReducer);

export default store;
