import React, { useRef } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 300px;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const OpenModalButton = styled.button`
  background-color: #04AA6D;
  width: 150px;
  height: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`;

const FileInputWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const StyledFileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const CustomFileInputButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function Modal({ isOpen, onClose, onFileSelect }) {
  const fileInputRef = useRef(null); 

  if (!isOpen) {
    return null;
  }

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      onFileSelect(event.target.files[0]);
    }
    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <FileInputWrapper>
          <StyledFileInput
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <CustomFileInputButton onClick={handleButtonClick}>
            Выберите файл
          </CustomFileInputButton>
        </FileInputWrapper>
      </ModalContent>
    </ModalOverlay>
  );
}

function UIModal() {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFileSelected = (file) => {
    setSelectedFile(file);
    console.log('Выбранный файл:', file);
  };

  return (
    <>
      <OpenModalButton onClick={openModal}>Открыть окно</OpenModalButton>
      <Modal isOpen={showModal} onClose={closeModal} onFileSelect={handleFileSelected}>
      </Modal>
      {selectedFile && <p>Выбран файл: {selectedFile.name}</p>}
    </>
  );
}

export default UIModal;