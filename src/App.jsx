import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Main Pages
import TeamsSummary from './components/teams summary/teams-summary';
import TeamsInfo from './components/teams summary/teams-info';
import CapsTasks from './components/caps tasks/caps-tasks';
import CapsOralDefense from './components/caps tasks/caps-oral-defense';
import CapsFinalDefense from './components/caps tasks/caps-final-defense';
import CapsTeamsBoard from './components/caps teams board/caps-teams-board';
import CapsTasksRecord from './components/caps tasks record/caps-tasks-record';
import CapsEvents from './components/caps events/caps-events';

// Card-linked components (accessed from CapsEvents or CapsTasksRecord)
import CapsOralRecord from './components/caps tasks record/caps-oral-record';
import CapsFinalRecord from './components/caps tasks record/caps-final-record';
import CapsManuResults from './components/caps events/caps-manu-results';
import CapsCapstoneDef from './components/caps events/caps-capstone-def';

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav
        style={{
          padding: '10px 20px',
          background: '#3B0304',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <Link to="/teams-summary" style={navLinkStyle}>Teams Summary</Link>
        <Link to="/tasks" style={navLinkStyle}>Tasks</Link>
        <Link to="/caps-teams-board" style={navLinkStyle}>Teams Board</Link>
        <Link to="/caps-tasks-record" style={navLinkStyle}>Tasks Record</Link>
        <Link to="/caps-events" style={navLinkStyle}>Events</Link>
      </nav>

      {/* Routes */}
      <Routes>
        {/* Main Pages */}
        <Route path="/teams-summary" element={<TeamsSummary />} />
        <Route path="/team-1" element={<TeamsInfo />} />
        <Route path="/tasks" element={<CapsTasks />} />
        <Route path="/oral-tasks-record" element={<CapsOralDefense />} />
        <Route path="/final-tasks-record" element={<CapsFinalDefense />} />
        <Route path="/caps-teams-board" element={<CapsTeamsBoard />} />
        <Route path="/caps-tasks-record" element={<CapsTasksRecord />} />
        <Route path="/caps-events" element={<CapsEvents />} />

        {/* Card-linked Pages (not in navbar) */}
        <Route path="/caps-oral-record" element={<CapsOralRecord />} />
        <Route path="/caps-final-record" element={<CapsFinalRecord />} />
        <Route path="/caps-manu-results" element={<CapsManuResults />} />
        <Route path="/caps-capstone-def" element={<CapsCapstoneDef />} />

        {/* 404 fallback */}
        <Route path="*" element={<h2 style={{ padding: 20 }}>Bobo ka, mali 'yung route mo na naman.</h2>} />
      </Routes>
    </div>
  );
}

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default App;
