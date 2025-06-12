import React from 'react';

const EndScreen = ({ score, totalQuestions, onRestart }) => (
  <div className="text-center">
    <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
    <p>Your Score: {score} / {totalQuestions}</p>
    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onRestart}>
      Restart Quiz
    </button>
  </div>
);