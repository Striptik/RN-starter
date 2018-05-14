import React from 'react';
import createStore from './src/redux/store';
const {store, persistor } =  createStore();
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import RootContainer from './src/features';
import { AppWithNavigationState } from './src/navigation';
import { PersistGate } from 'redux-persist/integration/react';

// import { View, Text } from 'react-native';


export default class App extends React.Component {

  render() {
    StatusBar.setHidden(true);

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <AppWithNavigationState /> */}
          <RootContainer />
        </PersistGate>
      </Provider>
    );
  }
};