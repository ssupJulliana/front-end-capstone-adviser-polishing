import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import teamsSummaryIcon from "../../assets/teams-summary-icon.png"; // ✅ Updated icon

export default function TeamsSummary() {
  const [status, setStatus] = useState("To Review");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const statusDropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        statusDropdownRef.current &&
        !statusDropdownRef.current.contains(event.target)
      ) {
        setShowStatusDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="teams-summary-wrapper">
      <h2 className="section-title">
        <img 
          src={teamsSummaryIcon} 
          alt="Teams Summary Icon" 
          className="section-icon" 
        />
        Teams Summary
      </h2>
      <hr className="divider" />

      <div className="teams-summary-container">
        {/* Team 1 Card */}
        <div className="task-card" onClick={() => handleCardClick('/team-1')}>
          <div className="task-card-icon">
            <img src={teamsSummaryIcon} alt="Team Icon" className="card-icon" />
            <p className="card-label">TaskSphere IT</p>
          </div>
          <div className="task-card-spacer" />
          <p className="card-subtext">Mendoza, Et Al</p>
        </div>

        {/* Team 2 Card */}
        <div className="task-card" onClick={() => handleCardClick('/team-2')}>
          <div className="task-card-icon">
            <img src={teamsSummaryIcon} alt="Team Icon" className="card-icon" />
            <p className="card-label">FitTrack</p>
          </div>
          <div className="task-card-spacer" />
          <p className="card-subtext">Yawqona, Et Al</p>
        </div>
      </div>

      <style>{`
        * { box-sizing: border-box; }

        .teams-summary-wrapper {
          width: 100%;
          padding: 40px 20px;
          background: #fff;
          border-radius: 10px;
        }

        .section-title {
          font-size: 20px;
          font-weight: bold;
          color: #3B0304;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        .divider {
          border: none;
          border-top: 2px solid #3B0304;
          margin-bottom: 20px;
        }

        .teams-summary-container {
          display: flex;
          gap: 20px;
          justify-content: left;
          flex-wrap: wrap;
        }

        .task-card {
          background: #ffffff;
          border: 1px solid #B2B2B2;
          border-radius: 8px;
          width: 150px;  
          height: 190px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 20px 10px;
          cursor: pointer;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .task-card-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .card-icon {
          width: 50px; 
          height: 50px;
          object-fit: contain;
        }

        .card-label {
          font-size: 16px;
          font-weight: 550;
          margin-top: 6px;
          color: #000000;
        }

        .task-card-spacer {
          flex-grow: 1;
        }

        .card-subtext {
          font-size: 16px;
          font-weight: 550;
          color: #000000;
          margin-bottom: 10px;
        }

        .task-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 26px; 
          background-color: #830C18; 
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }

        .task-card:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
