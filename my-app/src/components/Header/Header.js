import React, { Component } from 'react';
import HeaderUI from './HeaderUI';
import { connect } from 'react-redux';
import mainStyles from '../../App.module.css';
import style from '../Header/Header.module.css';
import { getAuthorizationUser } from '../../API/API';

class Header extends Component {
  componentDidMount() {
    const { setAuthData } = this.props;
    setAuthData();
  }
  render() {
    const { isAuth, login } = this.props;
    return (
      <header className={`${mainStyles.Header}  ${style.header}`}>
        <HeaderUI isAuth={isAuth} login={login} />
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthData: getAuthorizationUser })(
  Header,
);
