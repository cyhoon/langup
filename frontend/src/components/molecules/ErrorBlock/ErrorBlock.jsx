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
            {/* <h2>단어장을 볼 수 없습니다</h2>
            <p>단어장이 존재하지 않거나 비공개 일 수 있습니다. Langup으로 돌아가기.</p> */}
        </Container>
    );
};

export default ErrorBlock;