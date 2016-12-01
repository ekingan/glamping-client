import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  SAVE_POST
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function fetchPosts() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}`)
      .then(reponse => {
        dispatch({ type: FETCH_POSTS });
        console.log(response)
      })
      .catch(() => {
        dispatch(postError('Unable to get posts'));
      });
  }
}

export function savePost(newPost) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/posts`, { newPost })
    .then(reponse => {
      dispatch({ type: SAVE_POST });
      console.log(response)
    })
    .catch(() => {
      dispatch(postError('Unable to save post'));
    });
  }
}

export function postError(error) {
  return {
    type: FETCH_POSTS_ERROR,
    payload: error
  };
}
