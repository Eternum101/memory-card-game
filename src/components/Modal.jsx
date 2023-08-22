// Import React, gameOverImage & winImage
import React from "react";
import gameOverImage from "../assets/img/gameover.webp";
import winImage from "../assets/img/win.webp";

// Generates styles and appearance based on provided props, showing a modal
// with custom header and background if open else return null to hide it
const Modal = ({ isOpen, closeModal, content, modalColor, isWin }) => {
    if (!isOpen) return null;

    const h2Style = { backgroundColor: modalColor, color: "white" };
    const modalBackground = isWin ? `url(${winImage})` : `url(${gameOverImage})`;

    const modalStyle = {
        backgroundImage: modalBackground,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    // JSX code to display modal
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