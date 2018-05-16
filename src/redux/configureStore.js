import { createStore, compose, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { AsyncStorage } from 'react-native';
// import { composeWithDevTools } from 'remote-redux-devtools';

import reducers from './reducers';
import enhancer from './middlewares';
import config from '../../config';
// import initialStates from './initialStates';

export default () => {
  let rootReducers = reducers;
  let persistor = null;

  if (config.usePersistance) {
    const persistConfig = {
      key: 'root',
      storage: AsyncStorage,
      blacklist: [],
      stateReconcilier: autoMergeLevel2,
    };

    rootReducers = persistReducer(persistConfig, reducers);
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducers,
    // initialStates,
    composeEnhancers(enhancer),
  );

  if (config.usePersistance) persistor = persistStore(store);

  return { store, persistor };
};