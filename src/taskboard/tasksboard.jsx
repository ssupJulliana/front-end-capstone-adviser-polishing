import React from "react";

const sidebarItems = [
  { label: "Dashboard", icon: "▦" },
  { label: "Teams Summary", icon: "👥" },
  { label: "Tasks", icon: "📋", active: true },
  { label: "Teams Board", icon: "📚" },
  { label: "Tasks Record", icon: "🗂" },
  { label: "Events", icon: "📅" },
];

const tasksData = {
  "To Do": [
    {
      team: "Bernardo, Et Al",
      task: "Chapter 2",
      revision: "1st Revision",
      dueDate: "Feb 3, 2025",
    },
    {
      team: "Aguas, Et Al",
      task: "Chapter 4",
      revision: "No Revision",
      dueDate: "Feb 25, 2025",
    },
    {
      team: "Mendoza, Et Al",
      task: "Chapter 4",
      revision: "No Revision",
      dueDate: "Feb 25, 2025",
    },
  ],
  "In Progress": [
    {
      team: "Mendoza, Et Al",
      task: "Chapter 3",
      revision: "No Revision",
      dueDate: "Feb 26, 2025",
    },
  ],
  "To Review": [
    {
      team: "Aguas, Et Al",
      task: "Chapter 3",
      revision: "No Revision",
      dueDate: "Feb 20, 2025",
    },
  ],
  "Missed Task": [
    {
      team: "Bernardo, Et Al",
      task: "Chapter 1",
      revision: "2nd Revision",
      dueDate: "Feb 2, 2025",
    },
  ],
};

const colors = {
  "To Do": "#f5c26b",
  "In Progress": "#8bbe5a",
  "To Review": "#5d9bd3",
  "Missed Task": "#c62828",
};

export default function App() {
  return (
    <>
      <div className="app-container">
        <aside className="sidebar" aria-label="Sidebar Navigation">
          <nav>
            <ul>
              {sidebarItems.map(({ label, icon, active }, i) => (
                <li key={i} className={active ? "active" : ""} tabIndex={0}>
                  <span className="icon" aria-hidden="true">{icon}</span>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </nav>
          <button className="sign-out" aria-label="Sign Out">
            ↻ Sign Out
          </button>
        </aside>

        <main className="board-container" aria-label="Teams Board">
          {Object.entries(tasksData).map(([status, tasks]) => (
            <section
              key={status}
              className="board-column"
              aria-labelledby={status.replace(/\s/g, "-").toLowerCase()}
            >
              <h3
                id={status.replace(/\s/g, "-").toLowerCase()}
                className="column-title"
                style={{ backgroundColor: colors[status] }}
              >
                {status}
              </h3>
              <div className="task-list">
                {tasks.map(({ team, task, revision, dueDate }, i) => (
                  <article key={i} className="task-card" tabIndex={0}>
                    <strong>{team}</strong>
                    <p>{task}</p>
                    <small>{revision}</small>
                    <footer>
                      <span className="due-date">📅 {dueDate}</span>
                      <button
                        aria-label={`Options for ${team} task`}
                        className="options-btn"
                      >
                        ⋮
                      </button>
                    </footer>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background-color: #fff;
          color: #5b1f24;
        }
        .app-container {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }
        /* Sidebar Styles */
        .sidebar {
          width: 240px;
          background: #f9f8f7;
          border-radius: 16px;
          box-shadow: 0 0 10px rgba(0,0,0,0.05);
          padding: 20px 0;
          font-size: 15px;
          color: #5b1f24;
          font-weight: 600;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #c3bcbc;
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

        /* Board styles */
        .board-container {
          display: flex;
          gap: 16px;
          padding: 20px;
          flex: 1;
          overflow-x: auto;
          background-color: #fef9f8;
        }
        .board-column {
          background: #fef9f8;
          border-radius: 12px;
          box-shadow: 0 0 10px rgba(0,0,0,0.07);
          flex: 1;
          display: flex;
          flex-direction: column;
          max-width: 280px;
          min-width: 250px;
        }
        .column-title {
          color: white;
          padding: 10px 16px;
          font-weight: 700;
          border-radius: 12px 12px 0 0;
          user-select: none;
        }
        .task-list {
          padding: 10px 12px 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow-y: auto;
          max-height: 75vh;
        }
        .task-card {
          background: white;
          border-radius: 8px;
          padding: 12px 14px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 4px;
          outline: none;
          transition: box-shadow 0.2s ease;
        }
        .task-card:hover,
        .task-card:focus {
          box-shadow: 0 3px 8px rgba(0,0,0,0.15);
          outline: none;
        }
        .task-card strong {
          font-weight: 700;
          font-size: 14px;
          color: #7c0a02;
        }
        .task-card p {
          margin: 0;
          font-size: 13px;
          font-weight: 600;
          color: #3b1a1d;
        }
        .task-card small {
          font-size: 12px;
          color: #999;
        }
        .task-card footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 6px;
        }
        .due-date {
          font-size: 12px;
          color: #7c0a02;
          font-weight: 700;
          user-select: none;
        }
        .options-btn {
          background: none;
          border: none;
          font-size: 18px;
          font-weight: 900;
          cursor: pointer;
          color: #c3bcbc;
          user-select: none;
          padding: 0;
          line-height: 1;
        }
        .options-btn:hover,
        .options-btn:focus {
          color: #7c0a02;
          outline: none;
        }
      `}</style>
    </>
  );
}
