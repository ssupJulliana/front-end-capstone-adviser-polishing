import React, { useState } from "react";

const sidebarItems = [
  { label: "Dashboard", icon: "▦" },
  { label: "Teams Summary", icon: "👥", active: true },
  { label: "Tasks", icon: "📋" },
  { label: "Teams Board", icon: "📚" },
  { label: "Tasks Record", icon: "🗂" },
  { label: "Events", icon: "📅" },
];

const data = [
  {
    no: 1,
    team: "Bernardo, Et Al",
    task: "Revise : Chapter 1",
    subtask: "",
    dueDate: "Feb 2, 2025",
    time: "08:00 AM",
    revisionNo: "2nd Revision",
    status: "In Progress",
  },
  {
    no: 2,
    team: "Bernardo, Et Al",
    task: "Prepare : Chapter 2",
    subtask: "",
    dueDate: "Feb 2, 2025",
    time: "08:00 AM",
    revisionNo: "1st Revision",
    status: "To Do",
  },
  {
    no: 3,
    team: "Aguas, Et Al",
    task: "Prepare : Chapter 3",
    subtask: "",
    dueDate: "Feb 20, 2025",
    time: "08:00 AM",
    revisionNo: "No Revision",
    status: "To Review",
  },
  {
    no: 4,
    team: "Mendoza, Et Al",
    task: "Prepare : Chapter 3",
    subtask: "",
    dueDate: "Feb 20, 2025",
    time: "08:00 AM",
    revisionNo: "No Revision",
    status: "In Progress",
  },
  {
    no: 5,
    team: "Aguas, Et Al",
    task: "Prepare : Chapter 4",
    subtask: "",
    dueDate: "Feb 25, 2025",
    time: "08:00 AM",
    revisionNo: "No Revision",
    status: "To Do",
  },
  {
    no: 6,
    team: "Mendoza, Et Al",
    task: "Prepare : Chapter 4",
    subtask: "",
    dueDate: "Feb 25, 2025",
    time: "08:00 AM",
    revisionNo: "No Revision",
    status: "To Do",
  },
];

const statusColors = {
  "In Progress": "#5cb85c",
  "To Do": "#f0ad4e",
  "To Review": "#5bc0de",
};

const revisionOptions = ["No Revision", "1st Revision", "2nd Revision"];

