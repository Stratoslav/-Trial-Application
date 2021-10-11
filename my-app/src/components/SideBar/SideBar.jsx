/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../App.module.css';
import style from '../SideBar/SideBar.module.css';

const SideBar = () => {
  return (
    <nav className={`${styles.Sidebar} ${style.SideBar}`}>
      <ul className={style.SideBarList}>
        <li className={style.SideBarContent}>
          <NavLink
            to="/profile"
            className={style.SideBarLink}
            activeClassName={style.SideBarLink_Active}
          >
            Profile
          </NavLink>
        </li>
        <li className={style.SideBarContent}>
          <NavLink
            className={style.SideBarLink}
            activeClassName={style.SideBarLink_Active}
            to="/messages"
          >
            Messages
          </NavLink>
        </li>
        <li className={style.SideBarContent}>
          <NavLink
            to="/users"
            className={style.SideBarLink}
            activeClassName={style.SideBarLink_Active}
          >
            Users
          </NavLink>
        </li>
        <li className={style.SideBarContent}>
          <NavLink
            className={style.SideBarLink}
            activeClassName={style.SideBarLink_Active}
           to="/friends"
          >
            Friends
          </NavLink>
        </li>
        <li className={style.SideBarContent}>News</li>
        <li className={style.SideBarContent}>Music</li>
        <li className={style.SideBarContent}>Settings</li>
      </ul>
    </nav>
  );
};

export default SideBar;
