import React from 'react';
import StatCard from '../../Components/StatCard';
import Sidebar from '../../Components/Sidebar';
import { cardsData } from '../../Config';
import Chart_Dashboard from '../../Components/Chart_Dashboard';
import RadialChart_Dashboard from '../../Components/RadialChart_Dashboard';

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
                <StatCard {...card} key={card.id} />
            ))
        }
      </section>
      <section className="chart_dashboard">
        <Chart_Dashboard />
      </section>
      <section className="chart_dashboard">
        <RadialChart_Dashboard />
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
