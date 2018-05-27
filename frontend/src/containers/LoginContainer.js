import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInRequest } from '../actions/Authentications';
import { bindActionCreators } from 'redux';

import styled from 'styled-components';

class LoginContainer extends Component {
  constructor(props) {
      super(props);
  }

  handleLogin(id, pw) {
      this.props.signInRequest(id, pw);
  }

  render() {
      return (
          <div>
            <button onClick={() => this.handleLogin('ihello0720@gmail.com', '1234') }>로그인</button>
          </div>
      );
  }
};

const mapStateToProps = (state) => {
    console.log('state: ', state);
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ signInRequest }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);