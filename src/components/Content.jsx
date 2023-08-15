import React from "react";
import GameBoard from "./GameBoard";

const Content = ({ level, setLevel, score, setScore, maxScorePerLevel, maxLevels }) => {
    return (
        <div className="content">
             <GameBoard
                level={level}
                setLevel={setLevel}
                score={score}
                setScore={setScore}
                maxScorePerLevel={maxScorePerLevel}
                maxLevels={maxLevels}
            />
        </div>
    )
}

export default Content;