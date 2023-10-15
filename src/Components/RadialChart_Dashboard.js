import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Label component for displaying legend items
const Label = (props) => {
  const { title, color, portion } = props;
  return (
    <div className="label-container">
      {/* Display colored circle and title */}
      <div className="label-heading">
        {/* Colored circle */}
        <div
          style={{
            backgroundColor: `${color}`,
            width: "11px",
            height: "11px",
            borderRadius: "50%",
          }}
        ></div>
        {/* Title */}
        <span style={{ color: "black", fontSize: "14px", fontWeight: "700" }}>
          {title}
        </span>
      </div>
      {/* Display portion value */}
      <div className="label-portion">
        <span
          style={{
            color: "#858585",
            fontSize: "12px",
            fontWeight: "400",
            marginLeft: "20px",
          }}
        >
          {portion}%
        </span>
      </div>
    </div>
  );
};

// Main component to display the Radial (Doughnut) Chart
const RadialChart_Dashboard = () => {
  // Registering ChartJS plugins for use
  ChartJS.register(ArcElement, Tooltip, Legend);

  // Static product data
  const productData = [
    {
      title: "Basic Tees",
      portion: 55,
      backgroundColor: "rgba(152, 216, 158, 1)",
    },
    {
      title: "Custom Short Pants",
      portion: 31,
      backgroundColor: "rgba(246, 220, 125, 1)",
    },
    {
      title: "Super Hoodies",
      portion: 14,
      backgroundColor: "rgba(238, 132, 132, 1)",
    },
  ];

  // Data for the doughnut chart
  const data = {
    datasets: [
      {
        data: [53, 31, 14],
        backgroundColor: [
          "rgba(152, 216, 158, 1)",
          "rgba(246, 220, 125, 1)",
          "rgba(238, 132, 132, 1)",
        ],
        hoverBackgroundColor: ["green", "yellow", "pink"],
        cutout: "80%",
        borderRadius: 100,
        borderWidth: 0,
      },
    ],
  };

  // Configuration options for the doughnut chart
  const options = {
    tooltips: {
      enabled: true,
      mode: "index",
      intersect: true,
    },
    responsive: true,
  };

  return (
    <div className="product-card">
      <div className="product-card-container">
        {/* Title and subtitle section */}
        <div className="product-card-text">
          <h3>Top Products</h3>
          <p>May-June 2023</p>
        </div>
        {/* Chart and label section */}
        <div className="productcard-data">
          {/* Doughnut chart view */}
          <div className="productcard-view">
            <Doughnut data={data} options={options} />
          </div>
          {/* Information labels for each slice of the doughnut */}
          <div className="product-info">
            {/* Mapping through productData to generate labels */}
            {productData.map((val, ind) => {
              return (
                <Label
                  title={val.title}
                  color={val.backgroundColor}
                  portion={val.portion}
                  key={ind}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadialChart_Dashboard;
