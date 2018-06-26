import React from 'react';
import styled from 'styled-components';

const UserPopup = ({ handleLogout }) => {
    const List = styled.ul`
        background-color: inherit;
        list-style: none;

        margin: 0;
        padding: 16px;
        padding-left: 0;

        color: rgba(0, 0, 0, 0.6) !important;

        position: relative;
        z-index: 30;
    `;

    const Item = styled.li`
        cursor: pointer;
        padding: 7px 25px;
    `;

    return (
        <List>
            <Item>내 정보</Item>
            <Item onClick={handleLogout}>로그아웃</Item>
        </List>
    );
};

export default UserPopup;