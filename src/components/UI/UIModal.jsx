import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate, BrowserRouter, Routes, Route } from 'react-router-dom';

const ModalButton = styled.button`
    width: 120px;
    margin: 10px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    cursor: pointer;
`;

const ModalWidow = styled.div`
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
    padding: 20px;
    border-radius: 5px;
    max-width: 500px;
    width: 90%;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

function UIModal({ title = "Modal Title", content = "Modal Content Goes Here" }) {
    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    const modalRef = useRef(null);

    const openModal = () => {
        setModalOpen(true);
        setTimeout(() => {
            if (modalRef.current) {
                const firstInteractiveElement = modalRef.current.querySelector('button');
                if (firstInteractiveElement) {
                    firstInteractiveElement.focus();
                }
            }
        }, 0);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleSave = () => {
        console.log('Данные сохранены');
        setModalOpen(false);
        navigate('/saved');
    };

    const handleCancel = () => {
        console.log('Изменения отменены');
        setModalOpen(false);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && modalOpen) {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [modalOpen]);

    return (
        <div>
            <ModalButton onClick={openModal}>Open Modal</ModalButton>
            {modalOpen && (
                <ModalWidow onClick={closeModal} aria-modal="true" role="dialog">
                    <ModalContent onClick={(e) => e.stopPropagation()} ref={modalRef}>
                        <h2>{title}</h2>
                        <p>{content}</p>
                        <ButtonContainer>
                            <ModalButton onClick={handleSave}>Save</ModalButton>
                            <ModalButton onClick={handleCancel}>Cancel</ModalButton>
                        </ButtonContainer>
                    </ModalContent>
                </ModalWidow>
            )}
        </div>
    );
}

function SavedPage() {
    return (
        <div>
            <h1>Saved Page</h1>
            <p>Данные успешно сохранены!</p>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UIModal />} />
                <Route path="/saved" element={<SavedPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;