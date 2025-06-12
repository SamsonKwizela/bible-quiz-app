import React from 'react';
import QuizOptions from './QuizOptions';

const QuizQuestion = ({ question, options, onAnswer }) => (
  <div>
    <h3 className="text-xl font-semibold mb-4">{question}</h3>
    <QuizOptions options={options} onSelectOption={onAnswer} />
  </div>
);

export default QuizQuestion;