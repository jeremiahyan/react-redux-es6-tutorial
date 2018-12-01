import {combineReducers} from 'redux';
import courses from './courseReducer';  // `courses` is alias


const rootReducer = combineReducers({
  courses
});


export default rootReducer;
