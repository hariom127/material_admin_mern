import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { userReducer } from './userReducer';

const reducers = combineReducers({
  authState: authReducer,
  userReducer
});
export default reducers;
