import React from 'react';
import Navbar from './components/Navbar';
import HealthStatus from './components/HealthStatus';
import BookList from './components/BookList';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <header className="hero-header">
          <h1>Library Management System</h1>
          <p className="subtitle">
            Local Application Foundation (Phase 1) — React + Vite Frontend connected to Node.js Express Backend
          </p>
        </header>

        <section className="dashboard-grid">
          <HealthStatus />
          <BookList />
        </section>
      </main>

      <footer className="footer">
        <p>Library Management System • Phase 1 Local Foundation</p>
      </footer>
    </div>
  );
}

export default App;
