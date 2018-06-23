import React from 'react';
import Image from '../../atoms/Image';
import styled from 'styled-components';

const UserController = ({ profileImage, profileClick }) => {
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
                    imageSrc={`${profileImage}`}
                    borderRadius="50%"
                />
            </ImageContainer>
        </Container>
    );
};

export default UserController;