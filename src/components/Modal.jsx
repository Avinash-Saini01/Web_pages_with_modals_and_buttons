// src/components/Modal.js
import React from 'react';
import styled from 'styled-components';

const Modal = ({ show, onClose, children, closeOnOverlayClick }) => {
  return (
    <>
      {show && (
        <Overlay onClick={closeOnOverlayClick ? onClose : undefined}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export default Modal;
