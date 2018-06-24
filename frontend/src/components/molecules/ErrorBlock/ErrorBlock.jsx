import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 100px;
    text-align: center;

    h2 {
        font-size: 24px;
    }

    p {
        font-size: 18px;
    }
`;

const ErrorBlock = ({ title, description, children }) => {
    return (
        <Container>
            <h2>{ title }</h2>
            <p>{ description }{ children }</p>
        </Container>
    );
};

export default ErrorBlock;