export default function Dashboard() {
  const [tasks, setTasks] = useState(data);

  const handleRevisionChange = (index, e) => {
    const newTasks = [...tasks];
    newTasks[index].revisionNo = e.target.value;
    setTasks(newTasks);
  };

  return (
    <>
      <div className="app-container">
        {/* Sidebar */}
        <aside className="sidebar" aria-label="Sidebar Navigation">
          <nav>
            <ul>
              {sidebarItems.map(({ label, icon, active }, i) => (
                <li key={i} className={active ? "active" : ""} tabIndex={0}>
                  <span className="icon" aria-hidden="true">
                    {icon}
                  </span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </nav>
          <button className="sign-out" aria-label="Sign Out">
            ↻ Sign Out
          </button>
        </aside>

        {/* Main content */}
        <main className="main-content">
          <div className="task-container">
            <div className="header">
              <h2>Tasks</h2>
              <button className="create-btn">+ Create Tasks</button>
            </div>

            <div className="controls">
              <input type="text" placeholder="Search" aria-label="Search Tasks" />
              <button className="filter-btn">Filter</button>
            </div>

            <table>
              <thead>
                <tr>
                  <th>NO</th>
                  <th>Team</th>
                  <th>Task</th>
                  <th>Subtask</th>
                  <th>Due Date</th>
                  <th>Time</th>
                  <th>Revision NO</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map(
                  (
                    { no, team, task, subtask, dueDate, time, revisionNo, status },
                    i
                  ) => (
                    <tr key={i}>
                      <td>{no}.</td>
                      <td>{team}</td>
                      <td>{task}</td>
                      <td>{subtask || "-"}</td>
                      <td>{dueDate}</td>
                      <td>{time}</td>
                      <td>
                        <select
                          value={revisionNo}
                          onChange={(e) => handleRevisionChange(i, e)}
                          aria-label={`Select revision for task ${no}`}
                        >
                          {revisionOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <span
                          className="status-badge"
                          style={{ backgroundColor: statusColors[status] || "#ccc" }}
                        >
                          {status}
                        </span>
                      </td>
                      <td>
                        <button className="action-btn" aria-label="Open Actions">
                          ⋮
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {/* Styles */}
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background-color: #fff;
        }
        .app-container {
          display: flex;
          height: 100vh;
          background-color: #fff;
          color: #5b1f24;
          user-select: none;
        }
        /* Sidebar styles */
        .sidebar {
          width: 240px;
          background: #f9f8f7;
          border-radius: 16px;
          box-shadow: 0 0 10px rgba(0,0,0,0.05);
          padding: 20px 0;
          font-size: 15px;
          font-weight: 600;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #c3bcbc;
          margin: 20px;
          user-select: none;
        }
        nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        nav li {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px 30px;
          cursor: pointer;
          border-radius: 10px 0 0 10px;
          transition: background-color 0.2s ease;
          outline: none;
        }
        nav li:hover,
        nav li:focus {
          background-color: #f3d8d9;
          outline: none;
        }
        nav li.active {
          background-color: #7c0a02;
          color: white;
          font-weight: 700;
        }
        nav li.active .icon {
          color: white;
        }
        .icon {
          font-weight: 900;
          font-size: 18px;
          color: #5b1f24;
          user-select: none;
          min-width: 20px;
          display: inline-block;
          text-align: center;
        }
        .sign-out {
          background: none;
          border: none;
          color: #7c0a02;
          font-weight: 700;
          font-size: 15px;
          padding: 15px 30px;
          cursor: pointer;
          text-align: left;
          border-top: 1px solid #c3bcbc;
          border-radius: 0 0 16px 16px;
          transition: background-color 0.2s ease;
        }
        .sign-out:hover,
        .sign-out:focus {
          text-decoration: underline;
          background-color: #f3d8d9;
          outline: none;
        }

        /* Main content */
        .main-content {
          flex-grow: 1;
          overflow-y: auto;
          padding: 20px 30px 30px;
        }

        /* Task table styles */
        .task-container {
          background: white;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgb(0 0 0 / 0.05);
          max-width: 900px;
          margin: 0 auto;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        h2 {
          margin: 0;
          font-weight: 700;
          color: #333;
          font-size: 24px;
        }
        .create-btn {
          background-color: #7c0a02;
          color: white;
          font-weight: 700;
          padding: 8px 18px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.3s ease;
        }
        .create-btn:hover {
          background-color: #a30e03;
        }
        .controls {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
          padding: 0 10px;
        }
        input[type="text"] {
          flex-grow: 1;
          padding: 8px 14px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
        }
        input[type="text"]:focus {
          outline-color: #7c0a02;
          border-color: #7c0a02;
        }
        .filter-btn {
          background-color: transparent;
          border: 1px solid #7c0a02;
          color: #7c0a02;
          font-weight: 700;
          border-radius: 6px;
          padding: 8px 18px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .filter-btn:hover {
          background-color: #7c0a02;
          color: white;
        }
        table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0 8px;
          font-size: 14px;
          color: #333;
        }
        thead tr {
          background-color: #f5f5f5;
          text-align: left;
          font-weight: 700;
          border-radius: 10px;
        }
        thead th {
          padding: 12px 15px;
        }
        tbody tr {
          background: #fff;
          box-shadow: 0 1px 3px rgb(0 0 0 / 0.1);
          border-radius: 10px;
          vertical-align: middle;
          transition: background-color 0.2s ease;
        }
        tbody tr:hover {
          background-color: #f9f2f1;
        }
        tbody td {
          padding: 10px 15px;
          vertical-align: middle;
        }
        select {
          border-radius: 6px;
          border: 1px solid #ccc;
          padding: 4px 8px;
          font-size: 14px;
          cursor: pointer;
          font-weight: 600;
          color: #7c0a02;
          background-color: #fef9f8;
          transition: border-color 0.2s ease;
        }
        select:hover,
        select:focus {
          border-color: #7c0a02;
          outline: none;
        }
        .status-badge {
          padding: 5px 10px;
          border-radius: 14px;
          font-weight: 700;
          color: white;
          font-size: 13px;
          display: inline-block;
          min-width: 80px;
          text-align: center;
        }
        .action-btn {
          background: transparent;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: #999;
          padding: 0 5px;
        }
        .action-btn:hover {
          color: #7c0a02;
        }
      `}</style>
    </>
  );
}
