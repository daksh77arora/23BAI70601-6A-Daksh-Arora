import { useState } from 'react';

export default function Header() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    document.body.className = theme === 'light' ? 'dark' : 'light';
  };

  return (
    <header className={`header ${theme}`}>
      <div className="container">
        <h1>My First SPA</h1>
        <p>Created with React & Vite</p>
        <button onClick={toggleTheme} className="theme-btn">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
        </button>
      </div>
    </header>
  );
}