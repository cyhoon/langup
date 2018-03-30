import React, { Component } from 'react';

import styles from '../styles/login.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions/index';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { id: '', pw: '' };

    this.onInputIdChange = this.onInputIdChange.bind(this);
    this.onInputPwChange = this.onInputPwChange.bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);

    console.log('localStorage : ', localStorage);
  }

  onInputIdChange(event) {
    this.setState({ id: event.target.value });
  }

  onInputPwChange(event) {
    this.setState({ pw: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    const id = this.state.id;
    const pw = this.state.pw;

    if (id.trim().length === 0) { // 공백인지 아닌지 확인
      console.log('id를 입력해 주세요');
      return;
    } else if (pw.trim().length === 0) {
      console.log('비밀번호를 입력해 주세요');
      return;
    }

    this.props.login(this.state.id, this.state.pw);
    this.setState({ id: '', pw: '' });
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);
