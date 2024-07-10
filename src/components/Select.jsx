// src/components/Select.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Select = ({ options, value, onChange }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (option) => {
    onChange(option);
    setShowOptions(false);
  };

  return (
    <SelectContainer>
      <SelectedValue onClick={() => setShowOptions(!showOptions)}>
        {value}
      </SelectedValue>
      {showOptions && (
        <Options>
          {options.map((option) => (
            <Option key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </Options>
      )}
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  position: relative;
  width: 200px;
`;

const SelectedValue = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;
`;

const Options = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 3px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const Option = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;

export default Select;
