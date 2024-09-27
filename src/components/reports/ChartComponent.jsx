// src/components/admin/ChartComponent.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title } from "chart.js";

// Register necessary components
Chart.register(CategoryScale, LinearScale, BarElement, Title);

const ChartComponent = () => {
  const data = {
    labels: ["Applications", "Interviews", "Offers Made"],
    datasets: [
      {
        label: "Count",
        data: [120, 45, 30], // Dynamic data can be placed here
        backgroundColor: [
          "rgba(75,192,192,1)",
          "rgba(255,206,86,1)",
          "rgba(255,99,132,1)",
        ],
        borderColor: [
          "rgba(75,192,192,1)",
          "rgba(255,206,86,1)",
          "rgba(255,99,132,1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Application Statistics",
        font: {
          size: 20,
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 mt-16">
      <h2 className="text-lg font-semibold mb-4">Application Stats</h2>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
