import React, { Component } from 'react';

import styles from '../styles/login.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { id: '', pw: '' };

    this.onInputIdChange = this.onInputIdChange.bind(this);
    this.onInputPwChange = this.onInputPwChange.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputIdChange(event) {
    this.setState({ id: event.target.value });
  }

  onInputPwChange(event) {
    this.setState({ pw: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className={cx('login')}>
        <span className={cx('title')}>LangUp</span>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" placeholder="아이디" value={this.state.id} onChange={this.onInputIdChange} className={cx('id_panel')} />
          <input type="password" placeholder="비밀번호" value={this.state.pw} onChange={this.onInputPwChange} className={cx('pw_panel')} />
          <button type="submit" className={cx('login_btn')}>로그인</button>
        </form>
      </div>
    );
  }
}

export default Login;