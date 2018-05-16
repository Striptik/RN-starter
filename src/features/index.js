import React from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import AppWithNavigationState from '../navigation/';


// Styles

const RootContainer = () =>
  <View style={{ flex: 1 }}>
    {/* <StatusBar barStyle='light-content' /> */}
    <AppWithNavigationState />
  </View>;


// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(RootContainer);
