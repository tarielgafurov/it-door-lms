import React from 'react'
 import styled from 'styled-components'

const StyledButton =styled.button`
width:200px;
height:50px;
padding:12px;
margin-top:20px;
background-color:#116378;
color:white;
margin:auto;
margin-top:10px;
justify-content:center;
display:flex;
flex-direction:column;
font-size:18px;
border:none;
border-radius:5px;
cursor: pointer;
&:hover{
  background-color:#1b6476;
}


`



const Button = (props) => {
  
  return (
    <StyledButton>{props.children}</StyledButton>
  )
}

export default Button;
