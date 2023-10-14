import React, { useState } from 'react';

const sections = [
    { label: 'Dashboard', icon: 'fa-solid fa-chart-pie' },
    { label: 'Transactions', icon: 'fa-solid fa-tags' },
    { label: 'Schedules', icon: 'fa-solid fa-calendar-days' },
    { label: 'Users', icon: 'fa-solid fa-circle-user' },
    { label: 'Settings', icon: 'fa-solid fa-gear' },
  ];

{/* <i class="fa-solid fa-tags"></i>
<i class="fa-solid fa-calendar-days"></i>
<i class="fa-solid fa-circle-user"></i>
<i class="fa-solid fa-gear"></i>
<i class="fa-regular fa-bell"></i>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-solid fa-user-group"></i>
<i class="fa-solid fa-money-bill"></i>
<i class="fa-regular fa-thumbs-up"></i>
<i class="fa-solid fa-xmark"></i> */}

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('Dashboard');

  const handleItemClick = (section) => {
    setActiveSection(section);
  }

  return (
    <div className="sidebar">
     <div className= "inside_container">
      <h1>Board.</h1>
      <div className="ul-container">
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
  )
}

export default Sidebar;