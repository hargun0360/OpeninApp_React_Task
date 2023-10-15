import React, { useState } from 'react';

// Static data for sidebar sections
const sections = [
    { label: 'Dashboard', icon: 'fa-solid fa-chart-pie' },
    { label: 'Transactions', icon: 'fa-solid fa-tags' },
    { label: 'Schedules', icon: 'fa-solid fa-calendar-days' },
    { label: 'Users', icon: 'fa-solid fa-circle-user' },
    { label: 'Settings', icon: 'fa-solid fa-gear' },
];

const Sidebar = () => {
  // State to manage the currently active section and mobile menu visibility
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [isMobileActive, setIsMobileActive] = useState(false);

  // Handler for clicking on a sidebar item, setting it as active
  const handleItemClick = (section) => {
    setActiveSection(section);
    setIsMobileActive(false); // Hide mobile menu upon selecting an item
  }

  // Toggler for mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileActive(!isMobileActive);
  }

  return (
    <>
      {/* Hamburger menu button for mobile view, toggling mobile menu visibility */}
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Main sidebar container, modifying class for mobile-active when applicable */}
      <div className={`sidebar ${isMobileActive ? 'mobile-active' : ''}`}>
        <div className="inside_container">
          <h1>Board.</h1>

          {/* Container for navigation items, modifying class for mobile-active when applicable */}
          <div className={`ul-container ${isMobileActive ? 'mobile-active' : ''}`}>
            <ul>
              {/* Map through sections to create list items with icons */}
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

        {/* Footer section containing additional options */}
        <footer>
          <div className="footer-item">Help</div>
          <div className="footer-item">Contact Us</div>
        </footer>
      </div>
    </>
  )
}

export default Sidebar;
