import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CompanyDashboard = () => {
  const [stats, setStats] = useState({
    jobCount: 0,
    applicationCount: 0,
    interviewCount: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("https://placement-portal-m4o2.onrender.com/api/company/dashboard"); // Replace with your API route
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching company dashboard stats", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex min-h-screen mt-14 bg-gradient-to-b from-gray-100 to-gray-50">
      {/* Main Content */}
      <div className="flex-grow p-6 max-w-6xl mx-auto">
        {/* Dashboard Header */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-6">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-4">
            Company Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Manage your job postings, applications, and interviews.
          </p>
        </div>

        {/* Dashboard Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Job Postings Overview */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              Job Postings
            </h2>
            <p className="text-lg text-gray-700">
              {stats.jobCount} Active Job Postings
            </p>
            <Link
              to="/company/job-postings"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Manage Job Postings
            </Link>
          </div>

          {/* Applications Overview */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">
              Applications
            </h2>
            <p className="text-lg text-gray-700">
              {stats.applicationCount} Applications Received
            </p>
            <Link
              to="/company/applications"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Review Applications
            </Link>
          </div>

          {/* Interviews Overview */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">
              Interviews
            </h2>
            <p className="text-lg text-gray-700">
              {stats.interviewCount} Interviews Scheduled
            </p>
            <Link
              to="/company/interviews"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Manage Interviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
