import  { useState } from "react";
import styled from "@emotion/styled";
const Modal = ({ isOpen, onClose, children }) => {
  const [text, setText] = useState("");
  if (!isOpen) return null;
 
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Text1>
          <h2>Домашняя задания</h2>
        </Text1>
        <TextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder=""
          rows="4"
        />
        <StyleButton>
          <button>Отправить</button>
        </StyleButton>
       
        {children}
        <CloseButton onClick={onClose}>x</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};
export default Modal;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContent = styled.div`
  background: white;
  padding: 200px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  min-width: 350px;
  height: 160px;
  position: relative;
`;
const CloseButton = styled.button`
  color: #464343;
  background-color: white;
  border: none;
  border-radius: 5px;
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
    cursor: pointer;
`;
const Text1 = styled.div`
  position: absolute;
  right: 580px;
  bottom: 410px;
`;
const TextArea = styled.textarea`
  width: 589px;
  height: 165px;
  padding: 10px;
  border: 3px solid #878787;
  border-radius: 5px;
    resize: vertical;
  font-size: 16px;
 
`;
const StyleButton = styled.div`
  width: 300px;
  margin-top: 50px;
  &>button{
    width: 340px;
    height: 40px;
    background: #134764;
color: white;
cursor: pointer;
border-radius: 10px;
  }
`