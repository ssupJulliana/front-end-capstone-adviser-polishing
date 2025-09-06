import React, { useState } from "react";

const sidebarItems = [
  { label: "Dashboard", icon: "▦" },
  { label: "Teams Summary", icon: "👥" },
  { label: "Tasks", icon: "📋", active: true },
  { label: "Teams Board", icon: "📚" },
  { label: "Tasks Record", icon: "🗂" },
  { label: "Events", icon: "📅" },
];

const commentsData = [
  {
    id: 1,
    author: "Grayson B Tolentino",
    date: "February 10, 2025 at 2:00 PM",
    content:
      "Make sure to include the minimum and recommended requirements for your software.",
  },
  {
    id: 2,
    author: "Xavielle Elly E Aguas",
    date: "February 10, 2025 at 6:03 PM",
    content: "Good evening sir. We’ll take note of that.",
  },
  {
    id: 3,
    author: "Xavielle Elly E Aguas",
    date: "February 18, 2025 at 12:30 PM",
    content:
      "Good afternoon, sir. We have already completed Chapter 3. Attached is the file of our documentation. Thank you.",
    attachment: "Aguas_Chapter3.pdf",
  },
];

export default function TaskDetail() {
  const [activeTab, setActiveTab] = useState("comments");
  const [newComment, setNewComment] = useState("");

  const handleSend = () => {
    if (newComment.trim() === "") return;
    // Normally you'd update backend here
    alert(`New comment sent: ${newComment}`);
    setNewComment("");
  };

  return (
    <>
      <div className="app-container">
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

        <main className="task-detail-container">
          <header className="task-header">
            <h2>Teams Board &gt; Aguas, Et Al</h2>
          </header>

          <section className="task-info">
            <div className="task-info-left">
              <div>
                <strong>Chapter 3</strong>
                <span className="status to-review">To Review</span>
              </div>
              <ul className="task-details-list">
                <li>
                  <strong>Due Date</strong> <span>Feb 20, 2025</span>
                </li>
                <li>
                  <strong>Time</strong> <span>8:00 AM</span>
                </li>
                <li>
                  <strong>Revision</strong> <span>No Revision</span>
                </li>
              </ul>
            </div>

            <div className="tabs">
              <nav className="tab-nav" role="tablist">
                <button
                  role="tab"
                  aria-selected={activeTab === "comments"}
                  onClick={() => setActiveTab("comments")}
                  className={activeTab === "comments" ? "active" : ""}
                >
                  Comments
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === "attachments"}
                  onClick={() => setActiveTab("attachments")}
                  className={activeTab === "attachments" ? "active" : ""}
                >
                  Attachment
                </button>
              </nav>

              <div className="tab-content">
                {activeTab === "comments" && (
                  <>
                    <div className="comment-input">
                      <textarea
                        placeholder="Leave a comment"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                      />
                      <button onClick={handleSend}>Send</button>
                    </div>

                    <ul className="comments-list">
                      {commentsData.map(
                        ({ id, author, date, content, attachment }) => (
                          <li key={id} className="comment">
                            <header>
                              <strong>{author}</strong>
                              <time>{date}</time>
                            </header>
                            <p>{content}</p>
                            {attachment && (
                              <p className="attachment">
                                📎 <a href="#">{attachment}</a>
                              </p>
                            )}
                            <footer>
                              <button>Edit</button>
                              <button>Delete</button>
                              <button>Reply</button>
                            </footer>
                          </li>
                        )
                      )}
                    </ul>
                  </>
                )}
                {activeTab === "attachments" && (
                  <div className="attachment-content">
                    <p>No attachments available.</p>
                  </div>
                )}
              </div>
            </div>
          </section>
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
        /* Sidebar */
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

        /* Task Detail Container */
        .task-detail-container {
          flex: 1;
          padding: 20px 24px;
          overflow-y: auto;
          background: #fef9f8;
        }
        .task-header {
          border-bottom: 1px solid #c3bcbc;
          margin-bottom: 24px;
          color: #7c0a02;
          font-weight: 600;
        }

        .task-info {
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }
        .task-info-left {
          flex: 1;
        }
        .task-info-left > div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .task-info-left strong {
          font-weight: 700;
          font-size: 18px;
          color: #7c0a02;
        }
        .status {
          padding: 6px 14px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 13px;
          color: white;
          user-select: none;
        }
        .to-review {
          background-color: #5d9bd3;
        }
        .task-details-list {
          list-style: none;
          padding: 0;
          margin: 0;
          color: #5b1f24;
          font-weight: 600;
          font-size: 14px;
        }
        .task-details-list li {
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #f0d3d4;
          padding-bottom: 6px;
        }

        /* Tabs */
        .tabs {
          flex: 2;
          background: white;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 0 8px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
        }
        .tab-nav {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        .tab-nav button {
          background: none;
          border: 1px solid #7c0a02;
          padding: 8px 20px;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          color: #7c0a02;
          transition: background-color 0.3s ease;
        }
        .tab-nav button.active,
        .tab-nav button:hover,
        .tab-nav button:focus {
          background-color: #7c0a02;
          color: white;
          outline: none;
          border-color: #7c0a02;
        }

        /* Comments */
        .comment-input {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        .comment-input textarea {
          flex: 1;
          resize: vertical;
          border-radius: 12px;
          border: 1px solid #ccc;
          padding: 8px 12px;
          font-family: inherit;
          font-size: 14px;
          min-height: 60px;
        }
        .comment-input button {
          background-color: #7c0a02;
          color: white;
          border: none;
          padding: 10px 24px;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .comment-input button:hover,
        .comment-input button:focus {
          background-color: #5a0600;
          outline: none;
        }

        .comments-list {
          list-style: none;
          padding: 0;
          margin: 0;
          max-height: 400px;
          overflow-y: auto;
        }
        .comment {
          background: #fff;
          border-radius: 10px;
          padding: 16px;
          margin-bottom: 16px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.05);
        }
        .comment header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          font-weight: 700;
          color: #7c0a02;
        }
        .comment p {
          margin: 0 0 8px 0;
          font-weight: 600;
          color: #333;
        }
        .comment .attachment a {
          color: #7c0a02;
          text-decoration: none;
          font-weight: 700;
        }
        .comment footer button {
          background: none;
          border: none;
          color: #7c0a02;
          font-weight: 600;
          cursor: pointer;
          margin-right: 12px;
          font-size: 13px;
          user-select: none;
          padding: 0;
        }
        .comment footer button:hover,
        .comment footer button:focus {
          text-decoration: underline;
          outline: none;
        }

        /* Attachment content */
        .attachment-content {
          font-size: 14px;
          color: #999;
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </>
  );
}
