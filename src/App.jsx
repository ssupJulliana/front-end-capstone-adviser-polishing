// src/App.jsx

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import TeamSummary from './team/team-member';  // only this import now

function App() {
  return (
    <div>
      <nav
        style={{
          padding: '10px 20px',
          background: '#3B0304',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <Link to="/team-summary" style={navLinkStyle}>Teams Summary</Link> {/* only one link */}
      </nav>

      <Routes>
        <Route path="/team-summary" element={<TeamSummary />} /> {/* only one route */}
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
