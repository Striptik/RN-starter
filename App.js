import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/redux/configureStore';
const { store, persistor } = configureStore();

import RootContainer from './src/features';
import config from './config';


// import { View, Text } from 'react-native';


export default () => {
  StatusBar.setHidden(true);

  if (config.usePersistance) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <AppWithNavigationState /> */}
          <RootContainer />
        </PersistGate>
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      {/* <AppWithNavigationState /> */}
      <RootContainer />
    </Provider>
  );
};
