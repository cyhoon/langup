import React from 'react';
import styled from 'styled-components';

import Image from '../../atoms/Image';

const WordBookBlock = ({ idx, title, userEmail, createDate, left, profileImage, right }) => {
    const Container = styled.div`
        display: inline-flex;
        flex-direction: column;

        // width: 33.33333333% !important;
        width: 32% !important;
        height: 250px;

        border: 1px solid #eee;
        border-radius: 3px;

        cursor: pointer;

        position: relative;

        // margin-left: ${left};
        // margin-right: ${right};
        // margin-left: ${ left ? left : '10px' };
        // margin-right: ${ right ? right: '10px' };
        margin-right: ${ right ? right: '2%' };
        margin-bottom: 2%;
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

        background-image: url('${profileImage}');
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
                    <Title>{title}</Title>
                    <Experience>{createDate} 날짜로 검색한 단어 기록</Experience>
                </BookInformation>
                <AuthorContainer>
                    <ProfileImage />
                    <AuthorExperience>
                        <Author>{userEmail}</Author>
                        <MakeDate>{createDate}</MakeDate>
                    </AuthorExperience>
                </AuthorContainer>
            </TextContainer>
        </Container>
    );
};

export default WordBookBlock;