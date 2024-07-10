// src/components/Form.js
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = () => {
  const [name, setName] = useState('new button');
  const [price, setPrice] = useState('10');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify({ name, price }));
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button type="submit">Save</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    display: flex;
    justify-content: space-between;
    width: 300px;

    input {
      margin-left: 10px;
    }
  }

  button {
    width: 100px;
    padding: 5px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
`;

export default Form;
