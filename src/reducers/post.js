import {
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  SAVE_POST
} from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return { ...state, posts: ['hi'] };
    case SAVE_POST:
      return { ...state, post: action.payload}
  }
  return state
}
