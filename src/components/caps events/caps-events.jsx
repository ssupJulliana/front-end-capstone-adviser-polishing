import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import eventsIcon from "../../assets/events-icon.png"; // Updated icon
import manuscriptIcon from "../../assets/manuscript-icon.png"; // Updated card icon
import recordIcon from "../../assets/records-icon.png";

export default function CapsEvents() {
  const [status, setStatus] = useState("To Review");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const statusDropdownRef = useRef(null);
  const navigate = useNavigate();

  const STATUS_OPTIONS = ["To Do", "In Progress", "To Review", "Missed"];

  const getStatusColor = (value) => {
    switch (value) {
      case "To Do":
        return "#FABC3F";
      case "In Progress":
        return "#809D3C";
      case "To Review":
        return "#578FCA";
      case "Missed":
        return "#D32F2F";
      default:
        return "#ccc";
    }
  };

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
    <div className="events-wrapper">
      <h2 className="section-title">
        <img 
          src={eventsIcon} 
          alt="Events Icon" 
          className="section-icon" 
        />
        Events
      </h2>
      <hr className="divider" />

      <div className="events-container">
        {/* Manuscript Results Card */}
        <div className="event-card" onClick={() => handleCardClick('/caps-manu-results')}>
          <div className="event-card-icon">
            <img src={manuscriptIcon} alt="Manuscript Results Icon" className="card-icon" />
          </div>
          <div className="event-card-header">
            <h3 className="event-title">Manuscript<br /> Results</h3>
          </div>
        </div>

        {/* Capstone Defenses Card */}
        <div className="event-card" onClick={() => handleCardClick('/caps-capstone-def')}>
          <div className="event-card-icon">
            <img src={recordIcon} alt="Capstone Defenses Icon" className="card-icon" />
          </div>
          <div className="event-card-header">
            <h3 className="event-title">Capstone<br /> Defenses</h3>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        * { box-sizing: border-box; }
        .events-wrapper {
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

        .events-container {
          display: flex;
          gap: 20px;
          justify-content: left;
          flex-wrap: wrap;
        }

        .event-card {
          background: #ffffff;
          border: 1px solid #B2B2B2;
          border-radius: 8px;
          width: 150px;
          height: 200px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          cursor: pointer;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .event-card-icon {
          margin-bottom: 10px;
        }

        .card-icon {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }

        .event-card-header {
          font-size: 14px;
          font-weight: bold;
          color: #3B0304;
        }

        .event-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 22px;
          height: 100%;
          background-color: #3B0304;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }

        .event-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 22px;
          background-color: #3B0304;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }

        .event-card:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .event-title {
          margin: 0;
        }
      `}</style>
    </div>
  );
}
