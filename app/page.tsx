"use client"
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async () => {
    if (!email || !email.includes('@')) {
      alert('Enter your E-Mail');
      return;
    }
    setIsSubmitting(true);

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.1) {
            resolve(true);
          } else {
            reject(new Error('Failed'));
          }
        }, 1000);
      });

      window.location.href = '/success';
      
    } catch (error) {
      window.location.href = '/Error';
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEmailSubmit();
    }
  };

  return (
    <main>
      <header>
        <a href="https://etic-club.net/">
          <img src="/img/logo.png" alt="Logo ETIC" className="logo" />
        </a>
      </header>

      <div className="form-container">
        {/* Titre et sous-titre */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#0f9f96',
            marginBottom: '0.5rem'
          }}>
            Stay Updated
          </h1>
          <p style={{ 
            color: '#6b7280', 
            fontSize: '1rem',
            marginBottom: '0'
          }}>
            Ne manquez aucune actualité du club ETIC
          </p>
        </div>

        {/* Champ Email */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="email">
            E-Mail<span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter your E-Mail"
            required
            disabled={isSubmitting}
          />
        </div>

        {/* Bouton Subscribe */}
        <button
          onClick={handleEmailSubmit}
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '16px 32px',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '18px',
            border: 'none',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            background: 'linear-gradient(to right, #ff6b35, #00d9ff)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease',
            opacity: isSubmitting ? 0.6 : 1
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            if (!isSubmitting) {
              e.currentTarget.style.background = 'linear-gradient(to right, #0d9488, #14b8a6)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            if (!isSubmitting) {
              e.currentTarget.style.background = 'linear-gradient(to right, #ff6b35, #00d9ff)';
              e.currentTarget.style.transform = 'scale(1)';
            }
          }}
        >
          {isSubmitting ? 'Inscription...' : 'Subscribe'}
        </button>

        {/* Info text */}
        <p style={{ 
          fontSize: '12px', 
          color: '#9ca3af', 
          marginTop: '24px',
          textAlign: 'center'
        }}>
          Rejoignez notre communauté et restez informé des événements, 
          formations et opportunités du club ETIC
        </p>
      </div>
    </main>
  );
}
