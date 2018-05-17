import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    width: 100%;
    height: 90px;

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
    height: 500px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
`; 

const PopularWords = styled.div`
    display: block;
    width: 100%;
    height: 100%;
`;

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
                <MakeYourDictionary>{ children[1] }</MakeYourDictionary>
                <Section>
                    <PopularWords>{ children[0] }</PopularWords>
                </Section>
            </Main>
        </div>
    );
};

export default PageTemplate;