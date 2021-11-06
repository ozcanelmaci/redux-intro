import * as actionTypes from "../actions/actionTypes";

const counterReducer = (state = 0, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return (newState = state + action.payLoad);
    case actionTypes.DECREASE_COUNTER:
      return (newState = state - action.payLoad);
    case actionTypes.INCREASE_BY_TWO_COUNTER:
      newState = state + action.payLoad;
      return newState;
    default:
      return state;
  }
};

export default counterReducer;
