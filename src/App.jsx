import React, { useState } from 'react';
import Header from './components/Header'
import Content from './components/Content'
import SplashScreen from './components/SplashScreen';

function App() {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setLevel(0);
    setScore(0);
  };

  const handleLogoClick = () => {
    setSelectedDifficulty(null);
    setLevel(0);
    setScore(0);
  }

  const showSplashScreen = selectedDifficulty === null;

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
