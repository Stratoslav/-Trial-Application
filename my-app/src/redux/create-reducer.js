/* eslint-disable no-fallthrough */
import shortid from 'shortid';

const initialState = {
  posts: [
    { name: 'Alla', message: 'Its my first posts', id: 1 },
    { name: 'Salo', message: 'Its my second posts', id: 2 },
    { name: 'Dalo', message: 'Its my firsth posts', id: 3 },
  ],

  userNewPost: '',
  messagers: [
    { message: 'Hello', id: 1 },
    { message: 'How are you?', id: 2 },
  ],
  messageNewBody: '',
  users: [
    { names: 'Dima', id: 1 },
    { names: 'Vika', id: 2 },
    { names: 'Slava', id: 3 },
    { names: 'Gosha', id: 4 },
    { names: 'Antoni', id: 5 },
  ],
  findUsers: [],
  currentPage: 1,
  totalCount: 0,
  userCount: 10,
  isPreloader: false,
  profile: null,
  email: null,
  login: null,
  userId: null,
  isAuth: false,
};

export const messageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD-NEW-MESSAGE':
      let copyState = { ...state };
      copyState.messagers = [...state.messagers];
      copyState.messageNewBody = payload;
      const newMessage = {
        id: shortid.generate(),
        message: payload,
      };
      copyState.messagers.push(newMessage);
      return copyState;

    default:
      return state;
  }
};

export const findUsersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET-USERS':
      return { ...state, findUsers: [...payload] };

    case 'SET-CURRENT-PAGE':
      return { ...state, currentPage: payload };

    case 'SET-TOTAL-COUNT':
      return { ...state, totalCount: payload };

    case 'SET-PRELOADER':
      return { ...state, isPreloader: payload };

    case 'FOLLOW-UNFOLLOW':
      let copyState = {
        ...state,
        findUsers: state.findUsers.map(user => {
          if (user.id === payload) {
            return { ...user, followed: !user.followed };
          }
          return user;
        }),
      };
      return copyState;

    default:
      return state;
  }
};

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ADD-POST':
      const copyState = { ...state };
      copyState.posts = [...state.posts];
      copyState.userNewPost = payload;
      const newPost = {
        name: state.posts.name,
        id: shortid.generate(),
        message: payload,
      };
      copyState.posts.push(newPost);
      return copyState;

    case 'SET-USER-PROFILE':
      return { ...state, profile: payload };
    default:
      return state;
  }
};

export const userReducer = (state = initialState, { type, payload }) => {
  return state;
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_AUTH_USER_DATA':
      return { ...state, ...payload, isAuth: true };

    default:
      return state;
  }
};


