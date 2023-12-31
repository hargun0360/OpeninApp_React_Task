import React, { useEffect, useState } from 'react';
import StatCard from '../../Components/StatCard';
import Sidebar from '../../Components/Sidebar';
import { cardsData } from '../../Config';
import Chart_Dashboard from '../../Components/Chart_Dashboard';
import RadialChart_Dashboard from '../../Components/RadialChart_Dashboard';
import ProfileSection from '../../Components/ProfileSection';
import searchicon from '../../Assets/search.svg'
import notification from '../../Assets/notification.svg'
import profilepic from '../../Assets/profile.png'
import { useNavigate } from 'react-router-dom';

const DashboardContent = () => {
    const [userProfile, setUserProfile] = useState(undefined);
    useEffect(()=>{
        if(localStorage.getItem('picture') !== undefined) {
            setUserProfile(localStorage.getItem('picture'));
        }
    },[])
    const navigate = useNavigate();

  return (<>
  <div className="Dashboard-container">
    <Sidebar />
    <div className="dashboard-content">
      <header>
        <h2>Dashboard</h2>
        <div className="dash-header-right">
        <div className="search">
          <input type="text" placeholder="search..." />
          <img src={searchicon} alt="search icon" />
        </div>
        <div className="notification">
          <img src={notification} alt="notification icon" />
        </div>
        <div className="profile" onClick={() => {
            if(window.confirm("Do you want to logout?")){
                localStorage.clear();
                navigate('/');
            }
        }}>
          <img src={userProfile ? userProfile : profilepic} alt="profile" />
        </div>
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
      <section className="radial_dashboard">
        <RadialChart_Dashboard />
        <ProfileSection />
      </section>
    </div>
    </div>
    </>);
}

export default DashboardContent;
