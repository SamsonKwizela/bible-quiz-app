import React from 'react';

const StartScreen = ({ onStart }) => (
  <div className="text-center">
    <h1 className="text-3xl font-bold mb-6">Welcome to the Bible Quiz</h1>
    <button className="px-6 py-3 bg-green-600 text-white rounded" onClick={onStart}>
      Start Quiz
    </button>
  </div>
);

export default StartScreen;