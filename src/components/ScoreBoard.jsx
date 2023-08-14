import React from "react";

const ScoreBoard = () => {
    return (
    <div className="scores-container">
        <div className="level-count-container">
            <h1>1</h1>
            <h2>Level</h2>
        </div>
        <div className="score-count-container">
            <h1>7</h1>
            <h2>Score</h2>
        </div>
        <div className="bestscore-count-container">
            <h1>10</h1>
            <h2>Best Score</h2>
        </div>
    </div>
    )
}

export default ScoreBoard;