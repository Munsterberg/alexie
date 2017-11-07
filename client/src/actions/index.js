import axios from 'axios';

import { FETCH_USER, FETCH_SUMMONER } from './types';

export const fetchUser = () => async(dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSummoner = (summonerName) => async(dispatch) => {
  const res = await axios.get(`/api/summoner-by-name?summonerName=${summonerName}`);
  dispatch({ type: FETCH_SUMMONER, payload: res.data });
};
