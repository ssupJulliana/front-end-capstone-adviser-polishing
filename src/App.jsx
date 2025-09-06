// src/App.jsx

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import TeamSummary from './taskboard/tasksboard-memberx';  // only this import now

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
        <Link to="/team-member" style={navLinkStyle}></Link> {/* only one link */}
      </nav>

      <Routes>
        <Route path="/team-member" element={<TeamSummary />} /> {/* only one route */}
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
