import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import NavItem from '../../atoms/NavItem';

const Container = styled.div`
    display: inline-block;
`;

class Nav extends Component {
    render() {
        return (
            <Container>
                <NavItem><Link to='/'>홈</Link></NavItem>
                {/* <NavItem>오픈사전</NavItem> */}
                {/* <NavItem>공유단어장</NavItem> */}
                <NavItem><Link to='/book'>나의단어장</Link></NavItem>
            </Container>
        );
    };
};

export default Nav;