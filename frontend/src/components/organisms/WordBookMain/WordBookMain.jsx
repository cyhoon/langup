import React, { Component } from 'react';
import styled from 'styled-components';
import WordBookBlock from '../../molecules/WordBookBlock';

const Container = styled.div`
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
        const myBookList = this.props.list.map(
            (data, i) => {
                return <WordBookBlock />
            }
        );

        return (
            <Container>
                {myBookList}
            </Container>
        );
    }
};

export default WordBookMain;