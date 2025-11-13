import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
  <div className="container">
    <h1 className="brand">Student Guide</h1>
    <nav>
      <a href="/uni1" className="nav-btn">Veritas Institute</a>
      <a href="/uni2" className="nav-btn">Horizon School</a>
    </nav>
  </div>
</header>

  );
}
