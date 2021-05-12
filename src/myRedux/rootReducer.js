import {combineReducers} from 'redux';

import reducer from './users/reducer';

const rootReducer = combineReducers({
  users : reducer
})

export default rootReducer;