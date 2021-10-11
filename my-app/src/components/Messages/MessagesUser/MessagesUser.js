import React, {Component} from 'react';
import { connect } from 'react-redux';

import MessagesUserUI from './MessagesUserUI';

class MessagesUser extends Component {
  render() {
    const {users, } = this.props
     return (
    <>
      <MessagesUserUI users={users}/>
    </>
  );
  }
 
};

const mapStateToProps = state => ({
  users: state.users.users,
});

export default connect(mapStateToProps, null)(MessagesUser);
