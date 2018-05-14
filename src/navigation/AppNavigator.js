import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  createStackNavigator,
  StackNavigator,
  DrawerNavigator,
  TabNavigator
} from "react-navigation";

import Login from '../features/login';

const RootNavigator = createStackNavigator({
  LoginFlow: {
    screen: Login,
    navigationOptions: { header: null }
  }
});

export default RootNavigator;