import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ADD_NEW_MESSAGE } from '../../../redux/create-actions';
import MessagesGetUI from './MessagesGetUI';

class MessagesGet extends Component {
  refer = React.createRef();

  changeForm = e => {
    const { dispatch } = this.props;
    e.preventDefault();
    let text = this.refer.current.value;
    if (text.length === 0) {
      alert('Sorry, but need to fill in the gaps');
      return;
    } else {
      dispatch(ADD_NEW_MESSAGE(text));
      this.refer.current.value = '';
    }
  };

  render() {
    const { newMessage } = this.props;
    return (
      <>
        <MessagesGetUI
          newMessage={newMessage}
          changeForm={this.changeForm}
          refer={this.refer}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  newMessage: state.newMessage.messagers,
});

export default connect(mapStateToProps, null)(MessagesGet);
