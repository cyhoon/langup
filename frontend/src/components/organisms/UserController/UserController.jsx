import React from 'react';
import Image from '../../atoms/Image';
import styled from 'styled-components';
import UserPopup from '../UserPopup/UserPopup';

const UserController = ({ profileClick }) => {
    const Container = styled.div`
        width: 100%;
        height: 100%;

        margin-top: 11px;

        cursor: pointer;

        // position: relative;
    `;

    const ImageContainer = styled.div`
        width: inherit;
        height: inherit;
        border-radius: 100%;
    `;

    return (
        <Container>
            <ImageContainer onClick={profileClick}>
                <Image
                    imageSrc="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/35461384_1076982469144419_7664413657048023040_n.jpg?_nc_cat=0&oh=425c78a898b2108e68e67e1442b062fb&oe=5BB88DE4"
                    borderRadius="50%"
                />
            </ImageContainer>
        </Container>
    );
};

export default UserController;