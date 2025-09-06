import React from "react";
import { useNavigate } from "react-router-dom";

export default function TeamSummary() {
  const navigate = useNavigate();

  const sidebarItems = [
    { label: "Dashboard", icon: "▦" },
    { label: "Teams Summary", icon: "👥", active: true },
    { label: "Tasks", icon: "📋" },
    { label: "Teams Board", icon: "📚" },
    { label: "Tasks Record", icon: "🗂" },
    { label: "Events", icon: "📅" },
  ];

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

  // Calculate pie chart conic-gradient background
  let total = 0;
  const gradients = progressSegments.map(({ color, value }) => {
    const start = total;
    const end = total + value;
    total += value;
    return `${color} ${start * 3.6}deg ${end * 3.6}deg`;
  });
  const pieChartStyle = { background: `conic-gradient(${gradients.join(", ")})` };

  return (
    <div className="wrapper">
      <header className="header">
        <div className="logo" onClick={() => navigate("/")}>
          <svg width="30" height="30" viewBox="0 0 50 50" fill="#490000" xmlns="http://www.w3.org/2000/svg" aria-label="Logo" role="img">
            <circle cx="12" cy="12" r="6" />
            <circle cx="38" cy="12" r="6" />
            <path d="M7 30 L25 48 L43 30 Z" fill="#490000" />
          </svg>
          <span>TaskSphere IT</span>
        </div>
        <div className="header-icons">
          <button className="team-toggle" aria-label="Toggle Team View">TEAM</button>
          <button title="Notifications" aria-label="Notifications">🔔</button>
          <button title="User Profile" aria-label="User Profile">👤</button>
        </div>
      </header>

      <div className="layout-container">
        <aside className="sidebar" aria-label="Sidebar Navigation">
          <nav>
            <ul>
              {sidebarItems.map(({ label, icon, active }, i) => (
                <li key={i} className={active ? "active" : ""}>
                  <span className="icon" aria-hidden="true">{icon}</span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </nav>
          <button className="sign-out">↻ Sign Out</button>
        </aside>

        <main className="main-content">

          <section className="team-tasks" aria-labelledby="team-tasks-title">
            <h3 id="team-tasks-title">Team Tasks</h3>
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
                    <td className="options" aria-label="More options">⋮</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>

        <aside className="sidebar-right" aria-labelledby="team-members-title">
          <section className="team-members-section">
            <h3 id="team-members-title">Team</h3>
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

          <section className="tasks-progress" aria-labelledby="tasks-progress-title">
            <h3 id="tasks-progress-title">Tasks Progress</h3>
            <div className="pie-chart" style={pieChartStyle} role="img" aria-label="Task progress pie chart">
              <div className="pie-center">
                <span className="progress-percent">{completedPercent}%</span>
              </div>
            </div>
            <div className="legend">
              {progressSegments.map(({ label, color }, i) => (
                <div key={i} className="legend-item">
                  <span className="color-box" style={{ backgroundColor: color }}></span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>

      <footer>
        <span>© 2025 TaskSphere IT - All Rights Reserved</span>
        <a href="/terms-of-service" className="tos-link">Terms of Service</a>
      </footer>

      <style>{`
        * {
          box-sizing: border-box;
        }
        body, html, #root, .wrapper {
          margin: 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          color: #3B0304;
          background: #fff;
          height: 100%;
        }
        .wrapper {
          display: flex;
          flex-direction: column;
          height: 100vh;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 18px;
          border-bottom: 1px solid #3B0304;
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
        .header-icons button {
          background: none;
          border: none;
          cursor: pointer;
          margin-left: 10px;
          font-size: 14px;
          color: #3B0304;
          font-weight: 600;
          padding: 4px 8px;
          border-radius: 15px;
          transition: background-color 0.2s ease;
        }
        .header-icons button:hover {
          background-color: #7C0A02;
          color: white;
        }
        .layout-container {
          flex: 1;
          display: flex;
          overflow: hidden;
          background: #fafafa;
        }
        /* Left Sidebar */
        .sidebar {
          width: 180px;
          background: #fff;
          border-right: 1px solid #ccc;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px 0;
          font-size: 13px;
        }
        .sidebar nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .sidebar nav li {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          cursor: pointer;
          color: #490000;
          font-weight: 600;
          border-left: 3px solid transparent;
          transition: background-color 0.2s ease, border-color 0.2s ease;
          white-space: nowrap;
        }
        .sidebar nav li:hover {
          background-color: #f7e4e4;
        }
        .sidebar nav li.active {
          background-color: #7C0A02;
          color: white;
          border-left-color: white;
        }
        .sidebar nav li .icon {
          font-weight: 900;
          font-size: 16px;
          user-select: none;
        }
        .sign-out {
          background: none;
          border: none;
          padding: 10px 20px;
          color: #7C0A02;
          font-weight: 700;
          cursor: pointer;
          text-align: left;
          border-top: 1px solid #ccc;
          margin-top: 10px;
          user-select: none;
        }
        .sign-out:hover {
          text-decoration: underline;
        }
        /* Main Content */
        .main-content {
          flex: 1;
          padding: 20px 15px;
          overflow-x: auto;
          background: white;
          display: flex;
          flex-direction: column;
        }
        .breadcrumb {
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 15px;
          border-bottom: 1px solid #7C0A02;
          padding-bottom: 5px;
          white-space: nowrap;
          color: #490000;
        }
        .team-tasks {
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 10px 12px;
          box-shadow: 0 0 4px rgba(0,0,0,0.06);
          font-size: 13px;
          overflow-x: auto;
          flex-grow: 1;
        }
        .team-tasks table {
          width: 100%;
          border-collapse: collapse;
        }
        .team-tasks th, .team-tasks td {
          padding: 5px 6px;
          border-bottom: 1px solid #ddd;
          font-size: 12px;
          white-space: nowrap;
          text-align: left;
        }
        .team-tasks th {
          font-weight: 600;
        }
        .team-tasks td.options {
          text-align: center;
          cursor: pointer;
          font-weight: bold;
          color: #7C0A02;
          white-space: nowrap;
        }
        /* Right Sidebar */
        .sidebar-right {
          width: 320px;
          background: #fff;
          border-left: 1px solid #ccc;
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding: 15px 10px;
          font-size: 13px;
        }
        .team-members-section, .tasks-progress {
          border: 1px solid #ccc;
          border-radius: 10px;
          padding: 12px 10px;
          box-shadow: 0 0 4px rgba(0,0,0,0.06);
          background: white;
          font-size: 13px;
          flex: none;
        }
        .team-members-section table {
          width: 100%;
          border-collapse: collapse;
        }
        .team-members-section th, .team-members-section td {
          padding: 5px 6px;
          border-bottom: 1px solid #ddd;
          font-size: 12px;
          white-space: nowrap;
          text-align: left;
        }
        .team-members-section th {
          font-weight: 600;
        }
        .tasks-progress {
          text-align: center;
        }
        .pie-chart {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin: 0 auto 10px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3);
          background: #ddd; /* fallback */
        }
        .pie-chart::before {
          content: "";
          position: absolute;
          width: 75px;
          height: 75px;
          background: white;
          border-radius: 50%;
          z-index: 2;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .pie-center {
          position: relative;
          z-index: 3;
          font-weight: 900;
          font-size: 22px;
          color: #490000;
        }
        .legend {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px 15px;
          font-size: 11px;
          font-weight: 700;
          color: #3B0304;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .color-box {
          width: 12px;
          height: 12px;
          border-radius: 3px;
          border: 1px solid #ccc;
        }
        footer {
          border-top: 1px solid #7C0A02;
          padding: 8px 18px;
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 600;
          color: #490000;
          background: #fff;
        }
        .tos-link {
          text-decoration: none;
          color: #7C0A02;
        }
        .tos-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .layout-container {
            flex-direction: column;
          }
          .sidebar, .sidebar-right {
            width: 100%;
            border: none;
            padding: 10px 15px;
            display: flex;
            overflow-x: auto;
            gap: 15px;
          }
          .sidebar nav ul {
            flex-direction: row;
            display: flex;
            gap: 15px;
          }
          .sidebar nav li {
            border: none;
            border-bottom: 3px solid transparent;
            padding: 8px 4px;
          }
          .sidebar nav li.active {
            border-bottom-color: #7C0A02;
            background-color: transparent;
            color: #7C0A02;
            border-left: none;
          }
          .sign-out {
            margin-left: auto;
            border-top: none;
            padding: 8px 10px;
            font-weight: 600;
            color: #7C0A02;
          }
          .main-content {
            padding: 15px 10px;
            order: 3;
          }
          .team-tasks {
            max-width: 100%;
            margin-bottom: 20px;
          }
          .sidebar-right {
            order: 2;
            flex-wrap: nowrap;
            gap: 10px;
          }
          .team-members-section, .tasks-progress {
            flex: 1;
            min-width: 200px;
          }
        }
      `}</style>
    </div>
  );
}
