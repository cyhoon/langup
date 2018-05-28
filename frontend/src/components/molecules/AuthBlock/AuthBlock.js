import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input';

const Container = styled.div`
  width: inherit;
`;

const Experience = styled.div`
  display: block;
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 10px;
`;

const AuthBlock = ({ name, type, value, onChange }) => {
  return (
    <Container>
      <Experience>{name}</Experience>
      <Input
        type={type}
        display='block'
        width='100%'
        height='47px'
        outline='none'
        border='1px solid #c8c8c8'
        borderRadius='3px'
        marginBottom='10px'
        value={value}
        onChange={onChange}
        />
    </Container>
  );
};

export default AuthBlock;