import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';

const CardHeader = styled.div`
    display: grid;
    grid-template-columns: 90% 10%;
`;

const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 0;

    font-size: 28px;
`;

const Expression = styled.span`
    display: block;
    font-size: 16px;
    font-weight: lighter;
    margin-top: 10px;
    color: #757575;
`;

const Separate = styled.span`
    display: block;
    border: 0.5px solid #eee;

    margin-top: 15px;
    margin-bottom: 15px;
`;

const CardBody = styled.div`

`;

class CardMain extends Component {
    render() {
        return (
            <div>
                <CardHeader>
                    <Title>Popular Word</Title>
                    <Button
                        text="더 보기"
                        textColor="#03a87c"
                        borderColor="#03a87c"
                        width="100%"
                        height="100%"
                        borderRadius="3px"
                        fontSize="14px"
                        fontWeight="bold"
                        outLine="none"
                    />
                    <Expression>많은 회원분들이 보신 단어들을 추천합니다.</Expression>
                </CardHeader>
                <Separate />
                <CardBody>
                    Card Body
                </CardBody>
            </div>
        );
    }
};

export default CardMain;