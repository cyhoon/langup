import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    // height: 100px;

    margin-top: 50px;
    border-bottom: 0.5px solid #eee;

    display: flex;
`;

const TextContainer = styled.div`
    flex: 2
`;

const Title = styled.h1`
    margin-top: 0;
`;

const Explanation = styled.p`

`;

const ButtonContainer = styled.div`
    flex: 1;
`;

const InformationMain = () => {
    return (
        <Container>
            <TextContainer>
                <Title>나만의 단어장</Title>
                <Explanation>회원님만의 단어장을 보여줍니다</Explanation>
            </TextContainer>
            <ButtonContainer>
                <button>단어장 추가</button>
            </ButtonContainer>
        </Container>
    );
};

export default InformationMain;