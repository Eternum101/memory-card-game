// Import React, logoImage & ScoreBoard
import React from "react";
import logoImage from "../assets/img/logo.png";
import ScoreBoard from "./ScoreBoard";

const Header = ({ level, score, bestScore, onLogoClick }) => {

    // JSX code to display header
    return (
        <header>
            <div className="header" onClick={onLogoClick}>
                <img src={logoImage} alt="Logo"></img>
            </div>
            <ScoreBoard level={level} score={score} bestScore={bestScore} />
        </header>
    )
}

export default Header;