import React from 'react';
import styled from 'styled-components';

const Input = ({
  type,
  display,
  width,
  height,
  outline,
  border,
  borderRadius,
  marginBottom,
  value,
  onChange
}) => {

    const Input = styled.input`
        display: ${display};
        width: ${width};
        height: ${height};
        outline: ${outline};
        border: ${border};
        border-radius: ${borderRadius};
        margin-bottom: ${marginBottom};
        padding-left: 5px;
    `;

    return (
        <Input type={type} value={value} onChange={(e) => { onChange(e); } } />
    )
};

export default Input;