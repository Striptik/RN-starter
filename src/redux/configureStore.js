import { createStore, compose } from 'redux';
import { applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

import config from '../../config';
import persistConfig from '../../config/persistConfig';

import enhancer from './middlewares';
import reducers from './reducers';
import initialStates from './initialStates';

export default () => {

  let rootReducers = reducers;
  let persistor = null;

  console.log(persistConfig, 'persist config');

  if (config.usePersistance) rootReducers = persistReducer(persistConfig, reducers);

  const store = createStore(
    rootReducers, 
    // initialStates,
    compose(...enhancer));

    if (config.usePersistance) persistor = persistStore(store)
  return { store, persistor };
};