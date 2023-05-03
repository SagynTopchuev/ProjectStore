import React from "react";
import styled from "styled-components";
import { OrderBusket } from "./OrderBusket";

export const Header = () => {
  return (
    <header>
      <Container>
        <h1>ReactMeals</h1>
        <OrderBusket>Your Cart</OrderBusket>
      </Container>
    </header>
  );
};

const Container = styled.section`
  height: 101px;
  width: 100%;
  background-color: #8a2b06;
  padding: 0 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin-top: -101px;
  position: fixed;
  z-index: 100;

`;
