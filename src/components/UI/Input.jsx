import styled from "styled-components"


const InputStyled = styled.input`
  width: 25%;
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

  export const Input=(props)=>{
    return( 
     < InputStyled placeholder={props.placeholder} type={props.text} value={props.value}>{props.children}</InputStyled>
       
    )
  }