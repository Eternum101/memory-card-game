import React, { useState } from 'react';
import Header from './components/Header'
import Content from './components/Content'

function App() {

  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const maxScorePerLevel = 7;
  const maxLevels = 5;
  
  return (
    <>
      {/* <video autoPlay loop muted className='background-video'>
        <source src='Mickey Mouse Background.mp4' type='video/mp4'/>
  </video>*/}
      <Header level={level} score={score} bestScore={10} />
      <Content
        level={level}
        setLevel={setLevel}
        score={score}
        setScore={setScore}
        maxScorePerLevel={maxScorePerLevel}
        maxLevels={maxLevels}
      />
    </>
  )
}

export default App;
