import React from "react";
import logoImage from "../assets/img/logo.png";
import ScoreBoard from "./ScoreBoard";

const Header = () => {
    return (
        <header>
            <div className="header">
                <img src={logoImage} alt="Logo"></img>
            </div>
            <ScoreBoard/>
        </header>
    )
}

export default Header;