import React from 'react';
import StatCard from '../../Components/StatCard';
import Sidebar from '../../Components/Sidebar';

const cardsData = [
    { icon: "fa-solid fa-money-bill", title: "Total Revenues", value: "2,129,430", change: "+2.5%" , id : "1" },
    { icon: "fa-solid fa-tags", title: "Total Transactions", value: "1,520", change: "+1.7%" , id : "2" },
    { icon: "fa-regular fa-thumbs-up", title: "Total Likes", value: "9,721", change: "+1.4%" , id : "3" },
    { icon: "fa-solid fa-user-group", title: "Total Users", value: "9,721", change: "+4.2%" , id : "4" }
  ];

const DashboardContent = () => {
  return (<>
  <div className="Dashboard-container">
    <Sidebar />
    <div className="dashboard-content">
      <header>
        <h2>Dashboard</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
          <button className="profile">👤</button>
        </div>
      </header>
      <section className="stats">
        {
            cardsData.map((card) => (
                <StatCard {...card} />
            ))
        }
      </section>
      <section className="activities">
        <h3>Activities</h3>
        
        <div className="content-placeholder"></div>
      </section>

      <section className="top-products">
        <h3>Top Products</h3>
       
        <div className="content-placeholder"></div>
      </section>

      <section className="add-profile">
        <button className="add-button">+</button>
        <span>Add Profile</span>
      </section>
    </div>
    </div>
    </>);
}

export default DashboardContent;
