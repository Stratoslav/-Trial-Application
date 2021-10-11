import axios from 'axios';
import {
  FOLLOW_UNFOLLOW,
  SET_AUTH_USER_DATA,
  SET_CURRENT_PAGE,
  SET_PRELOADER,
  SET_TOTAL_COUNT,
  SET_USERS,
} from '../redux/create-actions';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'a710d4a2-8190-472c-a3a3-5bcc10aff005',
  },
});

export const getUsers =
  (userCount = 10, currentPage = 1) =>
  dispatch => {
    dispatch(SET_PRELOADER(true));
    return instance
      .get(`users?count=${userCount}&page=${currentPage}`)
      .then(response => {
        dispatch(SET_PRELOADER(false));
        dispatch(SET_CURRENT_PAGE(currentPage));
        dispatch(SET_TOTAL_COUNT(response.data.totalCount));
        dispatch(SET_USERS(response.data.items));
      });
  };

export const getFollowUsers = id => dispatch => {
  return instance.post(`follow/${id}`).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(FOLLOW_UNFOLLOW(id));
    }
  });
};

export const getUnfollowUsers = id => dispatch => {
  return instance.delete(`follow/${id}`).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(FOLLOW_UNFOLLOW(id));
    }
  });
};

export const getAuthorizationUser = () => dispatch => {
  return instance.get(`auth/me`).then(response => {
    if (response.data.resultCode === 0) {
      const { id, login, email } = response.data.data;
      dispatch(SET_AUTH_USER_DATA(id, login, email));
    }
  });
};
