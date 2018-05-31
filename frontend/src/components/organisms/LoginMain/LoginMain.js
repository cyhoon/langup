import React, { Component } from 'react';
import styled from 'styled-components';

import AuthBlock from '../../molecules/AuthBlock';
import Button from '../../atoms/Button';

const Container = styled.div`
  color: #4a4a4a;
`;

const Header = styled.div`
  display: block;
  text-align: center;

  margin-top: 50px;
  margin-bottom: 50px;
`;

const Title = styled.span`
  display: block;
  font-size: 42px;
  font-weight: bold;
`;

const Experience = styled.span`
  display: block;

  margin-top: 12px;
  margin-bottom: 12px;

  font-size: 25px;
  font-weight: lighter;
`;

const Body = styled.div`
  width: inherit;
  margin: 0 auto;
`;

const Message = styled.div`
    margin-bottom: 10px;
    color: red;
    text-align: center;
    font-size: 14px;
`;

class LoginMain extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Title>{ this.props.title }</Title>
                    <Experience>{ this.props.experience }</Experience>
                </Header>
                <Body>
                    <AuthBlock
                        name='이메일'
                        type='text'
                        value={this.props.id}
                        onChange={this.props.handleChangeInputId}
                    />
                    <AuthBlock
                        name='비밀번호'
                        type='password'
                        value={this.props.pw}
                        onChange={this.props.handleChangeInputPw}
                    />
                    { 
                        this.props.messageOn ? 
                            <Message>{ this.props.message } </Message> : ''
                    }
                    <Button
                        textColor='white'
                        backgroundColor='#03a87c'
                        width='100%'
                        height='47px'
                        borderRadius='3px'
                        fontSize='15px'
                        fontWeight='bold'
                        border='none'
                        outline='none'
                        handleClick={this.props.handleLogin}
                    >로그인</Button>
                </Body>
            </Container>
        );
    }
}

export default LoginMain;
