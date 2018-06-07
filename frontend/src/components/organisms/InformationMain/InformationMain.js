import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';

const Container = styled.div`
    width: 100%;
    // height: 100px;

    margin-top: 50px;
    margin-bottom: 25px;
    border-bottom: 0.5px solid #eee;

    display: flex;
`;

const TextContainer = styled.div`
    flex: 10
`;

const Title = styled.h1`
    margin-top: 0;
`;

const Explanation = styled.p`

`;

const ButtonContainer = styled.div`
    flex: 1;
`;

const InformationMain = ({ title, explanation, buttonText }) => {
    return (
        <Container>
            <TextContainer>
                <Title>{ title }</Title>
                <Explanation>{ explanation }</Explanation>
            </TextContainer>
            <ButtonContainer>
                <Button
                    textColor="white"
                    backgroundColor="#03a87c"
                    width="100%"
                    height="38px"
                    fontSize="14px"
                    fontWeight="600"
                    borderRadius="5px"
                    borderColor="#03a87c"
                >{ buttonText }</Button>
            </ButtonContainer>
        </Container>
    );
};

export default InformationMain;