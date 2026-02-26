"use client";
import React, { useState } from "react";
import "./SubscribeButton.css";

const SubscribeButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Successfully subscribed! 🎉');
        setEmail('');
        setName('');
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setMessage('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="subscribe-container">
      <div className="content">
        <div className="header">
          <h2 className="title">Stay Updated</h2>
          <p className="subtitle">Ne manquez aucune actualité du club ETIC</p>
        </div>

        <input
          type="text"
          placeholder="Enter your name"
          className="subscribe-input"
          aria-label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="subscribe-input"
          aria-label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          disabled={loading}
          className={`subscribe-button ${isHovered ? "hovered" : ""} ${loading ? "loading" : ""}`}
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
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>

        {message && (
          <div className={`subscribe-message ${message.includes('Success') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <p className="subscribe-info">
          Rejoignez notre communauté et restez informé des événements,
          formations et opportunités du club ETIC
        </p>
      </div>
    </div>
  );
};

export default SubscribeButton;