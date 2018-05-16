import initialState from '../initialStates';
import actionTypes from '../actionTypes';

export default (state = initialState.errorMessage, action) => {

  const { type, errorMessage } = action;

  if (type === actionTypes.RESET_ERROR_MESSAGE) {
    return null;
  } else if (errorMessage) {
    return errorMessage;
  }
  return state;
};
