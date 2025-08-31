import React, { useState, useEffect, useRef } from "react";
import taskIcon from "../../assets/tasks-icon.png";
import searchIcon from "../../assets/search-icon.png";
import filterIcon from "../../assets/filter-icon.png";
import exitIcon from "../../assets/exit-icon.png";
import dropdownIconWhite from "../../assets/dropdown-icon-white.png";
import dueDateIcon from "../../assets/due-date-icon.png";
import timeIcon from "../../assets/time-icon.png";
import redDropdownIcon from "../../assets/red-dropdown-icon.png";

const TitleDefenseTasks = () => {
  const [status, setStatus] = useState("To Review");
  const [revision, setRevision] = useState("1st Revision");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showRevisionDropdown, setShowRevisionDropdown] = useState(false);
  const [filterCategory, setFilterCategory] = useState("Filter");
  const [filterValue, setFilterValue] = useState("");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [activeSubFilter, setActiveSubFilter] = useState(null);

  const statusDropdownRef = useRef(null);
  const revisionDropdownRef = useRef(null);
  const filterDropdownRef = useRef(null);

  const STATUS_OPTIONS = ["To Do", "In Progress", "To Review", "Completed"];
  const FILTER_STATUS_OPTIONS = ["To Do", "In Progress", "To Review", "Missed"];
  const PROJECT_PHASES = ["Planning", "Design", "Development", "Testing", "Deployment", "Review"];
  const REVISION_OPTIONS = [
    "1st Revision",
    "2nd Revision",
    "3rd Revision",
    "4th Revision",
    "5th Revision",
  ];

  const getStatusColor = (value) => {
    switch (value) {
      case "To Do":
        return "#FABC3F";
      case "In Progress":
        return "#809D3C";
      case "To Review":
        return "#578FCA";
      case "Completed":
        return "#3B0304";
      default:
        return "#ccc";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (statusDropdownRef.current && !statusDropdownRef.current.contains(event.target)) {
        setShowStatusDropdown(false);
      }
      if (revisionDropdownRef.current && !revisionDropdownRef.current.contains(event.target)) {
        setShowRevisionDropdown(false);
      }
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
        setShowFilterDropdown(false);
        setActiveSubFilter(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClearFilter = (e) => {
    e.stopPropagation();
    setFilterCategory("Filter");
    setFilterValue("");
    setShowFilterDropdown(false);
    setActiveSubFilter(null);
  };

  return (
    <div className="page-wrapper">
      <h2 className="section-title">
        <img src={taskIcon} alt="Tasks Icon" className="icon-image" />
        Tasks
      </h2>
      <hr className="divider" />

      <div className="tasks-container">
        <div className="search-filter-wrapper">
          <div className="search-bar">
            <img src={searchIcon} alt="Search Icon" className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>

          <div className="filter-wrapper" ref={filterDropdownRef}>
            <button
              type="button"
              className="filter-button"
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              <img src={filterIcon} alt="Filter Icon" className="filter-icon" />
              {filterValue || filterCategory}
              {filterValue && (
                <img
                  src={exitIcon}
                  alt="Clear Filter"
                  className="clear-icon"
                  onClick={handleClearFilter}
                />
              )}
            </button>
            {showFilterDropdown && (
              <div className="dropdown-menu filter-dropdown-menu">
                {!activeSubFilter ? (
                  <>
                    <div className="dropdown-item" onClick={() => setActiveSubFilter("Status")}>
                      Status
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={() => setActiveSubFilter("Project Phase")}
                    >
                      Project Phase
                    </div>
                  </>
                ) : (
                  <>
                    <div className="dropdown-title">{activeSubFilter}</div>
                    <hr />
                    {(activeSubFilter === "Status" ? FILTER_STATUS_OPTIONS : PROJECT_PHASES).map(
                      (opt) => (
                        <div
                          key={opt}
                          className="dropdown-item"
                          onClick={() => {
                            setFilterValue(opt);
                            setFilterCategory(activeSubFilter);
                            setShowFilterDropdown(false);
                            setActiveSubFilter(null);
                          }}
                        >
                          {opt}
                        </div>
                      )
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        <table className="tasks-table">
          <thead>
            <tr>
              <th className="center-text">NO</th>
              <th className="center-text">Assigned</th>
              <th className="center-text">Tasks</th>
              <th className="center-text">Date Created</th>
              <th className="center-text">Due Date</th>
              <th className="center-text">Time</th>
              <th className="center-text">Revision No.</th>
              <th className="center-text">Status</th>
              <th className="center-text">Methodology</th>
              <th className="center-text">Project Phase</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="center-text">1.</td>
              <td className="center-text">Harzwel Zhen B Lacson</td>
              <td className="center-text">Title Proposal Writing</td>
              <td className="center-text">Dec 1, 2024</td>
              <td className="center-text">
                <img src={dueDateIcon} alt="Due Date Icon" className="inline-icon" />
                Dec 5, 2024
              </td>
              <td className="center-text">
                <img src={timeIcon} alt="Time Icon" className="inline-icon" />
                9:00 AM
              </td>
              <td className="center-text" ref={revisionDropdownRef}>
                <div
                  className="revision-badge"
                  onClick={() => setShowRevisionDropdown(!showRevisionDropdown)}
                >
                  <span className="revision-text">{revision}</span>
                  <img src={redDropdownIcon} alt="Dropdown Icon" className="revision-dropdown-icon" />
                </div>
                {showRevisionDropdown && (
                  <div className="dropdown-menu revision-dropdown-menu">
                    {REVISION_OPTIONS.map((opt) => (
                      <div
                        key={opt}
                        className="dropdown-item"
                        onClick={() => {
                          setRevision(opt);
                          setShowRevisionDropdown(false);
                        }}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                )}
              </td>
              <td className="center-text" ref={statusDropdownRef}>
                <div
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(status) }}
                  onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                >
                  <span className="status-text">{status}</span>
                  <img src={dropdownIconWhite} alt="Dropdown Icon" className="status-dropdown-icon" />
                </div>
                {showStatusDropdown && (
                  <div className="dropdown-menu">
                    {STATUS_OPTIONS.map((opt) => (
                      <div
                        key={opt}
                        className="dropdown-item"
                        onClick={() => {
                          setStatus(opt);
                          setShowStatusDropdown(false);
                        }}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                )}
              </td>
              <td className="center-text">Agile</td>
              <td className="center-text">Planning</td>
            </tr>
          </tbody>
        </table>
      </div>

      <style>{`
        * { box-sizing: border-box; }

        .page-wrapper {
          width: 100%;
          padding: 40px 20px;
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

        .icon-image {
          width: 24px;
          height: 24px;
        }

        .divider {
          border: none;
          border-top: 2px solid #3B0304;
          margin-bottom: 20px;
        }

        .tasks-container {
          background: #fff;
          border-radius: 20px;
          width: 100%;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          padding: 20px;
          border: 1px solid #B2B2B2;
        }

        .search-filter-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          gap: 12px;
        }

        .search-bar {
          display: flex;
          align-items: center;
          width: 200px;
          background: #fff;
          border: 1px solid #3B0304;
          border-radius: 12px;
          padding: 6px 12px;
          gap: 6px;
        }

        .search-icon {
          width: 16px;
          height: 16px;
        }

        .search-input {
          border: none;
          outline: none;
          font-size: 14px;
          width: 100%;
        }

        .filter-wrapper {
          position: relative;
          width: 160px;
          user-select: none;
        }

        .filter-button {
          display: flex;
          align-items: center;
          gap: 6px;
          width: 100%;
          font-size: 14px;
          padding: 6px 12px;
          border: 1px solid #3B0304;
          border-radius: 12px;
          background: #fff;
          cursor: pointer;
        }

        .filter-icon {
          width: 18px;
          height: 18px;
        }

        .clear-icon {
          width: 16px;
          height: 16px;
          margin-left: auto;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          width: 100%;
          background: #fff;
          border: 1px solid #B2B2B2;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          z-index: 10;
        }

        .revision-dropdown-menu {
          border: 1px solid #3B0304;
          background-color: #ffffff;
        }

        .dropdown-item {
          padding: 10px 12px;
          cursor: pointer;
          font-size: 14px;
        }

        .dropdown-item:hover {
          background-color: #f0f0f0;
        }

        .inline-icon {
          width: 14px;
          height: 14px;
          margin-right: 6px;
          vertical-align: middle;
        }

        .revision-badge {
          border: 1px solid #3B0304;
          background: #ffffff;
          color: #3B0304;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 12px;
          border-radius: 12px;
          font-weight: bold;
          cursor: pointer;
          width: 120px;
        }

        .revision-dropdown-icon {
          width: 12px;
          height: 12px;
        }

        .status-badge {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 12px;
          border-radius: 12px;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          width: 120px;
        }

        .status-dropdown-icon {
          width: 12px;
          height: 12px;
          margin-left: 6px;
        }

        .tasks-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }

        .tasks-table th, .tasks-table td {
          padding: 12px 10px;
          text-align: center;
        }

        .tasks-table th {
          background-color: #fafafa;
        }

        .tasks-table tbody tr:nth-child(even) {
          background-color: #fafafa;
        }

        .center-text {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default TitleDefenseTasks;
