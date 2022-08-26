import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import messageReducer from './messageWorld/message';

export const reducer = combineReducers({
  message: messageReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
