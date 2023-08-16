import React, { useState } from "react";
import GameBoard from "./GameBoard";

const Content = ({ level, setLevel, score, setScore, maxScorePerLevel, maxLevels, selectedDifficulty }) => {

    return (
        <div className="content">
                <GameBoard
                    level={level}
                    setLevel={setLevel}
                    score={score}
                    setScore={setScore}
                    maxScorePerLevel={maxScorePerLevel}
                    maxLevels={maxLevels}
                    selectedDifficulty={selectedDifficulty}
                />
        </div>
    );
}

export default Content;
