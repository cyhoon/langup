import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signInRequest } from '../actions/Authentications';
import { bindActionCreators } from 'redux';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  flex-direction: column;

  padding: 20px;

  color: #4a4a4a;
`;

const Header = styled.div`
  display: block;
  max-width: 50%;
  text-align: center;

  margin-top: 30px;
  margin-bottom: 30px;
`;

const Title = styled.span`
  display: block;
  font-size: 35px;
  font-weight: bold;
`;

const Experience = styled.span`
  display: block;

  margin-top: 5px;
  margin-bottom: 5px;

  font-size: 18px;
  font-weight: lighter;
`;

const Body = styled.div`
  width: 300px;
`;

const Form = styled.div`
  display: block;
  width: 100%;

  margin-top: 5px;
  margin-bottom: 5px;

  border-radius: 5px;
`;

const FormExperience = styled.span`
  display: block;
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 37px;
  outline: none;
  border: 1px solid #c8c8c8;
  margin-bottom: 10px;
  padding-left: 5px;
`;

const Button = styled.button`
  width: 100%;
  height: 37px;

  margin-top: 5px;
  margin-bottom: 5px;

  border: none;
  outline: none;

  border-radius: 3px;

  color: white;
  background-color: #03a87c;

  font-size: 15px;
  font-weight: bold;

  cursor: pointer;
`;

class LoginContainer extends Component {
  constructor(props) {
      super(props);
  }

  handleLogin(id, pw) {
      const result = this.props.signInRequest(id, pw);
      console.log('result: ', result);
  }

  render() {
      return (
          <Container>
            <Header>
              <Title>Langup</Title>
              <Experience>언어 공부하기 좋은곳</Experience>
            </Header>
            <Body>
              <Form>
                <FormExperience>이메일</FormExperience>
                <Input />
              </Form>
              <Form>
                <FormExperience>비밀번호</FormExperience>
                <Input type='password' />
              </Form>
              <Button>로그인</Button>
            </Body>
              {/* <button onClick={() => this.handleLogin('ihello0720@gmail.com', '12345') }>click</button> */}
          </Container>
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