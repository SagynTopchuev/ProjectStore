import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { backdropElement } from "../meals/Constants";
import { modalElement } from "../meals/Constants";

//** Вспомогательные компонент
const Backdrop = ({ onClose }) => {
  return <StyledBackdrop onClick={onClose}></StyledBackdrop>;
};

const ModalContent = ({ children }) => {
  return <StyledModalContent>{children}</StyledModalContent>;
};

export const Modal = ({children}) => {
  return (
    <>
      {createPortal(<Backdrop />, backdropElement)}
      {createPortal(<ModalContent>{children}</ModalContent>, modalElement)}
    </>
  );
};

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 105;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(3px);
`;

const StyledModalContent = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 110;
  animation: slide-down 300ms ease-out forwards;
  width: 40rem;
  left: calc(50% - 20rem);
`;
