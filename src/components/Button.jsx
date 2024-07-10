// src/components/Button.js
import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ children, size, color, onClick }) => {
  return (
    <StyledButton size={size} color={color} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: ${({ size }) => (size === 'large' ? '10px 20px' : size === 'medium' ? '8px 16px' : '6px 12px')};
  font-size: ${({ size }) => (size === 'large' ? '16px' : size === 'medium' ? '14px' : '12px')};
  background-color: ${({ color }) => (color === 'primary' ? '#4caf50' : '#f44336')};
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;

  ${({ color }) =>
    color === 'negative' &&
    css`
      background-color: #f44336;
    `}
`;

export default Button;
