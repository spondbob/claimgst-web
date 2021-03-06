import * as types from '../constants/postsConst';
import * as api from '../apis/postsApi';

export const fetchingPosts = () => {
  return {
    type: types.FETCHING_POSTS
  }
}

export const fetchingPostsSuccess = (posts) => {
  return {
    type: types.FETCHING_POSTS_SUCCESS,
    posts
  }
}

export const loadPosts = (url) => {
  return (dispatch) => {
    dispatch(fetchingPosts())
    return api.fetchPosts(url).then(json =>
      dispatch(fetchingPostsSuccess(json))
    )
  }
}