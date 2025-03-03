import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import imag7 from "../../assets/image 7.png";
import imag8 from "../../assets/Frame 117.png";
import imag9 from "../../assets/Frame 118.png";
import Modal from "./Modal";
const Homework = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef(null);
  const handleFileClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div>
      <Container1>
        <div>
          <div>
          <TextB>Полный курс по JAVA /</TextB>
          </div>
         
          <div>
            <b>
              <StyledLink to="/HtmlPage">
                HTML-боюнча верстка кылуу....
              </StyledLink>
            </b>
          </div>
        </div>
      </Container1>
      <Container2>
        <h2>Домашняя задания</h2>
      </Container2>
      <Container3>
        <b>1 - Java[прим. 1] — Верстка кылуу</b>
      </Container3>
      <Right>
        <img src={imag7} alt="Description" />
      </Right>
      <Left>
        <p>2 - Java[прим. 1] — Верстка кылуу код жазуу</p>
      </Left>
      <Left1>
        <p>3 - Java[прим. 1] — тудулист жасоо</p>
      </Left1>
      <Roter>
        <ImageWrapper>
          <Image onClick={() => setIsModalOpen(true)} src={imag8} alt="Сүрөт 1" />
          <Text>Текстовый ответ</Text>
        </ImageWrapper>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <ImageWrapper>
          <Image src={imag9} alt="Сүрөт 2" onClick={handleFileClick} />
          <Text>Загрузить файл</Text>
          <HiddenFileInput type="file" ref={fileInputRef} />
        </ImageWrapper>
      </Roter>
    </div>
  );
};
export default Homework;
const Container1 = styled.div`
  width: 100%;
  margin-top: 50px;
  position: relative;
  left: 10px;
  & > div {
    display: flex;
    & > div {
      color: #164b69;
    }
  }
 
`;
const TextB = styled.b`
  color: #878787;
`
const Container2 = styled.div`
  display: flex;
  margin-top: 20px;
  color: #164b69;
  position: relative;
  left: 30px;
  top: 30px;
`;
const Container3 = styled.div`
  display: flex;
  margin-top: 25px;
  position: relative;
  left: 30px;
  top: 30px;
  & > b{
    color:  #373737;
   
  }
`;
const Right = styled.div`
  display: flex;
  margin-top: 25px;
  position: relative;
  left: 30px;
  top: 30px;
`;
const Left = styled.div`
  display: flex;
  margin-top: 40px;
  position: relative;
  left: 30px;
  top: 30px;
`;
const Left1 = styled.div`
  display: flex;
  margin-top: 40px;
  position: relative;
  left: 30px;
  top: 30px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
`;
const Roter = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
`;
const Text = styled.p`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
`;
const HiddenFileInput = styled.input`
  display: none;
`;