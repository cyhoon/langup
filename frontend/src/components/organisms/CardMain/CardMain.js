import React, { Component } from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';

import CardBlock from '../../molecules/CardBlock';

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
                    <CardBlock
                        word='Hello'
                        mean='(만났을 때의 인사로) 안녕(하세요); 인사; (전화에서나 남의 관심을 끌 때) 여보세요'
                        imagePath='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlPpvWRru39-FDyWaHdVSnD43CWM8ihD_1t4uLxGyIg7rf6XyOxQ'
                    />
                    <CardBlock
                        word='Cat'
                        mean='(만났을 때의 인사로) 안녕(하세요); 인사; (전화에서나 남의 관심을 끌 때) 여보세요'
                        imagePath='https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426'
                        float='right'
                    />
                    <CardBlock
                        word='Dog'
                        mean='(만났을 때의 인사로) 안녕(하세요); 인사; (전화에서나 남의 관심을 끌 때) 여보세요'
                        imagePath='https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg'
                    />
                    <CardBlock
                        word='Hello'
                        mean='(만났을 때의 인사로) 안녕(하세요); 인사; (전화에서나 남의 관심을 끌 때) 여보세요'
                        imagePath='https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg'
                        float='right'
                    />
                </CardBody>
            </div>
        );
    }
};

export default CardMain;