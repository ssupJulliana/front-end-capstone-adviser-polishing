import React from "react";
import { useNavigate } from "react-router-dom";

export default function TeamSummary() {
  const navigate = useNavigate();

  const teams = [
    { name: "FitTrack", members: "Aguas, Et Al", path: "/fittrack" },
    { name: "FoodFind", members: "Bernardo, Et Al", path: "/foodfind" },
    { name: "TaskSphere IT", members: "Mendoza, Et Al", path: "/tasksphere-it" },
  ];

  return (
    <div className="team-summary-wrapper">
      <h2 className="section-title">Teams Summary</h2>
      <hr className="divider" />

      <div className="team-summary-container">
        {teams.map((team, index) => (
          <div
            className="team-card"
            key={index}
            onClick={() => navigate(team.path)}
          >
            <div className="team-icon">👥</div>
            <div className="team-name">{team.name}</div>
            <div className="team-members">{team.members}</div>
            <div className="card-footer" />
          </div>
        ))}
      </div>

      <style>{`
        .team-summary-wrapper {
          padding: 40px 20px;
          background: #fff;
          border-radius: 10px;
        }

        .section-title {
          font-size: 20px;
          font-weight: bold;
          color: #3B0304;
          margin-bottom: 5px;
        }

        .divider {
          border: none;
          border-top: 2px solid #3B0304;
          margin-bottom: 20px;
        }

        .team-summary-container {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .team-card {
          position: relative;
          width: 150px;
          height: 180px;
          border-radius: 12px;
          background: #ffffff;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 10px 0;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }

        .team-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        .team-icon {
          font-size: 36px;
          color: #000;
          margin-bottom: auto;
        }

        .team-name {
          font-size: 16px;
          font-weight: bold;
          color: #3B0304;
          margin-bottom: 8px;
          z-index: 1;
          background: #fff;
          padding: 0 10px;
          position: relative;
          text-align: center; /* Center the team name */
          width: 100%; /* Make it take full width for proper centering */
        }

        .team-members {
          font-size: 13px;
          margin-bottom: 40px; /* to make space above footer */
          color: #3B0304;
          /* default left align, no changes */
        }

        .card-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 36px;
          background-color: #7C0A02;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
        }
      `}</style>
    </div>
  );
}
