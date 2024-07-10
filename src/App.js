// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Modal from './components/Modal';
import Select from './components/Select';
import Form from './components/Form';

const App = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [selectValue1, setSelectValue1] = useState('React');
  const [selectValue2, setSelectValue2] = useState('React');
  const [inputValue, setInputValue] = useState('');

  const handlePrimaryButtonClick = () => {
    alert('Make buttons');
  };

  const handleNegativeButtonClick = () => {
    const userInput = prompt('Is it Hard?', '');
    if (userInput !== null) {
      console.log('User input:', userInput);
    }
  };

  return (
    <Container>
      <Section>
        <h2>Button</h2>
        <div>
          <Button size="large" color="primary" onClick={handlePrimaryButtonClick}>
            Large Primary Button
          </Button>
          <Button size="medium" color="primary">
            Medium
          </Button>
          <Button size="small" color="primary">
            Small
          </Button>
        </div>
        <div>
          <Button size="large" color="negative" onClick={handleNegativeButtonClick}>
            Large Negative Button
          </Button>
          <Button size="medium" color="negative">
            Medium
          </Button>
          <Button size="small" color="negative">
            Small
          </Button>
        </div>
      </Section>

      <Section>
        <h2>Input</h2>
        <Form inputValue={inputValue} setInputValue={setInputValue} />
      </Section>

      <Section>
        <h2>Modal</h2>
        <Button size="medium" color="primary" onClick={() => setModal1Open(true)}>
          Open Modal 1
        </Button>
        <Button size="medium" color="negative" onClick={() => setModal2Open(true)}>
          Open Modal 2
        </Button>

        <Modal show={modal1Open} onClose={() => setModal1Open(false)} closeOnOverlayClick={false}>
          <h2>Modal 1</h2>
          <p>There are two close and confirm buttons, and the modal does not close when you click the outside area.</p>
          <Button size="small" color="negative" onClick={() => setModal1Open(false)}>
            Close
          </Button>
          <Button size="small" color="primary" onClick={() => console.log('Confirmed')}>
            Confirm
          </Button>
        </Modal>

        <Modal show={modal2Open} onClose={() => setModal2Open(false)} closeOnOverlayClick={true}>
          <h2>Modal 2</h2>
          <p>There is one close button, and the modal closes when you click the outside area.</p>
          <Button size="small" color="negative" onClick={() => setModal2Open(false)}>
            Close
          </Button>
        </Modal>
      </Section>

      <div>
        <h2>Select</h2>
        <SelectContainer>
          <Select options={['React', 'Java', 'Spring', 'React-Native']} value={selectValue1} onChange={setSelectValue1} />
          <Select options={['React', 'Java']} value={selectValue2} onChange={setSelectValue2} />
        </SelectContainer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 40px;
  padding: 10px;

  h2 {
    margin-bottom: 20px;
  }

  button + button {
    margin-left: 10px;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export default App;
