import React from "react";
import {
  // StackNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createTabNavigator,
} from 'react-navigation';

import Login from '../features/login';

const RootNavigator = createStackNavigator({
  LoginFlow: {
    screen: Login,
    navigationOptions: { header: null },
  },
});

export default RootNavigator;
