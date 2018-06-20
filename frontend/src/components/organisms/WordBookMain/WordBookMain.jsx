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
                i++;

                if (i % 3 === 0) {
                    return <WordBookBlock
                        idx={data.idx}
                        title={data.title}
                        userEmail={data.user_email}
                        createDate={data.create_date}
                        right="0"
                    />
                }

                return <WordBookBlock
                    idx={data.idx}
                    title={data.title}
                    userEmail={data.user_email}
                    createDate={data.create_date}
                />
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