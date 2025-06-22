import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white' }}>
      <Link to="/" style={{ color: 'lightgreen', fontSize: '20px', textDecoration: 'none' }}>
        🧠 Server-Side Engineering Guide
      </Link>
    </nav>
  );
}
