import React, { useState } from 'react';
import './VerticalGradientApp.css';

// GradientBox Component
const GradientBox = ({ gradient }) => (
  <div className="gradient-box" style={{ background: gradient }} />
);

// BottomNavItem Component
const BottomNavItem = ({ icon, label, onClick }) => (
  <div className="nav-item" onClick={onClick}>
    <span className="nav-icon">{icon}</span>
    <span className="nav-label">{label}</span>
  </div>
);

// FirstScreen Component
const FirstScreen = ({ onLogClick }) => {
  return (
    <div className="app-container">
      <div className="gradient-container">
        <GradientBox gradient="linear-gradient(135deg, #7FD1C8 0%, #A1EAF0 100%)" />
        <GradientBox gradient="linear-gradient(135deg, #F0A1E8 0%, #C08CF0 100%)" />
        <GradientBox gradient="linear-gradient(135deg, #F0A1A1 0%, #F0D6A1 100%)" />
      </div>
      <div className="bottom-nav">
        <BottomNavItem icon="≡" label="Log" onClick={onLogClick} />
        <BottomNavItem icon="▤" label="Maps" />
        <BottomNavItem icon="☺" label="Account" />
      </div>
    </div>
  );
};

// SecondScreen Component (3x2 Grid Layout)
const SecondScreen = ({ onLogClick }) => {
  return (
    <div className="app-container">
      <div className="gradient-container second-screen">
        <GradientBox gradient="linear-gradient(135deg, #94D2BD 0%, #E9D8A6 100%)" />
        <GradientBox gradient="linear-gradient(135deg, #E9D8A6 0%, #94D2BD 100%)" />
        <GradientBox gradient="linear-gradient(135deg, #94A3B8 0%, #8B5CF6 100%)" />
        <GradientBox gradient="linear-gradient(135deg, #8B5CF6 0%, #94A3B8 100%)" />
        <GradientBox gradient="linear-gradient(135deg, #FB7185 0%, #F87171 100%)" />
        <GradientBox gradient="linear-gradient(135deg, #F87171 0%, #FB7185 100%)" />
      </div>
      <div className="bottom-nav">
        <BottomNavItem icon="≡" label="Log" onClick={onLogClick} />
        <BottomNavItem icon="▤" label="Maps" />
        <BottomNavItem icon="☺" label="Account" />
      </div>
    </div>
  );
};

// VerticalGradientApp Component
const VerticalGradientApp = () => {
  const [showSecondScreen, setShowSecondScreen] = useState(false);

  const handleLogClick = () => {
    setShowSecondScreen(!showSecondScreen);
  };

  return (
    <>
      {showSecondScreen ? (
        <SecondScreen onLogClick={handleLogClick} />
      ) : (
        <FirstScreen onLogClick={handleLogClick} />
      )}
    </>
  );
};

export default VerticalGradientApp;
