import React from "react";

const ScoreBoard = ({level, score, bestScore}) => {
    return (
    <div className="scores-container">
        <div className="level-count-container">
            <h1>{level}</h1>
            <h2>Level</h2>
        </div>
        <div className="score-count-container">
            <h1>{score}</h1>
            <h2>Score</h2>
        </div>
        <div className="bestscore-count-container">
            <h1>{bestScore}</h1>
            <h2>Best Score</h2>
        </div>
    </div>
    )
}

export default ScoreBoard;