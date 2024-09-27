// src/components/admin/ReportsDashboard.jsx
import React from "react";
import ChartComponent from "./ChartComponent"; // Import ChartComponent

const mockData = {
  totalApplications: 120,
  totalInterviews: 45,
  offersMade: 30,
};

const ReportsDashboard = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-md mt-16">
      <h1 className="text-3xl font-bold text-gray-800">Reports Dashboard</h1>
      <div className="mt-6 space-y-4">
        <div className="bg-gray-100 p-4 rounded-md shadow">
          <p className="text-lg font-semibold text-gray-700">Total Applications:</p>
          <p className="text-2xl font-bold text-blue-600">{mockData.totalApplications}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md shadow">
          <p className="text-lg font-semibold text-gray-700">Total Interviews:</p>
          <p className="text-2xl font-bold text-green-600">{mockData.totalInterviews}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md shadow">
          <p className="text-lg font-semibold text-gray-700">Offers Made:</p>
          <p className="text-2xl font-bold text-indigo-600">{mockData.offersMade}</p>
        </div>
      </div>
      {/* Include ChartComponent here */}
      <div className="mt-8">
        <ChartComponent />
      </div>
    </div>
  );
};

export default ReportsDashboard;
