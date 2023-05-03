import React from "react";
import styled from "styled-components";
import summaryImage from "../../assets/images/summary-image.png";
import { MealSummaryCard } from "./MealSummaryCard";
export const MealSummary = () => {
  return (
    <Container>
      <Image src={summaryImage} alt="summary" />
      <MealSummaryCard />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 101px; */
`;

const Image = styled.img`
  width: 100%;
  height: 432px;
`;
