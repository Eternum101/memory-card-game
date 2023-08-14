import React from "react";
import Card from "./Card";
import characters from "./characters";

const GameBoard = () => {
    return (
        <div className="gameboard-container">
            {characters.map(character => (
                <Card key={character.id} characterData={character} />
            ))}
        </div>
    );
}

export default GameBoard;

