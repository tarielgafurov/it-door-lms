import React from 'react';
import styled from 'styled-components';

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
    z-index: 1000;
    margin-top: 60px;
`;

const ModalContent = styled.div`
    width: 600px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    text-align: center;
    position: relative;
    opacity: 0;
    transform: translateY(-20px);
    animation: fadeIn 0.3s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;

    &:first-child {
        background: #007bff;
        color: white;
    }

    &:last-child {
        background: #dc3545;
        color: white;
    }
`;

const FileInput = styled.input`
    margin-top: 20px;
    padding: 10px;
    font-size: 16px;
`;

function UIModal() {
    const [openModal, setOpenModal] = React.useState(false);
    const [fileName, setFileName] = React.useState("");

    const handleOverlayClick = (e) => {
        if (e.target.id === "overlay") {
            setOpenModal(false);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleUpload = () => {
        if (fileName) {
            alert(`Загружен файл: ${fileName}`);
        } else {
            alert('Пожалуйста, выберите файл для загрузки.');
        }
    };

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setOpenModal(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <div>
            <Button onClick={() => setOpenModal(true)}>Открыть модалку</Button>

            {openModal && (
                <ModalOverlay id="overlay" onClick={handleOverlayClick}>
                    <ModalContent>
                        <h2>Загрузить файл</h2>
                        <FileInput type="file" onChange={handleFileChange} />
                        <p>{fileName && `Выбран файл: ${fileName}`}</p>
                        <ButtonsContainer>
                            <Button onClick={handleUpload}>Загрузить</Button>
                            <Button onClick={() => setOpenModal(false)}>Закрыть</Button>
                        </ButtonsContainer>
                    </ModalContent>
                </ModalOverlay>
            )}
        </div>
    );
}

export default UIModal;
