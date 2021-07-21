import { combineReducers } from 'redux';

import sessionReducer from './session/reducer';
import uiReducer from './ui/reducer';

export default combineReducers({
  session: sessionReducer,
  ui: uiReducer,
});
