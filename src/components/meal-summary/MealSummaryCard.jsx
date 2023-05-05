import React from "react";
import styled from "styled-components";
export const MealSummaryCard = () => {
  return (
    <Container>
      <h5>Delicious Food, Delivered To You</h5>
      <Paragraph>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </Paragraph>
      <Paragraph>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </Paragraph>
    </Container>
  );
};

const Container = styled.div`
  width: 854px;
  height: 270px;
  position: absolute;
  top: 358px;

  background: #383838;
  border-radius: 16px;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
  color: white;
  padding: 36px 40px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  h5 {
    font-weight: 600;
    font-size: 36px;
  }
`;
const Paragraph = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
