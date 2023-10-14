import React from "react";

const StatCard = ({ icon, title, value, change , id}) => (
  <div className="stat-card">
    <div className={"icon-container" + id}>
      <i className={icon}></i>  
    </div>

    <div className="title">{title}</div>

    <div className="content">
      <div className="value">{value}</div>
      <div className="change">{change}</div>
    </div>
  </div>
);

export default StatCard;
