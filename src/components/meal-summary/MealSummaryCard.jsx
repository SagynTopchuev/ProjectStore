import React from "react";
import styled from "styled-components";
export const MealSummaryCard = () => {
  return (
    <Container>
      <h5>Delicious Food, Delivered To You</h5>
      <Paragraph>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </Paragraph>
      <ParagraphTwo>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by  experienced chefs!
      </ParagraphTwo>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  width: 854px;
  height: 270px;
  top: 358px;
  background: #383838;
  border-radius: 16px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  h5 {
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;

    height: 54px;
    width: 586px;
    color: #ffffff;
    margin: 36px 134px 28px 134px;
    display: flex;
    justify-content: center;
  }
`;
const Paragraph = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  width: 746px;
  height: 48px;
  margin: 20px 54px;

  color: #ffffff;
`;
const ParagraphTwo = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  width: 774px;
  height: 48px;
  color: #ffffff;
  margin-left: 40px;
`;
