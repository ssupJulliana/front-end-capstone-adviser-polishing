// src/components/caps events/caps-capstone-def.jsx

import React, { useState, useRef, useEffect } from 'react';
import eventIcon from '../../assets/events-icon.png';
import dropdownIcon from '../../assets/red-dropdown-icon.png';
import teamIcon from '../../assets/teams-summary-icon.png';
import panelistIcon from '../../assets/caps-ins-icon.png';
import adviserIcon from '../../assets/adviser-icon.png';

export default function CapsCapstoneDef() {
  const [role, setRole] = useState("Adviser");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const ROLES = ["Adviser", "Panelist"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="events-wrapper">
      <h2 className="section-title">
        <img src={eventIcon} alt="Events Icon" className="section-icon" />
        Capstone Defenses
      </h2>
      <hr className="divider" />

      {/* DROPDOWN */}
      <div className="dropdown-container" ref={dropdownRef}>
        <div className="role-selector" onClick={() => setShowDropdown(!showDropdown)}>
          {role}
          <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon" />
        </div>
        {showDropdown && (
          <div className="dropdown-menu">
            {ROLES.map((opt) => (
              <div
                key={opt}
                className="dropdown-item"
                onClick={() => {
                  setRole(opt);
                  setShowDropdown(false);
                }}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ORAL DEFENSE CARD */}
      <div className="oral-defense-card">
        <div className="team-name">
          <img src={teamIcon} alt="Team Icon" className="inline-icon" />
          Mendoza, Et Al
        </div>

        <div className="defense-grid">
          {/* LEFT SIDE */}
          <div className="left">
            <div className="label">Title</div>
            <div className="value">TaskSphere IT</div>

            <div className="label">Date</div>
            <div className="value">March 31, 2025</div>

            <div className="label">Time</div>
            <div className="value">1:00 PM – 3:00 PM</div>
          </div>

          {/* RIGHT SIDE */}
          <div className="right">
            <div className="label">Panelists</div>
            <div className="panelist-entry">
              <img src={panelistIcon} alt="Panelist Icon" className="inline-icon" />
              Anderson F. Dashiell
            </div>
            <div className="panelist-entry">
              <img src={adviserIcon} alt="Adviser Icon" className="inline-icon" />
              Adam B. Apostol
            </div>
            <div className="panelist-entry">
              <img src={adviserIcon} alt="Adviser Icon" className="inline-icon" />
              Von Jacob P. Yu
            </div>

            <div className="label">Verdict</div>
            <div className="value">
              <span className="status-pending">Pending</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .events-wrapper {
          width: 100%;
          padding: 40px 20px;
        }

        .section-title {
          font-size: 20px;
          font-weight: bold;
          color: #3B0304;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-icon {
          width: 24px;
          height: 24px;
        }

        .divider {
          border: none;
          border-top: 2px solid #3B0304;
          margin-bottom: 20px;
        }

        /* DROPDOWN */
        .dropdown-container {
          position: relative;
          width: 160px;
          margin-bottom: 20px;
        }

        .role-selector {
          background: #fff;
          border: 1px solid #3B0304;
          border-radius: 12px;
          padding: 6px 12px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          color: #3B0304;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .dropdown-icon {
          width: 14px;
          height: 14px;
          margin-left: 8px;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          border: 1px solid #B2B2B2;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          margin-top: 10px;
          width: 100%;
          z-index: 5;
        }

        .dropdown-item {
          padding: 10px 12px;
          cursor: pointer;
          font-size: 14px;
        }

        .dropdown-item:hover {
          background-color: #f0f0f0;
        }

        /* ORAL DEFENSE CARD */
        .oral-defense-card {
          background: #fff;
          border: 1px solid #B2B2B2;
          border-radius: 16px;
          padding: 20px 24px;
          width: 350px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          font-size: 14px;
        }

        .team-name {
          font-weight: bold;
          font-size: 16px;
          margin-bottom: 12px;
          color: #3B0304;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .inline-icon {
          width: 16px;
          height: 16px;
        }

        .defense-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 16px;
        }

        .left, .right {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .label {
          font-weight: bold;
          color: #000;
          margin-top: 8px;
        }

        .label:first-of-type {
          margin-top: 0;
        }

        .value {
          color: #000;
          font-size: 14px;
        }

        .panelist-entry {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .status-pending {
          display: inline-block;
          padding: 8px 44px;
          color: #3B0304;
          border: 1px solid #3B0304;
          border-radius: 8px;
          font-weight: bold;
          background-color: #fff;
          font-size: 14px;
        }

        @media (max-width: 600px) {
          .defense-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .oral-defense-card {
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
}
