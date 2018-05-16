import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    width: 100%;
    height: 50px;

    margin-top: 10px;
    margin-bottom: 10px;

    position: relative;
`;

const PageTemplate = ({ header }) => {
    return (
        <div>
            <Header>
                { header }
            </Header>
        </div>
    );
};

export default PageTemplate;