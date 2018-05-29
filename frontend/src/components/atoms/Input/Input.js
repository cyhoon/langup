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
  ...rest
}) => {
    // styled component를 사용하면 매번 새로고침할때마다 className이 변경됨
    // 또한 상위 컴포넌트에서 받아오는 props가 input을 통해 업데이트되기 때문에
    // 리플래쉬가 일어나서 input focus가 유지되지 못하는 문제가 있음..
    // 그래서 일단은 inline-style로 해결하려고함.

    // const Input = styled.input`
    //     display: ${display};
    //     width: ${width};
    //     height: ${height};
    //     outline: ${outline};
    //     border: ${border};
    //     border-radius: ${borderRadius};
    //     margin-bottom: ${marginBottom};
    //     padding-left: 5px;
    // `;

    const inputStyle = {
        display,
        width,
        height,
        outline,
        border,
        borderRadius,
        marginBottom,
        paddingLeft: '5px'
    };

    return (
        <input style={inputStyle} type={type} {...rest} />
    );
};

export default Input;