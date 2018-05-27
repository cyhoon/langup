import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';

import Nav from '../../molecules/Nav';

const Container = styled.div`
    margin: 0 auto;
    max-width: 1000px !important;
    height: 100%;
`;

const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 15% 70% 15%;

    position: relative;
`;

const Left = styled.div`
    line-height: 50px;
`;

const Link = styled.a`
    cursor: pointer;
    color: #848484;
`;

const Logo = styled.span`
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    cursor: pointer;
`;

const Right = styled.div`
    text-align: right;
    line-height: 50px;
`;

const NavContainer = styled.div`
    display: block;
    width: 100%;
`;

class Header extends Component {
    render() {
        return (
            <Container>
                <HeaderContainer>
                    <Left>
                        <Link onClick={ () => { alert('go'); } }>단어장 보러 가기</Link>
                    </Left>
                    <Logo>Langup</Logo>
                    <Right>
                        <Button
                            textColor="#03a87c"
                            color="#03a87c"
                            borderColor="#03a87c"
                            width="70%"
                            height="34px"
                            borderRadius="3px"
                            fontSize="14px"
                            fontWeight="bold"
                        >로그인하기</Button>
                    </Right>
                </HeaderContainer>
                <NavContainer>
                    <Nav />
                </NavContainer>
            </Container>
        );
    }
};

export default Header;