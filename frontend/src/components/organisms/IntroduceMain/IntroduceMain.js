import React, { Component } from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import Jumbotron from '../../molecules/Jumbotron';

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

class IntroduceMain extends Component {
    render() {
        return (
            <IntroduceContainer>
                <IntroduceService>
                    <Jumbotron 
                        subText="어떤것 보다 빠른 오픈사전"
                        mainText="LANGUP DICTIONARY"
                        buttonText="Download the App"
                        // imagePath = "https://cdn-images-1.medium.com/max/2000/1*TckFXfkU_bg0aADPYR_t7Q.png"
                    />
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
        );
    }
};

export default IntroduceMain;