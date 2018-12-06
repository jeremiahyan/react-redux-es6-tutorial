import {combineReducers} from 'redux';
import courses from './courseReducer';  // `courses` is alias
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';


const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});


export default rootReducer;
