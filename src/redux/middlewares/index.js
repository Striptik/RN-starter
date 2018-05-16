import { applyMiddleware } from 'redux';
import { navMiddleware } from '../reducers/navigation';
import thunk from 'redux-thunk';
// import ScreenTracking from './screenTracking';
import crashReport from './crashReport';
import reduxLogger from 'redux-logger';

const middlewares = [
  navMiddleware,
  thunk,
  // ScreenTracking,
  crashReport,
  reduxLogger,
];

export default applyMiddleware(...middlewares);
