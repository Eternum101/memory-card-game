import React, { useState, useEffect } from "react";
import Card from "./Card";
import characters from "./characters";
import Modal from "./Modal";

function getCardCount(difficulty) {
  if (difficulty === 'Easy') return 3;
  if (difficulty === 'Medium') return 4;
  if (difficulty === 'Hard') return 5;
  return 0;
}

const GameBoard = ({ level, setLevel, score, setScore, selectedDifficulty }) => {
  const [cards, setCards] = useState([]);
  const [chosenCards, setChosenCards] = useState(new Set());
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  useEffect(() => {
    const cardCount = getCardCount(selectedDifficulty);
    const shuffledCharacters = shuffleArray(characters).slice(0, cardCount);
    setCards(shuffledCharacters);
  }, [selectedDifficulty, level]);

  const handleCardClick = (clickedCharacter) => {
    if (chosenCards.has(clickedCharacter.id)) {
      setIsGameOver(true);
      return;
    }
  
    const newChosenCards = new Set(chosenCards);
    newChosenCards.add(clickedCharacter.id);
    setChosenCards(newChosenCards);
  
    if (!chosenCards.has(clickedCharacter.id)) {
      if (selectedDifficulty === 'Easy' && level < 5) {
        setLevel(level + 1);
      } else if (selectedDifficulty === 'Medium' && level < 7) {
        setLevel(level + 1);
      } else if (selectedDifficulty === 'Hard' && level < 10) {
        setLevel(level + 1);
      }
    }
  
    setScore(score + 1);
  
    const cardCount = getCardCount(selectedDifficulty);
    const shuffledCharacters = shuffleArray(characters);
    const selectedCharacters = shuffledCharacters.slice(0, cardCount);
    setCards(selectedCharacters);  

    if (selectedDifficulty === 'Easy' && level === 4) {
      setIsWin(true);
      return;
    } else if (selectedDifficulty === 'Medium' && level === 6) {
      setIsWin(true);
      return;
    } else if (selectedDifficulty === 'Hard' && level === 9) {
      setIsWin(true);
      return;
    }
  };
  
  const closeModal = () => {
    setIsGameOver(false);
    setIsWin(false);
  }
  
  return (
    <div className="gameboard-container">
      {cards.map((characterData) => (
        <Card
          key={characterData.id}
          characterData={characterData}
          onCardClick={() => handleCardClick(characterData)}
        />
      ))}
      <Modal isOpen={isGameOver} closeModal={closeModal} content={"Game Over! You've Selected a Previously Chosen Card"}/>
      <Modal isOpen={isWin} closeModal={closeModal} content={"Congratulations! You've Completed the Game!"}/>
    </div>
  );
};

export default GameBoard;
