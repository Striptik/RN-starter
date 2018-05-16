import React from 'react';
import { BackHandler, Platform } from 'react-native';
import { connect } from 'react-redux';
import { addListener } from '../redux/reducers/navigation';
import AppNavigator from './AppNavigator';


class Navigation extends React.Component {
  // Add to handle navigation Back Press
  componentWillMount() {
    if (Platform.OS === 'ios') return;
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = this.props;
      // change to whatever is your first screen, otherwise unpredictable results may occur
      if (nav.routes.length === 1 && (nav.routes[0].routeName === 'LoginFlow')) {
        return false;
      }
      // if (shouldCloseApp(nav)) return false
      dispatch({ type: 'Navigation/BACK' })
      return true;
    })
  }

  // Add to handle navigation Back Press
  componentWillUnmount() {
    if (Platform.OS === 'ios') return;
    BackHandler.removeEventListener('hardwareBackPress');
  }

  render() {
    return (
      <AppNavigator navigation={{
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      }} />
    );
  }
}

function mapStateToProps(state) {
  return {
    nav: state.nav,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
