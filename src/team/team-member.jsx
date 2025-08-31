import React from "react";
import { useNavigate } from "react-router-dom";

export default function TeamMember() {
  const navigate = useNavigate();

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

  // Pie chart segments data and colors
  const progressSegments = [
    { label: "To Do", color: "#FFB800", value: 20 },
    { label: "In Progress", color: "#758E25", value: 20 },
    { label: "To Review", color: "#5381B9", value: 20 },
    { label: "Completed", color: "#A36BC4", value: 40 },
    // Missed is 0, so not shown
  ];

  // Total progress percentage (Completed)
  const completedPercent = 40;

  // Function to generate pie chart slices using conic-gradient for a donut style pie chart
  // Using cumulative degrees
  const pieChartStyle = () => {
    let total = 0;
    const gradients = progressSegments.map(({ color, value }) => {
      const start = total;
      const end = total + value;
      total += value;
      return `${color} ${start * 3.6}deg ${end * 3.6}deg`;
    });
    return {
      background: `conic-gradient(${gradients.join(", ")})`,
    };
  };

  return (
    <div className="team-member-wrapper">
      {/* Header */}
      <header className="header">
        <div className="logo" onClick={() => navigate("/tasksphere-it")}>
          <div className="logo-icon">
            <svg width="30" height="30" viewBox="0 0 50 50" fill="#490000" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="6" />
              <circle cx="38" cy="12" r="6" />
              <path d="M7 30 L25 48 L43 30 Z" fill="#490000" />
            </svg>
          </div>
          <span>TaskSphere IT</span>
        </div>

        <div className="header-icons">
          <button className="team-toggle" title="Toggle Team">TEAM</button>
          <button className="notifications" title="Notifications" aria-label="Notifications">🔔</button>
          <button className="profile" title="User Profile" aria-label="User Profile">👤</button>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <span>👥 Teams Summary &gt; <b>Mendoza, Et Al</b></span>
      </nav>

      {/* Main content */}
      <main className="main-content">
        {/* Team Tasks */}
        <section className="team-tasks">
          <h3>Team Tasks</h3>
          <table>
            <thead>
              <tr>
                <th>NO</th>
                <th>Task</th>
                <th>Subtask</th>
                <th>Due Date</th>
                <th>Time</th>
                <th>Revisions NO</th>
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
        </section>

        {/* Sidebar: Team and Task Progress */}
        <aside className="sidebar">
          <section className="team-members-section">
            <h3>Team</h3>
            <table>
              <thead>
                <tr>
                  <th>NO</th>
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
          </section>

          <section className="tasks-progress">
            <h3>Tasks Progress</h3>
            <div className="pie-chart" style={pieChartStyle()}>
              <div className="pie-center">
                <span className="progress-percent">{completedPercent}%</span>
              </div>
            </div>
            <div className="legend">
              {progressSegments.map(({ label, color }, i) => (
                <div key={i} className="legend-item">
                  <span className="color-box" style={{ backgroundColor: color }}></span>
                  <span className="legend-label">{label}</span>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </main>

      {/* Footer */}
      <footer>
        <span>© 2025 TaskSphere IT - All Rights Reserved</span>
        <a href="/terms-of-service" className="tos-link">Terms of Service</a>
      </footer>

      {/* Styles */}
      <style>{`
        * {
          box-sizing: border-box;
        }

        body, html, #root, .team-member-wrapper {
          height: 100%;
          margin: 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          color: #3B0304;
          background: #fff;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .team-member-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 15px 20px;
          display: flex;
          flex-direction: column;
          height: 100vh;
        }

        /* Header */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 15px;
          border-bottom: 1px solid #3B0304;
          user-select: none;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #490000;
          font-weight: 600;
          font-size: 18px;
          cursor: pointer;
        }
        .logo-icon {
          width: 30px;
          height: 30px;
        }

        .header-icons button {
          background: none;
          border: none;
          cursor: pointer;
          margin-left: 15px;
          font-size: 16px;
          color: #3B0304;
          font-weight: 600;
          padding: 5px 10px;
          border-radius: 15px;
          transition: background-color 0.2s ease;
        }
        .header-icons button:hover {
          background-color: #7C0A02;
          color: white;
        }

        /* Breadcrumb */
        .breadcrumb {
          padding: 10px 0;
          font-size: 14px;
          font-weight: 600;
          border-bottom: 1px solid #7C0A02;
          color: #3B0304;
        }

        /* Main content */
        .main-content {
          display: flex;
          flex-grow: 1;
          padding: 20px 0;
          gap: 25px;
        }

        /* Team Tasks */
        .team-tasks {
          flex: 3;
          border: 1px solid #ccc;
          border-radius: 18px;
          padding: 15px 20px;
          box-shadow: 0 0 6px rgb(0 0 0 / 0.08);
        }
        .team-tasks h3 {
          font-weight: 700;
          margin-bottom: 15px;
          border-bottom: 1px solid #7C0A02;
          padding-bottom: 5px;
        }
        .team-tasks table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }
        .team-tasks th, .team-tasks td {
          text-align: left;
          padding: 8px 10px;
          border-bottom: 1px solid #ddd;
          vertical-align: middle;
          font-weight: 500;
        }
        .team-tasks th {
          font-weight: 600;
          color: #3B0304;
        }
        .team-tasks td.options {
          text-align: center;
          cursor: pointer;
          font-weight: 900;
          color: #7C0A02;
        }

        /* Sidebar */
        .sidebar {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        /* Team Members Table */
        .team-members-section {
          border: 1px solid #ccc;
          border-radius: 18px;
          padding: 15px 20px;
          box-shadow: 0 0 6px rgb(0 0 0 / 0.08);
          background: #fff;
        }
        .team-members-section h3 {
          font-weight: 700;
          margin-bottom: 15px;
          border-bottom: 1px solid #7C0A02;
          padding-bottom: 5px;
        }
        .team-members-section table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }
        .team-members-section th, .team-members-section td {
          text-align: left;
          padding: 8px 10px;
          border-bottom: 1px solid #ddd;
          vertical-align: middle;
          font-weight: 500;
        }
        .team-members-section th {
          font-weight: 600;
          color: #3B0304;
        }

        /* Tasks Progress */
        .tasks-progress {
          border: 1px solid #ccc;
          border-radius: 18px;
          padding: 15px 20px;
          box-shadow: 0 0 6px rgb(0 0 0 / 0.08);
          background: #fff;
          text-align: center;
        }
        .tasks-progress h3 {
          font-weight: 700;
          margin-bottom: 20px;
          border-bottom: 1px solid #7C0A02;
          padding-bottom: 5px;
          color: #3B0304;
        }

        .pie-chart {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          position: relative;
          margin: 0 auto 20px;
          background: conic-gradient(#A36BC4 0deg 144deg, #FFB800 144deg 216deg, #758E25 216deg 288deg, #5381B9 288deg 360deg);
          /* The background will be overridden by style prop */
          box-shadow: inset 0 0 20px rgba(255 255 255 / 0.3);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .pie-chart::before {
          content: "";
          position: absolute;
          width: 90px;
          height: 90px;
          background: white;
          border-radius: 50%;
          z-index: 2;
          box-shadow: 0 0 6px rgb(0 0 0 / 0.15);
        }

        .pie-center {
          position: relative;
          z-index: 3;
        }

        .progress-percent {
          font-size: 36px;
          font-weight: 900;
          color: #490000;
          user-select: none;
        }

        /* Legend */
        .legend {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px 20px;
          font-weight: 700;
          color: #3B0304;
          font-size: 13px;
          user-select: none;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: default;
        }

        .color-box {
          display: inline-block;
          width: 14px;
          height: 14px;
          border-radius: 3px;
          border: 1px solid #ccc;
        }

        /* Footer */
        footer {
          border-top: 1px solid #7C0A02;
          padding: 10px 0 0;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          font-weight: 600;
          color: #490000;
          user-select: none;
        }

        .tos-link {
          text-decoration: none;
          color: #7C0A02;
          font-weight: 600;
          cursor: pointer;
        }

        .tos-link:hover {
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .main-content {
            flex-direction: column;
          }
          .sidebar {
            flex-direction: row;
            gap: 20px;
            overflow-x: auto;
          }
          .team-tasks, .team-members-section, .tasks-progress {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
