import React from 'react';
import teamsSummaryIcon from "../../assets/teams-summary-icon.png";

export default function TeamsInfo() {
  const teamTasks = [
    { task: "Revise: Chapter 1", dueDate: "Jan 25, 2025", time: "8:00 AM", revisions: "No Revisions" },
    { task: "Prepare: Chapter 2", dueDate: "Jan 30, 2025", time: "8:00 AM", revisions: "No Revisions" },
    { task: "Prepare: Chapter 3", dueDate: "Feb 05, 2025", time: "8:00 AM", revisions: "No Revisions" },
    { task: "Prepare: Chapter 4", dueDate: "Feb 15, 2025", time: "8:00 AM", revisions: "No Revisions" },
    { task: "Prepare: Chapter 5", dueDate: "Feb 20, 2025", time: "8:00 AM", revisions: "No Revisions" },
  ];

  const teamMembers = [
    { name: "Addrialene G Mendoza", role: "Project Manager" },
    { name: "Harzwel Zhen B Lacson", role: "Member" },
    { name: "Julliana N Castaneda", role: "Member" },
    { name: "Alejandro C Faustino", role: "Member" },
    { name: "Justine Pare", role: "Member" },
    { name: "John Reagan S Pinpin", role: "Member" },
  ];

  const progressSegments = [
    { label: "To Do", color: "#FFB800", value: 20 },
    { label: "In Progress", color: "#758E25", value: 20 },
    { label: "To Review", color: "#5381B9", value: 20 },
    { label: "Completed", color: "#A36BC4", value: 40 },
  ];

  const completedPercent = 40;

  let total = 0;
  const gradients = progressSegments.map(({ color, value }) => {
    const start = total;
    const end = total + value;
    total += value;
    return `${color} ${start * 3.6}deg ${end * 3.6}deg`;
  });
  const pieChartStyle = { background: `conic-gradient(${gradients.join(", ")})` };

  return (
    <div className="teams-info-wrapper">
      <h2 className="section-title">
        <img 
          src={teamsSummaryIcon} 
          alt="Teams Info Icon" 
          className="section-icon" 
        />
        Teams Info
      </h2>
      <hr className="divider" />

      <div className="info-grid">
        <div className="left-panel">
          <h3>Team Tasks</h3>
          <table className="info-table tasks-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Task</th>
                <th>Subtask</th>
                <th>Due Date</th>
                <th>Time</th>
                <th>Revisions</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {teamTasks.map((task, i) => (
                <tr key={i}>
                  <td>{i + 1}.</td>
                  <td>{task.task}</td>
                  <td></td>
                  <td>{task.dueDate}</td>
                  <td>{task.time}</td>
                  <td>{task.revisions}</td>
                  <td className="options">⋮</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="right-panel">
          <div className="team-section">
            <h3>Team Members</h3>
            <table className="info-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member, i) => (
                  <tr key={i}>
                    <td>{i + 1}.</td>
                    <td>{member.name}</td>
                    <td>{member.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="team-section">
            <h3>Tasks Progress</h3>
            <div className="pie-chart" style={pieChartStyle}>
              <div className="pie-center">{completedPercent}%</div>
            </div>
            <div className="legend">
              {progressSegments.map(({ label, color }, i) => (
                <div key={i} className="legend-item">
                  <span className="color-box" style={{ backgroundColor: color }}></span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .teams-info-wrapper {
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

        .info-grid {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .left-panel {
          flex: 1 1 65%;
          min-width: 300px;
        }

        .right-panel {
          flex: 1 1 30%;
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-width: 250px;
        }

        .info-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }

        .info-table th,
        .info-table td {
          padding: 4px 6px;
          border: 1px solid #ddd;
          text-align: left;
          white-space: nowrap;
        }

        .info-table th {
          background: #f5f5f5;
          font-weight: bold;
        }

        .options {
          text-align: center;
          cursor: pointer;
          color: #7C0A02;
        }

        .team-section {
          background: #fff;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 8px;
        }

        .pie-chart {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin: 0 auto 10px;
          position: relative;
          background: #eee;
        }

        .pie-chart::before {
          content: "";
          position: absolute;
          width: 70px;
          height: 70px;
          background: white;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .pie-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-weight: bold;
          font-size: 18px;
          color: #490000;
          z-index: 1;
        }

        .legend {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px 12px;
          font-size: 11px;
          font-weight: 600;
          color: #3B0304;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .color-box {
          width: 12px;
          height: 12px;
          border-radius: 3px;
          border: 1px solid #ccc;
        }

        @media (max-width: 768px) {
          .info-grid {
            flex-direction: column;
          }

          .left-panel, .right-panel {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </div>
  );
}
