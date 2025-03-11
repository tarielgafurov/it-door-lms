import styled from "styled-components";
import React, { forwardRef } from "react";


const InputStyled = styled.input.attrs(props => ({
  placeholder: props.placeholder,}))`
  width: 20%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 18px;
  outline: none;
  
  &: :placeholder {
    color: gray;
    opacity: 0.7;
  }

  &:focus {
    border-bottom: 2px solid #0056b3;
  }

 
  ${(props) =>
    props.variant === "a" &&
    `
    border: 2px solid gray;
    border-radius: 5px;
    padding: 10px;
    text-align: left;

     &:focus {
    border: 2px solid #0056b3;
  }
  `}
`;

export const Input=forwardRef((props)=>{
  return( 
   < InputStyled placeholder={props.placeholder} variant={props.variant} ref={props.ref} {...props} type={props.text} value={props.value}/>
     )});
