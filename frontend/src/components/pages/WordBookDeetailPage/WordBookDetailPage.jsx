import React from 'react';
import styled from 'styled-components';

import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContainer';
import WordBookDetailContainer from '../../../containers/WordBookDetailContainer';

const Container = styled.div`
    display: block;
    margin: 0 auto;
    max-width: 1000px !important;
`;

const WordBookDetailPage = (props) => {
    return (
        <PageTemplate
            header={
                <HeaderContainer />
            }
        >
            <Container>
                <WordBookDetailContainer
                    bookIdx={props.match.params.bookIdx}
                />
            </Container>
        </PageTemplate>
    );
};

export default WordBookDetailPage;