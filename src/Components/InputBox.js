import React from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

const InputBox = ({ ...props }) => {
  return (
    <>
      <Input {...props}></Input>
    </>
  );
};

export default InputBox;

const Input = styled.input`
  width: 100%;
  margin: ${props => props.margin || "5px 0"};
  height: ${props => props.height || "48px"};
  font-size: ${props => props.size || "17px"};
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid ${props => props.borderColor || "#efefef"};
  border-radius: ${props => props.radius || ""}
  transition: 0.4s;
  color: rgba(0, 0, 0, 0.84);
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  :hover {
    border: 1px solid black;
    transition: border 0.4s;
  }
  :focus {
    border: 1px solid ${color.blue};
  }
  :disabled {
    background-color: #edebeb;
    border: 1px solid rgba(0, 0, 0, 0.16);
    transition: 0.4s;
  }
`;
