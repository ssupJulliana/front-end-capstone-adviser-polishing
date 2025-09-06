import React, { useState } from "react";

const teams = ["Aguas, Et Al", "Mendoza, Et Al", "Bernardo, Et Al"];
const tasks = ["Prepare: Chapter 4", "Prepare: Chapter 3", "Revise: Chapter 1"];

export default function TasksCreate({ onClose }) {
  const [task, setTask] = useState(tasks[0]);
  const [subtask, setSubtask] = useState("");
  const [assignedTeams, setAssignedTeams] = useState([]);
  const [dueDate, setDueDate] = useState("2025-02-15");
  const [time, setTime] = useState("08:00");
  const [leaveComment, setLeaveComment] = useState("");

  const toggleTeam = (team) => {
    setAssignedTeams((prev) =>
      prev.includes(team) ? prev.filter((t) => t !== team) : [...prev, team]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send data to backend or state here
    alert("Task created!");
    onClose?.();
  };

  return (
    <>
      <div className="overlay" onClick={onClose} aria-label="Close create task modal" />
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <header>
          <h2 id="modal-title">Create Task</h2>
          <button onClick={onClose} aria-label="Close">&times;</button>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="task">Task *</label>
            <select
              id="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            >
              {tasks.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="subtask">Subtask</label>
            <input
              id="subtask"
              type="text"
              value={subtask}
              onChange={(e) => setSubtask(e.target.value)}
              placeholder="Subtask"
            />
          </div>

          <div className="form-group">
            <label>Assign Team/s *</label>
            <div className="checkbox-group">
              {teams.map((team) => (
                <label key={team} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={assignedTeams.includes(team)}
                    onChange={() => toggleTeam(team)}
                    required={assignedTeams.length === 0}
                  />
                  {team}
                </label>
              ))}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="dueDate">Due Date *</label>
              <input
                id="dueDate"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time *</label>
              <input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="leaveComment">Leave Comment</label>
            <textarea
              id="leaveComment"
              rows="4"
              value={leaveComment}
              onChange={(e) => setLeaveComment(e.target.value)}
              placeholder="Leave a comment..."
            />
          </div>

          <button type="submit" className="create-btn">Create</button>
        </form>
      </div>

      <style>{`
        .overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0,0,0,0.25);
          z-index: 1000;
        }
        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          width: 450px;
          max-width: 95vw;
          background: white;
          border-radius: 12px;
          padding: 25px 30px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          transform: translate(-50%, -50%);
          z-index: 1001;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          color: #5b1f24;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        header h2 {
          margin: 0;
          font-weight: 700;
          font-size: 20px;
        }
        header button {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #7c0a02;
          line-height: 1;
          padding: 0;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        label {
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 6px;
        }
        select, input[type="text"], input[type="date"], input[type="time"], textarea {
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
          font-weight: 600;
          color: #7c0a02;
          background-color: #fef9f8;
          transition: border-color 0.2s ease;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }
        select:hover, select:focus,
        input[type="text"]:hover, input[type="text"]:focus,
        input[type="date"]:hover, input[type="date"]:focus,
        input[type="time"]:hover, input[type="time"]:focus,
        textarea:hover, textarea:focus {
          outline: none;
          border-color: #7c0a02;
        }
        .checkbox-group {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .checkbox-label {
          font-weight: 600;
          font-size: 14px;
          color: #7c0a02;
          cursor: pointer;
          user-select: none;
        }
        .checkbox-label input {
          margin-right: 6px;
          cursor: pointer;
        }
        .form-row {
          display: flex;
          gap: 20px;
        }
        .form-row .form-group {
          flex: 1;
        }
        .full-width {
          width: 100%;
        }
        textarea {
          resize: none;
        }
        .create-btn {
          background-color: #7c0a02;
          color: white;
          font-weight: 700;
          border: none;
          padding: 10px 20px;
          font-size: 15px;
          border-radius: 8px;
          cursor: pointer;
          align-self: flex-end;
          transition: background-color 0.3s ease;
        }
        .create-btn:hover {
          background-color: #a30e03;
        }
      `}</style>
    </>
  );
}
