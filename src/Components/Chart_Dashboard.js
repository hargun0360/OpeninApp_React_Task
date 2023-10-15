import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

// Constants for city codes
const NEW_YORK_CODE = "04000US36";
const LOS_ANGELES_CODE = "04000US22";

// Registering the modules required for the chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// A functional component to create and render chart labels
const ChartLabel = ({ color, title }) => (
  <div className="mainchart-label">
    <div style={{ backgroundColor: color }}></div>
    <span>{title}</span>
  </div>
);

// Main component for rendering the dashboard
const Chart_Dashboard = () => {
  // Initializing state variables to manage label, years and population data
  const [labels, setLabels] = useState([]);
  const [years, setYears] = useState([]);
  const [nyPopulation, setNyPopulation] = useState([]);
  const [laPopulation, setLaPopulation] = useState([]);
  const [chartData, setChartData] = useState();

  // Fetches data for a specified city code and updates the state
  const fetchData = async (cityCode) => {
    try {
      // Fetching data from the API
      const response = await fetch(`https://datausa.io/api/data?drilldowns=State&measures=Population&State=${cityCode}`);
      const json = await response.json();
      // Extracting and transforming population data
      const populationData = json.data.slice(0, 4).map(obj => (obj.Population * Math.random()) / 1000);

      // If the years array is empty, extract and set the year data
      if (!years.length) {
        const yearData = json.data.slice(0, 4).map(obj => obj.Year);
        setYears(yearData);
      }

      // Updating labels
      setLabels(prev => [json.data[0].State, ...prev]);
      return populationData;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // UseEffect to fetch and set population data when the component mounts
  useEffect(() => {
    const getData = async () => {
      const nyData = await fetchData(NEW_YORK_CODE);
      const laData = await fetchData(LOS_ANGELES_CODE);
      setNyPopulation(nyData);
      setLaPopulation(laData);
    };
    
    getData();
  }, []);

  // UseEffect to set the chart data when the population data is fetched
  useEffect(() => {
    if (nyPopulation.length && laPopulation.length && years.length) {
      setChartData({
        labels: years,
        datasets: [
          {
            label: "New York",
            data: nyPopulation,
            backgroundColor: "rgba(152, 216, 158, 1)",
            borderRadius: 3,
            categoryPercentage: 0.5,
            barPercentage: 0.9,
          },
          {
            label: "Los Angeles",
            data: laPopulation,
            backgroundColor: "rgba(238, 132, 132, 1)",
            borderRadius: 3,
            categoryPercentage: 0.5,
            barPercentage: 0.9,
          },
        ],
      });
    }
  }, [nyPopulation, laPopulation, years]);

  // Configuring options for the bar chart
  const options = {
    indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    layout: {
      padding: 0,
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 10,
          font: {
            size: 14,
            weight: "400",
          },
        },
      },
      title: {
        display: false,
        text: ["Chart.js Horizontal Bar Chart"],
        position: "top",
        font: {
          size: 16,
          weight: "700",
        },
      },
    },
    scales: {
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          display: true,
        },
        ticks: {
          stepSize: 3000,
          callback: (value) => value + " k",
        },
      },
    },
  };
  return (
    <div className="mainchart">
      <div className="mainchart-header">
        <div className="mainchart-heading">
          <h3>Population</h3>
          <span>2020-2017</span>
        </div>
        <div className="mainchar-label-container">
          {chartData &&
            chartData.datasets.map((val, ind) => {
              return (
                <ChartLabel
                  key={ind}
                  title={val.label}
                  color={val.backgroundColor}
                />
              );
            })}
        </div>
      </div>
      <div className="mainchart-render" style={{ width: "100%" }}>
        {chartData && <Bar data={chartData} options={options} />}
      </div>
    </div>
  );
};

export default Chart_Dashboard;
