import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    text-align: right;
`;

const ActivateContainer = styled.div`
    display: inline-block;
`;

const Activate = styled.p`
    display: inline-block;
    margin-left: 15px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;

    color: #03a87c;
`;

class Header extends Component {
    render() {
        return (
            <Container>
                <HeaderContainer>
                    <Logo>Langup</Logo>
                    <NavContainer>
                        <Nav />
                        <ActivateContainer>
                            <Activate><Link to='/login'>로그인하기</Link></Activate>
                        </ActivateContainer>
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