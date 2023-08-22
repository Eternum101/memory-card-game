// Import React & GameBoard
import React from "react";
import GameBoard from "./GameBoard";

const Content = ({ level, setLevel, score, setScore, selectedDifficulty, bestScore, setBestScore }) => {

    // JSX code to display content
    return (
        <div className="content">
                <GameBoard
                    level={level}
                    setLevel={setLevel}
                    score={score}
                    setScore={setScore}
                    selectedDifficulty={selectedDifficulty}
                    bestScore={bestScore}
                    setBestScore={setBestScore}
                />
        </div>
    );
}

export default Content;
