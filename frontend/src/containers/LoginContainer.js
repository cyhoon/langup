import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signInRequest } from '../actions/Authentications';
import LoginMain from '../components/organisms/LoginMain';

import { bindActionCreators } from 'redux';
import { ClipLoader } from 'react-spinners';

import styled from 'styled-components';

class LoginContainer extends Component {
  constructor(props) {
      super(props);

      this.state = { id: '', pw: '' };
  }

  handleChangeInputId = (e) => {
    this.setState({ id: e.target.value });
  }

  handleChangeInputPw = (e) => {
    this.setState({ pw: e.target.value });
  }

  handleLogin = () => {
      this.props.signInRequest(this.state.id, this.state.pw);
  }

  render() {
      return (
          <div>
              <LoginMain
                title='Langup'
                experience='오늘도 시작해 볼까요?'

                messageOn={this.props.messageOn}
                message={this.props.message}

                id={this.state.id}
                pw={this.state.pw}
                handleChangeInputId={this.handleChangeInputId}
                handleChangeInputPw={this.handleChangeInputPw}
                handleLogin={this.handleLogin}
              />
          </div>
      );
  }
};

const mapStateToProps = ({ auth }) => {
    const { status, messageOn, message } = auth.login;
    return { status, messageOn, message };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ signInRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);