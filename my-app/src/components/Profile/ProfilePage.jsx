import React from 'react';
import { Spinner } from 'react-bootstrap';
import style from '../Profile/Profile.module.css';

const ProfilePage = ({ profile }) => {
  if (!profile) {
    return <Spinner />;
  }
  return (
    <div>
       <img
          style={{ objectFit: 'cover' }}
          width="100%"
          height="150px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVnoaUDZ85SPjucDzYFzlwjqcmbmANXuw76DC7tpmraIPMWOG5R74YQEf0zJHNSlqPyCQ&usqp=CAU"
          alt=""
        />
       <a target="blank" href={profile.photos.large}>
          <img src={profile.photos.small} alt="" />
       </a>
     

      <ul className={style.ProfileList}>
        <h2>{profile.fullName}</h2>
        <p>About Me: {profile.aboutMe}</p>
        {profile.lookingForAJob ? (
          <span>Работа: {profile.lookingForAJobDescription}</span>
        ) : (
          <div>Работа: Не указано</div>
        )}
        <div>
          Contacts:{' '}
          <a target="_blank" href={profile.contacts.twitter} rel="noreferrer">
            {profile.contacts.twitter}
          </a>
        </div>
      </ul>
    </div>
  );
};

export default ProfilePage;
