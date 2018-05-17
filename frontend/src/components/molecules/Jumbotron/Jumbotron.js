import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';

const Container = styled.div`
    width: inherit;
    height: inherit;

    margin: 0 auto;
    margin-bottom: 30px;

    border-radius: 3px;

    background-color: #eee;
`;

const TextComponent = styled.div`
    display: block;

    width: 50%;
    height: 100%;

    float: left;

    padding: 40px;
`;

const SubTitle = styled.span`
    font-size: 24px;
    font-weight: lighter;
`;

const MainTitle = styled.h3`
    font-size: 32px;
    margin-top: 10px;
    margin-bottom: 15px;
`;

const Jumbotron = ({ subText, mainText, buttonText, imagePath }) => {
    const ImageComponent = styled.div`
        float: right;

        display: block;

        width: 50%;
        height: 100%;

        background-image: url(${imagePath});
        background-position: right bottom;
        background-repeat: no-repeat!important;
        background-size: contain!important;
    `;

    return (
        <Container>
            <TextComponent>
                <div style={{ marginTop: 30, marginBottom: 30 }}>
                    <SubTitle>{ subText }</SubTitle>
                    <MainTitle>{ mainText }</MainTitle>
                </div>
                <Button
                    text={ buttonText }
                    textColor="white"
                    backgroundColor="#252726"
                    width="27%"
                    height="37px"
                    fontSize="14px"
                    fontWeight="bold"
                    borderRadius="5px"
                />
            </TextComponent>
            <ImageComponent />
        </Container>
    );
}

export default Jumbotron;