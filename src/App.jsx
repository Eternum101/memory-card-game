// Import React, Header, Content & SplashScreen
import React, { useState } from 'react';
import Header from './components/Header'
import Content from './components/Content'
import SplashScreen from './components/SplashScreen';

function App() {
  // Defining state variables
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  // Handles the selection of game difficulty
  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setLevel(0);
    setScore(0);
  };

  // Resets the selected difficulty, level and score when the logo is clicked
  const handleLogoClick = () => {
    setSelectedDifficulty(null);
    setLevel(0);
    setScore(0);
  }
  
  // Shows splash screen if no difficulty is selected
  const showSplashScreen = selectedDifficulty === null;

  // JSX code to display app
  return (
    <>
      <video playsInline muted autoPlay loop className='background-video'>
        <source src='Mickey Mouse Background.mp4' type='video/mp4'/>
      </video>
      {!showSplashScreen && (
        <Header level={level} score={score} bestScore={bestScore} onLogoClick={handleLogoClick} />
      )}
      {showSplashScreen ? (
        <SplashScreen handleDifficultySelect={handleDifficultySelect} />
      ) : (
        <Content
          level={level}
          setLevel={setLevel}
          score={score}
          setScore={setScore}
          selectedDifficulty={selectedDifficulty}
          bestScore={bestScore}
          setBestScore={setBestScore}
        />
      )}
    </>
  )
}

export default App;
