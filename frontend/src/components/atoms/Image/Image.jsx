import React from 'react';
import styled from 'styled-components';

const Image = ({ imageSrc }) => {

    const Container = styled.div`
        background-image: url("${ imageSrc }");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        display: block;
        width: 100%;
        height: 100%;
    `;

    return (
        <Container />
    );
};

export default Image;