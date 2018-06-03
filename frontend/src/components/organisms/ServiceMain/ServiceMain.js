import React from 'react';
import styled from 'styled-components';

import ServiceBlock from '../../molecules/ServiceBlock';

const Container = styled.div`
`;

const Title = styled.span`
    display: block;
    margin-top: 40px;
    margin-bottom: 40px;

    font-weight: bold;
    font-size: 32px;
`;

const ServiceBlockContainer = styled.div`
    display: block;
    width: 1000px;
    margin: 0 auto;
`;

const ServiceMain = () => {
    return (
        <Container>
            <Title>Langup Service</Title>
            <ServiceBlockContainer>
                <ServiceBlock />
            </ServiceBlockContainer>
        </Container>
    );
};

export default ServiceMain;