import AppNavigator from '../../navigation/AppNavigator';
import { NavigationActions } from 'react-navigation';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const initialState = AppNavigator.router.getStateForAction(
  NavigationActions.init()
);

export default function navigation(state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}

export const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

export const addListener = createReduxBoundAddListener('root');