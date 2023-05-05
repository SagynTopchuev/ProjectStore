import React from "react";
import { Constants } from "./Constants";
import styled from "styled-components";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import { ReactComponent as PlusIcon } from "../../assets/icons/plusIcon.svg";

export const Meals = () => {
  return (
    <Main>
      <Container>
        {Constants.map((el) => (
          <DivParentMap key={el.id}>
            <DivEl>
              <NameH4>{el.name}</NameH4>
              <span>{el.title}</span>
              <PriceH4>{el.price}</PriceH4>
            </DivEl>
            <DivUI>
              <Input labelTitle="Amount" />
              <Button icon={<PlusIcon />}>Add</Button>
            </DivUI>
          </DivParentMap>
        ))}
      </Container>
    </Main>
  );
};
const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 135px;
  width: 1039px;
  height: 564px;
  box-sizing: border-box;
  padding-top: 40px;
  background: #ffffff;
  border-radius: 16px;
`;
const DivParentMap = styled.div`
  width: 959px;
  padding-top: 24px;
  padding-bottom: 20px;
  border-bottom: 2px solid #d6d6d6;
  display: flex;
  justify-content: space-between;
  :last-child {
    border: none;
  }
`;
const DivEl = styled.div`
  width: 184px;
  height: 89px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    font-style: italic;
  }
`;
const DivUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  width: 155px;
  height: 85px;
  input {
    margin-left: 20px;
  }
`;
const PriceH4 = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ad5502;
`;
const NameH4 = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
`;
