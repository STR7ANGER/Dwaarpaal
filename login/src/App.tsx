import React, { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import pic from './assets/pic.jpg';
import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';
import pic4 from './assets/pic4.jpg';
import pic5 from './assets/pic5.jpg';
import './App.css';

function GradientBox({ gradient, imageSrc, label }) {
  return (
    <div className="gradient-box" style={{ background: gradient }}>
      <div className="image-container">
        <img src={imageSrc} alt={label} className="employee-image" />
      </div>
      <div className="employee-label">{label}</div>
    </div>
  );
}

export default function App() {
  const [showSecondScreen, setShowSecondScreen] = useState(false);

  const handleLogClick = () => {
    setShowSecondScreen(!showSecondScreen);
  };

  return (
    <div className="app-container">
      <SignedOut>
        <div className="card">
          <h1>Welcome to,</h1>
          <h1>Dwaarpaal</h1>
          <p>Using as Supervisor</p>
          <SignInButton mode="modal">
            <button className="btn">Supervisor</button>
          </SignInButton>
          <p>Using as Worker</p>
          <SignInButton mode="modal">
            <button className="btn">Worker</button>
          </SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        {showSecondScreen ? (
          <div className="gradient-container second-screen">
            <GradientBox gradient="linear-gradient(135deg, #94D2BD 0%, #E9D8A6 100%)" imageSrc={pic} label="Employee 1" />
            <GradientBox gradient="linear-gradient(135deg, #E9D8A6 0%, #94D2BD 100%)" imageSrc={pic1} label="Employee 2" />
            <GradientBox gradient="linear-gradient(135deg, #94D2BD 0%, #E9D8A6 100%)" imageSrc={pic2} label="Employee 3" />
            <GradientBox gradient="linear-gradient(135deg, #F87171 0%, #FB7185 100%)" imageSrc={pic3} label="Employee 4" />
            <GradientBox gradient="linear-gradient(135deg, #FB7185 0%, #F87171 100%)" imageSrc={pic4} label="Employee 5" />
            <GradientBox gradient="linear-gradient(135deg, #F87171 0%, #FB7185 100%)" imageSrc={pic5} label="Employee 6" />
          </div>
        ) : (
          <div className="gradient-container">
            <div className="gradient-box" style={{ background: "linear-gradient(135deg, #F87171 25%, #0000FF 100%)" }}>
              <div className="employee-label">Employee Log</div>
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
            </div>
          </div>
        )}
        <div className="bottom-nav">
          <div className="nav-item" onClick={handleLogClick}>
            <span className="nav-icon">≡</span>
            <span className="nav-label">Log</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">▤</span>
            <span className="nav-label">Maps</span>
          </div>
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}
