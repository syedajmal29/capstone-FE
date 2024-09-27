import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen mt-14 bg-gradient-to-b from-gray-100 to-gray-50">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-grow p-6 max-w-6xl mx-auto">
        {/* Dashboard Header */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Admin Dashboard
          </h1>
        </div>

        {/* Dashboard Links */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Manage Placement Drives */}
          <Link
            to="/admin/placement-drives"
            className="block p-6 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">
              Manage Placement Drives
            </h2>
            <p className="text-sm opacity-80">
              Organize and oversee all placement drives for students.
            </p>
          </Link>

          {/* View Recruitment Status */}
          <Link
            to="/admin/recruitment-status"
            className="block p-6 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">
              View Recruitment Status
            </h2>
            <p className="text-sm opacity-80">
              Monitor the progress and status of student recruitment.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
