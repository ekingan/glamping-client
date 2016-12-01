import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth';
import postReducer from './post';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  post: postReducer
});

export default rootReducer;
