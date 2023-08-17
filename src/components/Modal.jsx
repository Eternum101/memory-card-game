import React from "react";

const Modal = ({ isOpen, closeModal, content}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">{content}</div>
                <button className="modal-restart-button" onClick={closeModal}>Restart</button>
            </div>
        </div>
    )
}

export default Modal;