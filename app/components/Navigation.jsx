"use client";

import { useSelector } from 'react-redux';
import Logo from './Logo';

export default function Navigation() {
  const user = useSelector((state) => state.auth.user);

  return (
    <nav className="navbar">
      <Logo />
      <div className="search-bar">
        <input type="search" placeholder="Search for 3D models..." />
        <button className="search-button">🔍</button>
      </div>
      <div className="nav-links">
        <a href="/models"><span className="nav-icon">🎮</span>Models</a>
        <a href="/categories"><span className="nav-icon">📂</span>Categories</a>
        <a href="/upload"><span className="nav-icon">⬆️</span>Upload</a>
        {user?.token ? 
          <div className="account-link">
            <span className="nav-icon">👤</span>Account
          </div> 
          : 
          <a className='account-link' href="/login">
            <span className="nav-icon">🔐</span>Login
          </a>
        }
      </div>
    </nav>
  );
}
