import React, { useState } from 'react';

const Card = ({ number, question, A, B, C, img, answer, countPoint }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [questionAnswered, setQuestionAnswered] = useState(false);

  function flipCard() {
    if (!questionAnswered) {
      setIsFlipped(!isFlipped);
      setIsExpanded(!isExpanded);
    }
  }

  const handleClick = (selectedOption) => {
    if (!questionAnswered) {
      setSelectedAnswer(selectedOption);
      if(selectedOption === answer){
        setQuestionAnswered(true);
        setShowResult(true);
        countPoint(selectedOption, answer, number);
        showAnswer();
      }
      else{
        countPoint(selectedOption, answer, number);
      }
    }
  };

  function showAnswer(){
    alert(`Rätt svar är ${answer}`)
  }

  return (
    <div
      className={`card ${isFlipped ? 'is-flipped' : ''} ${
        isExpanded ? 'is-expanded' : ''
      } ${questionAnswered ? 'question-answered' : ''}`}
      onClick={flipCard}
    >
      <div className="card__inner">
        <div className="card__face card__face--front">
          <h2>{number}</h2>
        </div>
        <div className="card__face card__face--back">
          <div className="card__content">
            <div className="card__header">
              <h2>{number} Poäng</h2>
            </div>
            <div className="card__body">
              <img src={img} className="picture" alt="Card" />
              <h3>{question}</h3>
            </div>
            <div className="card__body">
              <p onClick={() => handleClick('A')}>{A}</p>
              <p onClick={() => handleClick('B')}>{B}</p>
              <p onClick={() => handleClick('C')}>{C}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;



