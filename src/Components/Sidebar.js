import React, { useState } from 'react';

const sections = [
    { label: 'Dashboard', icon: 'fa-solid fa-chart-pie' },
    { label: 'Transactions', icon: 'fa-solid fa-tags' },
    { label: 'Schedules', icon: 'fa-solid fa-calendar-days' },
    { label: 'Users', icon: 'fa-solid fa-circle-user' },
    { label: 'Settings', icon: 'fa-solid fa-gear' },
  ];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [isMobileActive, setIsMobileActive] = useState(false);

  const handleItemClick = (section) => {
    setActiveSection(section);
    setIsMobileActive(false); 
  }

  const toggleMobileMenu = () => {
    setIsMobileActive(!isMobileActive);
  }

  return (<>
    <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`sidebar ${isMobileActive ? 'mobile-active' : ''}`}>
     <div className= "inside_container">
      <h1>Board.</h1>
        <div className={`ul-container ${isMobileActive ? 'mobile-active' : ''}`}>
      <ul>
        {sections.map(({ label, icon }) => (
          <li 
            key={label}
            className={activeSection === label ? 'active' : ''}
            onClick={() => handleItemClick(label)}
          >
            <i className={icon}></i> {label}
          </li>
        ))}
      </ul>
      </div>
      </div>
      <footer>
    <div className="footer-item">Help</div>
    <div className="footer-item">Contact Us</div>
  </footer>
    </div>
    </>)
}

export default Sidebar;