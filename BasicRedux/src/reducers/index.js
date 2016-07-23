import { combineReducers } from 'redux';
import ApiDataReducer from './reducer_api_data';

const rootReducer = combineReducers({
  apiData: ApiDataReducer
})

export default rootReducer;
