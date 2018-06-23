import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../atoms/Button';

import Nav from '../../molecules/Nav';
import UserController from '../UserController/UserController';
import UserPopup from '../UserPopup/UserPopup';

const Container = styled.span`
    display: block;
    margin: 0 auto;
    max-width: 1000px !important;
    height: 100%;
    position: relative;
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

const UserContainer = styled.div`
    display: inline-block;
    margin-left: 15px;

    width: 34px;
    height: 34px;
`;

const UserPopupContainer = styled.div`
    position: absolute;
    display: block;
    right: -84px;
    width: 200px;

    margin-top: 10px;

    background-color: white;
    border-radius: 3px;
    z-index: 1000 !important;

    box-shadow: 0 1px 2px rgba(0,0,0,.25), 0 0 1px rgba(0,0,0,.35);

    outline: none;
`;

const PopoverArrow = styled.div`
    position: absolute;
    top: -13px;
    right: 0;
    left: 0;
    margin: 0 auto;

    width: 15px;
    height: 15px;

    transform: rotate(45deg) translate(6px,6px);
    box-shadow: 0 1px 2px rgba(0,0,0,.25), 0 0 1px rgba(0,0,0,.35);
`;

class Header extends Component {
    constructor(props) {
        super(props);

        this._userMenu = null;
    }

    profileClick = async () => {
        await this.props.profileClick();
        document.getElementById("userMenu").focus();
    }

    render() {
        return (
            <Container>
                <HeaderContainer>
                    <Logo><Link to='/'>Langup</Link></Logo>
                    <NavContainer>
                        <Nav />
                        <ActivateContainer>
                            {/* <Activate><Link to='/login'>로그인하기</Link></Activate> */}
                            <UserContainer>
                                <UserController
                                    profileClick={this.profileClick}
                                />
                            </UserContainer>
                        </ActivateContainer>
                    </NavContainer>
                </HeaderContainer>
                { 
                    this.props.isPopupOn ?
                        <UserPopupContainer id='userMenu'
                            tabIndex="0"
                            onBlur={this.props.handleOnBlur}
                        >
                            <PopoverArrow/>
                            <UserPopup />
                        </UserPopupContainer>
                    :
                    '' 
                }
            </Container>
        );
    }
};

export default Header;