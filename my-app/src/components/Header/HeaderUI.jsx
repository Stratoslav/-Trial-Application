import React from 'react';
import image from '../../imagenes/logo.png';
import style from '../Header/Header.module.css';
import { NavLink } from 'react-router-dom';

const HeaderUI = ({ login, isAuth }) => {
  return (
<>
      <div>
        {isAuth ?  <p>{login}</p> : <NavLink to="/login">{login}</NavLink>}
      </div>
      <NavLink to="/profile" className={style.headerLink} >
         <img src={image} alt="" />
      </NavLink>
       
</>
  );
};

export default HeaderUI;
