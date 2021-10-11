import React from 'react';
import styles from '../Users/Users.module.css';
import SpinnerLoader from '../../common/Spinner/Spinner';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const UsersUInterfece = ({
  onCurrentPage,
  currentPage,
  findUsers,
  follow,
  unfollow,
  totalCount,
  userCount,
  isPreloader,
}) => {
  const pageCount = Math.ceil(totalCount / userCount);
  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
    if (pages.length > 30) {
      pages.pop();
    }
  }
  return (
    <>
      <div>
        {isPreloader === true ? <SpinnerLoader /> : null}
        <div>
          {pages.map(page => {
            return (
              <span
                className={
                  currentPage === page ? styles.currentPage : undefined
                }
                onClick={() => onCurrentPage(page)}
              >
                {page}
              </span>
            );
          })}
        </div>
        <ul>
          {findUsers.map(({ id, followed, photos, name }) => {
            return (
              <li key={id}>
                <div>
                  <NavLink to={`/profile/${id}`}>
                    <span>
                      {photos.small === null ? (
                        <img
                          width="30px"
                          height="30px"
                          src="https://media.pn.am/media/issue/197/297/photo/197297.jpg"
                          alt=""
                        />
                      ) : (
                        <img src={photos.small} alt="" />
                      )}
                    </span>
                  </NavLink>
                  {followed === false ? (
                    <Button
                      onClick={() => {
                        follow(id);
                      }}
                      variant="success"
                    >
                      {' '}
                      FOLLOW
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => {
                        unfollow(id);
                      }}
                    >
                      UNFOLLOW
                    </Button>
                  )}
                </div>
                <div>
                  <p>{name}</p>
                  <div>
                    <span>{'location.city'}</span>
                    <span>{'location.country'}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default UsersUInterfece;
