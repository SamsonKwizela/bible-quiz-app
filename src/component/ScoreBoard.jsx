import React from 'react';

const ScoreBoard = ({ score, currentQuestion, totalQuestions }) => (
  <div className="flex justify-between items-center mb-4">
    <span>Score: {score}</span>
    <span>Question: {currentQuestion} / {totalQuestions}</span>
  </div>
);

export default ScoreBoard;
