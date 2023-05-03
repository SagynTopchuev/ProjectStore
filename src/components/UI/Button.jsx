import React from "react";
import styled from "styled-components";

export const Button = ({
  children,
  width,
  height,
  borderRadius,
  bgColor,
  fontSize,
  fontWeight,
  hover,
  active,
}) => {
  return (
    <ButtonAdd
      bgColor={bgColor}
      width={width}
      height={height}
      borderRadius={borderRadius}
      fontSize={fontSize}
      fontWeight={fontWeight}
      hover={hover}
      active={active}
    >
      {children}
    </ButtonAdd>
  );
};
const ButtonAdd = styled.button`
  width: ${(el) => el.width};
  height: ${(el) => el.height};
  border-radius: ${(el) => el.borderRadius};
  background-color: ${(el) => el.bgColor};
  font-size: ${(el) => el.fontSize};
  font-weight: ${(el) => el.fontWeight};

  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  &:hover {
    background-color: ${(el) => el.hover};
  }
  &:active{
    background-color:${(el) => el.active} ;
  }
  &::before {
    content: "+";
    margin-right: 12.7px;
    font-weight: 100;
    font-size: 20px;
  }
`;
