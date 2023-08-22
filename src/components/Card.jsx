// Import React
import React, { useState } from "react";

const Card = ({ characterData, onCardClick }) => {

    // Defines state variable isFlipped
    const [isFlipped, setIsFlipped] = useState(false);

    // Toggles the isFlipped state when a card is clicked
    const handleCardClick = () => {
        if (!isFlipped) {
            setIsFlipped(true);
            onCardClick(characterData);
        }
    };

    // JSX code to display cards
    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
            <div className="card-inner">
                <div className="card-front">
                    <div className="image-container">
                        <img src={characterData.src} alt={characterData.name} />
                        <p>{characterData.name}</p>
                    </div>
                </div>
                <div className="card-back">
                </div>
            </div>
        </div>
    );
};

export default Card;
