import React from 'react';
import styled from 'styled-components';

import Image from '../../atoms/Image';

const WordBookBlock = ({ left, right }) => {
    const Container = styled.div`
        display: inline-flex;
        flex-direction: column;

        width: 33.33333333% !important;
        height: 250px;

        border: 1px solid #eee;
        border-radius: 3px;

        cursor: pointer;

        position: relative;

        margin-left: ${left};
        margin-right: ${right};

        // margin-left: ${ left ? left : '10px' };
        // margin-right: ${ right ? right: '10px' };
    `;

    const ImageContainer = styled.div`
        width: 100%;
        height: 40%;
    `;

    const TextContainer = styled.div`
        display: blocK;
        width: 100%;
        padding: 10px;
    `;

    const BookInformation = styled.div`
        position: relative;
        top: 0px;
        margin-top: 10px;
    `;

    const Title = styled.span`
        display: block;
        font-size: 18px;
        font-weight: bold;

        margin-bottom: 10px;
    `;

    const Experience = styled.span`
        display: block;

        color: rgba(0,0,0,.54) !important;
        font-size: 15px;
        font-weight: lighter;
    `;

    const AuthorContainer = styled.div`
        display: flex;
        width: 100%;

        position: relative;

        top: 25px;
    `;

    const ProfileImage = styled.div`
        display: block;

        width: 38px;
        height: 38px;

        border-radius: 100%;
        background-color: #eee;

        background-image: url('https://cdn-images-1.medium.com/fit/c/40/40/1*aFLLGsE20mi1mOuO8HH9ug.jpeg');
        background-size: cover;

        margin-right: 10px;
    `;

    const AuthorExperience = styled.div`
        display: flex;
        flex-direction: column;

        font-size: 14px;
    `;

    const Author = styled.span`
    `;

    const MakeDate = styled.span`
        color: rgba(0,0,0,.54) !important;
    `;

    return (
        <Container>
            <ImageContainer>
                <Image imageSrc="https://cdn-images-1.medium.com/max/800/1*7z3W_ZK9kMi_vqebWqX_ww.png" />
            </ImageContainer>
            <TextContainer>
                <BookInformation>
                    <Title>단어장 (2018-05-25)</Title>
                    <Experience>2018-05-25 날짜로 검색한 단어 기록</Experience>
                </BookInformation>
                <AuthorContainer>
                    <ProfileImage />
                    <AuthorExperience>
                        <Author>ihello0720@gmail.com</Author>
                        <MakeDate>2018-03-21</MakeDate>
                    </AuthorExperience>
                </AuthorContainer>
            </TextContainer>
        </Container>
    );
};

export default WordBookBlock;