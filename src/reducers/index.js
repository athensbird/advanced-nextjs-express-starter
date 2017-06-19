import {combineReducers} from 'redux';
import {
  PEOPLE_LOADED
} from '../actions';

function people(state = [], action) {
  switch (action.type) {
    case PEOPLE_LOADED:
      return action.value;
  }
  return state;
}


const rootReducer = combineReducers({
  people
});
export default rootReducer;
