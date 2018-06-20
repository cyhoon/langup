import React from 'react';
import styled from 'styled-components';

import PageTemplate from '../../templates/PageTemplate';
import HeaderContainer from '../../../containers/HeaderContainer';
import InformationMain from '../../organisms/InformationMain';

const Container = styled.div`
    display: block;
    margin: 0 auto;
    max-width: 1000px !important;
`;

const WordBookDetailPage = () => {
    return (
        <PageTemplate
            header={
                <HeaderContainer />
            }
        >
            <Container>
                <InformationMain
                    title="단어장 (2018-06-20)"
                    explanation="2018-06-20 날짜로 검색한 단어 기록"
                    buttonText="수정하기"
                />
            </Container>
        </PageTemplate>
    );
};

export default WordBookDetailPage;