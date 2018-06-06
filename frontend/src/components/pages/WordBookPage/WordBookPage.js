import React from 'react';
import styled from 'styled-components';

import HeaderContainer from '../../../containers/HeaderContainer';
import PageTemplate from '../../templates/PageTemplate';
import InformationMain from '../../organisms/InformationMain';

const Container = styled.div`
    display: block;
    margin: 0 auto;
    max-width: 1000px !important;
`;

const WordBookPage = () => {
    return (
        <PageTemplate
            header={
                <HeaderContainer />
            }
        >
            <Container>
                <InformationMain />
            </Container>
        </PageTemplate>
    );
}

export default WordBookPage;