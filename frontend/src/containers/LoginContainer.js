import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInRequest } from '../actions/Authentications';
import { bindActionCreators } from 'redux';

class LoginContainer extends Component {
  constructor(props) {
      super(props);
  }

  async handleLogin(id, pw) {
      const result = await this.props.signInRequest(id, pw);
      console.log('result: ', result);
  }

  render() {
      return (
          <div>
              <button onClick={() => this.handleLogin('ihello0720@gmail.com', '1234') }>click</button>
          </div>
      );
  }
};

const mapStateToProps = (state) => {
    console.log('state: ', state);
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ signInRequest }, dispatch);
    // return {
    //     signInRequest: (id, pw) => {
    //         return dispatch(signInRequest(id, pw));
    //     }
    // };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);