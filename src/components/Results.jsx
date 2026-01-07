import React from 'react';

function Results({ horse, onRestart }) {
  return (
    <div className="results-container">
      <h1 className="results-title">Your Horse Spirit for 2026!</h1>
      
      <div className="horse-card" style={{ borderColor: horse.color }}>
        <div 
          className="horse-image-placeholder"
          style={{ backgroundColor: horse.color + '20' }}
        >
          <div className="image-text">
            {/* Placeholder for horse image */}
            🐴
            <p>Image: {horse.image}</p>
          </div>
        </div>
        
        <h2 className="horse-name" style={{ color: horse.color }}>
          {horse.name}
        </h2>
        
        <p className="horse-description">
          {horse.description}
        </p>

        <div className="traits-container">
          <h3>Your Traits:</h3>
          <div className="traits-list">
            {horse.traits.map((trait, index) => (
              <span key={index} className="trait-badge" style={{ backgroundColor: horse.color }}>
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="share-section">
        <p className="share-text">Share your result and celebrate the Year of the Horse! 🎉</p>
        <button className="restart-button" onClick={onRestart}>
          Take Quiz Again
        </button>
      </div>

      <div className="fireworks">🎆 ✨ 🎊 ✨ 🎆</div>
    </div>
  );
}

export default Results;
