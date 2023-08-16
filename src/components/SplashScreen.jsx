import React from "react";
import logoImage from "../assets/img/logo.png";

const SplashScreen = ({ handleDifficultySelect }) => {
    return (
        <div className="splash-screen">
            <img src={logoImage} alt="Logo" className="logo"></img>
            <h1>Memory Card Game</h1>
            <div className="splash-button-container">
                <button onClick={() => handleDifficultySelect("Easy")}>Easy</button>
                <button onClick={() => handleDifficultySelect("Medium")}>Medium</button>
                <button onClick={() => handleDifficultySelect("Hard")}>Hard</button>
        </div>
        </div>
    )
}

export default SplashScreen;