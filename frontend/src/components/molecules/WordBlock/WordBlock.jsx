import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;

    font-size: 20px;

    width: 100%;
    padding: 20px 32px;
    border-radius: 5px;
    margin-bottom: 25px;

    background-color: #eee;
`;

const Word = styled.div`
    flex: 1;

    font-weight: bold;

    border-right: 0.125rem solid white;

    padding-top: 20px;
    padding-bottom: 20px;

    padding-right: 50px;
    margin-right: 50px;
`;

const MeanContainer = styled.div`
    flex: 3;

    font-weight: lighter;
`;

const Mean = styled.span`
    display: block;
    padding-top: 20px;
    padding-bottom: 20px;
`;

const WordBlock = ({ userWord }) => {
    const meanList = userWord.means.map((mean, count) => {
        count += 1;
        return <Mean>{count}. {mean.kor_word}</Mean>
    });

    return (
        <Container>
            <Word>
                { userWord.word }
            </Word>
            <MeanContainer>
                {meanList}
            </MeanContainer>
        </Container>
    );
};

export default WordBlock;