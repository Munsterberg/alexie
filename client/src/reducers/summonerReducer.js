import { FETCH_SUMMONER } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_SUMMONER:
      return action.payload;
    default:
      return state;
  }
}
