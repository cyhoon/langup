import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: inline-block;
`;

const Item = styled.span`
    display: inline-block;

    margin-left: 30px;
    margin-right: 30px;

    font-size: 15px;
    font-weight: lighter;
    
    cursor: pointer;
`;

const NavItem = ({ children }) => {
    return (
        <Container>
            <Item>{ children }</Item>
        </Container>
    );
};

export default NavItem;