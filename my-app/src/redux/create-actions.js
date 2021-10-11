//  import { getUsers } from "../API/API";

export const ADD_POST = text => ({
  type: 'ADD-POST',
  payload: text,
});


export const ADD_NEW_MESSAGE = text => ({
  type: 'ADD-NEW-MESSAGE',
  payload: text,
});

export const FOLLOW_UNFOLLOW = userId => ({
  type: 'FOLLOW-UNFOLLOW',
  payload: userId,
});

export const SET_USERS = users => ({
  type: 'SET-USERS',
  payload: users,
});

export const SET_CURRENT_PAGE = currentPage => ({
  type: 'SET-CURRENT-PAGE',
  payload: currentPage,
});

export const SET_TOTAL_COUNT = totalCount => ({
  type: 'SET-TOTAL-COUNT',
  payload: totalCount,
});

export const SET_PRELOADER = isFetching => ({
  type: 'SET-PRELOADER',
  payload: isFetching,
});

export const SET_USER_PROFILE = userProfile => ({
  type: 'SET-USER-PROFILE',
  payload: userProfile,
});

export const SET_AUTH_USER_DATA = (id, login, email) => ({
  type: 'SET_AUTH_USER_DATA',
  payload: { id, login, email },
});


// export const getUserThunk = (userCount, currentPage) => {
//  return (dispatch) => {
//  dispatch(SET_PRELOADER(true)) ;
//   getUsers(userCount, currentPage).then(data => {
//    dispatch(SET_PRELOADER(false)) ;
//    dispatch(SET_TOTAL_COUNT(data.totalCount)) ;
//    dispatch(SET_USERS(data.items)) ;
// })
// }
// }




