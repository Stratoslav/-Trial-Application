import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersUInterfece from './UsersUI';
import { getFollowUsers, getUnfollowUsers, getUsers } from '../../API/API';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    const { getUsers, userCount, currentPage } = this.props;

    getUsers(userCount, currentPage);
  }

  onCurrentPage = pageNumber => {
    const { userCount, getUsers } = this.props;
    getUsers(userCount, pageNumber);
  };

  render() {
    const {
      findUsers,
      follow,
      unfollow,
      currentPage,
      totalCount,
      userCount,
      isPreloader,
    } = this.props;
    return (
      <UsersUInterfece
        isPreloader={isPreloader}
        onCurrentPage={this.onCurrentPage}
        totalCount={totalCount}
        userCount={userCount}
        currentPage={currentPage}
        findUsers={findUsers}
        follow={follow}
        unfollow={unfollow}
      />
    );
  }
}

let mapStateToProps = state => ({
  findUsers: state.findUsers.findUsers,
  currentPage: state.currentPage.currentPage,
  totalCount: state.totalCount.totalCount,
  userCount: state.findUsers.userCount,
  isPreloader: state.isPreloader.isPreloader,
});

export default connect(mapStateToProps, {
  follow: getFollowUsers,
  unfollow: getUnfollowUsers,
  getUsers: getUsers,
})(Users);
