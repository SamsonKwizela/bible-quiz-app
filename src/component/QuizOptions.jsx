import React from 'react';

const QuizOptions = ({ options, onSelectOption }) => (
  <div className="grid grid-cols-1 gap-2">
    {options.map((option, index) => (
      <button
        key={index}
        className="p-2 bg-gray-200 hover:bg-gray-300 rounded"
        onClick={() => onSelectOption(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default QuizOptions;