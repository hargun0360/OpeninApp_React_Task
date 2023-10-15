import React from "react";

// Functional component to display statistical data in a card format
const StatCard = ({ icon, title, value, change , id}) => (
  <div className="stat-card">
    {/* Container for the icon, using dynamic class naming with id */}
    <div className={"icon-container" + id}>
      {/* Icon element, with class dynamically assigned from props */}
      <i className={icon}></i>  
    </div>

    {/* Title of the stat card, dynamically inserted from props */}
    <div className="title">{title}</div>

    {/* Content container to hold both value and change elements */}
    <div className="content">
      {/* Dynamic insertion of value from props */}
      <div className="value">{value}</div>
      
      {/* Dynamic insertion of change value from props */}
      <div className="change">{change}</div>
    </div>
  </div>
);

export default StatCard;
