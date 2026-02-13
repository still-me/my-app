import { useState } from 'react';
import './App.css';

function Flower({ color, delay, duration }) {
  return (
    <div className="flower" style={{
      '--flower-color': color,
      '--delay': `${delay}s`,
      '--duration': `${duration}s`
    }}>
      <svg width="80" height="80" viewBox="0 0 40 40">
        {/* Petals */}
        <circle cx="20" cy="5" r="8" fill={color} />
        <circle cx="32" cy="10" r="8" fill={color} />
        <circle cx="35" cy="20" r="8" fill={color} />
        <circle cx="32" cy="30" r="8" fill={color} />
        <circle cx="20" cy="35" r="8" fill={color} />
        <circle cx="8" cy="30" r="8" fill={color} />
        <circle cx="5" cy="20" r="8" fill={color} />
        <circle cx="8" cy="10" r="8" fill={color} />
        {/* Center */}
        <circle cx="20" cy="20" r="7" fill="#FFD700" />
        <circle cx="20" cy="20" r="4" fill="#FFF8DC" opacity="0.8" />
      </svg>
    </div>
  );
}

function App() {
  const [selectedColor, setSelectedColor] = useState('#FF1493');
  const [showAnimation, setShowAnimation] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);

  const colors = [
    '#FF1493', // Deep Pink
    '#FF69B4', // Hot Pink
    '#FF6B9D', // Custom Pink
    '#E73E5C', // Rose
    '#C41E3A', // Red
    '#FF4500', // Orange Red
    '#FFD700', // Gold
    '#FF1744', // Bright Red
  ];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setShowAnimation(false);
    setShowPhoto(false);
    // Trigger animation with a small delay to reset state
    setTimeout(() => {
      setShowAnimation(true);
      setShowPhoto(true);
    }, 50);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="color-picker-wrapper">
          <p className="subtitle">Pick a color and watch the magic ✨</p>
          <div className="color-picker">
            {colors.map((color) => (
              <button
                key={color}
                className={`color-button ${selectedColor === color ? 'active' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
                aria-label={`Select color ${color}`}
              >
                {selectedColor === color && '✓'}
              </button>
            ))}
          </div>
        </div>

        <div className="animation-container">
          {showAnimation && (
            <>
              {[...Array(15)].map((_, i) => (
                <Flower
                  key={i}
                  color={selectedColor}
                  delay={Math.random() * 0.8}
                  duration={3.5 + Math.random() * 1.5}
                />
              ))}
            </>
          )}
        </div>

        {showPhoto && (
          <>

            <div className="photo-container">
              <img
                src={`${process.env.PUBLIC_URL}/wife-photo.jpg`}
                alt="My beloved wife"
                className="wife-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<p style="font-size: 1.2rem; color: #C41E3A;">Please add your photo as "wife-photo.jpg" in the public folder 📸</p>';
                }}
              />
            </div>
            <div className="message">
              <p>For my beloved wife ❤️</p>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default App;
