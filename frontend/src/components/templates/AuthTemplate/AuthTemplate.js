import React from 'react';
import styled from 'styled-components';

import RegisterMain from '../../organisms/RegisterMain';
import SocialBlock from '../../molecules/SocialBlock';

import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 400px;
  height: 100%;

  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  color: #4a4a4a;
`;

const LocalAuth = styled.div`
  display: block;
  width: 100%;

  margin: 0 auto;
`;

const SocialAuth = styled.div`
  display: block;
  width: 100%;
  margin: 10px auto;
`;

const Header = styled.div`
    text-align: center;
    margin-top: 5%;
    margin-bottom: 5%;
`;

const Title = styled.span`
    font-size: 18px;
`;

const Hyper = styled.span`
    text-align: right;
`;

const AuthTemplate = ({ url, LoginContainer }) => {
    switch (url) {
    case '/login':
        return (<Container>
            <LocalAuth>
                {LoginContainer}
            </LocalAuth>
            <SocialAuth>
                <Header><Title>또는</Title></Header>
                <SocialBlock />
            </SocialAuth>
            <Hyper><Link to='/register'>가입하기</Link></Hyper>
        </Container>);
    case '/register':
        return (
            <Container>
                <LocalAuth>
                    <RegisterMain
                        title='Langup'
                        experience='언어 공부하기 참 좋은곳'
                    />
                </LocalAuth>
                <SocialAuth>
                    <Header><Title>또는</Title></Header>
                    <SocialBlock />
                </SocialAuth>
                <Hyper><Link to='/login'>로그인하기</Link></Hyper>
            </Container>
        );
    default:
        return (<div>Error</div>);
    }
};

export default AuthTemplate;