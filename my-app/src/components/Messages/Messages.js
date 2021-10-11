/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';
import style from '../Messages/Messages.module.css';
import { BrowserRouter, Route } from 'react-router-dom';
import MessagesGet from './MessagesGet/MessagesGet';
import MessagesUser from './MessagesUser/MessagesUser';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

class Messages extends Component {
  render() {
    const { getUserMessage, getUserId } = this.props;

    return (
      <BrowserRouter>
        <section className={style.Messages}>
          <ul className={style.Messages_Users}>{<MessagesUser />}</ul>
          <div>
            <Route
              exact
              path={`/messages/:${getUserId}`}
              render={() => <MessagesGet dispatch={getUserMessage} />}
            />
          </div>
        </section>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  getUserId: state.users.users.id,
});

const mapDispatchToProps = dispatch => ({
  getUserMessage: () => {
    dispatch(dispatch());
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Messages);
