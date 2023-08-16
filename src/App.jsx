import React, { useState } from 'react';
import Header from './components/Header'
import Content from './components/Content'
import SplashScreen from './components/SplashScreen';

function App() {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);

  const handleDifficultySelect = (difficulty) => {
    console.log("Selected Difficulty:", difficulty);
    setSelectedDifficulty(difficulty);
    setLevel(1); // Reset level when difficulty changes
    setScore(0); // Reset score when difficulty changes
};

  const maxScorePerLevel = 7;
  const maxLevels = 5;

  const showSplashScreen = selectedDifficulty === null;

  return (
    <>
      <video playsInline muted autoPlay loop className='background-video'>
        <source src='Mickey Mouse Background.mp4' type='video/mp4'/>
      </video>
      {!showSplashScreen && (
        <Header level={level} score={score} bestScore={10} />
      )}
      {showSplashScreen ? (
        <SplashScreen handleDifficultySelect={handleDifficultySelect} />
      ) : (
        <Content
          level={level}
          setLevel={setLevel}
          score={score}
          setScore={setScore}
          maxScorePerLevel={maxScorePerLevel}
          maxLevels={maxLevels}
          selectedDifficulty={selectedDifficulty}
        />
      )}
    </>
  )
}

export default App;
