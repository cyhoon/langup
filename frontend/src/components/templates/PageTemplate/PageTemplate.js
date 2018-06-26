import React from 'react';
import styled from 'styled-components';

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