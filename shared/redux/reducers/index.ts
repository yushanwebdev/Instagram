import {combineReducers} from 'redux';
import {appReducer} from './app';

/**
 * This file includes all the reducers under reducers directory,
 * Import all and add to combineReducers to use any among whole app
 */
const reducers = combineReducers({
  app: appReducer,
});

export default reducers;
// This RootState is required to use useSelector later on
export type RootState = ReturnType<typeof reducers>;
