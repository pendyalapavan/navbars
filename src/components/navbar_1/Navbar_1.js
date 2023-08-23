import React, { useState } from 'react';
import './Navbar_1.css';

const Navbar_1 = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className="navbar">
      <div className="company-name">Navbar</div>
      <div className={`nav-items ${sidebarActive ? 'active' : ''}`}>
        <div className="nav-item">Home</div>
        <div className="nav-item">Link</div>
        <div className="nav-item">Pages</div>
      </div>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" />
        <button className="search-button">Search</button>
      </div>
      <div className="toggle-button" onClick={toggleSidebar}>
        &#9776;
      </div>
    </div>
  );
};

export default Navbar_1;
