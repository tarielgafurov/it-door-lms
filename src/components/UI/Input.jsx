import styled from "styled-components"
import React,{forwardRef} from "react";



const InputStyled = styled.input`
  width:370px;
  padding: 10px;
  margin: 10px 0;
  border:none;
  margin:auto;
  margin-top:10px;
  justify-content:center;
  display:flex;
  flex-direction:column;
  border-bottom:1px solid gray;
  font-size: 16px;
  outline:none;
  
  &:focus {
    border-bottom:2px solid #0056b3;

  }
`;

  export const Input=forwardRef((props,ref)=>{
    return( 
     < InputStyled placeholder={props.placeholder} ref={props.ref} {...props} type={props.text} value={props.value}/>
       )});
       Input.displayName ="Imput";
