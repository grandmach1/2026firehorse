import React from 'react';

function Quiz({ question, questionNumber, totalQuestions, onAnswer }) {
  const handleAnswerClick = (answerScores) => {
    onAnswer(answerScores);
  };

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        ></div>
      </div>
      
      <div className="question-counter">
        Question {questionNumber} of {totalQuestions}
      </div>

      <h2 className="question-text">{question.question}</h2>

      <div className="answers-grid">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className="answer-button"
            onClick={() => handleAnswerClick(answer.scores)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
