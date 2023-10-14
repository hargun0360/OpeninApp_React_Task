
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const Label = (props) => {
  const { title, color, portion } = props;
  return (
    <div className="label-container">
      <div className="label-heading">
        <div
          style={{
            backgroundColor: `${color}`,
            width: "11px",
            height: "11px",
            borderRadius: "50%",
          }}
        ></div>
        <span style={{ color: "black", fontSize: "14px", fontWeight: "700" }}>
          {title}
        </span>
      </div>
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

const RadialChart_Dashboard = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

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
        <div className="product-card-text">
          <h3>Top Products</h3>
          <p>May-June 2023</p>
        </div>
        <div className="productcard-data">
          <div className="productcard-view">
            <Doughnut data={data} options={options} />
          </div>
          <div className="product-info">
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
