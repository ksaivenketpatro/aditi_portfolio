import React, { useState, useEffect } from 'react';
import './TextCycle.css';

function TextCycle() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "Hi!",
    "I'm Aditi Golecha",
    "Part II Architect Assistant",
    <> {/* Changed to fragment */}
      Aditi Golecha
      <span className="final-subtitle">Part II Architect Assistant</span>
    </>
  ];

  useEffect(() => {
    const transitionTimes = [1200, 1500, 1800];
    if (currentTextIndex < 3) {
      const timer = setTimeout(() => {
        setCurrentTextIndex((prev) => prev + 1);
      }, transitionTimes[currentTextIndex]);
      
      return () => clearTimeout(timer);
    }
  }, [currentTextIndex]);

  return (
    <div className="text-container">
      {texts.map((text, index) => (
        <div 
          key={index}
          className={`text-item ${
            index === currentTextIndex ? 'visible' : 'hidden'
          } ${index === 3 ? 'final' : ''}`}
        >
          {text}
        </div>
      ))}
    </div>
  );
}

export default TextCycle;