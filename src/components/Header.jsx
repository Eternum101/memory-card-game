import React from "react";
import logoImage from "../assets/img/logo.png";
import ScoreBoard from "./ScoreBoard";

const Header = ({ level, score, bestScore }) => {
    return (
        <header>
            <div className="header">
                <img src={logoImage} alt="Logo"></img>
            </div>
            <ScoreBoard level={level} score={score} bestScore={bestScore} />
        </header>
    )
}

export default Header;