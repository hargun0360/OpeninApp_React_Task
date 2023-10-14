import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartLabel = ({ color, title }) => {
  return (
    <div className="mainchart-label">
      <div style={{ backgroundColor: `${color}` }}></div>
      <span>{title}</span>
    </div>
  );
};

const Chart_Dashboard = () => {
  const [lables, setLabels] = useState([]);
  const [years, setYears] = useState();
  const [nyPopulation, setNyPopulation] = useState([]);
  const [laPopulation, setLaPopulation] = useState([]);
  const [chartData, setChartData] = useState();

  const fetchData = async (city, set) => {
    try {
      const response = await fetch(
        `https://datausa.io/api/data?drilldowns=State&measures=Population&State=${city}`
      );
      const json = await response.json();
      const filteredData = json.data
        .slice(0, 4)
        .map((obj) => (obj.Population * Math.random()) / 1000);
      set(filteredData);

      if (!years) {
        const year = json.data.slice(0, 4).map((obj) => obj.Year);

        setYears(year);
      }

      setLabels((prev) => [json.data[0].State, ...prev]);
      return;
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const assignData = async () => {
    await fetchData("04000US36", setNyPopulation);
    await fetchData("04000US22", setLaPopulation);
  };

  useEffect(() => {
    assignData();
  }, []);

  useEffect(() => {
    if (nyPopulation && laPopulation && years)
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
  }, [nyPopulation, laPopulation, years]);

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
