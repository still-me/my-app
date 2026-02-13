import { useState } from 'react';
import './App.css';

function Flower({ color, delay, duration, index }) {
  // Calculate angle for radial burst (30 flowers = 12 degrees apart)
  const angle = (index / 30) * Math.PI * 2;
  const tx = Math.cos(angle);
  const ty = Math.sin(angle);

  return (
    <div className="flower" style={{
      '--flower-color': color,
      '--delay': `${delay}s`,
      '--duration': `${duration}s`,
      '--tx': tx,
      '--ty': ty
    }}>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        {/* Outer layer petals - thin and long */}
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(0 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(15 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(30 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(45 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(60 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(75 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(90 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(105 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(120 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(135 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(150 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(165 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(180 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(195 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(210 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(225 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(240 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(255 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(270 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(285 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(300 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(315 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(330 40 40)" />
        <ellipse cx="40" cy="15" rx="4" ry="12" fill={color} opacity="0.7" transform="rotate(345 40 40)" />

        {/* Middle layer petals - medium length */}
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(7.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(22.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(37.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(52.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(67.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(82.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(97.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(112.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(127.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(142.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(157.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(172.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(187.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(202.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(217.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(232.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(247.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(262.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(277.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(292.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(307.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(322.5 40 40)" />
        <ellipse cx="40" cy="22" rx="4" ry="10" fill={color} opacity="0.85" transform="rotate(337.5 40 40)" />

        {/* Inner petals - more tightly packed */}
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(5 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(20 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(35 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(50 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(65 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(80 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(95 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(110 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(125 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(140 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(155 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(170 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(185 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(200 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(215 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(230 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(245 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(260 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(275 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(290 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(305 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(320 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(335 40 40)" />
        <circle cx="40" cy="28" r="3" fill={color} opacity="0.9" transform="rotate(350 40 40)" />

        {/* Center */}
        <circle cx="40" cy="40" r="6" fill="#FFD700" opacity="0.95" />
        <circle cx="40" cy="40" r="3" fill="white" opacity="0.4" />
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
    '#E73E5C', // Rose
    '#C41E3A', // Red
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
              {[...Array(30)].map((_, i) => (
                <Flower
                  key={i}
                  index={i}
                  color={selectedColor}
                  delay={Math.random() * 0.5}
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
