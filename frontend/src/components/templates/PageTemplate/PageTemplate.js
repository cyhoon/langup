import React from 'react';
import styled from 'styled-components';

import Particles from 'react-particles-js';

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
    margin-top: 30px;
    margin-bottom: 30px;
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

const IntroduceContainer = styled.div`
    position: relative;

    display: block;
    width: 100%;
    height: 600px;
    background-color: #1c272b;

    color: white;
`

const IntroduceService = styled.div`
    position: relative;
    z-index: 30;
    display: block;
    width: 1000px !important;
    height: inherit;
    margin: 0 auto;
`;

const PageTemplate = ({ header, children }) => {
    return (
        <div>
            <Header>
                { header }
            </Header>
            <Main>
                <IntroduceContainer>
                    <IntroduceService>
                        <IntroduceService>
                            { children }
                        </IntroduceService>
                    </IntroduceService>
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: "60"
                                },
                            }
                        }}
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: '0',
                        }}
                    />
                </IntroduceContainer>
            </Main>
        </div>
    );
};

export default PageTemplate;