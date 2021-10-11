/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import Friends from './components/Friends/Friends';
import { connect } from 'react-redux';
import Users from './components/Users/Users';
import LoginUI from './components/Login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.Grid}>
        <Header />
        <SideBar />
        <Route path="/profile/:userId?" render={() => <Profile />} />
        <Route path="/friends" component={Friends} />
        <Route exact path="/messages" render={() => <Messages />} />
        <Route exact path="/users" render={() => <Users />} />
        <Route exact path="/login" render={() => <LoginUI />} />
      </div>
    </BrowserRouter>
  );
};

export default connect(null, null)(App);
