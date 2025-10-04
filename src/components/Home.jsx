// Home.js
import { useState } from 'react';
import { flags } from '../flags';  // Ensure the flags import is correct

export function Home() {
  const [currentFlag, setCurrentFlag] = useState(getRandomFlag());
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  function getRandomFlag() {
    const randomIndex = Math.floor(Math.random() * flags.length);
    return flags[randomIndex];
  }

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.trim().toLowerCase() === currentFlag.name.toLowerCase()) {
      setScore(score + 1);
      setFeedback('Correct! 🎉');
    } else {
      setFeedback(`Wrong! The correct answer is ${currentFlag.name}`);
    }
    setCurrentFlag(getRandomFlag());
    setUserAnswer('');
  };

  return (
    <div>
      <div className="App">
        <div className="flag-container">
          <div className="flag-item">
            <img src={currentFlag.image} alt={currentFlag.name} className="flag-image" />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter country name"
            value={userAnswer}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>

        <div className="feedback">
          <p>{feedback}</p>
          <p>Score: {score}</p>
        </div>
      </div>
    </div>
  );
}
