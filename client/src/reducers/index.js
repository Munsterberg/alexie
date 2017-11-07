import { combineReducers } from 'redux';

import authReducer from './authReducer';
import summonerReducer from './summonerReducer';

export default combineReducers({
  auth: authReducer,
  summoner: summonerReducer
});
