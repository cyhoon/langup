import React from 'react';
import styled from 'styled-components';

import Particles from 'react-particles-js';

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
                                    value: "80",
                                    density: {
                                        enable: true,
                                        value_area: "800"
                                    }
                                },
                                move: {
                                    enable: true,
                                    speed: "10",
                                    direction: "none",
                                    random: false
                                },
                            },
                            interactivity: {
                                detect_on: "canvas",
                                events: {
                                  onhover: {
                                    enable: true,
                                    mode: "repulse"
                                  },
                                  onclick: {
                                    enable: true,
                                    mode: "push"
                                  },
                                  resize: true
                                },
                                modes: {
                                    repulse: {
                                      distance: 100,
                                      duration: 0.4
                                    },
                                    push: {
                                      particles_nb: 5
                                    },
                                }
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
                <Section>
                    {/* <ServiceMain /> */}
                </Section>
            </Main>
        </div>
    );
};

export default PageTemplate;