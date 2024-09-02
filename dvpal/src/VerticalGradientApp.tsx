import React, { useState } from 'react';
import './VerticalGradientApp.css';
import pic from './pic.jpg';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';

// GradientBox Component
const GradientBox = ({ gradient, imageSrc, label, children }) => (
  <div className="gradient-box" style={{ background: gradient }}>
    <div className="image-container">
      {imageSrc && <img src={imageSrc} alt={label} className="employee-image" />}
      <div className="employee-label">{label}</div>
    </div>
    {children}
  </div>
);

// BottomNavItem Component
const BottomNavItem = ({ icon, label, onClick }) => (
  <div className="nav-item" onClick={onClick}>
    <span className="nav-icon">{icon}</span>
    <span className="nav-label">{label}</span>
  </div>
);

// FirstScreen Component (Single Gradient Box with Table)
const FirstScreen = ({ onLogClick }) => {
  return (
    <div className="app-container">
      <div className="gradient-container">
        <GradientBox gradient="linear-gradient(135deg, #F87171 25%, #0000FF 100%)" label="Employee Log">
          <table className="employee-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>In</th>
                <th>Out</th>
                <th>Hours</th>
              </tr>
            </thead>
            <tbody>
              {/* Add rows dynamically or manually here */}
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>09:00 AM</td>
                <td>05:00 PM</td>
                <td>8</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jane Smith</td>
                <td>09:30 AM</td>
                <td>05:30 PM</td>
                <td>8</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mark Johnson</td>
                <td>08:45 AM</td>
                <td>04:45 PM</td>
                <td>8</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Emily Davis</td>
                <td>09:15 AM</td>
                <td>05:15 PM</td>
                <td>8</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Michael Brown</td>
                <td>09:00 AM</td>
                <td>05:00 PM</td>
                <td>8</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Linda Wilson</td>
                <td>09:05 AM</td>
                <td>05:05 PM</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
        </GradientBox>
      </div>
      <div className="bottom-nav">
        <BottomNavItem icon="≡" label="Log" onClick={onLogClick} />
        <BottomNavItem icon="▤" label="Maps" />
        <BottomNavItem icon="☺" label="Account" />
      </div>
    </div>
  );
};

// SecondScreen Component (3x2 Grid Layout with individual image holders)
const SecondScreen = ({ onLogClick }) => {
  return (
    <div className="app-container">
      <div className="gradient-container second-screen">
        <GradientBox gradient="linear-gradient(135deg, #94D2BD 0%, #E9D8A6 100%)" imageSrc={pic} label="Employee 1" />
        <GradientBox gradient="linear-gradient(135deg, #E9D8A6 0%, #94D2BD 100%)" imageSrc={pic1} label="Employee 2" />
        <GradientBox gradient="linear-gradient(135deg, #94D2BD 0%, #E9D8A6 100%)" imageSrc={pic2} label="Employee 3" />
        <GradientBox gradient="linear-gradient(135deg, #F87171 0%, #FB7185 100%)" imageSrc={pic3} label="Employee 4" />
        <GradientBox gradient="linear-gradient(135deg, #FB7185 0%, #F87171 100%)" imageSrc={pic4} label="Employee 5" />
        <GradientBox gradient="linear-gradient(135deg, #F87171 0%, #FB7185 100%)" imageSrc={pic5} label="Employee 6" />
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
