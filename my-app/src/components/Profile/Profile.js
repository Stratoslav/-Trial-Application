import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import axios from 'axios';
import styles from '../../App.module.css';
import { SET_USER_PROFILE } from '../../redux/create-actions';
import style from '../Profile/Profile.module.css';
import AllPosts from './Posts/AllPosts';
import MyPosts from './Posts/MyPost';
import ProfilePage from './ProfilePage';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import ProfileInfo from './ProfileInfo';

class Profile extends Component {
  componentDidMount() {
    const { setUserProfile } = this.props;
    const userId = this.props.match.params.userId ?? 2;

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {})
      .then(response => {
        setUserProfile(response.data);
        console.log(response.data);
      });
  }
  render() {
    const { dispatch, profile } = this.props;

    return (
      <div className={`${styles.Content} ${style.Profile}`}>
        <ProfilePage profile={profile}/>
       <ProfileInfo status={"Hello"}/>
        <MyPosts dispatch={dispatch} />
        <AllPosts />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile.profile,
});

const mapDispatchToProps = dispatch => ({
  dispatch: () => {
    dispatch(dispatch());
  },
  setUserProfile: userProfile => {
    dispatch(SET_USER_PROFILE(userProfile));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect,
)(Profile);
