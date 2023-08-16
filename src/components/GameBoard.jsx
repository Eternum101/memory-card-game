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

function getCardCount(difficulty) {
  if (difficulty === 'Easy') return 4;
  if (difficulty === 'Medium') return 6;
  if (difficulty === 'Hard') return 8;
  return 0; // Default value in case of unexpected difficulty
}

const GameBoard = ({ level, setLevel, score, setScore, maxScorePerLevel, maxLevels, selectedDifficulty }) => {
  const [cards, setCards] = useState([]);
  const [previousCard, setPreviousCard] = useState(null);

  useEffect(() => {
    console.log("Selected Difficulty:", selectedDifficulty);
    
    const shuffledCharacters = shuffle([...characters]);
    const cardCount = getCardCount(selectedDifficulty);
    console.log("Card Count:", cardCount); // Log the card count
    
    setCards(shuffledCharacters.slice(0, cardCount));
    setPreviousCard(null);
  }, [level, selectedDifficulty]);

  const handleCardClick = (clickedCharacter) => {
    if (previousCard === null) {
      setPreviousCard(clickedCharacter);
    } else {
      if (previousCard.id !== clickedCharacter.id) {
        setPreviousCard(null);
        setScore(score + 1);
      } else {
        setPreviousCard(null);
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
    setCards(shuffle(cards));
  };

  return (
    <div className="gameboard-container">
      {cards.map((characterData) => (
        <Card
          key={characterData.id}
          characterData={characterData}
          onCardClick={handleCardClick}
        />
      ))}
    </div>
  );
};

export default GameBoard;
