import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        📚 Library Management System
      </div>
      <ul className="nav-links">
        <li><a href="#books" className="active">Books</a></li>
        <li><a href="#borrowings">My Borrowings</a></li>
        <li><a href="#login" className="btn-secondary">Login</a></li>
        <li><a href="#register" className="btn-primary">Register</a></li>
      </ul>
    </nav>
  );
}
