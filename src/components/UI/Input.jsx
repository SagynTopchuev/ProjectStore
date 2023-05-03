import React from "react";
import styled from "styled-components";

export const Input = ({ labelTitle }) => {
  return (
    <div>
      <LabelInput>
        {labelTitle}
        <InputNumber type="number" />
      </LabelInput>
    </div>
  );
};

const InputNumber = styled.input`
  width: 60px;
  height: 32px;
  font-weight: 500;
  border: 1px solid #d6d6d6;
  font-size: 16px;
  border-radius: 6px;
  line-height: 24px;
`;
const LabelInput = styled.label`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
`;
