import React from 'react';
import styled from 'styled-components';
import HandUp from 'react-icons/lib/fa/hand-o-up';

const CardBlock = ({ word, mean, float, imagePath }) => {
    const Container = styled.div`
        display: inline-block;
        
        width: 49.5%;
        height: 150px;

        margin-bottom: 0.5%;

        border: 1px solid #eee;
        border-radius: 3px;

        float: ${float ? float : 'undefined'};
    `;

    const TextContainer = styled.div`
        width: 50%;
        float: right;
        padding: 20px;
    `;

    const ImageContainer = styled.div`
        display: block;

        float: left;

        width: 50%;
        height: 100%;

        background-image: url('${imagePath}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        cursor: pointer;

        border-right: 1px solid #eee;
        border-radius: 3px;
    `;
    return (
        <Container>
            <ImageContainer>
            </ImageContainer>
            <TextContainer>
                <span style={{ marginLeft: 0, fontWeight: 'bold', fontSize: '18px' }}>{ word }</span>
                <span style={{ marginTop: '5px', display: 'block', fontSize: '15px', fontWeight: 'lighter' }}>{ mean }</span>
            </TextContainer>
        </Container>
    );
}

export default CardBlock;