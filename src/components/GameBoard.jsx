// Import React, Card, characters & Modal
import React, { useState, useEffect } from "react";
import Card from "./Card";
import characters from "./characters";
import Modal from "./Modal";

// Takes difficulty as an input and returns the number of cards
// for that difficulty
function getCardCount(difficulty) {
  if (difficulty === 'Easy') return 3;
  if (difficulty === 'Medium') return 4;
  if (difficulty === 'Hard') return 5;
  return 0;
}

const GameBoard = ({ level, setLevel, score, setScore, selectedDifficulty, bestScore, setBestScore }) => {
  
  // Defining state variables
  const [cards, setCards] = useState([]);
  const [chosenCards, setChosenCards] = useState(new Set());
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);

  // Shuffle functionality that uses the Fisher-Yates algorithm
  // to achieve the shuffling effect
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  // Updates the cards state based on changes in difficulty or level
  useEffect(() => {
    const cardCount = getCardCount(selectedDifficulty);
    const shuffledCharacters = shuffleArray(characters).slice(0, cardCount);
    setCards(shuffledCharacters);
  }, [selectedDifficulty, level]);

  // Handles the logic of clicking on a card by managing card clicks, updates the 
  // game state based on player actions, checks for win and game over conditions and 
  // handles progression of the game
  const handleCardClick = (clickedCharacter) => {
    if (chosenCards.has(clickedCharacter.id)) {
      setIsGameOver(true);
      return;
    }
    
    const newChosenCards = new Set(chosenCards);
    newChosenCards.add(clickedCharacter.id);
    setChosenCards(newChosenCards);
  
    if (!chosenCards.has(clickedCharacter.id)) {
      if (
        (selectedDifficulty === 'Easy' && level < 5) ||
        (selectedDifficulty === 'Medium' && level < 7) ||
        (selectedDifficulty === 'Hard' && level < 10)
      ) {
        setLevel(level + 1);
      }      
    }
  
    setScore(score + 1);

    if (score >= bestScore) {
      setBestScore(bestScore + 1)
    }
  
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

  // Resets the game state to its initial values
  const resetGame = () => {
    setLevel(0);
    setScore(0);
    setChosenCards(new Set());
    const cardCount = getCardCount(selectedDifficulty);
    const shuffledCharacters = shuffleArray(characters).slice(0, cardCount);
    setCards(shuffledCharacters);
  }
  
  // Closes the modal and calls the resetGame function
  const closeModal = () => {
    setIsGameOver(false);
    setIsWin(false);
    resetGame();
  }
  
  // JSX code to display gameboard
  return (
    <div className="gameboard-container">
      {cards.map((characterData) => (
        <Card
          key={characterData.id}
          characterData={characterData}
          onCardClick={() => handleCardClick(characterData)}
        />
      ))}
      <Modal
          isOpen={isGameOver || isWin}
          closeModal={closeModal}
          content={isWin ? "You Win!" : "Game Over"}
          modalColor={isWin ? "#007FFF" : "#d41515"}
          isWin={isWin}
      />
    </div>
  );
};

export default GameBoard;
