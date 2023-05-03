import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/Vector.svg";
export const OrderBusket = ({ children }) => {
  return (
    <Button>
      <BasketIcon />
      <OrderBasketTitle>{children}</OrderBasketTitle>
      <OrderBasketCount>7</OrderBasketCount>
    </Button>
  );
};
const Button = styled.button`
  width: 249px;
  height: 59px;
  background-color: #5a1f08;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  &:hover {
    background-color: #4d1601;
  }
  &:active {
    background-color: #993108;
  }
`;
const OrderBasketTitle = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #ffffff;
  margin-left: 13.7px;
`;
const OrderBasketCount = styled.span`
  padding: 5px 18px;
  background: #8a2b06;
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  margin-left: 24px;
`;
