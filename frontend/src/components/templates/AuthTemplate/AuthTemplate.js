import React from 'react';
import styled from 'styled-components';

import LoginMain from '../../organisms/LoginMain';
import SocialBlock from '../../molecules/SocialBlock';

const Container = styled.div`
  max-width: 400px;
  height: 100%;

  margin: 0 auto;
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
  margin: 0 auto;
`;

const Header = styled.div`
    text-align: center;
    margin-top: 5%;
    margin-bottom: 5%;
`;

const Title = styled.span`
    font-size: 18px;
`;

const AuthTemplate = () => {
    return (
        <Container>
            <LocalAuth>
                <LoginMain
                    title='Langup'
                    experience='언어 공부하기 좋은곳'
                />
            </LocalAuth>
            <SocialAuth>
                <Header><Title>또는</Title></Header>
                <SocialBlock />
            </SocialAuth>
        </Container>
    );
};

export default AuthTemplate;