import React from 'react';
import styled from 'styled-components';

const Button = ({
    text,
    textColor,
    borderColor,
    width,
    height,
    borderRadius,
    fontSize,
    fontWeight
 }) => {
    const DynamicButton = styled.button`
        background-color: inherit;
        cursor: pointer;

        color: ${textColor}
        border: 1.4px solid ${borderColor};

        width: ${width}
        height: ${height}
        border-radius: ${borderRadius};

        font-size: ${fontSize};
        font-weight:  ${fontWeight};
    `;
    return (
        <DynamicButton>{text}</DynamicButton>
    );
};

export default Button;