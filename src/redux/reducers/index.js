import { combineReducers } from 'redux';

import navigation from './navigation';
import errorMessage from './error';

export default combineReducers({
  nav: navigation,
  errorMessage,
});
