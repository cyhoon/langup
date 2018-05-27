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

class RegisterMain extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Title>{ this.props.title }</Title>
                    <Experience>{ this.props.experience }</Experience>
                </Header>
                <Body>
                    <AuthBlock name='이메일' type='text' />
                    <AuthBlock name='비밀번호' type='password' />
                    <AuthBlock name='이름' type='text' />
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
                    >회원가입</Button>
                </Body>
            </Container>
        );
    }
}

export default RegisterMain;