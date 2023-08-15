import React, { useState, useEffect } from "react";
import Card from "./Card";
import characters from "./characters";

function shuffle(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const GameBoard = ({ level, setLevel, score, setScore, maxScorePerLevel, maxLevels }) => {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    
    useEffect(() => {
      const shuffledCharacters = shuffle([...characters]);
      setCards(shuffledCharacters);
      setFlippedCards([]);
    }, [level]);
  
    const handleCardClick = (clickedCharacter) => {
      if (flippedCards.length === 0) {
        setFlippedCards([clickedCharacter]);
        setCards(shuffle(cards));
      } else if (flippedCards.length === 1) {
        if (flippedCards[0].id !== clickedCharacter.id) {
          setFlippedCards([]);
          setScore(score + 1);
        } else {
          setFlippedCards([]);
          if (score + 1 >= maxScorePerLevel) {
            if (level === maxLevels) {
              // Handle game completion or victory
            } else {
              setLevel(level + 1);
              setScore(0);
            }
          }
        }
      }
    };
  
    return (
      <div className="gameboard-container">
        {cards.map((characterData) => (
          <Card
            key={characterData.id}
            characterData={characterData}
            onCardClick={handleCardClick}
            flippedCards={flippedCards}
          />
        ))}
      </div>
    );
  };

export default GameBoard;
