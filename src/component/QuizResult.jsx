import React from 'react';

const QuizResult = ({ correctAnswers, totalQuestions }) => (
  <div className="mt-6 text-center">
    <h3 className="text-lg">You got {correctAnswers} out of {totalQuestions} correct!</h3>
  </div>
);

export default QuizResult;