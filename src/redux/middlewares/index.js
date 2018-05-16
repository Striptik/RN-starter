import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { applyMiddleware } from 'redux';
import { navMiddleware } from '../reducers/navigation';
import ScreenTracking from './screenTracking';
import crashReport from './crashReport';


const middlewares = [
  navMiddleware,
  thunk,
  ScreenTracking,
  crashReport,
  reduxLogger,
];

export default applyMiddleware(...middlewares);
