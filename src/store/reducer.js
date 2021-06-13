import { combineReducers } from 'redux';

const updateList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_HISTORY':
      if( state.find( list => list.hex == action.payload.hex)) {
        return state
      } else {
        return [...state, action.payload];
      }
    default:
      return state
  }
};

export default combineReducers({
  updateList: updateList
});