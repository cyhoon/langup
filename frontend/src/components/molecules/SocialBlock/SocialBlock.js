import React from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';

import FacebookIcon from 'react-icons/lib/fa/facebook-official';

const Wrap = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
`;

const SocialBlock = () => {
    return (
        <div>
            <Wrap>
                <Button
                    textColor='white'
                    backgroundColor='#4267b2'
                    width="100%"
                    height="47px"
                    borderRadius='3px'
                    fontWeight='bold'
                    border="none"
                    outLine="none"
                >
                    페이스북
                </Button>
            </Wrap>
        </div>
    );
};

export default SocialBlock;