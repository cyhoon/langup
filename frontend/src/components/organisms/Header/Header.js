import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';

const Container = styled.div`
    margin: 0 auto;
    max-width: 1000px !important;
    height: 100%;

    display: grid;
    grid-template-columns: auto 70% auto;

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

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Left>
                    <Link onClick={ () => { alert('go'); } }>단어장 보러 가기</Link>
                </Left>
                <Logo>Langup</Logo>
                <Right>
                    <Button
                        text="로그인 하기"
                        textColor="#03a87c"
                        color="#03a87c"
                        borderColor="#03a87c"
                        width="70%"
                        height="34px"
                        borderRadius="3px"
                        fontSize="14px"
                        fontWeight="bold"
                    />
                </Right>
            </Container>
        );
    }
};

export default Header;