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
    display: flex;
`;

const Left = styled.div`
    line-height: 50px;
`;

const Link = styled.a`
    cursor: pointer;
    color: #848484;
`;

const Logo = styled.span`
    font-weight: bold;
    font-size: 32px;
    cursor: pointer;
`;

const Right = styled.div`
    text-align: right;
    line-height: 50px;
`;

const NavContainer = styled.div`
    width: 100%;
`;

class Header extends Component {
    render() {
        return (
            <Container>
                <HeaderContainer>
                    <Logo>Langup</Logo>
                    <NavContainer>
                        <Nav />
                    </NavContainer>
                </HeaderContainer>
                {/* <NavContainer>
                    <Nav />
                </NavContainer> */}
            </Container>
        );
    }
};

export default Header;