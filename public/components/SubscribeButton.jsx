"use client"
import React, { useState } from 'react';
import './SubscribeButton.css';

const SubscribeButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    console.log('Subscribe button clicked!');
  };

  return (
    <div className="subscribe-container">
      <div className="content">
        <div className="header">
          <h2 className="title">Stay Updated</h2>
          <p className="subtitle">
            Ne manquez aucune actualité du club ETIC
          </p>
        </div>

        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="subscribe-button"
        >
          <svg 
            className="button-icon"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
            />
          </svg>
          Subscribe
        </button>

        <p className="subscribe-info">
          Rejoignez notre communauté et restez informé des événements, 
          formations et opportunités du club ETIC
        </p>
      </div>
    </div>
  );
};

export default SubscribeButton;