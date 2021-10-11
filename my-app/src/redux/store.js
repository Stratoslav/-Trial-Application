import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { messageReducer, userReducer, profileReducer, findUsersReducer, authReducer } from './create-reducer';

let reducers = combineReducers({
  newPost: profileReducer,
  profile: profileReducer,
  newMessage: messageReducer,
  users: userReducer,
  findUsers: findUsersReducer,
  currentPage: findUsersReducer,
  totalCount: findUsersReducer,
  isPreloader: findUsersReducer,
  auth: authReducer,
});


const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

window.store = store

export default store;
