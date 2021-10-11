import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../../Messages/Messages.module.css';

const MessagesUserUI = ({users}) => {
    return(
        <div>
        {users.map(({ id, names }) => {
          return (
            <li key={id} className={style.Messages_Content}>
              <NavLink
                className={style.Messages_Link}
                activeClassName={style.Messages_Active}
                to={`/messages/${id}`}
              >
                {names}
              </NavLink>
            </li>
          );
        })}
      </div>
    )
}

export default MessagesUserUI;