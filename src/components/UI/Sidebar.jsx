import React from "react";
import styled from "styled-components";
import img1 from '../../assets/images/Img1.png';
import imgages from '../../assets/images/images_1.png';
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <SidebarContainer>
      <MenuItem>
        <img src={img1} alt="Сурот-1" />
        <StyledLink to="/Grouplist">Группы</StyledLink>
      </MenuItem>
      <MenuItem>
        <img src={imgages} alt="Сурот-2" />
        <StyledLink to="/Instructors">Инструкторы</StyledLink>
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
const SidebarContainer = styled.div`
  width: 200px;
  height: 100vh;
  background: #f0f0f0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: fixed; 
  right: 0; 
  top: 0; 
  z-index: 1000; 
`;

const MenuItem = styled.div`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background: #ddd;
  }
  &>img{
     margin-right: 10px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

