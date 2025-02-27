import React from 'react';
import styled from 'styled-components';

import headerImage1 from '../assets/images/Group 3.svg';
import headerImage2 from '../assets/images/Ellipse 1.svg';  
import headerImage3 from '../assets/images/Толонбай у Доолот.svg';  
import headerImage4 from '../assets/images/notification.svg';  

const HeaderStyle = styled.header`
  background-color: #0B3852;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 20px;
  box-sizing: border-box;

  
  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center; 
    padding: 10px;
  }

  
  @media (max-width: 480px) {
    padding: 8px; 
    gap: 10px; 
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: start;
  width: 100%; 
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;

  
  @media (max-width: 768px) {
    justify-content: center; 
    gap: 10px; 
    width: 100%; 
  }
`;

const Img = styled.img`
  height: 24.3px;
  max-width: 100px;
  object-fit: contain;
`;

function Header() {
  return (
    <HeaderStyle>
      <Left>
        <Img src={headerImage1} alt="Logo" />
      </Left>
      <Right>
        <Img src={headerImage2} alt="Icon 1" />
        <Img src={headerImage3} alt="Icon 2" />
        <Img src={headerImage4} alt="Notification Icon" />
      </Right>
    </HeaderStyle>
  );
}

export default Header;
