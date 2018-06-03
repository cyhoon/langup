import React from 'react';
import styled from 'styled-components';
import GoEye from 'react-icons/lib/go/eye';

const Container = styled.div`

`;

const Title = styled.span`
    display: block;
    margin-top: 30px;
    margin-bottom: 30px;

    font-weight: bold;
    font-size: 26px;
`;

const List = styled.ul`
    list-style-type: none;
    padding-left: 30px;
`;

const Item = styled.li`
    list-style-type: circle;
    font-size: 16px;
`;

const Bold = styled.span`
    font-weight: bold;
`;

const ServiceBlock = () => {
    return (
        <Container>
            <h3>랭업이 자랑하는 서비스는 다음과 같습니다.</h3>
            <List>
                <Item>
                    <Bold>빠름:</Bold> 사용자는 웹 브라우저에서 더블클릭만으로 원하는 단어의 뜻을 찾을 수 있습니다.
                </Item>
                <Item>
                    <Bold>기록</Bold> 사용자가 검색한 단어들을 기록해 단어장 형태로 보여줍니다.
                </Item>
                <Item>
                    <Bold>사전참여:</Bold> 사전참여를 통해서 더 좋은 서비스를 사용자가 직접 만듭니다.
                </Item>
            </List>
        </Container>
    );
};

export default ServiceBlock;