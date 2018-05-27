import React from 'react';
import styled from 'styled-components';

const Button = ({
    text,
    textColor,
    borderColor,
    backgroundColor,
    width,
    height,
    borderRadius,
    fontSize,
    fontWeight,
    outLine,
    children
 }) => {
    const DynamicButton = styled.button`
        background-color: ${backgroundColor? backgroundColor : 'inherit'};
        cursor: pointer;

        color: ${textColor}
        border: 1.4px solid ${borderColor};

        width: ${width}
        height: ${height}
        border-radius: ${borderRadius};

        font-size: ${fontSize};
        font-weight:  ${fontWeight};

        outline: ${outLine ? outLine : 'undefined'};
    `;
    return (
        <DynamicButton>{children}</DynamicButton>
    );
};

export default Button;