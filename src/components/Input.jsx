// components/Input.jsx
import React from 'react';
import styled from 'styled-components';

const Input = ({ label, type = 'text', value, onChange }) => {
  return (
    <InputWrapper>
      <label>{label}</label>
      <StyledInput type={type} value={value} onChange={onChange} />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const StyledInput = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default Input;