import React from 'react';
import styled from 'styled-components';

import ServiceMain from '../../organisms/ServiceMain';

const Header = styled.div`
    width: 100%;
    // height: 90px;

    margin-top: 10px;
    margin-bottom: 10px;

    position: relative;
`;

const Main = styled.div`
    width: 100%;

    position: relative;
`;

const Section = styled.div`
    display: block;
    width: 1000px;
    margin: 0 auto;
`; 

// const PopularWords = styled.div`
//     display: block;
//     width: 100%;
//     height: 100%;
// `;

const MakeYourDictionary = styled.div`
    display: block;
    width: 1000px !important;
    height: 300px;
    margin: 0 auto;
`;

const PageTemplate = ({ header, children }) => {
    return (
        <div>
            <Header>
                { header }
            </Header>
            <Main>
                { children }
            </Main>
        </div>
    );
};

export default PageTemplate;