import React from "react";
import gameOverImage from "../assets/img/gameover.webp";
import winImage from "../assets/img/win.webp";

const Modal = ({ isOpen, closeModal, content, modalColor, isWin }) => {
    if (!isOpen) return null;

    const h2Style = { backgroundColor: modalColor, color: "white" };
    const modalBackground = isWin ? `url(${winImage})` : `url(${gameOverImage})`;

    const modalStyle = {
        backgroundImage: modalBackground,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div className="modal-overlay">
            <div className="modal" style={ modalStyle }>
                <div className="modal-content">
                    <h2 style={h2Style}>{content}</h2>
                </div>
                <button className="modal-restart-button" onClick={closeModal}>Restart</button>
            </div>
        </div>
    )
}

export default Modal;