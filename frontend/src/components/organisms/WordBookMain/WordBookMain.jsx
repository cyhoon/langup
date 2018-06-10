import React, { Component } from 'react';
import styled from 'styled-components';
import WordBookBlock from '../../molecules/WordBookBlock';

const Container = styled.div`
    // display: flex;
    // flew-wrap: wrap;

    width: 100%;
`;

const Column = styled.div`
    width: 100%;

    display: flex;
    flew-wrap: wrap;

    margin-bottom: 20px;
`;

class WordBookMain extends Component {
    render() {
        return (
            <Container>
                <Column>
                    <WordBookBlock right='10px' />
                    <WordBookBlock left='10px' right='10px' />
                    <WordBookBlock left='10px' />
                </Column>
                <Column>
                    <WordBookBlock right='10px' />
                    <WordBookBlock left='10px' right='10px' />
                    <WordBookBlock left='10px' />
                </Column>
                <Column>
                    <WordBookBlock right='10px' />
                    <WordBookBlock left='10px' right='10px' />
                    <WordBookBlock left='10px' />
                </Column>
            </Container>
        );
    }
};

export default WordBookMain;